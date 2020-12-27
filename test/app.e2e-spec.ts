import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

// e2e = End-to-End. 유저가 할 만한 행동 전체를 테스트
describe('AppController (e2e)', () => {
  let app: INestApplication;

  // 테스트 전 공통 사항. beforeEach와의 차이?
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }));
    await app.init();
  });

  // Testing by sending a request
  describe('/movies', () => {
    it('GET', () => {
      return request(app.getHttpServer())
        .get('/movies')
        .expect(200)
        .expect([]);
    });

    it('POST', () => {
      return request(app.getHttpServer())
        .post('/movies')
        // .send()를 사용해서 body를 보낸다.
        .send({
          title: 'test',
          year: 2000,
          genres: ['test'],
        })
        .expect(201);
    });

  });
  describe('/movies/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer()).get('/movies/1').expect(200);
    });
    it('PATCH', () => {
      return request(app.getHttpServer())
        .patch('/movies/1')
        .send({
          title: 'patchedMovie',
        })
        .expect(200);
    });
    it('DELETE ', () => {
      request(app.getHttpServer())
        .delete('/movies/1')
        .expect(200)
    });
  });
});

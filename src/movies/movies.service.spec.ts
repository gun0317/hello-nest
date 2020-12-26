import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
  let service: MoviesService;

  // tested before each 'it' test
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  // individual test
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll()', () => {
    it('should return an array', () => {
      const result = service.getAll();

      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne()', () => {
    it('should return a movie', () => {
      service.createOne({
        title: 'testMovie1',
        genres: ['test1'],
        year: 2000,
      });
      const movie: Movie = service.getOne(1);
      expect(movie).toBeDefined();
    });

    it('should throw 404 error', () => {
      try {
        service.getOne(1);
      } catch (err) {
        expect(err).toBeInstanceOf(NotFoundException);
      }
    });
  });
});

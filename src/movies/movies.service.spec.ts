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

  // clean-up functions
  // afterAll(()=>{
  //
  // })

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

  describe('deleteOne', () => {
    it('deletes a movie', () => {
      service.createOne({
        title: 'testMovie1',
        genres: ['test1'],
        year: 2000,
      });
      service.deleteOne(1);
      const moviesAfterDeletion = service.getAll();
      expect(moviesAfterDeletion).toEqual([]);
    });

    it('should return 404', () => {
      try {
        service.deleteOne(1);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('create', () => {
    it('should create a movie', () => {
      const beforeMovieCreation = service.getAll().length;
      service.createOne({
        title: 'testMovie1',
        genres: ['test1'],
        year: 2000,
      });
      const afterMovieCreation = service.getAll().length;
      expect(afterMovieCreation).toBeGreaterThan(beforeMovieCreation);
    });
  });

  describe('update', () => {
    it('the movie should be updated', () => {
      service.createOne({
        title: 'testMovie1',
        genres: ['test1'],
        year: 2000,
      });
      service.update(1, { title: 'updated' });
      const movie = service.getOne(1);
      expect(movie.title).toEqual('updated')
    });
  });
});

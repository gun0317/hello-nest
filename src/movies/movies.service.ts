import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
//  Implementing fake database.
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find(m => m.id === parseInt(id));
  }

  deleteOne(id: string): boolean {
    this.movies.filter(m => m.id != parseInt(id));
    return true;
  }

  createOne(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}

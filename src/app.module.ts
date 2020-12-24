import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// Decorator. Add functionality to a class. Do things for the class.
@Module({
  imports: [],
  controllers: [MoviesController], // Takes Request, executes functions *without business logic*. Similar to Express.js' Router.
  providers: [MoviesService],  // Business logic.
})
export class AppModule {}

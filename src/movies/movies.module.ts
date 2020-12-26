import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController], // Takes Request, executes functions *without business logic*. Similar to Express.js' Router.
  providers: [MoviesService],  // Dependency injection. moviesService is @injectable. Business logic goes to service..
})
export class MoviesModule {

}

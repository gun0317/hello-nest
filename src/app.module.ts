import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// Decorator. Add functionality to a class. Do things for the class.
@Module({
  imports: [MoviesModule],  // each Module has its own controllers, providers etc.
  controllers: [AppController], // Takes Request, executes functions *without business logic*. Similar to Express.js' Router.
  providers: [],  // Business logic.
})
export class AppModule {}

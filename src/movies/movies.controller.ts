import { Controller, Param, Get, Delete, Post, Patch, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies') // prefix for all the urls.
export class MoviesController {
  // constructor를 통해 moviesService를 가져오는 것
  constructor(private readonly moviesService: MoviesService) {
  }

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  searchMovie(@Query('year') year: string) {
    return {
      message: `searching for a movie in year: ${year}`,
    };
  }

  @Get(':id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() data) {
    return this.moviesService.createOne(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.deleteOne(id);
  }

  @Patch(':id')
  patchMovie(@Param('id') id: string, @Body() updateData) {
    return {
      message: `this will patch a movie: ${id}`,
      ...updateData,
    };
  }


}

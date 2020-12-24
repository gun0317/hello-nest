import { Controller, Param, Get, Delete, Post, Patch, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

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
  searchMovie(@Query('year') year: number) {
    return {
      message: `searching for a movie in year: ${year}`,
    };
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() data: CreateMovieDto) {
    return this.moviesService.createOne(data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch(':id')
  patchMovie(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    this.moviesService.update(id, updateData);

    return {
      message: `this will patch a movie: ${id}`,
      ...updateData,
    };
  }


}

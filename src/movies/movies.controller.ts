import { Controller, Param, Get, Delete, Post, Patch } from '@nestjs/common';

@Controller('movies') // prefix for all the urls.
export class MoviesController {
  @Get()
  getAll(){
    return 'returns all movies'
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string){
    return `returns a single movie: ${movieId}`
  }

  @Post()
  create(){
    return `this will create a new movie.`
  }

  @Delete('/:id')
  remove(@Param('id') id: string){
    return `this will delete a movies: ${id}`
  }

  @Patch('/:id')
  patchMovie(@Param('id') id: string){
    return `this will patch a movie: ${id}`
  }
}

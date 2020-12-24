import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// PartialType: Transforms DTO - 기본 사용시 모든 필드를 not required 로 만듬
export class UpdateMovieDto extends PartialType(CreateMovieDto) {

}
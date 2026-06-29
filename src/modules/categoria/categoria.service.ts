import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {

  constructor(
    @Inject('CATEGORIA_REPOSITORY')
    private categoriaRepository: Repository<Categoria>,
  ) {}

  create(createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaRepository.save(createCategoriaDto);
  }

  findAll() {
    return this.categoriaRepository.find();
  }

  findOne(id: number) {
    return this.categoriaRepository.findOneBy({ id });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    await this.categoriaRepository.update(id, updateCategoriaDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.categoriaRepository.delete(id);
  }
}
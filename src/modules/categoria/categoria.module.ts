import { Module } from '@nestjs/common';
import { CategoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';
import { categoriaProviders } from './categoria.provider';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriaController],
  providers: [
    CategoriaService,
    ...categoriaProviders,
  ],
})
export class CategoriaModule {}
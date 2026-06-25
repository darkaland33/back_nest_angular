import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { databaseProvider } from './database.providers';

@Module({
  imports: [ConfigModule],
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule {}
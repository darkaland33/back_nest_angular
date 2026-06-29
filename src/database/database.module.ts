import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { databaseProvider } from './database.providers';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: '1234',
        database: 'back_nest_angular',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: true,
      }),
    }),
  ],
  providers: [...databaseProvider, ConfigService],
  exports: [...databaseProvider],
})
export class DatabaseModule {}
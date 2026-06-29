import { DataSource } from 'typeorm';
import { User } from '../modules/users/entities/user.entity';
import { Categoria } from '../modules/categoria/entities/categoria.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: '1234',
  database: 'back_nest_angular',
  synchronize: false,
  logging: true,
  entities: [User, Categoria],
  migrations: ['src/database/migrations/*.ts'],
});
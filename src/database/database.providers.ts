import { ConfigService } from 'src/config/config.service';
import { DataSource } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: '1234',
        database: 'back_nest_angular',
        synchronize: false,
        logging: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      });

      return dataSource.initialize();
    },
  },
];
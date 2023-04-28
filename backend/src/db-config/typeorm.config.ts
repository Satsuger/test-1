import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { config } from 'dotenv';

config();

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => ({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrationsRun: true,
    migrationsTableName: 'migrations',
    migrations: [__dirname + '/../migrations/**/*.ts'],
    synchronize: false,
    logging: true,
  }),
};

export const typeOrmConfig = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrationsRun: true,
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/../migrations/**/*.ts'],
  synchronize: false,
  logging: true,
});

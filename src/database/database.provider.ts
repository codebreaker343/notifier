import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'src/config/db';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(dbConfig)],
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.provider';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [DatabaseModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

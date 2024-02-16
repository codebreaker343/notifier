import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.provider';
import { ServicesModule } from './services/services.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [DatabaseModule, ServicesModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

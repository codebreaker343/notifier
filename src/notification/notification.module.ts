import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/services/services.module';
import { NotificationContoller } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
  imports: [ServicesModule],
  controllers: [NotificationContoller],
  providers: [NotificationService],
})
export class NotificationModule {}

import { Body, Controller, Post } from '@nestjs/common';
import { TemplateService } from 'src/services/template/template.service';
import { UserService } from 'src/services/user/user.service';
import { SendNotificationDto } from './dto/send-notification.dto';
import { EmailStrategy } from './email.strategy';
import { NotificationService } from './notification.service';
import { SmsStrategy } from './sms.strategy';

@Controller('notification')
export class NotificationContoller {
  constructor(
    private notificationService: NotificationService,
    private userService: UserService,
    private templateService: TemplateService,
  ) {}

  replaceTemplateVariables(content: string, payload: any) {
    return content.replace(
      /\{\{(.*?)\}\}/g,
      (match, key) => payload[key.trim()] || match,
    );
  }

  @Post('email')
  async sendEmail(@Body() sendNotificationDto: SendNotificationDto) {
    const user = await this.userService.find(sendNotificationDto.userId);
    const template = await this.templateService.find(
      sendNotificationDto.templateId,
    );

    this.notificationService.setStrategy(new EmailStrategy());
    return this.notificationService.send(
      user,
      this.replaceTemplateVariables(
        template.content,
        sendNotificationDto.payload,
      ),
    );
  }

  @Post('sms')
  async sendSms(@Body() sendNotificationDto: SendNotificationDto) {
    const user = await this.userService.find(sendNotificationDto.userId);
    const template = await this.templateService.find(
      sendNotificationDto.templateId,
    );

    this.notificationService.setStrategy(new SmsStrategy());
    return this.notificationService.send(
      user,
      this.replaceTemplateVariables(
        template.content,
        sendNotificationDto.payload,
      ),
    );
  }
}

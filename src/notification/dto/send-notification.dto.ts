import { IsNumber } from 'class-validator';

export class SendNotificationDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  templateId: number;

  payload: any;
}

import { User } from 'src/entities/user.entity';
import { NotificationStrategy } from './notification.strategy';

export class SmsStrategy implements NotificationStrategy {
  async send(user: User, content: string) {
    return {
      info: `An SMS with the following content has been sent to ${user.contactNumber}`,
      content: content,
      additionalInfo: process.env.ADDITIONAL_INFO,
    };
  }
}

import { User } from 'src/entities/user.entity';
import { NotificationStrategy } from './notification.strategy';

export class EmailStrategy implements NotificationStrategy {
  async send(user: User, content: string) {
    return {
      info: `The following content has been emailed to ${user.email}`,
      content: content,
      additionalInfo: process.env.ADDITIONAL_INFO,
    };
  }
}

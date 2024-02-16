import { User } from 'src/entities/user.entity';

export interface NotificationStrategy {
  send(user: User, content: string): void;
}

import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { NotificationStrategy } from './notification.strategy';

@Injectable()
export class NotificationService {
  private strategy: NotificationStrategy;

  public setStrategy(strategy: NotificationStrategy) {
    this.strategy = strategy;
  }

  public send(user: User, content: string) {
    return this.strategy.send(user, content);
  }
}

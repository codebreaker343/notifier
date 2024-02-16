import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Template } from 'src/entities/template.entity';
import { User } from 'src/entities/user.entity';
import { TemplateModule } from './template/template.module';
import { TemplateService } from './template/template.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({})
@Module({
  imports: [
    UserModule,
    TemplateModule,
    TypeOrmModule.forFeature([User, Template]),
  ],
  providers: [UserService, TemplateService],
  exports: [UserService, TemplateService],
})
export class ServicesModule {}

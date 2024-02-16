import { Module } from '@nestjs/common';
import { TemplateModule } from './template/template.module';
import { UserModule } from './user/user.module';

@Module({})
@Module({ imports: [UserModule, TemplateModule] })
export class ServicesModule {}

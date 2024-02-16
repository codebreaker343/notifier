import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Template } from 'src/entities/template.entity';
import { TemplateContoller } from './template.controller';
import { TemplateService } from './template.service';

@Module({
  controllers: [TemplateContoller],
  imports: [TypeOrmModule.forFeature([Template])],
  exports: [TemplateModule],
  providers: [TemplateService],
})
export class TemplateModule {}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { TemplateService } from './template.service';

@Controller('template')
export class TemplateContoller {
  constructor(private readonly templateService: TemplateService) {}

  @Get()
  async findAll() {
    return await this.templateService.findAll();
  }

  @Post()
  async create(@Body() createTemplateDto: CreateTemplateDto) {
    return await this.templateService.createTemplate(createTemplateDto.content);
  }
}

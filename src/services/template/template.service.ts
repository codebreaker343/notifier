import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Template } from 'src/entities/template.entity';
import { Logger, Repository } from 'typeorm';

@Injectable()
export class TemplateService {
  protected logger: Logger;

  constructor(
    @InjectRepository(Template)
    readonly templateRepository: Repository<Template>,
  ) {}

  async createTemplate(content: string) {
    await this.templateRepository.insert({
      content,
    });
  }

  async findAll(): Promise<Template[]> {
    return await this.templateRepository.find();
  }
}

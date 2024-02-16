import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Template {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  content: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categoria')
export class Categoria {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
  })
  nombre: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  detalle: string;
}
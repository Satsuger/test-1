import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  albumId: number;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column({ name: 'thumbnail_url', nullable: true })
  thumbnailUrl?: string;

  constructor(props: Partial<Image>) {
    Object.assign(this, props);
  }
}

import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { SessionItemEntity } from './session-item.entity';

@Entity('sessions')
export class SessionEntity extends BaseEntity {
  @Column({ type: 'time', name: 'start_time' })
  startTime: string;

  @Column({ type: 'time', name: 'end_time' })
  endTime: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ name: 'session_id', unique: true })
  sessionId: string;

  @Column('simple-array', { name: 'session_chairs', nullable: true })
  sessionChairs: string[];

  @Column('simple-array', { name: 'session_item_ids', nullable: true })
  sessionItemIds: string[];

  @OneToMany(
    () => SessionItemEntity,
    (entity: SessionItemEntity) => entity.session,
  )
  sessionItems: SessionItemEntity[];

  @Column()
  category: string;

  @Column()
  location: string;
}

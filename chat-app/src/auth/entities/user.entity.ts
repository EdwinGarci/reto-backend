import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    username: string;

    @Column('text', {
        select: false
    })
    password: string;

    @Column('text')
    fullName: string;

    // @OneToMany(() => Message, (message) => message.user)
    // messages: Message[];
}

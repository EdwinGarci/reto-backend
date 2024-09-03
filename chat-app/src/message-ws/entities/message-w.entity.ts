import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('messages')
export class MessageW {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    clientId: string; // El ID del cliente que envió el mensaje

    @Column()
    message: string; // El contenido del mensaje

    @CreateDateColumn()
    createdAt: Date; // Fecha de creación
}

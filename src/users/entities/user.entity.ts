import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    age: number;

    @Prop()
    placeOfBirth: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
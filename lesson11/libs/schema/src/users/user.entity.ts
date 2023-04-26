import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema({
  versionKey: false,
  timestamps: true, // createdAt, updatedAt
})
export class User {
  @Prop({ required: false, default: null })
  name: string;
  @Prop({ required: true, unique: true, index: true })
  email: string;
  @Prop({ required: true, unique: true, index: true })
  username: string;
  @Prop({ required: false, default: null, select: false })
  password: string;
  @Prop({ required: false, default: null })
  ip: string;
  @Prop({ default: null, type: mongoose.Schema.Types.Mixed })
  device: object;
}
export const UserSchema = SchemaFactory.createForClass(User);
export const UserFeature = { name: User.name, schema: UserSchema };

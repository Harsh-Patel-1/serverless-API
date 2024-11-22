import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserPreferenceDocument = UserPreference & Document;

@Schema({ timestamps: true })
export class UserPreference {
  @Prop({ required: true, unique: true })
  userId: string;

  @Prop({ required: true })
  email: string;

  @Prop({
    type: {
      marketing: { type: Boolean, default: true },
      newsletter: { type: Boolean, default: false },
      updates: { type: Boolean, default: true },
      frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'never'],
        default: 'daily',
      },
      channels: {
        email: { type: Boolean, default: true },
        sms: { type: Boolean, default: false },
        push: { type: Boolean, default: false },
      },
    },
    required: true,
  })
  preferences: Record<string, any>;

  @Prop({ required: true })
  timezone: string;
}

export const UserPreferenceSchema =
  SchemaFactory.createForClass(UserPreference);

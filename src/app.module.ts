// src/app.module.ts
import * as dotenv from 'dotenv';
dotenv.config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PreferencesController } from './controllers/preferences.controller';
import { NotificationsController } from './controllers/notifications.controller';
import { PreferencesService } from './services/preferences.service';
import { NotificationsService } from './services/notifications.service';
import {
  UserPreference,
  UserPreferenceSchema,
} from './schemas/user-preference.schema';
import {
  NotificationLog,
  NotificationLogSchema,
} from './schemas/notification-log.schema';

@Module({
  imports: [
    // Connect to MongoDB using Mongoose
    MongooseModule.forRoot(process.env.MONGODB_URI),
    // Register schemas for UserPreference and NotificationLog
    MongooseModule.forFeature([
      { name: UserPreference.name, schema: UserPreferenceSchema },
      { name: NotificationLog.name, schema: NotificationLogSchema },
    ]),
  ],
  controllers: [PreferencesController, NotificationsController],
  providers: [PreferencesService, NotificationsService],
})
export class AppModule {}

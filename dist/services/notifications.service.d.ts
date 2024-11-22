import { Model } from 'mongoose';
import { NotificationLog, NotificationLogDocument } from '../schemas/notification-log.schema';
export declare class NotificationsService {
    private notificationLogModel;
    constructor(notificationLogModel: Model<NotificationLogDocument>);
    send(dto: any): Promise<NotificationLog>;
    getLogs(userId: string): Promise<NotificationLog[]>;
    getStatistics(): Promise<any[]>;
}

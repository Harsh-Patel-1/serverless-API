import { NotificationsService } from '../services/notifications.service';
import { SendNotificationDto } from '../dtos/send-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    send(sendDto: SendNotificationDto): Promise<import("../schemas/notification-log.schema").NotificationLog>;
    getLogs(userId: string): Promise<import("../schemas/notification-log.schema").NotificationLog[]>;
    getStatistics(): Promise<any[]>;
}

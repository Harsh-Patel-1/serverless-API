import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { NotificationsService } from '../services/notifications.service';
import { SendNotificationDto } from '../dtos/send-notification.dto';

@Controller('api/notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send')
  send(@Body() sendDto: SendNotificationDto) {
    return this.notificationsService.send(sendDto);
  }

  @Get(':userId/logs')
  getLogs(@Param('userId') userId: string) {
    return this.notificationsService.getLogs(userId);
  }

  @Get('stats')
  async getStatistics() {
    return await this.notificationsService.getStatistics();
  }
}

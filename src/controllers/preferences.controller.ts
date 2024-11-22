import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import { PreferencesService } from '../services/preferences.service';
import { CreatePreferencesDto } from './../dtos/create-preference.dto';
import { UpdatePreferencesDto } from './../dtos/update-preference.dto';

@Controller('api/preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Post()
  create(@Body() createDto: CreatePreferencesDto) {
    return this.preferencesService.create(createDto);
  }

  @Get(':userId')
  findOne(@Param('userId') userId: string) {
    return this.preferencesService.findOne(userId);
  }

  @Patch(':userId')
  update(
    @Param('userId') userId: string,
    @Body() updateDto: UpdatePreferencesDto,
  ) {
    return this.preferencesService.update(userId, updateDto);
  }

  @Delete(':userId')
  delete(@Param('userId') userId: string) {
    return this.preferencesService.delete(userId);
  }
}

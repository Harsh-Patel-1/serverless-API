import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  UserPreference,
  UserPreferenceDocument,
} from '../schemas/user-preference.schema';

@Injectable()
export class PreferencesService {
  constructor(
    @InjectModel(UserPreference.name)
    private userPreferenceModel: Model<UserPreferenceDocument>,
  ) {}

  async create(data: UserPreference): Promise<UserPreference> {
    return this.userPreferenceModel.create(data);
  }

  async findOne(userId: string): Promise<UserPreference> {
    const preference = await this.userPreferenceModel
      .findOne({ userId })
      .exec();
    if (!preference) {
      throw new NotFoundException(`Preferences not found for user ${userId}`);
    }
    return preference;
  }

  async update(
    userId: string,
    updateData: Partial<UserPreference>,
  ): Promise<UserPreference> {
    const updated = await this.userPreferenceModel
      .findOneAndUpdate({ userId }, updateData, { new: true })
      .exec();
    if (!updated) {
      throw new NotFoundException(`Preferences not found for user ${userId}`);
    }
    return updated;
  }

  async delete(userId: string): Promise<void> {
    const result = await this.userPreferenceModel.deleteOne({ userId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Preferences not found for user ${userId}`);
    }
  }
}

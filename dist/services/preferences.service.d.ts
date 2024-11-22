import { Model } from 'mongoose';
import { UserPreference, UserPreferenceDocument } from '../schemas/user-preference.schema';
export declare class PreferencesService {
    private userPreferenceModel;
    constructor(userPreferenceModel: Model<UserPreferenceDocument>);
    create(data: UserPreference): Promise<UserPreference>;
    findOne(userId: string): Promise<UserPreference>;
    update(userId: string, updateData: Partial<UserPreference>): Promise<UserPreference>;
    delete(userId: string): Promise<void>;
}

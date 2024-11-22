import { PreferencesService } from '../services/preferences.service';
import { CreatePreferencesDto } from './../dtos/create-preference.dto';
import { UpdatePreferencesDto } from './../dtos/update-preference.dto';
export declare class PreferencesController {
    private readonly preferencesService;
    constructor(preferencesService: PreferencesService);
    create(createDto: CreatePreferencesDto): Promise<import("../schemas/user-preference.schema").UserPreference>;
    findOne(userId: string): Promise<import("../schemas/user-preference.schema").UserPreference>;
    update(userId: string, updateDto: UpdatePreferencesDto): Promise<import("../schemas/user-preference.schema").UserPreference>;
    delete(userId: string): Promise<void>;
}

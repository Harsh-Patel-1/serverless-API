declare class Preferences {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: {
        email: boolean;
        sms: boolean;
        push: boolean;
    };
}
export declare class CreatePreferencesDto {
    userId: string;
    email: string;
    preferences: Preferences;
    timezone: string;
}
export {};

import { Document } from 'mongoose';
export type UserPreferenceDocument = UserPreference & Document;
export declare class UserPreference {
    userId: string;
    email: string;
    preferences: Record<string, any>;
    timezone: string;
}
export declare const UserPreferenceSchema: import("mongoose").Schema<UserPreference, import("mongoose").Model<UserPreference, any, any, any, Document<unknown, any, UserPreference> & UserPreference & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserPreference, Document<unknown, {}, import("mongoose").FlatRecord<UserPreference>> & import("mongoose").FlatRecord<UserPreference> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

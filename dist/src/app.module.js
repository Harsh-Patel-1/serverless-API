"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const dotenv = require("dotenv");
dotenv.config();
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const preferences_controller_1 = require("./controllers/preferences.controller");
const notifications_controller_1 = require("./controllers/notifications.controller");
const preferences_service_1 = require("./services/preferences.service");
const notifications_service_1 = require("./services/notifications.service");
const user_preference_schema_1 = require("./schemas/user-preference.schema");
const notification_log_schema_1 = require("./schemas/notification-log.schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI),
            mongoose_1.MongooseModule.forFeature([
                { name: user_preference_schema_1.UserPreference.name, schema: user_preference_schema_1.UserPreferenceSchema },
                { name: notification_log_schema_1.NotificationLog.name, schema: notification_log_schema_1.NotificationLogSchema },
            ]),
        ],
        controllers: [preferences_controller_1.PreferencesController, notifications_controller_1.NotificationsController],
        providers: [preferences_service_1.PreferencesService, notifications_service_1.NotificationsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
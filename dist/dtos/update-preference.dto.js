"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePreferencesDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_preference_dto_1 = require("./create-preference.dto");
class UpdatePreferencesDto extends (0, mapped_types_1.PartialType)(create_preference_dto_1.CreatePreferencesDto) {
}
exports.UpdatePreferencesDto = UpdatePreferencesDto;
//# sourceMappingURL=update-preference.dto.js.map
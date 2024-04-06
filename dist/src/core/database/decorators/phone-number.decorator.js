"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPhoneNumberWithCountryCodes = void 0;
function IsPhoneNumberWithCountryCodes(countryCodeLengths) {
    return function (target, propertyKey) {
        let phoneNumber = target[propertyKey];
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return phoneNumber;
            },
            set: function (value) {
                const countryCodeLength = countryCodeLengths.find((cc) => value.startsWith('+' + cc.countryCode));
                if (!countryCodeLength) {
                    throw new Error(`Invalid country code for phone number: ${value}`);
                }
                if (value.length !== countryCodeLength.length) {
                    throw new Error(`Phone number length is incorrect for country code ${countryCodeLength.countryCode}`);
                }
                phoneNumber = value;
            },
            enumerable: true,
            configurable: true,
        });
    };
}
exports.IsPhoneNumberWithCountryCodes = IsPhoneNumberWithCountryCodes;
//# sourceMappingURL=phone-number.decorator.js.map
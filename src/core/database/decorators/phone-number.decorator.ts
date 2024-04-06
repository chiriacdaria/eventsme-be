interface CountryCodeLength {
  countryCode: string;
  length: number;
}

export function IsPhoneNumberWithCountryCodes(
  countryCodeLengths: CountryCodeLength[],
) {
  return function (target: any, propertyKey: string) {
    let phoneNumber = target[propertyKey];

    Object.defineProperty(target, propertyKey, {
      get: function () {
        return phoneNumber;
      },
      set: function (value: string) {
        const countryCodeLength = countryCodeLengths.find((cc) =>
          value.startsWith('+' + cc.countryCode),
        );
        if (!countryCodeLength) {
          throw new Error(`Invalid country code for phone number: ${value}`);
        }

        if (value.length !== countryCodeLength.length) {
          throw new Error(
            `Phone number length is incorrect for country code ${countryCodeLength.countryCode}`,
          );
        }

        phoneNumber = value;
      },
      enumerable: true,
      configurable: true,
    });
  };
}

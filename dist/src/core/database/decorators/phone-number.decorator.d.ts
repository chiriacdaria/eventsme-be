interface CountryCodeLength {
    countryCode: string;
    length: number;
}
export declare function IsPhoneNumberWithCountryCodes(countryCodeLengths: CountryCodeLength[]): (target: any, propertyKey: string) => void;
export {};

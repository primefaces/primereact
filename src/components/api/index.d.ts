export default PrimeReact = {
    ripple?: boolean,
    locale?: string
};

export function locale(locale: string): object;
export function addLocale(locale: string, options: object): void;
export function updateLocaleOption(key: string, value: any, locale: string): void;
export function updateLocaleOptions(options: object, locale: string): void;
export function localeOption(key: string, locale: string): void;
export function localeOptions(locale: string): void;

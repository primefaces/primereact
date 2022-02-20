import PrimeReact from './PrimeReact';

let locales = {
    'en': {
        accept: 'بله',
        reject: 'خیر',
        choose: 'انتخاب',
        upload: 'بارگزاری',
        cancel: 'انصراف',
        dayNames: ['یک شنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه', 'شنبه'],
        dayNamesShort: ['یک', 'دو', 'سه', 'چهار', 'پنج', 'جمع', 'شن'],
        dayNamesMin: ['یک', 'دو', 'سه', 'چهار', 'پنج', 'جمع', 'شن'],
        monthNames: ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'],
        monthNamesShort: ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'],
        today: 'امروز',
        clear: 'پاک کردن',
        weekHeader: 'Wk',
        firstDayOfWeek: 6,
        dateFormat: 'mm/dd/yy',
        weak: 'Weak',
        medium: 'Medium',
        strong: 'Strong',
        passwordPrompt: 'Enter a password'
    }
};

function locale(locale) {
    if (locale) {
        PrimeReact.locale = locale;
    }

    return {
        locale: PrimeReact.locale,
        options: locales[PrimeReact.locale]
    }
}

function addLocale(locale, options) {
    locales[locale] = { ...locales['en'], ...options };
}

function updateLocaleOption(key, value, locale) {
    localeOptions(locale)[key] = value;
}

function updateLocaleOptions(options, locale) {
    const _locale = locale || PrimeReact.locale;
    locales[_locale] = { ...locales[_locale], ...options };
}

function localeOption(key, locale) {
    try {
        return localeOptions(locale)[key];
    }
    catch(error) {
        throw new Error(`The ${key} option is not found in the current locale('${locale || PrimeReact.locale}').`);
    }
}

function localeOptions(locale) {
    const _locale = locale || PrimeReact.locale;
    return locales[_locale];
}

export { locale, addLocale, updateLocaleOption, updateLocaleOptions, localeOption, localeOptions };

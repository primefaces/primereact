import PrimeReact from './PrimeReact';

let locales = {
    'en': {
        accept: 'Yes',
        reject: 'No',
        choose: 'Choose',
        upload: 'Upload',
        cancel: 'Cancel',
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
        monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Today',
        clear: 'Clear',
        weekHeader: 'Wk',
        firstDayOfWeek: 0,
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

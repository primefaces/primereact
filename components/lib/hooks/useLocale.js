/* eslint-disable */
import * as React from 'react';
import { PrimeReactContext } from '../../lib/api/Api';
import PrimeReact from '../api/Api';

let locales = {
    en: {
        startsWith: 'Starts with',
        contains: 'Contains',
        notContains: 'Not contains',
        endsWith: 'Ends with',
        equals: 'Equals',
        notEquals: 'Not equals',
        noFilter: 'No Filter',
        filter: 'Filter',
        lt: 'Less than',
        lte: 'Less than or equal to',
        gt: 'Greater than',
        gte: 'Greater than or equal to',
        dateIs: 'Date is',
        dateIsNot: 'Date is not',
        dateBefore: 'Date is before',
        dateAfter: 'Date is after',
        custom: 'Custom',
        clear: 'Clear',
        close: 'Close',
        apply: 'Apply',
        matchAll: 'Match All',
        matchAny: 'Match Any',
        addRule: 'Add Rule',
        removeRule: 'Remove Rule',
        accept: 'Yes',
        reject: 'No',
        choose: 'Choose',
        upload: 'Upload',
        cancel: 'Cancel',
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Today',
        weekHeader: 'Wk',
        firstDayOfWeek: 0,
        dateFormat: 'mm/dd/yy',
        weak: 'Weak',
        medium: 'Medium',
        strong: 'Strong',
        passwordPrompt: 'Enter a password',
        emptyFilterMessage: 'No available options',
        emptyMessage: 'No results found',
        aria: {
            trueLabel: 'True',
            falseLabel: 'False',
            nullLabel: 'Not Selected',
            pageLabel: 'Page',
            firstPageLabel: 'First Page',
            lastPageLabel: 'Last Page',
            nextPageLabel: 'Next Page',
            previousPageLabel: 'Previous Page',
            selectLabel: 'Select',
            unselectLabel: 'Unselect',
            expandLabel: 'Expand',
            collapseLabel: 'Collapse'
        }
    }
};

export const useLocale = () => {
    const context = React.useContext(PrimeReactContext);

    const locale = (locale) => {
        if (locale) {
            if (context) context.locale = locale;
            else PrimeReact.locale = locale;
        }

        return {
            locale: (context && context.locale) || PrimeReact.locale,
            options: locales[(context && context.locale) || PrimeReact.locale]
        };
    };

    const addLocale = (locale, options) => {
        locales[locale] = { ...locales['en'], ...options };
    };

    const updateLocaleOption = (key, value, locale) => {
        localeOptions(locale)[key] = value;
    };

    const updateLocaleOptions = (options, locale) => {
        const _locale = locale || (context && context.locale) || PrimeReact.locale;

        locales[_locale] = { ...locales[_locale], ...options };
    };

    const localeOption = (key, locale) => {
        const _locale = locale || (context && context.locale) || PrimeReact.locale;

        try {
            return localeOptions(_locale)[key];
        } catch (error) {
            throw new Error(`The ${key} option is not found in the current locale('${_locale}').`);
        }
    };

    const ariaLabel = (key) => {
        const _locale = (context && context.locale) || PrimeReact.locale;

        try {
            return localeOptions(_locale)['aria'][key];
        } catch (error) {
            throw new Error(`The ${key} option is not found in the current locale('${_locale}').`);
        }
    };

    const localeOptions = (locale) => {
        const _locale = locale || (context && context.locale) || PrimeReact.locale;

        return locales[_locale];
    };

    return { locale, addLocale, updateLocaleOption, updateLocaleOptions, localeOption, localeOptions, ariaLabel };
};
/* eslint-enable */

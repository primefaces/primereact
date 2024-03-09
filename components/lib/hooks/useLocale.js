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
        pending: 'Pending',
        fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        chooseYear: 'Choose Year',
        chooseMonth: 'Choose Month',
        chooseDate: 'Choose Date',
        prevDecade: 'Previous Decade',
        nextDecade: 'Next Decade',
        prevYear: 'Previous Year',
        nextYear: 'Next Year',
        prevMonth: 'Previous Month',
        nextMonth: 'Next Month',
        prevHour: 'Previous Hour',
        nextHour: 'Next Hour',
        prevMinute: 'Previous Minute',
        nextMinute: 'Next Minute',
        prevSecond: 'Previous Second',
        nextSecond: 'Next Second',
        prevMilliSecond: 'Previous Second',
        nextMilliSecond: 'Next Second',
        am: 'am',
        pm: 'pm',
        today: 'Today',
        weekHeader: 'Wk',
        firstDayOfWeek: 0,
        showMonthAfterYear: true,
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
            star: '1 star',
            stars: '{star} stars',
            selectAll: 'All items selected',
            unselectAll: 'All items unselected',
            close: 'Close',
            previous: 'Previous',
            next: 'Next',
            navigation: 'Navigation',
            scrollTop: 'Scroll Top',
            moveTop: 'Move Top',
            moveUp: 'Move Up',
            moveDown: 'Move Down',
            moveBottom: 'Move Bottom',
            moveToTarget: 'Move to Target',
            moveToSource: 'Move to Source',
            moveAllToTarget: 'Move All to Target',
            moveAllToSource: 'Move All to Source',
            pageLabel: 'Page {page}',
            firstPageLabel: 'First Page',
            lastPageLabel: 'Last Page',
            nextPageLabel: 'Next Page',
            previousPageLabel: 'Previous Page',
            rowsPerPageLabel: 'Rows per page',
            jumpToPageDropdownLabel: 'Jump to Page Dropdown',
            jumpToPageInputLabel: 'Jump to Page Input',
            selectRow: 'Row Selected',
            unselectRow: 'Row Unselected',
            expandRow: 'Row Expanded',
            collapseRow: 'Row Collapsed',
            showFilterMenu: 'Show Filter Menu',
            hideFilterMenu: 'Hide Filter Menu',
            filterOperator: 'Filter Operator',
            filterConstraint: 'Filter Constraint',
            editRow: 'Row Edit',
            saveEdit: 'Save Edit',
            cancelEdit: 'Cancel Edit',
            listView: 'List View',
            gridView: 'Grid View',
            slide: 'Slide',
            slideNumber: '{slideNumber}',
            zoomImage: 'Zoom Image',
            zoomIn: 'Zoom In',
            zoomOut: 'Zoom Out',
            rotateRight: 'Rotate Right',
            rotateLeft: 'Rotate Left',
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

    /**
     * Find an ARIA label in the locale by key.  If options are passed it will replace all options:
     * ```ts
     * const ariaValue = "Page {page}, User {user}, Role {role}";
     * const options = { page: 2, user: "John", role: "Admin" };
     * const result = ariaLabel('yourLabel', { page: 2, user: "John", role: "Admin" })
     * console.log(result); // Output: Page 2, User John, Role Admin
     * ```
     * @param {string} ariaKey key of the ARIA label to look up in locale.
     * @param {any} options JSON options like { page: 2, user: "John", role: "Admin" }
     * @returns the ARIA label with replaced values
     */
    const ariaLabel = (ariaKey, options) => {
        const _locale = (context && context.locale) || PrimeReact.locale;

        try {
            let ariaLabel = localeOptions(_locale)['aria'][ariaKey];

            if (ariaLabel) {
                for (const key in options) {
                    if (options.hasOwnProperty(key)) {
                        ariaLabel = ariaLabel.replace(`{${key}}`, options[key]);
                    }
                }
            }

            return ariaLabel;
        } catch (error) {
            throw new Error(`The ${ariaKey} option is not found in the current locale('${_locale}').`);
        }
    };

    const localeOptions = (locale) => {
        const _locale = locale || (context && context.locale) || PrimeReact.locale;

        return locales[_locale];
    };

    return { locale, addLocale, updateLocaleOption, updateLocaleOptions, localeOption, localeOptions, ariaLabel };
};
/* eslint-enable */

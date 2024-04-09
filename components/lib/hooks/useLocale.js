/* eslint-disable */
import * as React from 'react';
import { PrimeReactContext } from '../../lib/api/Api';
import PrimeReact from '../api/Api';

let locales = {
    en: {
        accept: 'Yes',
        addRule: 'Add Rule',
        am: 'AM',
        apply: 'Apply',
        cancel: 'Cancel',
        choose: 'Choose',
        chooseDate: 'Choose Date',
        chooseMonth: 'Choose Month',
        chooseYear: 'Choose Year',
        clear: 'Clear',
        completed: 'Completed',
        contains: 'Contains',
        custom: 'Custom',
        dateAfter: 'Date is after',
        dateBefore: 'Date is before',
        dateFormat: 'mm/dd/yy',
        dateIs: 'Date is',
        dateIsNot: 'Date is not',
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        emptyFilterMessage: 'No results found',
        emptyMessage: 'No available options',
        emptySearchMessage: 'No results found',
        emptySelectionMessage: 'No selected item',
        endsWith: 'Ends with',
        equals: 'Equals',
        fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        filter: 'Filter',
        firstDayOfWeek: 0,
        gt: 'Greater than',
        gte: 'Greater than or equal to',
        lt: 'Less than',
        lte: 'Less than or equal to',
        matchAll: 'Match All',
        matchAny: 'Match Any',
        medium: 'Medium',
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        nextDecade: 'Next Decade',
        nextHour: 'Next Hour',
        nextMinute: 'Next Minute',
        nextMonth: 'Next Month',
        nextSecond: 'Next Second',
        nextYear: 'Next Year',
        noFilter: 'No Filter',
        notContains: 'Not contains',
        notEquals: 'Not equals',
        now: 'Now',
        passwordPrompt: 'Enter a password',
        pending: 'Pending',
        pm: 'PM',
        prevDecade: 'Previous Decade',
        prevHour: 'Previous Hour',
        prevMinute: 'Previous Minute',
        prevMonth: 'Previous Month',
        prevSecond: 'Previous Second',
        prevYear: 'Previous Year',
        reject: 'No',
        removeRule: 'Remove Rule',
        searchMessage: '{0} results are available',
        selectionMessage: '{0} items selected',
        showMonthAfterYear: false,
        startsWith: 'Starts with',
        strong: 'Strong',
        today: 'Today',
        upload: 'Upload',
        weak: 'Weak',
        weekHeader: 'Wk',
        aria: {
            cancelEdit: 'Cancel Edit',
            close: 'Close',
            collapseRow: 'Row Collapsed',
            editRow: 'Edit Row',
            expandRow: 'Row Expanded',
            falseLabel: 'False',
            filterConstraint: 'Filter Constraint',
            filterOperator: 'Filter Operator',
            firstPageLabel: 'First Page',
            gridView: 'Grid View',
            hideFilterMenu: 'Hide Filter Menu',
            jumpToPageDropdownLabel: 'Jump to Page Dropdown',
            jumpToPageInputLabel: 'Jump to Page Input',
            lastPageLabel: 'Last Page',
            listView: 'List View',
            moveAllToSource: 'Move All to Source',
            moveAllToTarget: 'Move All to Target',
            moveBottom: 'Move Bottom',
            moveDown: 'Move Down',
            moveToSource: 'Move to Source',
            moveToTarget: 'Move to Target',
            moveTop: 'Move Top',
            moveUp: 'Move Up',
            navigation: 'Navigation',
            next: 'Next',
            nextPageLabel: 'Next Page',
            nullLabel: 'Not Selected',
            pageLabel: 'Page {page}',
            otpLabel: 'Please enter one time password character {0}',
            passwordHide: 'Hide Password',
            passwordShow: 'Show Password',
            previous: 'Previous',
            previousPageLabel: 'Previous Page',
            rotateLeft: 'Rotate Left',
            rotateRight: 'Rotate Right',
            rowsPerPageLabel: 'Rows per page',
            saveEdit: 'Save Edit',
            scrollTop: 'Scroll Top',
            selectAll: 'All items selected',
            selectRow: 'Row Selected',
            showFilterMenu: 'Show Filter Menu',
            slide: 'Slide',
            slideNumber: '{slideNumber}',
            star: '1 star',
            stars: '{star} stars',
            trueLabel: 'True',
            unselectAll: 'All items unselected',
            unselectRow: 'Row Unselected',
            zoomImage: 'Zoom Image',
            zoomIn: 'Zoom In',
            zoomOut: 'Zoom Out'
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

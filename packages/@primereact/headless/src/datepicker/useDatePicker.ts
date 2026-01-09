import { withHeadless } from '@primereact/core/headless';
import { useMountEffect } from '@primereact/hooks';
import { useDatePickerDateMeta, useDatePickerProps } from '@primereact/types/shared/datepicker';
import { find, findSingle, getAttribute, getFocusableElements, getIndex, getOuterWidth, isDate, isEmpty, isNotEmpty } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useDatePicker.props';

const TICKS_TO_1970 = ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000;

const getSafeDate = (value: any, viewDate: Date) => {
    if (Array.isArray(value)) {
        return value[0] || value[1] || viewDate;
    }

    return value || viewDate;
};

const primereact = {
    config: {
        locale: {
            startsWith: 'Starts with',
            contains: 'Contains',
            notContains: 'Not contains',
            endsWith: 'Ends with',
            equals: 'Equals',
            notEquals: 'Not equals',
            noFilter: 'No Filter',
            lt: 'Less than',
            lte: 'Less than or equal to',
            gt: 'Greater than',
            gte: 'Greater than or equal to',
            dateIs: 'Date is',
            dateIsNot: 'Date is not',
            dateBefore: 'Date is before',
            dateAfter: 'Date is after',
            clear: 'Clear',
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
            completed: 'Completed',
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
            am: 'am',
            pm: 'pm',
            today: 'Today',
            weekHeader: 'Wk',
            firstDayOfWeek: 0,
            showMonthAfterYear: false,
            dateFormat: 'mm/dd/yy',
            weak: 'Weak',
            medium: 'Medium',
            strong: 'Strong',
            passwordPrompt: 'Enter a password',
            emptyFilterMessage: 'No results found',
            searchMessage: '{0} results are available',
            selectionMessage: '{0} items selected',
            emptySelectionMessage: 'No selected item',
            emptySearchMessage: 'No results found',
            fileChosenMessage: '{0} files',
            noFileChosenMessage: 'No file chosen',
            emptyMessage: 'No available options',
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
                prevPageLabel: 'Previous Page',
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
                listLabel: 'Option List'
            }
        }
    }
};

export const useDatePicker = withHeadless({
    name: 'useDatePicker',
    defaultProps,
    setup: ({ props, elementRef }) => {
        const inputRef = React.useRef<{ elementRef: React.RefObject<HTMLInputElement> } | null>(null);
        const nextButtonRef = React.useRef<{ elementRef: React.RefObject<HTMLButtonElement> } | null>(null);
        const prevButtonRef = React.useRef<{ elementRef: React.RefObject<HTMLButtonElement> } | null>(null);
        const portalRef = React.useRef<{ containerRef: { current: { elementRef: React.RefObject<HTMLDivElement> } } } | null>(null);
        const overlayRef = React.useRef<HTMLDivElement | null>(null);
        const timePickerTimer = React.useRef<NodeJS.Timeout | null>(null);
        const typeUpdate = React.useRef(false);
        const selectionStart = React.useRef<number | null>(null);
        const selectionEnd = React.useRef<number | null>(null);
        const [showClearIcon, setShowClearIcon] = React.useState(true);
        const [overlayVisibleState, setOverlayVisibleState] = React.useState<boolean>(false);
        const [currentView, setCurrentView] = React.useState(props.view);
        const [currentMonth, setCurrentMonth] = React.useState<number>(0);
        const [currentYear, setCurrentYear] = React.useState<number>(0);
        const [currentHour, setCurrentHour] = React.useState<number>(0);
        const [currentMinute, setCurrentMinute] = React.useState<number>(0);
        const [currentSecond, setCurrentSecond] = React.useState<number>(0);
        const [pm, setPM] = React.useState<boolean>(false);
        const [focusedDateIndex, setFocusedDateIndex] = React.useState(0);
        const [navigationState, setNavigationState] = React.useState<{ backward?: boolean; button?: boolean } | null>(null);
        const [hoveredDateState, setHoveredDateState] = React.useState<useDatePickerDateMeta | null>(null);

        const getInitialValue = (): useDatePickerProps['value'] => {
            if (props.value !== undefined) {
                return typeof props.value === 'string' ? (parseValue(props.value) as useDatePickerProps['value']) : props.value;
            }

            if (props.defaultValue !== undefined) {
                return typeof props.defaultValue === 'string' ? (parseValue(props.defaultValue) as useDatePickerProps['value']) : props.defaultValue;
            }

            return null;
        };

        const [rawValueState, setRawValueState] = React.useState<useDatePickerProps['value']>(() => getInitialValue());

        const state = {
            rawValue: rawValueState,
            overlayVisible: overlayVisibleState,
            currentView,
            showClearIcon,
            hoveredDate: hoveredDateState
        };

        const isSelected = (dateMeta: useDatePickerDateMeta) => {
            if (rawValueState) {
                if (isSingleSelection()) {
                    return isDateEquals(parseValueForComparison(rawValueState), dateMeta);
                } else if (isMultipleSelection()) {
                    let selected = false;

                    if (Array.isArray(rawValueState)) {
                        for (const date of rawValueState) {
                            selected = isDateEquals(parseValueForComparison(date), dateMeta);

                            if (selected) {
                                break;
                            }
                        }
                    }

                    return selected;
                } else if (isRangeSelection() && Array.isArray(rawValueState)) {
                    const start = parseValueForComparison(rawValueState[0]);

                    if (start === null) {
                        return false;
                    }

                    if (rawValueState[1]) {
                        const end = parseValueForComparison(rawValueState[1]);

                        if (end === null) {
                            return false;
                        }

                        return isDateEquals(start, dateMeta) || isDateEquals(end, dateMeta) || isDateBetween(start, end, dateMeta);
                    } else {
                        return isDateEquals(start, dateMeta);
                    }
                }
            }

            return false;
        };

        const isInHoverRange = (dateMeta: useDatePickerDateMeta) => {
            if (!isRangeSelection() || !hoveredDateState || !rawValueState || !Array.isArray(rawValueState)) {
                return false;
            }

            if (rawValueState.length === 0 || rawValueState[1] !== null) {
                return false;
            }

            const start = parseValueForComparison(rawValueState[0]);

            if (!start) {
                return false;
            }

            const hoverDateObj = new Date(hoveredDateState.year, hoveredDateState.month, hoveredDateState.day);
            const currentDateObj = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
            const rangeStart = start.getTime() < hoverDateObj.getTime() ? start : hoverDateObj;
            const rangeEnd = start.getTime() < hoverDateObj.getTime() ? hoverDateObj : start;
            const currentTime = currentDateObj.getTime();

            return currentTime >= rangeStart.getTime() && currentTime <= rangeEnd.getTime();
        };

        const onDateCellMouseEnter = (dateMeta: useDatePickerDateMeta) => {
            if (isRangeSelection() && dateMeta.selectable) {
                setHoveredDateState(dateMeta);
            }
        };

        const isMonthSelected = (month: number) => {
            if (isDate(rawValueState) && rawValueState !== null) {
                return (rawValueState as Date).getMonth() === month && (rawValueState as Date).getFullYear() === currentYear;
            } else if (Array.isArray(rawValueState)) {
                if (isMultipleSelection()) {
                    return rawValueState?.some((currentValue) => {
                        const parsedDate = parseValueForComparison(currentValue);

                        return parsedDate ? parsedDate.getMonth() === month && parsedDate.getFullYear() === currentYear : false;
                    });
                } else if (isRangeSelection()) {
                    const parsedStart = rawValueState?.[0] ? parseValueForComparison(rawValueState[0]) : null;
                    const parsedEnd = rawValueState?.[1] ? parseValueForComparison(rawValueState[1]) : null;

                    if (!parsedEnd) {
                        return parsedStart ? parsedStart.getFullYear() === currentYear && parsedStart.getMonth() === month : false;
                    } else {
                        if (!parsedStart) return false;

                        const currentDate = new Date(currentYear as number, month, 1);
                        const startDate = new Date(parsedStart.getFullYear(), parsedStart.getMonth(), 1);
                        const endDate = new Date(parsedEnd.getFullYear(), parsedEnd.getMonth(), 1);

                        return currentDate >= startDate && currentDate <= endDate;
                    }
                }
            }

            return false;
        };

        const isYearSelected = (year: number) => {
            if (Array.isArray(rawValueState)) {
                if (isMultipleSelection()) {
                    return rawValueState.some((currentValue) => {
                        const parsedDate = parseValueForComparison(currentValue);
                        return parsedDate ? parsedDate.getFullYear() === year : false;
                    });
                }

                if (isRangeSelection()) {
                    const parsedStart = rawValueState[0] ? parseValueForComparison(rawValueState[0]) : null;
                    const parsedEnd = rawValueState[1] ? parseValueForComparison(rawValueState[1]) : null;

                    const start = parsedStart?.getFullYear();
                    const end = parsedEnd?.getFullYear();

                    if (start == null || end == null) return false;

                    return start === year || end === year || (start < year && end > year);
                }

                return false;
            }

            if (rawValueState instanceof Date) {
                return rawValueState.getFullYear() === year;
            }

            return false;
        };

        const isDateEquals = (value: Date | string | null | undefined, dateMeta: useDatePickerDateMeta) => {
            if (value) {
                const dateValue = typeof value === 'string' ? (parseValue(value) as Date | string) : value;

                if (dateValue && dateValue instanceof Date) {
                    return dateValue.getDate() === dateMeta.day && dateValue.getMonth() === dateMeta.month && dateValue.getFullYear() === dateMeta.year;
                }
            }

            return false;
        };

        const isDateBetween = (start: Date, end: Date, dateMeta: useDatePickerDateMeta) => {
            const between = false;
            const parsedStart = parseValueForComparison(start);
            const parsedEnd = parseValueForComparison(end);

            if (parsedStart && parsedEnd) {
                const date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);

                return parsedStart.getTime() <= date.getTime() && parsedEnd.getTime() >= date.getTime();
            }

            return between;
        };

        const sundayIndex = React.useMemo(() => {
            return primereact?.config?.locale?.firstDayOfWeek > 0 ? 7 - primereact?.config?.locale?.firstDayOfWeek : 0;
        }, []);

        const getFirstDayOfMonthIndex = (month: number, year: number) => {
            const day = new Date();

            day.setDate(1);
            day.setMonth(month);
            day.setFullYear(year);

            const dayIndex = day.getDay() + sundayIndex;

            return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
        };

        const getDaysCountInMonth = (month: number, year: number) => {
            return 32 - daylightSavingAdjust(new Date(year, month, 32)).getDate();
        };

        const getDaysCountInPrevMonth = (month: number, year: number) => {
            const prev = getPreviousMonthAndYear(month, year);

            return getDaysCountInMonth(prev.month, prev.year);
        };

        const getPreviousMonthAndYear = (month: number, year: number) => {
            let m, y;

            if (month === 0) {
                m = 11;
                y = year - 1;
            } else {
                m = month - 1;
                y = year;
            }

            return { month: m, year: y };
        };

        const getNextMonthAndYear = (month: number, year: number) => {
            let m, y;

            if (month === 11) {
                m = 0;
                y = year + 1;
            } else {
                m = month + 1;
                y = year;
            }

            return { month: m, year: y };
        };

        const daylightSavingAdjust = (date: Date) => {
            if (!date) {
                date = new Date();
            }

            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);

            return date;
        };

        const isToday = (today: Date, day: number, month: number, year: number) => {
            return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
        };

        const isSelectable = (day: number, month: number, year: number, otherMonth: boolean) => {
            let validMin = true;
            let validMax = true;
            let validDate = true;
            let validDay = true;

            if (otherMonth && !props.selectOtherMonths) {
                return false;
            }

            if (props.minDate) {
                if (props.minDate.getFullYear() > year) {
                    validMin = false;
                } else if (props.minDate.getFullYear() === year) {
                    if (props.minDate.getMonth() > month) {
                        validMin = false;
                    } else if (props.minDate.getMonth() === month) {
                        if (props.minDate.getDate() > day) {
                            validMin = false;
                        }
                    }
                }
            }

            if (props.maxDate) {
                if (props.maxDate.getFullYear() < year) {
                    validMax = false;
                } else if (props.maxDate.getFullYear() === year) {
                    if (props.maxDate.getMonth() < month) {
                        validMax = false;
                    } else if (props.maxDate.getMonth() === month) {
                        if (props.maxDate.getDate() < day) {
                            validMax = false;
                        }
                    }
                }
            }

            if (props.disabledDates) {
                validDate = !isDateDisabled(day, month, year);
            }

            if (props.disabledDays) {
                validDay = !isDayDisabled(day, month, year);
            }

            return validMin && validMax && validDate && validDay;
        };

        const onPrevButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setNavigationState({ backward: true, button: true });
            navBackward(event);
        };

        const onNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setNavigationState({ backward: false, button: true });
            navForward(event);
        };

        const navBackward = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLSpanElement>) => {
            event.preventDefault();

            if (!isEnabled()) {
                return;
            }

            if (currentView === 'month') {
                decrementYear();

                if (props.onYearChange) {
                    props.onYearChange({ month: currentMonth, year: currentYear });
                }
            } else if (currentView === 'year') {
                decrementDecade();
            } else {
                if (event.shiftKey) {
                    decrementYear();
                } else {
                    if (currentMonth === 0) {
                        setCurrentMonth(11);
                        decrementYear();
                    } else {
                        setCurrentMonth((currentMonth as number) - 1);
                    }

                    if (props.onMonthChange) {
                        props.onMonthChange({ month: currentMonth + 1, year: currentYear });
                    }
                }
            }
        };

        const navForward = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLSpanElement>) => {
            event.preventDefault();

            if (!isEnabled()) {
                return;
            }

            if (currentView === 'month') {
                incrementYear();

                if (props.onYearChange) {
                    props.onYearChange({ month: currentMonth, year: currentYear });
                }
            } else if (currentView === 'year') {
                incrementDecade();
            } else {
                if (event.shiftKey) {
                    incrementYear();
                } else {
                    if (currentMonth === 11) {
                        setCurrentMonth(0);
                        incrementYear();
                    } else {
                        setCurrentMonth((currentMonth as number) + 1);
                    }

                    if (props.onMonthChange) {
                        props.onMonthChange({ month: currentMonth + 1, year: currentYear });
                    }
                }
            }
        };

        const decrementYear = () => {
            setCurrentYear((currentYear ?? 0) - 1);
        };

        const decrementDecade = () => {
            setCurrentYear((currentYear ?? 0) - 10);
        };

        const incrementYear = () => {
            setCurrentYear((currentYear ?? 0) + 1);
        };

        const incrementDecade = () => {
            setCurrentYear((currentYear ?? 0) + 10);
        };

        const switchToMonthView = (event: React.MouseEvent<HTMLButtonElement>) => {
            setCurrentView('month');
            event.preventDefault();
        };

        const switchToYearView = (event: React.MouseEvent<HTMLButtonElement>) => {
            setCurrentView('year');
            event.preventDefault();
        };

        const isEnabled = () => {
            return !props.disabled && !props.readOnly;
        };

        const updateCurrentTimeMeta = (date: Date) => {
            let currentHour = date.getHours();

            if (props.hourFormat === '12') {
                setPM(currentHour > 11);

                if (currentHour >= 12) currentHour = currentHour == 12 ? 12 : currentHour - 12;
            }

            setCurrentHour(Math.floor(currentHour / (props.stepHour ?? 1)) * (props.stepHour ?? 1));
            setCurrentMinute(Math.floor(date.getMinutes() / (props.stepMinute ?? 1)) * (props.stepMinute ?? 1));
            setCurrentSecond(Math.floor(date.getSeconds() / (props.stepSecond ?? 1)) * (props.stepSecond ?? 1));
        };

        const onButtonClick = () => {
            if (isEnabled()) {
                if (!overlayVisibleState) {
                    inputRef.current?.elementRef.current?.focus();
                    setOverlayVisibleState(true);
                } else {
                    setOverlayVisibleState(false);
                }
            }
        };

        const isDateDisabled = (day: number, month: number, year: number) => {
            if (props.disabledDates) {
                for (const disabledDate of props.disabledDates) {
                    if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
                        return true;
                    }
                }
            }

            return false;
        };

        const isDayDisabled = (day: number, month: number, year: number) => {
            if (props.disabledDays) {
                const weekday = new Date(year, month, day);
                const weekdayNumber = weekday.getDay();

                return props.disabledDays.indexOf(weekdayNumber) !== -1;
            }

            return false;
        };

        const onDateSelect = (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement> | null, dateMeta: useDatePickerDateMeta) => {
            if (props.disabled || !dateMeta.selectable) {
                return;
            }

            if (overlayRef.current) {
                (find(overlayRef.current, 'table td span:not([data-p-disabled="true"])') as HTMLElement[]).forEach((cell) => (cell.tabIndex = -1));
            }

            if (event) {
                event.currentTarget.focus();
            }

            if (isMultipleSelection() && isSelected(dateMeta)) {
                if (rawValueState && Array.isArray(rawValueState)) {
                    const newValue = rawValueState.filter((date) => !isDateEquals(parseValueForComparison(date), dateMeta)) as Date[];

                    updateModel(newValue);
                }
            } else {
                if (shouldSelectDate()) {
                    if (dateMeta.otherMonth) {
                        setCurrentMonth(dateMeta.month);
                        setCurrentYear(dateMeta.year);
                        selectDate(dateMeta);
                    } else {
                        selectDate(dateMeta);
                    }
                }
            }

            if (isSingleSelection() && (!props.showTime || props.hideOnDateTimeSelect)) {
                if (inputRef.current) {
                    inputRef.current?.elementRef.current.focus();
                }

                setTimeout(() => {
                    setOverlayVisibleState(false);
                }, 150);
            }
        };

        const selectDate = (dateMeta: useDatePickerDateMeta) => {
            let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);

            if (props.showTime) {
                if (props.hourFormat === '12' && currentHour !== 12 && pm) {
                    date.setHours((currentHour as number) + 12);
                } else {
                    date.setHours(currentHour as number);
                }

                date.setMinutes(currentMinute as number);
                date.setSeconds(props.showSeconds ? (currentSecond as number) : 0);
            }

            if (props.minDate && props.minDate > date) {
                date = props.minDate;
            }

            if (props.maxDate && props.maxDate < date) {
                date = props.maxDate;
            }

            setCurrentHour(date.getHours());
            setCurrentMinute(date.getMinutes());
            setCurrentSecond(date.getSeconds());

            let modelVal = null;

            if (isSingleSelection()) {
                modelVal = date;
            } else if (isMultipleSelection()) {
                if (Array.isArray(rawValueState)) {
                    modelVal = [...rawValueState, date];
                } else {
                    modelVal = [date];
                }
            } else if (isRangeSelection()) {
                if (rawValueState && Array.isArray(rawValueState) && rawValueState.length) {
                    let startDate = parseValueForComparison(rawValueState[0]) as Date;
                    let endDate = rawValueState[1];

                    if (!endDate && date.getTime() >= startDate.getTime()) {
                        endDate = date;
                        setFocusedDateIndex(1);
                        setHoveredDateState(null);
                    } else {
                        startDate = date;
                        endDate = null;
                        setFocusedDateIndex(0);
                        setHoveredDateState(null);
                    }

                    modelVal = [startDate, endDate];
                } else {
                    modelVal = [date, null];
                    setFocusedDateIndex(0);
                }
            }

            if (modelVal !== null) {
                updateModel(modelVal as Date);
            }

            if (props.onDateSelect) {
                props.onDateSelect({
                    value: date
                });
            }
        };

        const updateModel = (value: useDatePickerProps['value']) => {
            setRawValueState(value);

            if (props.updateModelType === 'date') {
                if (isSingleSelection()) {
                    writeValue(value);
                } else {
                    let stringArrValue = null;

                    if (Array.isArray(value)) {
                        stringArrValue = value.map((date) => parseValueForComparison(date));
                    }

                    writeValue(stringArrValue);
                }
            } else if (props.updateModelType == 'string') {
                if (isSingleSelection()) {
                    if (value instanceof Date || typeof value === 'string' || value === null) {
                        writeValue(formatDateTime(value));
                    }
                } else if (isMultipleSelection()) {
                    let stringArrValue: (string | null)[] | null = null;

                    if (Array.isArray(value)) {
                        stringArrValue = value.map((date) => {
                            const formatted = formatDateTime(date);

                            return typeof formatted === 'string' ? formatted : null;
                        });
                    }

                    writeValue(stringArrValue);
                } else if (isRangeSelection()) {
                    let stringArrValue: (string | null)[] | null = null;

                    if (Array.isArray(value)) {
                        stringArrValue = value.map((date) => {
                            if (date === null || date === undefined) {
                                return null;
                            }

                            const formatted = formatDateTime(date);

                            return formatted !== null && typeof formatted === 'string' ? formatted : null;
                        });
                    }

                    writeValue(stringArrValue);
                }
            }
        };

        const shouldSelectDate = () => {
            if (isMultipleSelection()) {
                return props.maxDateCount != null ? props.maxDateCount > (rawValueState && Array.isArray(rawValueState) ? rawValueState.length : 0) : true;
            }

            return true;
        };

        const writeValue = (newValue: useDatePickerProps['value']) => {
            setShowClearIcon(!isEmpty(newValue));

            if (props.onValueChange) {
                props.onValueChange({
                    value: newValue
                });
            }
        };

        const isSingleSelection = () => {
            return props.selectionMode === 'single';
        };

        const isRangeSelection = () => {
            return props.selectionMode === 'range';
        };

        const isMultipleSelection = () => {
            return props.selectionMode === 'multiple';
        };

        const formatValue = (value: useDatePickerProps['value']) => {
            if (typeof value === 'string') {
                return props.dateFormat ? (isNaN(new Date(value).getTime()) ? value : formatDate(new Date(value), props.dateFormat)) : value;
            }

            let formattedValue: string | null = '';

            if (value) {
                try {
                    if (isSingleSelection()) {
                        const singleVal = Array.isArray(value) ? (value[0] ?? null) : value;

                        if (singleVal == null) {
                            formattedValue = '';
                        } else {
                            formattedValue = (formatDateTime(singleVal as string | Date) as string) ?? '';
                        }
                    } else if (isMultipleSelection()) {
                        if (Array.isArray(value)) {
                            for (let i = 0; i < value.length; i++) {
                                const v = value[i];
                                const dateAsString = typeof v === 'string' ? (formatDateTime(parseValueForComparison(v) as Date) as string) : (formatDateTime(v as Date) as string);

                                formattedValue += dateAsString;

                                if (i !== value.length - 1) {
                                    formattedValue += ', ';
                                }
                            }
                        }
                    } else if (isRangeSelection()) {
                        if (Array.isArray(value) && value.length) {
                            const startDate = parseValueForComparison(value[0]) as Date;
                            const endDate = parseValueForComparison(value[1]) as Date | null;

                            formattedValue = (formatDateTime(startDate) as string) ?? '';

                            if (endDate) {
                                formattedValue += ' - ' + ((formatDateTime(endDate) as string) ?? '');
                            }
                        }
                    }
                } catch {
                    formattedValue = typeof value === 'string' ? value : '';
                }
            }

            return formattedValue;
        };

        const formatDateTime = (date: Date | string | null) => {
            let formattedValue = null;

            if (isDate(date) && isNotEmpty(date)) {
                if (props.timeOnly) {
                    formattedValue = formatTime(date);
                } else {
                    formattedValue = formatDate(date, datePattern);

                    if (props.showTime) {
                        formattedValue += ' ' + formatTime(date);
                    }
                }
            } else if (props.updateModelType === 'string') {
                formattedValue = date;
            }

            return formattedValue;
        };

        const formatDate = (date: Date, format: string) => {
            if (!date) {
                return '';
            }

            let iFormat: number;

            const lookAhead = (match: string) => {
                const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

                if (matches) {
                    iFormat++;
                }

                return matches;
            };

            const formatNumber = (match: string, value: number, len: number) => {
                let num = '' + value;

                if (lookAhead(match)) {
                    while (num.length < len) {
                        num = '0' + num;
                    }
                }

                return num;
            };

            const formatName = (match: string, value: number, shortNames: string[], longNames: string[]) => {
                return lookAhead(match) ? longNames[value] : shortNames[value];
            };

            let output = '';
            let literal = false;

            if (date) {
                for (iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                            literal = false;
                        } else {
                            output += format.charAt(iFormat);
                        }
                    } else {
                        switch (format.charAt(iFormat)) {
                            case 'd':
                                output += formatNumber('d', date.getDate(), 2);
                                break;
                            case 'D':
                                output += formatName('D', date.getDay(), primereact?.config?.locale?.dayNamesShort, primereact?.config?.locale?.dayNames);
                                break;
                            case 'o':
                                output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case 'm':
                                output += formatNumber('m', date.getMonth() + 1, 2);
                                break;
                            case 'M':
                                output += formatName('M', date.getMonth(), primereact?.config?.locale?.monthNamesShort, primereact?.config?.locale?.monthNames);
                                break;
                            case 'y':
                                output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + (date.getFullYear() % 100);
                                break;
                            case '@':
                                output += date.getTime();
                                break;
                            case '!':
                                output += date.getTime() * 10000 + TICKS_TO_1970;
                                break;
                            case "'":
                                if (lookAhead("'")) {
                                    output += "'";
                                } else {
                                    literal = true;
                                }

                                break;
                            default:
                                output += format.charAt(iFormat);
                        }
                    }
                }
            }

            return output;
        };

        const formatTime = (date: Date) => {
            if (!date) {
                return '';
            }

            let output = '';
            let hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            if (props.hourFormat === '12' && hours > 11 && hours !== 12) {
                hours -= 12;
            }

            if (props.hourFormat === '12') {
                output += hours === 0 ? 12 : hours < 10 ? '0' + hours : hours;
            } else {
                output += hours < 10 ? '0' + hours : hours;
            }

            output += ':';
            output += minutes < 10 ? '0' + minutes : minutes;

            if (props.showSeconds) {
                output += ':';
                output += seconds < 10 ? '0' + seconds : seconds;
            }

            if (props.hourFormat === '12') {
                output += date.getHours() > 11 ? ` ${primereact?.config?.locale?.pm}` : ` ${primereact?.config?.locale?.am}`;
            }

            return output;
        };

        const clearTimePickerTimer = () => {
            if (timePickerTimer.current) {
                clearTimeout(timePickerTimer.current);
            }
        };

        const onTodayButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            const date = new Date();
            const dateMeta = {
                day: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear(),
                otherMonth: date.getMonth() !== currentMonth || date.getFullYear() !== currentYear,
                today: true,
                selectable: true
            };

            setCurrentView('date');
            onDateSelect(null, dateMeta);

            if (props.onTodayButtonClick) {
                props.onTodayButtonClick({
                    originalEvent: event,
                    date
                });
            }

            event.preventDefault();
        };

        const onClearButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            updateModel(null);
            setOverlayVisibleState(false);
            setShowClearIcon(false);

            if (props.onClearButtonClick) {
                props.onClearButtonClick(event);
            }

            event.preventDefault();
        };

        const onTimePickerElementMouseDown = (event: React.MouseEvent<HTMLButtonElement>, type: number, direction: number) => {
            if (isEnabled()) {
                repeat(event, null, type, direction);
                event.preventDefault();
            }
        };

        const onTimePickerElementMouseUp = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
            if (isEnabled()) {
                clearTimePickerTimer();
                updateModelTime();
                event.preventDefault();
            }
        };

        const onTimePickerElementMouseLeave = () => {
            clearTimePickerTimer();
        };

        const onContainerButtonKeydown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
            switch (event.code) {
                case 'Tab':
                    trapFocus(event);
                    break;

                case 'Escape':
                    setOverlayVisibleState(false);
                    event.preventDefault();
                    break;

                default:
                    //Noop
                    break;
            }

            if (props.onKeyDown) {
                props.onKeyDown(event);
            }
        };

        const onTimePickerElementKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, type: number, direction: number) => {
            switch (event.code) {
                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    if (isEnabled()) {
                        repeat(event, null, type, direction);
                        event.preventDefault();
                    }

                    break;
            }
        };

        const onTimePickerElementKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
            switch (event.code) {
                case 'Enter':
                case 'NumpadEnter':

                case 'Space': {
                    onTimePickerElementMouseUp(event);
                }
            }
        };

        const repeat = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>, interval: number | null, type: number, direction: number) => {
            const i = interval || 500;

            clearTimePickerTimer();
            timePickerTimer.current = setTimeout(() => {
                repeat(event, 100, type, direction);
            }, i);

            switch (type) {
                case 0:
                    if (direction === 1) {
                        incrementHour(event);
                    } else {
                        decrementHour(event);
                    }

                    break;

                case 1:
                    if (direction === 1) {
                        incrementMinute(event);
                    } else {
                        decrementMinute(event);
                    }

                    break;

                case 2:
                    if (direction === 1) {
                        incrementSecond(event);
                    } else {
                        decrementSecond(event);
                    }

                    break;
            }
        };

        const convertTo24Hour = (hours: number, pm: boolean) => {
            if (props.hourFormat == '12') {
                if (hours === 12) {
                    return pm ? 12 : 0;
                } else {
                    return pm ? hours + 12 : hours;
                }
            }

            return hours;
        };

        const validateTime = (hour: number, minute: number, second: number, pm: boolean) => {
            let value: Date | string | null = viewDate;
            const convertedHour = convertTo24Hour(hour, pm);

            if (isRangeSelection()) {
                value = Array.isArray(rawValueState) ? rawValueState[1] || rawValueState[0] : null;
            }

            if (isMultipleSelection()) {
                value = Array.isArray(rawValueState) ? rawValueState[rawValueState.length - 1] : null;
            }

            const valueDateString = value instanceof Date ? value.toDateString() : null;

            if (props.minDate && valueDateString && props.minDate.toDateString() === valueDateString) {
                if (props.minDate.getHours() > convertedHour) {
                    return false;
                }

                if (props.minDate.getHours() === convertedHour) {
                    if (props.minDate.getMinutes() > minute) {
                        return false;
                    }

                    if (props.minDate.getMinutes() === minute) {
                        if (props.minDate.getSeconds() > second) {
                            return false;
                        }
                    }
                }
            }

            if (props.maxDate && valueDateString && props.maxDate.toDateString() === valueDateString) {
                if (props.maxDate.getHours() < convertedHour) {
                    return false;
                }

                if (props.maxDate.getHours() === convertedHour) {
                    if (props.maxDate.getMinutes() < minute) {
                        return false;
                    }

                    if (props.maxDate.getMinutes() === minute) {
                        if (props.maxDate.getSeconds() < second) {
                            return false;
                        }
                    }
                }
            }

            return true;
        };

        const incrementHour = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
            const prevHour = currentHour;
            let newHour = currentHour + Number(props.stepHour);
            let newPM = pm;

            if (props.hourFormat == '24') {
                newHour = newHour >= 24 ? newHour - 24 : newHour;
            } else if (props.hourFormat == '12') {
                // Before the AM/PM break, now after
                if (prevHour < 12 && newHour > 11) {
                    newPM = !pm;
                }

                newHour = newHour >= 13 ? newHour - 12 : newHour;
            }

            if (validateTime(newHour, currentMinute, currentSecond, newPM)) {
                setCurrentHour(newHour);
                setPM(newPM);
            }

            event.preventDefault();
        };

        const decrementHour = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
            let newHour = currentHour - Number(props.stepHour);
            let newPM = pm;

            if (props.hourFormat == '24') {
                newHour = newHour < 0 ? 24 + newHour : newHour;
            } else if (props.hourFormat == '12') {
                // If we were at noon/midnight, then switch
                if (currentHour === 12) {
                    newPM = !pm;
                }

                newHour = newHour <= 0 ? 12 + newHour : newHour;
            }

            if (validateTime(newHour, currentMinute, currentSecond, newPM)) {
                setCurrentHour(newHour);
                setPM(newPM);
            }

            event.preventDefault();
        };

        const incrementMinute = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
            const newMinute = currentMinute + Number(props.stepMinute);

            if (validateTime(currentHour, newMinute, currentSecond, pm)) {
                setCurrentMinute(newMinute > 59 ? newMinute - 60 : newMinute);
            }

            event.preventDefault();
        };

        const decrementMinute = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
            let newMinute = currentMinute - Number(props.stepMinute);

            newMinute = newMinute < 0 ? 60 + newMinute : newMinute;

            if (validateTime(currentHour, newMinute, currentSecond, pm)) {
                setCurrentMinute(newMinute);
            }

            event.preventDefault();
        };

        const incrementSecond = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
            const newSecond = currentSecond + Number(props.stepSecond);

            if (validateTime(currentHour, currentMinute, newSecond, pm)) {
                setCurrentSecond(newSecond > 59 ? newSecond - 60 : newSecond);
            }

            event.preventDefault();
        };

        const decrementSecond = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
            let newSecond = currentSecond - Number(props.stepSecond);

            newSecond = newSecond < 0 ? 60 + newSecond : newSecond;

            if (validateTime(currentHour, currentMinute, newSecond, pm)) {
                setCurrentSecond(newSecond);
            }

            event.preventDefault();
        };

        const updateModelTime = () => {
            let valueDate: Date | string | null = viewDate;

            if (isRangeSelection()) {
                valueDate = Array.isArray(rawValueState) ? rawValueState[focusedDateIndex] || rawValueState[0] : null;
            }

            if (isMultipleSelection()) {
                valueDate = Array.isArray(rawValueState) ? rawValueState[rawValueState.length - 1] : null;
            }

            const dateValue = valueDate && valueDate instanceof Date ? new Date(valueDate.getTime()) : new Date();

            if (props.hourFormat == '12') {
                if (currentHour === 12) dateValue.setHours(pm ? 12 : 0);
                else dateValue.setHours(pm ? currentHour + 12 : currentHour);
            } else {
                dateValue.setHours(currentHour);
            }

            dateValue.setMinutes(currentMinute);
            dateValue.setSeconds(currentSecond);

            let value: useDatePickerProps['value'];

            if (isRangeSelection()) {
                if (Array.isArray(rawValueState)) {
                    if (focusedDateIndex === 1 && rawValueState[1]) {
                        value = [rawValueState[0] as Date | null, dateValue];
                    } else if (focusedDateIndex === 0) {
                        value = [dateValue, rawValueState[1] as Date | null];
                    } else {
                        value = [dateValue, null];
                    }
                } else {
                    value = [dateValue, null];
                }
            } else if (isMultipleSelection()) {
                if (Array.isArray(rawValueState)) {
                    value = [...(rawValueState.slice(0, -1) as (Date | null)[]), dateValue];
                } else {
                    value = [dateValue];
                }
            } else {
                value = dateValue;
            }

            updateModel(value);

            if (props.onDateSelect) {
                props.onDateSelect({
                    value
                });
            }
        };

        const toggleAMPM = (event: React.MouseEvent<HTMLButtonElement>) => {
            const validHour = validateTime(currentHour, currentMinute, currentSecond, !pm);

            if (!validHour && (props.maxDate || props.minDate)) return;

            setPM(!pm);

            event.preventDefault();
        };

        const onMonthSelect = (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>, index: number) => {
            if (props.view === 'month') {
                onDateSelect(event, {
                    year: currentYear,
                    month: index,
                    day: 1,
                    selectable: true,
                    otherMonth: false,
                    today: false
                });
            } else {
                setCurrentMonth(index);
                setCurrentView('date');

                if (props.onMonthChange) {
                    props.onMonthChange({ month: currentMonth + 1, year: currentYear });
                }
            }

            setTimeout(updateFocus, 0);
        };

        const onYearSelect = (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>, year: { value: number }) => {
            if (props.view === 'year') {
                onDateSelect(event, {
                    year: year.value,
                    month: 0,
                    day: 1,
                    selectable: true,
                    otherMonth: false,
                    today: false
                });
            } else {
                setCurrentYear(year.value);
                setCurrentView('month');

                if (props.onYearChange) {
                    props.onYearChange({ month: currentMonth + 1, year: currentYear });
                }
            }

            setTimeout(updateFocus, 0);
        };

        const updateCurrentMetaData = () => {
            const _viewDate = viewDate as Date;

            if (!_viewDate) {
                return;
            }

            setCurrentMonth(_viewDate.getMonth());
            setCurrentYear(_viewDate.getFullYear());

            if (props.showTime || props.timeOnly) {
                let timeDate = _viewDate;

                if (isRangeSelection() && rawValueState && Array.isArray(rawValueState) && rawValueState[focusedDateIndex]) {
                    const selectedDate = rawValueState[focusedDateIndex];

                    if (selectedDate instanceof Date) {
                        timeDate = selectedDate;
                    }
                }

                updateCurrentTimeMeta(timeDate);
            }
        };

        const isValidSelection = (value: Date | Date[]) => {
            if (value == null) {
                return true;
            }

            let isValid = true;

            if (isSingleSelection() && value instanceof Date) {
                if (!isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false)) {
                    isValid = false;
                }
            } else if (Array.isArray(value) && value.every((v) => isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false))) {
                if (isRangeSelection()) {
                    isValid = value.length > 1 && value[1] >= value[0];
                }
            }

            return isValid;
        };

        const parseValue = (text: string): useDatePickerProps['value'] => {
            if (!text || text.trim().length === 0) {
                return null;
            }

            let value: useDatePickerProps['value'];

            if (isSingleSelection()) {
                value = parseDateTime(text) ?? null;
            } else if (isMultipleSelection()) {
                const tokens = text.split(',');
                const dateArray: (Date | null)[] = [];

                for (const token of tokens) {
                    dateArray.push(parseDateTime(token.trim()) ?? null);
                }

                value = dateArray;
            } else if (isRangeSelection()) {
                const tokens = text.split(' - ');
                const dateArray: (Date | null)[] = [];

                for (let i = 0; i < tokens.length; i++) {
                    dateArray[i] = parseDateTime(tokens[i].trim()) ?? null;
                }

                value = dateArray;
            }

            return value;
        };

        const parseValueForComparison = (value: useDatePickerProps['value']): Date | null => {
            if (typeof value === 'string') {
                const parsedValue = parseValue(value);

                if (!parsedValue) {
                    return null;
                }

                if (isSingleSelection()) {
                    return parsedValue as Date | null;
                }

                if (Array.isArray(parsedValue)) {
                    return (parsedValue[0] ?? null) as Date | null;
                }

                return null;
            }

            if (Array.isArray(value)) {
                return (value[0] ?? null) as Date | null;
            }

            return (value ?? null) as Date | null;
        };

        const parseDateTime = (text: string) => {
            let date;
            const parts = text.match(/(?:(.+?) )?(\d{2}:\d{2}(?::\d{2})?)(?: (am|pm))?/);

            if (props.timeOnly) {
                date = new Date();

                if (parts) {
                    populateTime(date, parts[2], parts[3]);
                }
            } else {
                const dateFormat = datePattern;

                if (props.showTime) {
                    if (parts) {
                        date = parseDate(parts[1], dateFormat) as Date;
                        populateTime(date, parts[2], parts[3]);
                    }
                } else {
                    date = parseDate(text, dateFormat);
                }
            }

            return date;
        };

        const populateTime = (value: Date, timeString: string, ampm: string) => {
            if (props.hourFormat == '12' && !ampm) {
                throw new Error('Invalid Time');
            }

            setPM(ampm === primereact?.config?.locale?.pm || ampm === primereact?.config?.locale?.pm.toLowerCase());
            const time = parseTime(timeString);

            value.setHours(time.hour);
            value.setMinutes(time.minute);

            if (time.second !== null) {
                value.setSeconds(time.second);
            }
        };

        const parseTime = (value: string) => {
            const tokens = value.split(':');
            const validTokenLength = props.showSeconds ? 3 : 2;
            const regex = /^[0-9][0-9]$/;

            if (tokens.length !== validTokenLength || !tokens[0].match(regex) || !tokens[1].match(regex) || (props.showSeconds && !tokens[2].match(regex))) {
                throw 'Invalid time';
            }

            let h = parseInt(tokens[0]);
            const m = parseInt(tokens[1]);
            const s = props.showSeconds ? parseInt(tokens[2]) : null;

            if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || (props.hourFormat == '12' && h > 12) || (props.showSeconds && (s === null || isNaN(s) || s > 59))) {
                throw 'Invalid time';
            }

            if (props.hourFormat == '12' && h !== 12 && pm) {
                h += 12;
            } else if (props.hourFormat == '12' && h == 12 && !pm) {
                h = 0;
            }

            return { hour: h, minute: m, second: s };
        };

        const parseDate = (value: string | object, format: string) => {
            if (format == null || value == null) {
                throw 'Invalid arguments';
            }

            value = typeof value === 'object' ? value.toString() : value + '';

            if (value === '') {
                return null;
            }

            let iFormat: number;
            let dim;
            let extra;
            let iValue = 0;
            const shortYearCutoff = typeof props.shortYearCutoff !== 'string' ? props.shortYearCutoff : (new Date().getFullYear() % 100) + parseInt(props.shortYearCutoff, 10);
            let year = -1;
            let month = -1;
            let day = -1;

            let doy = -1;
            let literal = false;
            let date;

            const lookAhead = (match: string) => {
                const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

                if (matches) {
                    iFormat++;
                }

                return matches;
            };

            const getNumber = (match: string) => {
                const isDoubled = lookAhead(match),
                    size = match === '@' ? 14 : match === '!' ? 20 : match === 'y' && isDoubled ? 4 : match === 'o' ? 3 : 2,
                    minSize = match === 'y' ? size : 1,
                    digits = new RegExp('^\\d{' + minSize + ',' + size + '}'),
                    num = value.substring(iValue).match(digits);

                if (!num) {
                    throw 'Missing number at position ' + iValue;
                }

                iValue += num[0].length;

                return parseInt(num[0], 10);
            };

            const getName = (match: string, shortNames: string[], longNames: string[]) => {
                let index = -1;
                const arr = lookAhead(match) ? longNames : shortNames;
                const names: [number, string][] = [];

                for (let i = 0; i < arr.length; i++) {
                    names.push([i, arr[i]]);
                }

                names.sort((a, b) => {
                    return b[1].length - a[1].length;
                });

                for (let i = 0; i < names.length; i++) {
                    const name = names[i][1];

                    if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                        index = names[i][0];
                        iValue += name.length;
                        break;
                    }
                }

                if (index !== -1) {
                    return index + 1;
                } else {
                    throw 'Unknown name at position ' + iValue;
                }
            };

            const checkLiteral = () => {
                if (value.charAt(iValue) !== format.charAt(iFormat)) {
                    throw 'Unexpected literal at position ' + iValue;
                }

                iValue++;
            };

            if (currentView === 'month') {
                day = 1;
            }

            if (currentView === 'year') {
                day = 1;
                month = 1;
            }

            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        checkLiteral();
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                        case 'd':
                            day = getNumber('d');
                            break;
                        case 'D':
                            getName('D', primereact?.config?.locale?.dayNamesShort, primereact?.config?.locale?.dayNames);
                            break;
                        case 'o':
                            doy = getNumber('o');
                            break;
                        case 'm':
                            month = getNumber('m');
                            break;
                        case 'M':
                            month = getName('M', primereact?.config?.locale?.monthNamesShort, primereact?.config?.locale?.monthNames);
                            break;
                        case 'y':
                            year = getNumber('y');
                            break;
                        case '@':
                            date = new Date(getNumber('@'));
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case '!':
                            date = new Date((getNumber('!') - TICKS_TO_1970) / 10000);
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "'":
                            if (lookAhead("'")) {
                                checkLiteral();
                            } else {
                                literal = true;
                            }

                            break;
                        default:
                            checkLiteral();
                    }
                }
            }

            if (iValue < value.length) {
                extra = value.substr(iValue);

                if (!/^\s+/.test(extra)) {
                    throw 'Extra/unparsed characters found in date: ' + extra;
                }
            }

            if (year === -1) {
                year = new Date().getFullYear();
            } else if (year < 100) {
                year += new Date().getFullYear() - (new Date().getFullYear() % 100) + (year <= (shortYearCutoff as number) ? 0 : -100);
            }

            if (doy > -1) {
                month = 1;
                day = doy;

                do {
                    dim = getDaysCountInMonth(month - 1, year);

                    if (day <= dim) {
                        break;
                    }

                    month++;
                    day -= dim;
                    // eslint-disable-next-line
                } while (true);
            }

            date = daylightSavingAdjust(new Date(year, month - 1, day));

            if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
                throw 'Invalid date'; // E.g. 31/02/00
            }

            return date;
        };

        const getWeekNumber = (date: Date) => {
            const checkDate = new Date(date.getTime());

            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            const time = checkDate.getTime();

            checkDate.setMonth(0);
            checkDate.setDate(1);

            return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
        };

        const onDateCellKeydown = (event: React.KeyboardEvent<HTMLSpanElement>, date: useDatePickerDateMeta, groupIndex: number) => {
            event.preventDefault();
            const cellContent = event.currentTarget;
            const cell = cellContent.parentElement as HTMLTableCellElement;

            const cellIndex = getIndex(cell);

            switch (event.code) {
                case 'ArrowDown': {
                    cellContent.tabIndex = -1;

                    const nextRow = cell.parentElement?.nextElementSibling;

                    if (nextRow) {
                        const tableRowIndex = getIndex(cell.parentElement);
                        const tableRows = Array.from(cell.parentElement?.parentElement?.children ?? []);
                        const nextTableRows = tableRows.slice(tableRowIndex + 1);

                        const hasNextFocusableDate = nextTableRows.find((el) => {
                            const focusCell = el.children[cellIndex].children[0];

                            return !getAttribute(focusCell, 'data-p-disabled');
                        });

                        if (hasNextFocusableDate) {
                            const focusCell = hasNextFocusableDate.children[cellIndex].children[0] as HTMLElement;

                            focusCell.tabIndex = 0;
                            focusCell.focus();
                        } else {
                            setNavigationState({ backward: false });
                            navForward(event);
                        }
                    } else {
                        setNavigationState({ backward: false });
                        navForward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowUp': {
                    cellContent.tabIndex = -1;

                    if (event.altKey) {
                        setOverlayVisibleState(true);
                    } else {
                        const prevRow = cell.parentElement?.previousElementSibling;

                        if (prevRow) {
                            const tableRowIndex = getIndex(cell.parentElement);
                            const tableRows = Array.from(cell.parentElement?.parentElement?.children ?? []);
                            const prevTableRows = tableRows.slice(0, tableRowIndex).reverse();

                            const hasNextFocusableDate = prevTableRows.find((el) => {
                                const focusCell = el.children[cellIndex].children[0];

                                return !getAttribute(focusCell, 'data-p-disabled');
                            });

                            if (hasNextFocusableDate) {
                                const focusCell = hasNextFocusableDate.children[cellIndex].children[0] as HTMLElement;

                                focusCell.tabIndex = 0;
                                focusCell.focus();
                            } else {
                                setNavigationState({ backward: true });
                                navBackward(event);
                            }
                        } else {
                            setNavigationState({ backward: true });
                            navBackward(event);
                        }
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowLeft': {
                    cellContent.tabIndex = -1;
                    const prevCell = cell.previousElementSibling;

                    if (prevCell) {
                        const cells = Array.from(cell.parentElement?.children ?? []);
                        const prevCells = cells.slice(0, cellIndex).reverse();

                        const hasPrevFocusableDate = prevCells.find((el) => {
                            const focusCell = el.children[0];

                            return getAttribute(focusCell, 'data-pc-section') !== 'weeklabelcontainer';
                        });

                        if (hasPrevFocusableDate) {
                            const focusCell = hasPrevFocusableDate.children[0] as HTMLElement;

                            focusCell.tabIndex = 0;
                            focusCell.focus();
                        } else {
                            navigateToMonth(event, true, groupIndex);
                        }
                    } else {
                        navigateToMonth(event, true, groupIndex);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    cellContent.tabIndex = -1;
                    const nextCell = cell.nextElementSibling;

                    if (nextCell) {
                        const cells = Array.from(cell.parentElement?.children ?? []);
                        const nextCells = cells.slice(cellIndex + 1);
                        const hasNextFocusableDate = nextCells.find((el) => {
                            const focusCell = el.children[0];

                            return !getAttribute(focusCell, 'data-p-disabled');
                        });

                        if (hasNextFocusableDate) {
                            const focusCell = hasNextFocusableDate.children[0] as HTMLElement;

                            focusCell.tabIndex = 0;
                            focusCell.focus();
                        } else {
                            navigateToMonth(event, false, groupIndex);
                        }
                    } else {
                        navigateToMonth(event, false, groupIndex);
                    }

                    event.preventDefault();
                    break;
                }

                case 'Enter':
                case 'NumpadEnter':

                case 'Space': {
                    onDateSelect(event, date);
                    event.preventDefault();
                    break;
                }

                case 'Escape': {
                    setOverlayVisibleState(false);
                    event.preventDefault();
                    break;
                }

                case 'Tab': {
                    trapFocus(event);

                    break;
                }

                case 'Home': {
                    cellContent.tabIndex = -1;
                    const currentRow = cell.parentElement as HTMLTableRowElement;
                    const focusCell = currentRow.children[0].children[0] as HTMLElement;

                    if (getAttribute(focusCell, 'data-p-disabled')) {
                        navigateToMonth(event, true, groupIndex);
                    } else {
                        focusCell.tabIndex = 0;
                        focusCell.focus();
                    }

                    event.preventDefault();
                    break;
                }

                case 'End': {
                    cellContent.tabIndex = -1;
                    const currentRow = cell.parentElement as HTMLTableRowElement;
                    const focusCell = currentRow.children[currentRow.children.length - 1].children[0] as HTMLElement;

                    if (getAttribute(focusCell, 'data-p-disabled')) {
                        navigateToMonth(event, false, groupIndex);
                    } else {
                        focusCell.tabIndex = 0;
                        focusCell.focus();
                    }

                    event.preventDefault();
                    break;
                }

                case 'PageUp': {
                    cellContent.tabIndex = -1;

                    if (event.shiftKey) {
                        setNavigationState({ backward: true });
                        navBackward(event);
                    } else {
                        navigateToMonth(event, true, groupIndex);
                    }

                    event.preventDefault();
                    break;
                }

                case 'PageDown': {
                    cellContent.tabIndex = -1;

                    if (event.shiftKey) {
                        setNavigationState({ backward: false });
                        navForward(event);
                    } else {
                        navigateToMonth(event, false, groupIndex);
                    }

                    event.preventDefault();
                    break;
                }

                default:
                    //no op
                    break;
            }
        };

        const navigateToMonth = (event: React.KeyboardEvent<HTMLSpanElement>, prev: boolean, groupIndex: number = 0) => {
            if (prev) {
                if (props.numberOfMonths === 1 || groupIndex === 0) {
                    setNavigationState({ backward: true });
                    navBackward(event);
                } else {
                    const prevMonthContainer = overlayRef.current?.children[groupIndex - 1] as HTMLElement;
                    const cells = find(prevMonthContainer, 'table td span:not([data-p-disabled="true"])');
                    const focusCell = cells[cells.length - 1] as HTMLElement;

                    focusCell.tabIndex = 0;
                    focusCell.focus();
                }
            } else {
                if (props.numberOfMonths === 1 || groupIndex === (props.numberOfMonths as number) - 1) {
                    setNavigationState({ backward: false });
                    navForward(event);
                } else {
                    const nextMonthContainer = overlayRef.current?.children[groupIndex + 1] as HTMLElement;
                    const focusCell = findSingle(nextMonthContainer, 'table td span:not([data-p-disabled="true"])') as HTMLElement;

                    focusCell.tabIndex = 0;
                    focusCell.focus();
                }
            }
        };

        const onMonthCellKeydown = (event: React.KeyboardEvent<HTMLSpanElement>, index: number) => {
            const cell = event.currentTarget;

            switch (event.code) {
                case 'ArrowUp':

                case 'ArrowDown': {
                    cell.tabIndex = -1;
                    const parentCell = cell.parentElement as HTMLTableCellElement;
                    const currentRow = parentCell?.parentElement as HTMLTableRowElement;
                    const targetRow = event.code === 'ArrowUp' ? (currentRow?.previousElementSibling as HTMLTableRowElement) : (currentRow?.nextElementSibling as HTMLTableRowElement);
                    const columnIndex = Array.from(parentCell?.parentElement?.children ?? []).indexOf(parentCell);
                    const targetCellContainer = targetRow?.children[columnIndex] as HTMLTableCellElement;
                    const targetElement = targetCellContainer?.children[0] as HTMLElement;

                    if (targetElement) {
                        targetElement.tabIndex = 0;
                        targetElement.focus();
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowLeft': {
                    cell.tabIndex = -1;
                    const prevCell = cell.parentElement?.previousElementSibling?.children[0];

                    if (prevCell) {
                        (prevCell as HTMLElement).tabIndex = 0;
                        (prevCell as HTMLElement).focus();
                    } else {
                        setNavigationState({ backward: true });
                        navBackward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    cell.tabIndex = -1;
                    const nextCell = cell.parentElement?.nextElementSibling?.children[0];

                    if (nextCell) {
                        (nextCell as HTMLElement).tabIndex = 0;
                        (nextCell as HTMLElement).focus();
                    } else {
                        setNavigationState({ backward: false });
                        navForward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'Home':
                case 'End':
                    break;

                case 'PageUp': {
                    if (event.shiftKey) return;

                    setNavigationState({ backward: true });
                    navBackward(event);

                    break;
                }

                case 'PageDown': {
                    if (event.shiftKey) return;

                    setNavigationState({ backward: false });
                    navForward(event);

                    break;
                }

                case 'Enter':
                case 'NumpadEnter':

                case 'Space': {
                    onMonthSelect(event, index);
                    event.preventDefault();
                    break;
                }

                case 'Escape': {
                    setOverlayVisibleState(false);
                    event.preventDefault();
                    break;
                }

                case 'Tab': {
                    trapFocus(event);
                    break;
                }

                default:
                    //no op
                    break;
            }
        };

        const onYearCellKeydown = (event: React.KeyboardEvent<HTMLSpanElement>, year: { value: number }) => {
            const cell = event.currentTarget;

            switch (event.code) {
                case 'ArrowUp':

                case 'ArrowDown': {
                    cell.tabIndex = -1;
                    const parentCell = cell.parentElement as HTMLTableCellElement;
                    const currentRow = parentCell?.parentElement as HTMLTableRowElement;
                    const targetRow = event.code === 'ArrowUp' ? (currentRow?.previousElementSibling as HTMLTableRowElement) : (currentRow?.nextElementSibling as HTMLTableRowElement);
                    const columnIndex = Array.from(parentCell?.parentElement?.children ?? []).indexOf(parentCell);
                    const targetCellContainer = targetRow?.children[columnIndex] as HTMLTableCellElement;
                    const targetElement = targetCellContainer?.children[0] as HTMLElement;

                    if (targetElement) {
                        targetElement.tabIndex = 0;
                        targetElement.focus();
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowLeft': {
                    cell.tabIndex = -1;
                    const prevCell = cell.parentElement?.previousElementSibling?.children[0];

                    if (prevCell) {
                        (prevCell as HTMLElement).tabIndex = 0;
                        (prevCell as HTMLElement).focus();
                    } else {
                        setNavigationState({ backward: true });
                        navBackward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    cell.tabIndex = -1;
                    const nextCell = cell.parentElement?.nextElementSibling?.children[0];

                    if (nextCell) {
                        (nextCell as HTMLElement).tabIndex = 0;
                        (nextCell as HTMLElement).focus();
                    } else {
                        setNavigationState({ backward: false });
                        navForward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'Home':
                case 'End':
                    break;

                case 'PageUp': {
                    if (event.shiftKey) return;

                    setNavigationState({ backward: true });
                    navBackward(event);

                    break;
                }

                case 'PageDown': {
                    if (event.shiftKey) return;

                    setNavigationState({ backward: false });
                    navForward(event);

                    break;
                }

                case 'Enter':
                case 'NumpadEnter':

                case 'Space': {
                    onYearSelect(event, year);
                    event.preventDefault();
                    break;
                }

                case 'Escape': {
                    setOverlayVisibleState(false);
                    event.preventDefault();
                    break;
                }

                case 'Tab': {
                    trapFocus(event);
                    break;
                }

                default:
                    //no op
                    break;
            }
        };

        const updateFocus = () => {
            let cell: Element | null = null;

            if (navigationState) {
                if (navigationState.button) {
                    initFocusableCell();

                    if (navigationState.backward) {
                        if (prevButtonRef.current) {
                            prevButtonRef.current?.elementRef.current.focus();
                        }
                    } else {
                        if (nextButtonRef.current) {
                            nextButtonRef.current?.elementRef.current.focus();
                        }
                    }
                } else {
                    if (!overlayRef.current) {
                        return;
                    }

                    if (navigationState.backward) {
                        let cells;

                        if (currentView === 'month') {
                            cells = find(overlayRef.current, '[data-pc-name="datepickertable"] [data-pc-section="month"]:not([data-p-disabled="true"])');
                        } else if (currentView === 'year') {
                            cells = find(overlayRef.current, '[data-pc-name="datepickertable"] [data-pc-section="year"]:not([data-p-disabled="true"])');
                        } else {
                            cells = find(overlayRef.current, 'table td span:not([data-pc-section="weeklabelcontainer"]):not([data-p-disabled="true"])');
                        }

                        if (cells && cells.length > 0) {
                            cell = cells[cells.length - 1];
                        }
                    } else {
                        if (currentView === 'month') {
                            cell = findSingle(overlayRef.current, '[data-pc-name="datepickertable"] [data-pc-section="month"]:not([data-p-disabled="true"])');
                        } else if (currentView === 'year') {
                            cell = findSingle(overlayRef.current, '[data-pc-name="datepickertable"] [data-pc-section="year"]:not([data-p-disabled="true"])');
                        } else {
                            cell = findSingle(overlayRef.current, 'table td span:not([data-pc-section="weeklabelcontainer"]):not([data-p-disabled="true"])');
                        }
                    }

                    if (cell) {
                        (cell as HTMLElement).tabIndex = 0;
                        (cell as HTMLElement).focus();
                    }
                }

                setNavigationState(null);
            } else {
                initFocusableCell();
            }
        };

        const initFocusableCell = () => {
            let cell;

            if (!overlayRef.current) {
                return;
            }

            if (currentView === 'month') {
                const cells = find(overlayRef.current, '[data-pc-name="datepickertable"] [data-pc-section="month"]');
                const selectedCell = findSingle(overlayRef.current, '[data-pc-name="datepickertable"] [data-pc-section="month"][data-p-selected="true"]');

                cells.forEach((cell) => ((cell as HTMLElement).tabIndex = -1));
                cell = selectedCell || cells[0];
            } else if (currentView === 'year') {
                const cells = find(overlayRef.current, '[data-pc-name="datepickertable"] [data-pc-section="year"]');
                const selectedCell = findSingle(overlayRef.current, '[data-pc-name="datepickertable"] [data-pc-section="year"][data-p-selected="true"]');

                cells.forEach((cell) => ((cell as HTMLElement).tabIndex = -1));
                cell = selectedCell || cells[0];
            } else {
                cell = findSingle(overlayRef.current, '.p-datepicker-calendar span[data-p-selected="true"]');

                if (!cell) {
                    const todayCell = findSingle(overlayRef.current, 'td[data-p-today="true"] span:not([data-pc-section="weeklabelcontainer"]):not([data-p-disabled="true"])');

                    if (todayCell) cell = todayCell;
                    else cell = findSingle(overlayRef.current, '.p-datepicker-calendar td span:not([data-pc-section="weeklabelcontainer"]):not([data-p-disabled="true"])');
                }
            }

            if (cell) {
                (cell as HTMLElement).tabIndex = 0;
            }
        };

        const trapFocus = (event: React.KeyboardEvent) => {
            event.preventDefault();

            if (!overlayRef.current) {
                return;
            }

            const focusableElements = getFocusableElements(overlayRef.current) as HTMLElement[];

            if (focusableElements && focusableElements.length > 0) {
                if (!document.activeElement) {
                    focusableElements[0].focus();
                } else {
                    const focusedIndex = focusableElements.indexOf(document.activeElement as HTMLElement);

                    if (event.shiftKey) {
                        if (focusedIndex === -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();
                        else focusableElements[focusedIndex - 1].focus();
                    } else {
                        if (focusedIndex === -1) {
                            if (props.timeOnly) {
                                focusableElements[0].focus();
                            } else {
                                let elementIndex = focusableElements.findIndex((el) => el.tagName === 'SPAN');

                                if (elementIndex === -1) {
                                    elementIndex = focusableElements.findIndex((el) => el.tagName === 'BUTTON');
                                }

                                if (elementIndex !== -1) {
                                    focusableElements[elementIndex].focus();
                                } else {
                                    focusableElements[0].focus();
                                }
                            }
                        } else if (focusedIndex === focusableElements.length - 1) {
                            focusableElements[0].focus();
                        } else {
                            focusableElements[focusedIndex + 1].focus();
                        }
                    }
                }
            }
        };

        const getMonthName = (index?: number) => {
            return primereact?.config?.locale?.monthNames[index ?? currentMonth];
        };

        const getYear = () => {
            return currentYear;
        };

        const onClearClick = () => {
            updateModel(null);
            setShowClearIcon(false);
            setOverlayVisibleState(false);
        };

        const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
            try {
                selectionStart.current = event.target.selectionStart;
                selectionEnd.current = event.target.selectionEnd;

                setShowClearIcon(!isEmpty(event.target.value));
                const value = parseValue(event.target.value) as Date;

                if (isValidSelection(value)) {
                    typeUpdate.current = true;
                    updateModel(props.updateModelType === 'string' ? formatValue(value) : value);
                    updateCurrentMetaData();
                }
            } catch {
                /* NoOp */
            }

            if (props.onInput) {
                props.onInput(event);
            }
        };

        const onInputClick = () => {
            if (props.showOnFocus && isEnabled() && !overlayVisibleState) {
                setOverlayVisibleState(true);
            }
        };

        const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.code === 'ArrowDown' && overlayVisibleState) {
                trapFocus(event);
            } else if (event.code === 'ArrowDown' && !overlayVisibleState) {
                setOverlayVisibleState(true);
            } else if (event.code === 'Escape') {
                if (overlayVisibleState) {
                    setOverlayVisibleState(false);
                    event.preventDefault();
                    event.stopPropagation();
                }
            } else if (event.code === 'Tab') {
                if (overlayVisibleState && overlayRef.current) {
                    (getFocusableElements(overlayRef.current) as HTMLElement[]).forEach((el) => (el.tabIndex = -1));
                }

                if (overlayVisibleState) {
                    setOverlayVisibleState(false);
                }
            } else if (event.code === 'Enter') {
                if (props.manualInput && (event.target as HTMLInputElement).value !== null && (event.target as HTMLInputElement).value?.trim() !== '') {
                    try {
                        const value = parseValue((event.target as HTMLInputElement).value) as Date | Date[];

                        if (isValidSelection(value)) {
                            setOverlayVisibleState(false);
                        }
                    } catch {
                        /* NoOp */
                    }
                }

                if (props.onKeyDown) {
                    props.onKeyDown(event);
                }
            }
        };

        const onInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            if (props.showonInputFocus && isEnabled()) {
                setOverlayVisibleState(true);
            }

            if (props.onFocus) {
                props.onFocus(event);
            }
        };

        const onInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            if (props.onBlur) {
                props.onBlur({
                    originalEvent: event,
                    value: event.target.value
                });
            }

            if (props.onValueChange) {
                event.target.value = formatValue(rawValueState);
            }

            if (showClearIcon) {
                setShowClearIcon(!isEmpty(event.target.value));
            }
        };

        const onOverlayEnter = () => {
            updateFocus();

            if (portalRef?.current?.containerRef?.current?.elementRef?.current) {
                const element = portalRef.current.containerRef.current.elementRef.current;

                if (elementRef?.current) {
                    element.style.width = getOuterWidth(element) + 'px';
                    element.style.minWidth = getOuterWidth(elementRef.current) + 'px';
                }
            }
        };

        const changeVisibleState = (isVisible: boolean) => {
            setOverlayVisibleState(isVisible);
        };

        const viewDate = React.useMemo<Date>(() => {
            let propValue = rawValueState;

            if (propValue && Array.isArray(propValue)) {
                if (isRangeSelection()) {
                    if (propValue.length === 0) {
                        propValue = null;
                    } else if (propValue.length === 1) {
                        propValue = propValue[0];
                    } else {
                        const start = parseValueForComparison(propValue[0]) as Date;
                        const end = parseValueForComparison(propValue[1]) as Date | null;
                        const lastVisibleMonth = new Date(start.getFullYear(), start.getMonth() + (props.numberOfMonths ?? 1), 1);

                        if (!end || end < lastVisibleMonth) {
                            propValue = propValue[0];
                        } else {
                            propValue = new Date(end.getFullYear(), end.getMonth() - (props.numberOfMonths ?? 1) + 1, 1);
                        }
                    }
                } else if (isMultipleSelection()) {
                    propValue = propValue[propValue.length - 1];
                }
            }

            if (propValue && typeof propValue !== 'string') {
                return propValue as Date;
            } else {
                const today = new Date();

                if (props.maxDate && props.maxDate < today) {
                    return props.maxDate;
                }

                if (props.minDate && props.minDate > today) {
                    return props.minDate;
                }

                return today;
            }
        }, [rawValueState, props.numberOfMonths, props.maxDate, props.minDate]);

        const inputFieldValue = React.useMemo(() => {
            return formatValue(rawValueState);
        }, [rawValueState]);

        const months = React.useMemo(() => {
            const monthsArray = [];

            for (let i = 0; i < (props.numberOfMonths ?? 1); i++) {
                let month = (currentMonth ?? 0) + i;
                let year = currentYear ?? 0;

                if (month > 11) {
                    month = (month % 11) - 1;
                    year = year + 1;
                }

                const dates = [];
                const firstDay = getFirstDayOfMonthIndex(month, year);
                const daysLength = getDaysCountInMonth(month, year);
                const prevMonthDaysLength = getDaysCountInPrevMonth(month, year);
                let dayNo = 1;
                const today = new Date();
                const weekNumbers = [];
                const monthRows = Math.ceil((daysLength + firstDay) / 7);

                for (let i = 0; i < monthRows; i++) {
                    const week = [];

                    if (i == 0) {
                        for (let j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
                            const prev = getPreviousMonthAndYear(month, year);

                            week.push({
                                day: j,
                                month: prev.month,
                                year: prev.year,
                                otherMonth: true,
                                today: isToday(today, j, prev.month, prev.year),
                                selectable: isSelectable(j, prev.month, prev.year, true)
                            });
                        }

                        const remainingDaysLength = 7 - week.length;

                        for (let j = 0; j < remainingDaysLength; j++) {
                            week.push({
                                day: dayNo,
                                month: month,
                                year: year,
                                otherMonth: false,
                                today: isToday(today, dayNo, month, year),
                                selectable: isSelectable(dayNo, month, year, false)
                            });
                            dayNo++;
                        }
                    } else {
                        for (let j = 0; j < 7; j++) {
                            if (dayNo > daysLength) {
                                const next = getNextMonthAndYear(month, year);

                                week.push({
                                    day: dayNo - daysLength,
                                    month: next.month,
                                    year: next.year,
                                    otherMonth: true,
                                    today: isToday(today, dayNo - daysLength, next.month, next.year),
                                    selectable: isSelectable(dayNo - daysLength, next.month, next.year, true)
                                });
                            } else {
                                week.push({
                                    day: dayNo,
                                    month: month,
                                    year: year,
                                    otherMonth: false,
                                    today: isToday(today, dayNo, month, year),
                                    selectable: isSelectable(dayNo, month, year, false)
                                });
                            }

                            dayNo++;
                        }
                    }

                    weekNumbers.push(getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));

                    dates.push(week);
                }

                monthsArray.push({
                    month: month,
                    year: year,
                    dates: dates,
                    weekNumbers: weekNumbers
                });
            }

            return monthsArray;
        }, [currentMonth, currentYear, props.numberOfMonths, props.minDate, props.maxDate, props.disabledDates, props.disabledDays, props.selectOtherMonths]);

        const getIndexedMonth = React.useCallback(
            (index: number = 0) => {
                return months[index];
            },
            [months]
        );

        const monthPickerValues = React.useMemo(() => {
            const monthPickerValuesArray = [];

            const isSelectableMonth = (baseMonth: number) => {
                if (props.minDate) {
                    const minMonth = props.minDate.getMonth();
                    const minYear = props.minDate.getFullYear();

                    if ((currentYear as number) < minYear || (currentYear === minYear && baseMonth < minMonth)) {
                        return false;
                    }
                }

                if (props.maxDate) {
                    const maxMonth = props.maxDate.getMonth();
                    const maxYear = props.maxDate.getFullYear();

                    if ((currentYear as number) > maxYear || (currentYear === maxYear && baseMonth > maxMonth)) {
                        return false;
                    }
                }

                return true;
            };

            for (let i = 0; i <= 11; i++) {
                monthPickerValuesArray.push({
                    value: primereact?.config?.locale?.monthNamesShort[i],
                    selectable: isSelectableMonth(i)
                });
            }

            return monthPickerValuesArray;
        }, [currentYear, props.minDate, props.maxDate]);

        const yearPickerValues = React.useMemo(() => {
            const yearPickerValuesArray = [];
            const base = (currentYear as number) - ((currentYear as number) % 10);

            const isSelectableYear = (baseYear: number) => {
                if (props.minDate) {
                    if (props.minDate.getFullYear() > baseYear) return false;
                }

                if (props.maxDate) {
                    if (props.maxDate.getFullYear() < baseYear) return false;
                }

                return true;
            };

            for (let i = 0; i < 10; i++) {
                yearPickerValuesArray.push({ value: base + i, selectable: isSelectableYear(base + i) });
            }

            return yearPickerValuesArray;
        }, [currentYear, props.minDate, props.maxDate]);

        const weekDays = React.useMemo(() => {
            const weekDays = [];

            let dayIndex = primereact?.config?.locale?.firstDayOfWeek;

            for (let i = 0; i < 7; i++) {
                weekDays.push(primereact?.config?.locale?.dayNamesMin[dayIndex]);
                dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
            }

            return weekDays;
        }, []);

        const datePattern = React.useMemo(() => {
            return props.dateFormat || primereact?.config?.locale?.dateFormat;
        }, [props.dateFormat, primereact?.config?.locale]);

        const formattedCurrentHour = React.useMemo(() => {
            if (currentHour == 0 && props.hourFormat == '12') {
                return currentHour + 12;
            }

            return currentHour < 10 ? '0' + currentHour : currentHour;
        }, [currentHour, props.hourFormat]);

        const formattedCurrentMinute = React.useMemo(() => {
            return currentMinute < 10 ? '0' + currentMinute : currentMinute;
        }, [currentMinute]);

        const formattedCurrentSecond = React.useMemo(() => {
            return currentSecond < 10 ? '0' + currentSecond : currentSecond;
        }, [currentSecond]);

        const todayLabel = React.useMemo(() => {
            return primereact?.config?.locale?.today;
        }, [primereact?.config?.locale]);

        const clearLabel = React.useMemo(() => {
            return primereact?.config?.locale?.clear;
        }, [primereact?.config?.locale]);

        const weekHeaderLabel = React.useMemo(() => {
            return primereact?.config?.locale?.weekHeader;
        }, [primereact?.config?.locale]);

        const switchViewButtonDisabled = React.useMemo(() => {
            return (props.numberOfMonths as number) > 1 || !!props.disabled;
        }, [props.numberOfMonths, props.disabled]);

        const ampmLabel = React.useMemo(() => {
            if (pm) {
                return primereact?.config?.locale?.pm;
            }

            return primereact?.config?.locale?.am;
        }, [pm, primereact?.config?.locale]);

        // effects
        useMountEffect(() => {
            setTimeout(() => {
                if (!props.disabled) {
                    initFocusableCell();
                }
            }, 300);
        });

        React.useEffect(() => {
            if (inputRef.current?.elementRef.current && selectionStart.current != null && selectionEnd.current != null) {
                inputRef.current.elementRef.current.selectionStart = selectionStart.current;
                inputRef.current.elementRef.current.selectionEnd = selectionEnd.current;
                selectionStart.current = null;
                selectionEnd.current = null;
            }
        }, [inputFieldValue]);

        React.useEffect(() => {
            updateFocus();
        }, [currentView, months]);

        React.useEffect(() => {
            if (props.value === undefined) return;

            updateCurrentMetaData();
            const initialValue = (typeof props.value === 'string' ? parseValue(props.value) : props.value) as useDatePickerProps['value'];

            setRawValueState(initialValue);

            if (!typeUpdate.current && inputRef.current && inputRef.current.elementRef.current) {
                inputRef.current.elementRef.current.value = formatValue(initialValue);
            }

            typeUpdate.current = false;
        }, [props.value]);

        React.useEffect(() => {
            if (props.value !== undefined) return;

            updateCurrentMetaData();
            const initialValue = (typeof props.defaultValue === 'string' ? parseValue(props.defaultValue) : props.defaultValue) as useDatePickerProps['value'];

            setRawValueState(initialValue);

            if (!typeUpdate.current && inputRef.current && inputRef.current.elementRef.current) {
                inputRef.current.elementRef.current.value = formatValue(initialValue);
            }

            typeUpdate.current = false;
        }, [props.defaultValue]);

        React.useEffect(() => {
            if (isEmpty(rawValueState)) {
                setShowClearIcon(false);
            }
        }, [rawValueState]);

        React.useEffect(() => {
            if (props.showTime && overlayVisibleState) {
                updateModelTime();
            }
        }, [pm]);

        React.useEffect(() => {
            if (!overlayVisibleState && hoveredDateState) {
                setHoveredDateState(null);
            }
        }, [overlayVisibleState]);

        return {
            state,
            inputRef,
            nextButtonRef,
            prevButtonRef,
            portalRef,
            overlayRef,
            //methods
            inputFieldValue,
            weekHeaderLabel,
            todayLabel,
            clearLabel,
            weekDays,
            months,
            getIndexedMonth,
            getYear,
            getMonthName,
            onPrevButtonClick,
            onNextButtonClick,
            monthPickerValues,
            yearPickerValues,
            switchToMonthView,
            switchToYearView,
            onDateSelect,
            onMonthSelect,
            onYearSelect,
            onDateCellKeydown,
            onMonthCellKeydown,
            onYearCellKeydown,
            onButtonClick,
            switchViewButtonDisabled,
            formattedCurrentHour,
            formattedCurrentMinute,
            formattedCurrentSecond,
            ampmLabel,
            onTimePickerElementMouseDown,
            onTimePickerElementMouseUp,
            onTimePickerElementMouseLeave,
            onContainerButtonKeydown,
            onTimePickerElementKeyDown,
            onTimePickerElementKeyUp,
            toggleAMPM,
            onTodayButtonClick,
            onClearButtonClick,
            onClearClick,
            onInput,
            onInputClick,
            onInputKeyDown,
            onInputFocus,
            onInputBlur,
            onOverlayEnter,
            changeVisibleState,
            // for styling
            isRangeSelection,
            isSelected,
            parseValue,
            isDateEquals,
            isMonthSelected,
            isYearSelected,
            isInHoverRange,
            onDateCellMouseEnter
        };
    }
});

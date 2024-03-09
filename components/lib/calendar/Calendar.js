import * as React from 'react';
import PrimeReact, { PrimeReactContext, localeOption, localeOptions } from '../api/Api';
import { Button } from '../button/Button';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect, useOverlayListener, usePrevious, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { CalendarIcon } from '../icons/calendar';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronLeftIcon } from '../icons/chevronleft';
import { ChevronRightIcon } from '../icons/chevronright';
import { ChevronUpIcon } from '../icons/chevronup';
import { InputText } from '../inputtext/InputText';
import { OverlayService } from '../overlayservice/OverlayService';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames, mask } from '../utils/Utils';
import { CalendarBase } from './CalendarBase';
import { CalendarPanel } from './CalendarPanel';

export const Calendar = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = CalendarBase.getProps(inProps, context);
        const [focusedState, setFocusedState] = React.useState(false);
        const [overlayVisibleState, setOverlayVisibleState] = React.useState(false);
        const [viewDateState, setViewDateState] = React.useState(null);
        const [idState, setIdState] = React.useState(props.id);

        const metaData = {
            props,
            state: {
                focused: focusedState,
                overlayVisible: overlayVisibleState,
                viewDate: viewDateState
            }
        };
        const { ptm, cx, isUnstyled } = CalendarBase.setMetaData(metaData);

        useHandleStyle(CalendarBase.css.styles, isUnstyled, { name: 'calendar' });
        const elementRef = React.useRef(null);
        const overlayRef = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);
        const navigation = React.useRef(null);
        const ignoreFocusFunctionality = React.useRef(false);
        const timePickerTimer = React.useRef(null);
        const viewStateChanged = React.useRef(false);
        const touchUIMask = React.useRef(null);
        const overlayEventListener = React.useRef(null);
        const touchUIMaskClickListener = React.useRef(null);
        const isOverlayClicked = React.useRef(false);
        const previousButton = React.useRef(false);
        const nextButton = React.useRef(false);
        const viewChangedWithKeyDown = React.useRef(false);
        const onChangeRef = React.useRef(null);
        const isClearClicked = React.useRef(false);

        const [currentView, setCurrentView] = React.useState('date');
        const [currentMonth, setCurrentMonth] = React.useState(null);
        const [currentYear, setCurrentYear] = React.useState(null);
        const [yearOptions, setYearOptions] = React.useState([]);

        const previousValue = usePrevious(props.value);
        const visible = props.inline || (props.onVisibleChange ? props.visible : overlayVisibleState);
        const attributeSelector = UniqueComponentId();
        const panelId = idState + '_panel';

        const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
            target: elementRef,
            overlay: overlayRef,
            listener: (event, { type, valid }) => {
                if (valid) {
                    type === 'outside' ? !isOverlayClicked.current && !isNavIconClicked(event.target) && hide('outside') : hide();
                }

                isOverlayClicked.current = false;
            },
            when: !(props.touchUI || props.inline) && visible
        });

        const getDateFormat = () => {
            return props.dateFormat || localeOption('dateFormat', props.locale);
        };

        const onInputFocus = (event) => {
            if (ignoreFocusFunctionality.current) {
                setFocusedState(true);
                ignoreFocusFunctionality.current = false;
            } else {
                if (props.showOnFocus && !visible) {
                    show();
                }

                setFocusedState(true);
                props.onFocus && props.onFocus(event);
            }
        };

        const onInputBlur = (event) => {
            !props.keepInvalid && updateInputfield(props.value);
            props.onBlur && props.onBlur(event);
            setFocusedState(false);
        };

        const onInputKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowDown': {
                    if (!overlayVisibleState) {
                        show();
                    } else {
                        focusToFirstCell();

                        event.preventDefault();
                    }

                    break;
                }

                case 'Escape': {
                    hide();
                    props.touchUI && disableModality();
                    break;
                }

                case 'Tab': {
                    if (overlayRef && overlayRef.current) {
                        DomHandler.getFocusableElements(overlayRef.current).forEach((el) => (el.tabIndex = '-1'));
                        hide();
                        props.touchUI && disableModality();
                    }

                    break;
                }

                default:
                    //no op
                    break;
            }
        };

        const onUserInput = (event) => {
            updateValueOnInput(event, event.target.value);
            props.onInput && props.onInput(event);
        };

        const updateValueOnInput = (event, rawValue, invalidCallback) => {
            try {
                const value = parseValueFromString(rawValue);

                if (isValidSelection(value)) {
                    updateModel(event, value);
                    updateViewDate(event, value.length ? value[0] : value);
                }
            } catch (err) {
                //invalid date
                if (invalidCallback) {
                    invalidCallback();
                } else {
                    const value = props.keepInvalid ? rawValue : null;

                    updateModel(event, value);
                }
            }
        };

        const reFocusInputField = () => {
            if (!props.inline && inputRef.current) {
                ignoreFocusFunctionality.current = true;
                DomHandler.focus(inputRef.current);
            }
        };

        const isValidSelection = (value) => {
            let isValid = true;

            if (isSingleSelection()) {
                if (!(isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false) && isSelectableTime(value))) {
                    isValid = false;
                }
            } else if (value.every((v) => isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false) && isSelectableTime(v))) {
                if (isRangeSelection()) {
                    isValid = value.length > 1 && value[1] > value[0] ? true : false;
                }
            }

            return isValid;
        };

        const onButtonClick = () => {
            visible ? hide() : show();
        };

        const onPrevButtonClick = (event) => {
            navigation.current = { backward: true, button: true };
            navBackward(event);
        };

        const onNextButtonClick = (event) => {
            navigation.current = { backward: false, button: true };
            navForward(event);
        };

        const onContainerButtonKeydown = (event) => {
            switch (event.code) {
                case 'Tab':
                    !props.inline && trapFocus(event);
                    break;

                case 'Escape':
                    hide(null, reFocusInputField);
                    event.preventDefault();

                    break;

                default:
                    //no op
                    break;
            }
        };

        const onPickerKeyDown = (event, type, direction) => {
            if (event.code === 'Enter' || event.code === 'Space') {
                onTimePickerElementMouseDown(event, type, direction);
                event.preventDefault();

                return;
            }

            onContainerButtonKeydown(event);
        };

        const onPickerKeyUp = (event) => {
            if (event.code === 'Enter' || event.code === 'Space') {
                onTimePickerElementMouseUp();
                event.preventDefault();

                return;
            }
        };

        const trapFocus = (event) => {
            event?.preventDefault();
            const focusableElements = DomHandler.getFocusableElements(overlayRef.current);

            if (focusableElements && focusableElements.length > 0) {
                if (!document.activeElement) {
                    focusableElements[0].focus();
                } else {
                    const focusedIndex = focusableElements.indexOf(document.activeElement);

                    if (event?.shiftKey) {
                        if (focusedIndex === -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();
                        else focusableElements[focusedIndex - 1].focus();
                    } else {
                        if (focusedIndex === -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();
                        else focusableElements[focusedIndex + 1].focus();
                    }
                }
            }
        };

        const updateFocus = () => {
            if (navigation.current) {
                if (navigation.current.button) {
                    initFocusableCell();

                    if (navigation.current.backward) previousButton.current.focus();
                    else nextButton.current.focus();
                } else {
                    let cell;

                    if (navigation.current.backward) {
                        let cells = DomHandler.find(overlayRef.current, 'table td span:not([data-p-disabled="true"])');

                        cell = cells[cells.length - 1];
                    } else {
                        cell = DomHandler.findSingle(overlayRef.current, 'table td span:not([data-p-disabled="true"])');
                    }

                    if (cell) {
                        cell.tabIndex = '0';
                        cell.focus();
                    }
                }

                navigation.current = null;
            } else {
                initFocusableCell();
            }
        };

        const initFocusableCell = () => {
            let cell;

            if (currentView === 'month') {
                const cells = DomHandler.find(overlayRef.current, '[data-pc-section="monthpicker"] [data-pc-section="month"]');
                const selectedCell = DomHandler.findSingle(overlayRef.current, '[data-pc-section="monthpicker"] [data-pc-section="month"][data-p-highlight="true"]');

                cells.forEach((cell) => (cell.tabIndex = -1));
                cell = selectedCell || cells[0];
            } else {
                cell = DomHandler.findSingle(overlayRef.current, 'span[data-p-highlight="true"]');

                if (!cell) {
                    const todayCell = DomHandler.findSingle(overlayRef.current, 'td.p-datepicker-today span:not(.p-disabled)');

                    cell = todayCell || DomHandler.findSingle(overlayRef.current, 'table td span:not([data-p-disabled="true"])');
                }
            }

            if (cell) {
                cell.tabIndex = '0';
            }
        };

        const focusToFirstCell = () => {
            if (currentView) {
                let cell;

                if (currentView === 'date') {
                    cell = DomHandler.findSingle(overlayRef.current, 'span[data-p-highlight="true"]');

                    if (!cell) {
                        const todayCell = DomHandler.findSingle(overlayRef.current, 'td.p-datepicker-today span:not(.p-disabled)');

                        cell = todayCell || DomHandler.findSingle(overlayRef.current, 'table td span:not([data-p-disabled="true"])');
                    }
                } else if (currentView === 'month' || currentView === 'year') {
                    cell = DomHandler.findSingle(overlayRef.current, 'span[data-p-highlight="true"]');

                    if (!cell) {
                        cell = DomHandler.findSingle(overlayRef.current, `[data-pc-section="${currentView}picker"] [data-pc-section="${currentView}"]:not([data-p-disabled="true"])`);
                    }
                }

                if (cell) {
                    cell.tabIndex = '0';
                    cell && cell.focus();
                }
            }
        };

        const navBackward = (event) => {
            if (props.disabled) {
                event.preventDefault();

                return;
            }

            let newViewDate = cloneDate(getViewDate());

            newViewDate.setDate(1);

            if (currentView === 'date') {
                if (newViewDate.getMonth() === 0) {
                    newViewDate.setMonth(11);
                    newViewDate.setFullYear(decrementYear());
                    setCurrentMonth(11);
                } else {
                    newViewDate.setMonth(newViewDate.getMonth() - 1);
                    setCurrentMonth((prevState) => prevState - 1);
                }
            } else if (currentView === 'month') {
                let newYear = newViewDate.getFullYear() - 1;

                if (props.yearNavigator) {
                    const minYear = parseInt(props.yearRange.split(':')[0], 10);

                    if (newYear < minYear) {
                        newYear = minYear;
                    }
                }

                newViewDate.setFullYear(newYear);
            }

            if (currentView === 'month') {
                newViewDate.setFullYear(decrementYear());
            } else if (currentView === 'year') {
                newViewDate.setFullYear(decrementDecade());
            }

            updateViewDate(event, newViewDate);

            event.preventDefault();
        };

        const navForward = (event) => {
            if (props.disabled) {
                event.preventDefault();

                return;
            }

            let newViewDate = cloneDate(getViewDate());

            newViewDate.setDate(1);

            if (currentView === 'date') {
                if (newViewDate.getMonth() === 11) {
                    newViewDate.setMonth(0);
                    newViewDate.setFullYear(incrementYear());
                    setCurrentMonth(0);
                } else {
                    newViewDate.setMonth(newViewDate.getMonth() + 1);
                    setCurrentMonth((prevState) => prevState + 1);
                }
            } else if (currentView === 'month') {
                let newYear = newViewDate.getFullYear() + 1;

                if (props.yearNavigator) {
                    const maxYear = parseInt(props.yearRange.split(':')[1], 10);

                    if (newYear > maxYear) {
                        newYear = maxYear;
                    }
                }

                newViewDate.setFullYear(newYear);
            }

            if (currentView === 'month') {
                newViewDate.setFullYear(incrementYear());
            } else if (currentView === 'year') {
                newViewDate.setFullYear(incrementDecade());
            }

            updateViewDate(event, newViewDate);

            event.preventDefault();
        };

        const populateYearOptions = (start, end) => {
            let _yearOptions = [];

            for (let i = start; i <= end; i++) {
                yearOptions.push(i);
            }

            setYearOptions(_yearOptions);
        };

        const decrementYear = () => {
            const _currentYear = currentYear - 1;

            setCurrentYear(_currentYear);

            if (props.yearNavigator && _currentYear < yearOptions[0]) {
                let difference = yearOptions[yearOptions.length - 1] - yearOptions[0];

                populateYearOptions(yearOptions[0] - difference, yearOptions[yearOptions.length - 1] - difference);
            }

            return _currentYear;
        };

        const incrementYear = () => {
            const _currentYear = currentYear + 1;

            setCurrentYear(_currentYear);

            if (props.yearNavigator && _currentYear.current > yearOptions[yearOptions.length - 1]) {
                let difference = yearOptions[yearOptions.length - 1] - yearOptions[0];

                populateYearOptions(yearOptions[0] + difference, yearOptions[yearOptions.length - 1] + difference);
            }

            return _currentYear;
        };

        const onMonthDropdownChange = (event, value) => {
            const currentViewDate = getViewDate();
            let newViewDate = cloneDate(currentViewDate);

            newViewDate.setMonth(parseInt(value, 10));

            updateViewDate(event, newViewDate);
        };

        const onYearDropdownChange = (event, value) => {
            const currentViewDate = getViewDate();
            let newViewDate = cloneDate(currentViewDate);

            newViewDate.setFullYear(parseInt(value, 10));

            updateViewDate(event, newViewDate);
        };

        const onTodayButtonClick = (event) => {
            const today = new Date();
            const dateMeta = { day: today.getDate(), month: today.getMonth(), year: today.getFullYear(), today: true, selectable: true };
            const timeMeta = { hours: today.getHours(), minutes: today.getMinutes(), seconds: today.getSeconds(), milliseconds: today.getMilliseconds() };

            updateViewDate(event, today);
            onDateSelect(event, dateMeta, timeMeta);

            props.onTodayButtonClick && props.onTodayButtonClick(event);
        };

        const onClearButtonClick = (event) => {
            isClearClicked.current = true;

            updateModel(event, null);
            updateInputfield(null);
            hide();

            props.onClearButtonClick && props.onClearButtonClick(event);
        };

        const onPanelClick = (event) => {
            if (!props.inline) {
                OverlayService.emit('overlay-click', {
                    originalEvent: event,
                    target: elementRef.current
                });
            }
        };

        const onPanelMouseUp = (event) => {
            onPanelClick(event);
        };

        const onTimePickerElementMouseDown = (event, type, direction) => {
            if (!props.disabled) {
                repeat(event, null, type, direction);
                event.preventDefault();
            }
        };

        const onTimePickerElementMouseUp = () => {
            if (!props.disabled) {
                clearTimePickerTimer();
            }
        };

        const onTimePickerElementMouseLeave = () => {
            if (!props.disabled) {
                clearTimePickerTimer();
            }
        };

        const repeat = (event, interval, type, direction) => {
            clearTimePickerTimer();
            timePickerTimer.current = setTimeout(() => {
                repeat(event, 100, type, direction);
            }, interval || 500);

            switch (type) {
                case 0:
                    if (direction === 1) incrementHour(event);
                    else decrementHour(event);
                    break;

                case 1:
                    if (direction === 1) incrementMinute(event);
                    else decrementMinute(event);
                    break;

                case 2:
                    if (direction === 1) incrementSecond(event);
                    else decrementSecond(event);
                    break;

                case 3:
                    if (direction === 1) incrementMilliSecond(event);
                    else decrementMilliSecond(event);
                    break;

                default:
                    break;
            }
        };

        const clearTimePickerTimer = () => {
            if (timePickerTimer.current) {
                clearTimeout(timePickerTimer.current);
            }
        };

        const incrementHour = (event) => {
            const currentTime = getCurrentDateTime();
            const currentHour = currentTime.getHours();
            let newHour = currentHour + props.stepHour;

            newHour = newHour >= 24 ? newHour - 24 : newHour;

            if (validateHour(newHour, currentTime)) {
                if (props.maxDate && props.maxDate.toDateString() === currentTime.toDateString() && props.maxDate.getHours() === newHour) {
                    if (props.maxDate.getMinutes() < currentTime.getMinutes()) {
                        if (props.maxDate.getSeconds() < currentTime.getSeconds()) {
                            if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
                                updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), props.maxDate.getMilliseconds());
                            } else {
                                updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), currentTime.getMilliseconds());
                            }
                        } else {
                            updateTime(event, newHour, props.maxDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                        }
                    } else if (props.maxDate.getMinutes() === currentTime.getMinutes()) {
                        if (props.maxDate.getSeconds() < currentTime.getSeconds()) {
                            if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
                                updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), props.maxDate.getMilliseconds());
                            } else {
                                updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), currentTime.getMilliseconds());
                            }
                        } else {
                            updateTime(event, newHour, props.maxDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                        }
                    } else {
                        updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                    }
                } else {
                    updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                }
            }

            event.preventDefault();
        };

        const decrementHour = (event) => {
            const currentTime = getCurrentDateTime();
            const currentHour = currentTime.getHours();
            let newHour = currentHour - props.stepHour;

            newHour = newHour < 0 ? newHour + 24 : newHour;

            if (validateHour(newHour, currentTime)) {
                if (props.minDate && props.minDate.toDateString() === currentTime.toDateString() && props.minDate.getHours() === newHour) {
                    if (props.minDate.getMinutes() > currentTime.getMinutes()) {
                        if (props.minDate.getSeconds() > currentTime.getSeconds()) {
                            if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
                                updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), props.minDate.getMilliseconds());
                            } else {
                                updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), currentTime.getMilliseconds());
                            }
                        } else {
                            updateTime(event, newHour, props.minDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                        }
                    } else if (props.minDate.getMinutes() === currentTime.getMinutes()) {
                        if (props.minDate.getSeconds() > currentTime.getSeconds()) {
                            if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
                                updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), props.minDate.getMilliseconds());
                            } else {
                                updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), currentTime.getMilliseconds());
                            }
                        } else {
                            updateTime(event, newHour, props.minDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                        }
                    } else {
                        updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                    }
                } else {
                    updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                }
            }

            event.preventDefault();
        };

        const doStepMinute = (currentMinute, step) => {
            if (props.stepMinute <= 1) {
                return step ? currentMinute + step : currentMinute;
            }

            if (!step) {
                step = props.stepMinute;

                if (currentMinute % step === 0) {
                    return currentMinute;
                }
            }

            return Math.floor((currentMinute + step) / step) * step;
        };

        const incrementMinute = (event) => {
            const currentTime = getCurrentDateTime();
            const currentMinute = currentTime.getMinutes();
            let newMinute = doStepMinute(currentMinute, props.stepMinute);

            newMinute = newMinute > 59 ? newMinute - 60 : newMinute;

            if (validateMinute(newMinute, currentTime)) {
                if (props.maxDate && props.maxDate.toDateString() === currentTime.toDateString() && props.maxDate.getMinutes() === newMinute) {
                    if (props.maxDate.getSeconds() < currentTime.getSeconds()) {
                        if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
                            updateTime(event, currentTime.getHours(), newMinute, props.maxDate.getSeconds(), props.maxDate.getMilliseconds());
                        } else {
                            updateTime(event, currentTime.getHours(), newMinute, props.maxDate.getSeconds(), currentTime.getMilliseconds());
                        }
                    } else {
                        updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
                    }
                } else {
                    updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
                }
            }

            event.preventDefault();
        };

        const decrementMinute = (event) => {
            const currentTime = getCurrentDateTime();
            const currentMinute = currentTime.getMinutes();
            let newMinute = doStepMinute(currentMinute, -props.stepMinute);

            newMinute = newMinute < 0 ? newMinute + 60 : newMinute;

            if (validateMinute(newMinute, currentTime)) {
                if (props.minDate && props.minDate.toDateString() === currentTime.toDateString() && props.minDate.getMinutes() === newMinute) {
                    if (props.minDate.getSeconds() > currentTime.getSeconds()) {
                        if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
                            updateTime(event, currentTime.getHours(), newMinute, props.minDate.getSeconds(), props.minDate.getMilliseconds());
                        } else {
                            updateTime(event, currentTime.getHours(), newMinute, props.minDate.getSeconds(), currentTime.getMilliseconds());
                        }
                    } else {
                        updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
                    }
                } else {
                    updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
                }
            }

            event.preventDefault();
        };

        const incrementSecond = (event) => {
            const currentTime = getCurrentDateTime();
            const currentSecond = currentTime.getSeconds();
            let newSecond = currentSecond + props.stepSecond;

            newSecond = newSecond > 59 ? newSecond - 60 : newSecond;

            if (validateSecond(newSecond, currentTime)) {
                if (props.maxDate && props.maxDate.toDateString() === currentTime.toDateString() && props.maxDate.getSeconds() === newSecond) {
                    if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
                        updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, props.maxDate.getMilliseconds());
                    } else {
                        updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
                    }
                } else {
                    updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
                }
            }

            event.preventDefault();
        };

        const decrementSecond = (event) => {
            const currentTime = getCurrentDateTime();
            const currentSecond = currentTime.getSeconds();
            let newSecond = currentSecond - props.stepSecond;

            newSecond = newSecond < 0 ? newSecond + 60 : newSecond;

            if (validateSecond(newSecond, currentTime)) {
                if (props.minDate && props.minDate.toDateString() === currentTime.toDateString() && props.minDate.getSeconds() === newSecond) {
                    if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
                        updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, props.minDate.getMilliseconds());
                    } else {
                        updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
                    }
                } else {
                    updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
                }
            }

            event.preventDefault();
        };

        const incrementMilliSecond = (event) => {
            const currentTime = getCurrentDateTime();
            const currentMillisecond = currentTime.getMilliseconds();
            let newMillisecond = currentMillisecond + props.stepMillisec;

            newMillisecond = newMillisecond > 999 ? newMillisecond - 1000 : newMillisecond;

            if (validateMillisecond(newMillisecond, currentTime)) {
                updateTime(event, currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMillisecond);
            }

            event.preventDefault();
        };

        const decrementMilliSecond = (event) => {
            const currentTime = getCurrentDateTime();
            const currentMillisecond = currentTime.getMilliseconds();
            let newMillisecond = currentMillisecond - props.stepMillisec;

            newMillisecond = newMillisecond < 0 ? newMillisecond + 999 : newMillisecond;

            if (validateMillisecond(newMillisecond, currentTime)) {
                updateTime(event, currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMillisecond);
            }

            event.preventDefault();
        };

        const toggleAmPm = (event) => {
            const currentTime = getCurrentDateTime();
            const currentHour = currentTime.getHours();
            const newHour = currentHour >= 12 ? currentHour - 12 : currentHour + 12;

            if (validateHour(convertTo24Hour(newHour, !(currentHour > 11)), currentTime)) {
                updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
            }

            event.preventDefault();
        };

        const getViewDate = (date) => {
            let propValue = props.value;
            let viewDate = date || (props.onViewDateChange ? props.viewDate : viewDateState);

            if (Array.isArray(propValue)) {
                propValue = propValue[0];
            }

            return viewDate && isValidDate(viewDate) ? viewDate : propValue && isValidDate(propValue) ? propValue : new Date();
        };

        const getCurrentDateTime = () => {
            if (isSingleSelection()) {
                return props.value && props.value instanceof Date ? cloneDate(props.value) : getViewDate();
            } else if (isMultipleSelection()) {
                if (props.value && props.value.length) {
                    return cloneDate(props.value[props.value.length - 1]);
                }
            } else if (isRangeSelection()) {
                if (props.value && props.value.length) {
                    let startDate = cloneDate(props.value[0]);
                    let endDate = cloneDate(props.value[1]);

                    return endDate || startDate;
                }
            }

            return new Date();
        };

        const cloneDate = (date) => {
            return isValidDate(date) ? new Date(date.valueOf()) : date;
        };

        const isValidDate = (date) => {
            return date instanceof Date && !isNaN(date);
        };

        const convertTo24Hour = (hour, pm) => {
            if (props.hourFormat == '12') {
                return hour === 12 ? (pm ? 12 : 0) : pm ? hour + 12 : hour;
            }

            return hour;
        };

        const validateHour = (hour, value) => {
            let valid = true;
            let valueDateString = value ? value.toDateString() : null;

            if (props.minDate && valueDateString && props.minDate.toDateString() === valueDateString) {
                if (props.minDate.getHours() > hour) {
                    valid = false;
                }
            }

            if (props.maxDate && valueDateString && props.maxDate.toDateString() === valueDateString) {
                if (props.maxDate.getHours() < hour) {
                    valid = false;
                }
            }

            return valid;
        };

        const validateMinute = (minute, value) => {
            let valid = true;
            let valueDateString = value ? value.toDateString() : null;

            if (props.minDate && valueDateString && props.minDate.toDateString() === valueDateString) {
                if (value.getHours() === props.minDate.getHours()) {
                    if (props.minDate.getMinutes() > minute) {
                        valid = false;
                    }
                }
            }

            if (props.maxDate && valueDateString && props.maxDate.toDateString() === valueDateString) {
                if (value.getHours() === props.maxDate.getHours()) {
                    if (props.maxDate.getMinutes() < minute) {
                        valid = false;
                    }
                }
            }

            return valid;
        };

        const validateSecond = (second, value) => {
            let valid = true;
            let valueDateString = value ? value.toDateString() : null;

            if (props.minDate && valueDateString && props.minDate.toDateString() === valueDateString) {
                if (value.getHours() === props.minDate.getHours() && value.getMinutes() === props.minDate.getMinutes()) {
                    if (props.minDate.getSeconds() > second) {
                        valid = false;
                    }
                }
            }

            if (props.maxDate && valueDateString && props.maxDate.toDateString() === valueDateString) {
                if (value.getHours() === props.maxDate.getHours() && value.getMinutes() === props.maxDate.getMinutes()) {
                    if (props.maxDate.getSeconds() < second) {
                        valid = false;
                    }
                }
            }

            return valid;
        };

        const validateMillisecond = (millisecond, value) => {
            let valid = true;
            let valueDateString = value ? value.toDateString() : null;

            if (props.minDate && valueDateString && props.minDate.toDateString() === valueDateString) {
                if (value.getHours() === props.minDate.getHours() && value.getSeconds() === props.minDate.getSeconds() && value.getMinutes() === props.minDate.getMinutes()) {
                    if (props.minDate.getMilliseconds() > millisecond) {
                        valid = false;
                    }
                }
            }

            if (props.maxDate && valueDateString && props.maxDate.toDateString() === valueDateString) {
                if (value.getHours() === props.maxDate.getHours() && value.getSeconds() === props.maxDate.getSeconds() && value.getMinutes() === props.maxDate.getMinutes()) {
                    if (props.maxDate.getMilliseconds() < millisecond) {
                        valid = false;
                    }
                }
            }

            return valid;
        };

        const validateDate = (value) => {
            if (props.yearNavigator) {
                let viewYear = value.getFullYear();

                const minRangeYear = props.yearRange ? parseInt(props.yearRange.split(':')[0], 10) : null;
                const maxRangeYear = props.yearRange ? parseInt(props.yearRange.split(':')[1], 10) : null;
                const minYear = props.minDate && minRangeYear != null ? Math.max(props.minDate.getFullYear(), minRangeYear) : props.minDate || minRangeYear;
                const maxYear = props.maxDate && maxRangeYear != null ? Math.min(props.maxDate.getFullYear(), maxRangeYear) : props.maxDate || maxRangeYear;

                if (minYear && minYear > viewYear) {
                    viewYear = minYear;
                }

                if (maxYear && maxYear < viewYear) {
                    viewYear = maxYear;
                }

                value.setFullYear(viewYear);
            }

            if (renderMonthsNavigator(0)) {
                let viewMonth = value.getMonth();
                let viewMonthWithMinMax = parseInt((isInMinYear(value) && Math.max(props.minDate.getMonth(), viewMonth).toString()) || (isInMaxYear(value) && Math.min(props.maxDate.getMonth(), viewMonth).toString()) || viewMonth);

                value.setMonth(viewMonthWithMinMax);
            }
        };

        const updateTime = (event, hour, minute, second, millisecond) => {
            let newDateTime = getCurrentDateTime();

            newDateTime.setHours(hour);
            newDateTime.setMinutes(minute);
            newDateTime.setSeconds(second);
            newDateTime.setMilliseconds(millisecond);

            if (isMultipleSelection()) {
                if (props.value && props.value.length) {
                    let value = [...props.value];

                    value[value.length - 1] = newDateTime;

                    newDateTime = value;
                } else {
                    newDateTime = [newDateTime];
                }
            } else if (isRangeSelection()) {
                if (props.value && props.value.length) {
                    let startDate = props.value[0];
                    let endDate = props.value[1];

                    newDateTime = endDate ? [startDate, newDateTime] : [newDateTime, null];
                } else {
                    newDateTime = [newDateTime, null];
                }
            }

            updateModel(event, newDateTime);

            if (props.onSelect) {
                props.onSelect({
                    originalEvent: event,
                    value: newDateTime
                });
            }

            updateInputfield(newDateTime);
        };

        const updateViewDate = (event, value) => {
            validateDate(value);

            if (props.onViewDateChange && event) {
                props.onViewDateChange({
                    originalEvent: event,
                    value
                });
            } else {
                viewStateChanged.current = true;
                setViewDateState(value);
            }

            setCurrentMonth(value.getMonth());
            setCurrentYear(value.getFullYear());
        };

        const setNavigationState = (newViewDate) => {
            if (!newViewDate || !props.showMinMaxRange || props.view !== 'date' || !overlayRef.current) {
                return;
            }

            const navPrev = DomHandler.findSingle(overlayRef.current, '[data-pc-section="previousbutton"]');
            const navNext = DomHandler.findSingle(overlayRef.current, '[data-pc-section="nextbutton"]');

            if (props.disabled) {
                !isUnstyled() && DomHandler.addClass(navPrev, 'p-disabled');
                navPrev.setAttribute('data-p-disabled', true);
                !isUnstyled() && DomHandler.addClass(navNext, 'p-disabled');
                navNext.setAttribute('data-p-disabled', true);

                return;
            }

            // previous (check first day of month at 00:00:00)
            if (props.minDate) {
                let firstDayOfMonth = cloneDate(newViewDate);

                if (firstDayOfMonth.getMonth() === 0) {
                    firstDayOfMonth.setMonth(11, 1);
                    firstDayOfMonth.setFullYear(firstDayOfMonth.getFullYear() - 1);
                } else {
                    firstDayOfMonth.setMonth(firstDayOfMonth.getMonth(), 1);
                }

                firstDayOfMonth.setHours(0);
                firstDayOfMonth.setMinutes(0);
                firstDayOfMonth.setSeconds(0);

                if (props.minDate > firstDayOfMonth) {
                    DomHandler.addClass(navPrev, 'p-disabled');
                } else {
                    DomHandler.removeClass(navPrev, 'p-disabled');
                }
            }

            // next (check last day of month at 11:59:59)
            if (props.maxDate) {
                let lastDayOfMonth = cloneDate(newViewDate);

                if (lastDayOfMonth.getMonth() === 11) {
                    lastDayOfMonth.setMonth(0, 1);
                    lastDayOfMonth.setFullYear(lastDayOfMonth.getFullYear() + 1);
                } else {
                    lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1, 1);
                }

                lastDayOfMonth.setHours(0);
                lastDayOfMonth.setMinutes(0);
                lastDayOfMonth.setSeconds(0);
                lastDayOfMonth.setSeconds(-1);

                if (props.maxDate < lastDayOfMonth) {
                    DomHandler.addClass(navNext, 'p-disabled');
                } else {
                    DomHandler.removeClass(navNext, 'p-disabled');
                }
            }
        };

        const onDateCellKeydown = (event, date, groupIndex) => {
            const cellContent = event.currentTarget;
            const cell = cellContent.parentElement;
            const cellIndex = DomHandler.index(cell);

            switch (event.code) {
                case 'ArrowDown': {
                    cellContent.tabIndex = '-1';

                    let nextRow = cell.parentElement.nextElementSibling;

                    if (nextRow) {
                        let tableRowIndex = DomHandler.index(cell.parentElement);
                        const tableRows = Array.from(cell.parentElement.parentElement.children);
                        const nextTableRows = tableRows.slice(tableRowIndex + 1);

                        let hasNextFocusableDate = nextTableRows.find((el) => {
                            let focusCell = el.children[cellIndex].children[0];

                            return !DomHandler.getAttribute(focusCell, 'data-p-disabled');
                        });

                        if (hasNextFocusableDate) {
                            let focusCell = hasNextFocusableDate.children[cellIndex].children[0];

                            focusCell.tabIndex = '0';
                            focusCell.focus();
                        } else {
                            navigation.current = { backward: false };
                            navForward(event);
                        }
                    } else {
                        navigation.current = { backward: false };
                        navForward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowUp': {
                    cellContent.tabIndex = '-1';

                    if (event.altKey) {
                        hide(null, reFocusInputField);
                    } else {
                        let prevRow = cell.parentElement.previousElementSibling;

                        if (prevRow) {
                            let tableRowIndex = DomHandler.index(cell.parentElement);
                            const tableRows = Array.from(cell.parentElement.parentElement.children);
                            const prevTableRows = tableRows.slice(0, tableRowIndex).reverse();

                            let hasNextFocusableDate = prevTableRows.find((el) => {
                                let focusCell = el.children[cellIndex].children[0];

                                return !DomHandler.getAttribute(focusCell, 'data-p-disabled');
                            });

                            if (hasNextFocusableDate) {
                                let focusCell = hasNextFocusableDate.children[cellIndex].children[0];

                                focusCell.tabIndex = '0';
                                focusCell.focus();
                            } else {
                                navigation.current = { backward: true };
                                navBackward(event);
                            }
                        } else {
                            navigation.current = { backward: true };
                            navBackward(event);
                        }
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowLeft': {
                    cellContent.tabIndex = '-1';
                    let prevCell = cell.previousElementSibling;

                    if (prevCell) {
                        const cells = Array.from(cell.parentElement.children);
                        const prevCells = cells.slice(0, cellIndex).reverse();

                        let hasNextFocusableDate = prevCells.find((el) => {
                            let focusCell = el.children[0];

                            return !DomHandler.getAttribute(focusCell, 'data-p-disabled');
                        });

                        if (hasNextFocusableDate) {
                            let focusCell = hasNextFocusableDate.children[0];

                            focusCell.tabIndex = '0';
                            focusCell.focus();
                        } else {
                            navigateToMonth(true, groupIndex, event);
                        }
                    } else {
                        navigateToMonth(true, groupIndex, event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    cellContent.tabIndex = '-1';
                    let nextCell = cell.nextElementSibling;

                    if (nextCell) {
                        const cells = Array.from(cell.parentElement.children);
                        const nextCells = cells.slice(cellIndex + 1);
                        let hasNextFocusableDate = nextCells.find((el) => {
                            let focusCell = el.children[0];

                            return !DomHandler.getAttribute(focusCell, 'data-p-disabled');
                        });

                        if (hasNextFocusableDate) {
                            let focusCell = hasNextFocusableDate.children[0];

                            focusCell.tabIndex = '0';
                            focusCell.focus();
                        } else {
                            navigateToMonth(false, groupIndex, event);
                        }
                    } else {
                        navigateToMonth(false, groupIndex, event);
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
                    hide(null, reFocusInputField);
                    event.preventDefault();
                    break;
                }

                case 'Tab': {
                    if (!props.inline) trapFocus(event);
                    break;
                }

                case 'Home': {
                    cellContent.tabIndex = '-1';
                    let currentRow = cell.parentElement;
                    let focusCell = currentRow.children[0].children[0];

                    if (DomHandler.getAttribute(focusCell, 'data-p-disabled')) {
                        navigateToMonth(groupIndex, true, event);
                    } else {
                        focusCell.tabIndex = '0';
                        focusCell.focus();
                    }

                    event.preventDefault();
                    break;
                }

                case 'End': {
                    cellContent.tabIndex = '-1';
                    let currentRow = cell.parentElement;
                    let focusCell = currentRow.children[currentRow.children.length - 1].children[0];

                    if (DomHandler.getAttribute(focusCell, 'data-p-disabled')) {
                        navigateToMonth(groupIndex, false, event);
                    } else {
                        focusCell.tabIndex = '0';
                        focusCell.focus();
                    }

                    event.preventDefault();
                    break;
                }

                case 'PageUp': {
                    cellContent.tabIndex = '-1';
                    if (event.shiftKey) {
                        navigation.current = { backward: true };
                        navBackward(event);
                    } else navigateToMonth(groupIndex, true, event);

                    event.preventDefault();
                    break;
                }

                case 'PageDown': {
                    cellContent.tabIndex = '-1';
                    if (event.shiftKey) {
                        navigation.current = { backward: false };
                        navForward(event);
                    } else navigateToMonth(groupIndex, false, event);

                    event.preventDefault();
                    break;
                }

                default:
                    //no op
                    break;
            }
        };

        const navigateToMonth = (prev, groupIndex, event) => {
            if (prev) {
                if (props.numberOfMonths === 1 || groupIndex === 0) {
                    navigation.current = { backward: true };
                    navBackward(event);
                } else {
                    const prevMonthContainer = overlayRef.current.children[groupIndex - 1];
                    const cells = DomHandler.find(prevMonthContainer, 'table td span:not([data-p-disabled="true"])');
                    const focusCell = cells[cells.length - 1];

                    focusCell.tabIndex = '0';
                    focusCell.focus();
                }
            } else {
                if (props.numberOfMonths === 1 || groupIndex === props.numberOfMonths - 1) {
                    navigation.current = { backward: false };
                    navForward(event);
                } else {
                    const nextMonthContainer = overlayRef.current.children[groupIndex + 1];
                    const focusCell = DomHandler.findSingle(nextMonthContainer, 'table td span:not([data-p-disabled="true"])');

                    focusCell.tabIndex = '0';
                    focusCell.focus();
                }
            }
        };

        const onMonthCellKeydown = (event, index) => {
            const cell = event.currentTarget;

            switch (event.code) {
                //arrows
                case 'ArrowUp':

                case 'ArrowDown': {
                    cell.tabIndex = '-1';
                    const cells = cell.parentElement.children;
                    const cellIndex = DomHandler.index(cell);
                    const nextCell = cells[event.which === 40 ? cellIndex + 3 : cellIndex - 3];

                    if (nextCell) {
                        nextCell.tabIndex = '0';
                        nextCell.focus();
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowLeft': {
                    cell.tabIndex = '-1';
                    const prevCell = cell.previousElementSibling;

                    if (prevCell) {
                        prevCell.tabIndex = '0';
                        prevCell.focus();
                    } else {
                        navigation.current = { backward: true };
                        navBackward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    cell.tabIndex = '-1';
                    const nextCell = cell.nextElementSibling;

                    if (nextCell) {
                        nextCell.tabIndex = '0';
                        nextCell.focus();
                    } else {
                        navigation.current = { backward: false };
                        navForward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'PageUp': {
                    if (event.shiftKey) return;

                    navigation.current = { backward: true };
                    navBackward(event);

                    break;
                }

                case 'PageDown': {
                    if (event.shiftKey) return;

                    navigation.current = { backward: false };
                    navForward(event);

                    break;
                }

                case 'Enter':
                case 'NumpadEnter':

                case 'Space': {
                    if (props.view !== 'month') viewChangedWithKeyDown.current = true;

                    onMonthSelect(event, index);
                    event.preventDefault();
                    break;
                }

                case 'Escape': {
                    hide(null, reFocusInputField);
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

        const onYearCellKeydown = (event, index) => {
            const cell = event.currentTarget;

            switch (event.code) {
                //arrows
                case 'ArrowUp':

                case 'ArrowDown': {
                    cell.tabIndex = '-1';
                    var cells = cell.parentElement.children;
                    var cellIndex = DomHandler.index(cell);
                    let nextCell = cells[event.code === 'ArrowDown' ? cellIndex + 2 : cellIndex - 2];

                    if (nextCell) {
                        nextCell.tabIndex = '0';
                        nextCell.focus();
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowLeft': {
                    cell.tabIndex = '-1';
                    let prevCell = cell.previousElementSibling;

                    if (prevCell) {
                        prevCell.tabIndex = '0';
                        prevCell.focus();
                    } else {
                        navigation.current = { backward: true };
                        navBackward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    cell.tabIndex = '-1';
                    let nextCell = cell.nextElementSibling;

                    if (nextCell) {
                        nextCell.tabIndex = '0';
                        nextCell.focus();
                    } else {
                        navigation.current = { backward: false };
                        navForward(event);
                    }

                    event.preventDefault();
                    break;
                }

                case 'PageUp': {
                    if (event.shiftKey) return;

                    navigation.current = { backward: true };
                    navBackward(event);

                    break;
                }

                case 'PageDown': {
                    if (event.shiftKey) return;

                    navigation.current = { backward: false };
                    navForward(event);

                    break;
                }

                case 'Enter':
                case 'NumpadEnter':

                case 'Space': {
                    if (props.view !== 'year') viewChangedWithKeyDown.current = true;

                    onYearSelect(event, index);
                    event.preventDefault();
                    break;
                }

                case 'Escape': {
                    hide(null, reFocusInputField);
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

        const onDateSelect = (event, dateMeta, timeMeta) => {
            if (props.disabled || !dateMeta.selectable) {
                event.preventDefault();

                return;
            }

            DomHandler.find(overlayRef.current, 'table td span:not([data-p-disabled="true"])').forEach((cell) => (cell.tabIndex = -1));
            event.currentTarget.focus();

            if (isMultipleSelection()) {
                if (isSelected(dateMeta)) {
                    let value = props.value.filter((date, i) => {
                        return !isDateEquals(date, dateMeta);
                    });

                    updateModel(event, value);
                    updateInputfield(value);
                } else if (!props.maxDateCount || !props.value || props.maxDateCount > props.value.length) {
                    selectDate(event, dateMeta, timeMeta);
                }
            } else {
                selectDate(event, dateMeta, timeMeta);
            }

            if (!props.inline && isSingleSelection() && (!props.showTime || props.hideOnDateTimeSelect)) {
                setTimeout(() => {
                    hide('dateselect');
                }, 100);

                if (touchUIMask.current) {
                    disableModality();
                }
            }

            event.preventDefault();
        };

        const selectTime = (date, timeMeta) => {
            if (props.showTime) {
                let hours, minutes, seconds, milliseconds;

                if (timeMeta) {
                    ({ hours, minutes, seconds, milliseconds } = timeMeta);
                } else {
                    let time = getCurrentDateTime();

                    [hours, minutes, seconds, milliseconds] = [time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()];
                }

                date.setHours(hours);
                date.setMinutes(doStepMinute(minutes));
                date.setSeconds(seconds);
                date.setMilliseconds(milliseconds);
            }
        };

        const selectDate = (event, dateMeta, timeMeta) => {
            let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);

            selectTime(date, timeMeta);

            if (props.minDate && props.minDate > date) {
                date = props.minDate;
            }

            if (props.maxDate && props.maxDate < date) {
                date = props.maxDate;
            }

            let selectedValues = date;

            if (isSingleSelection()) {
                updateModel(event, date);
            } else if (isMultipleSelection()) {
                selectedValues = props.value ? [...props.value, date] : [date];
                updateModel(event, selectedValues);
            } else if (isRangeSelection()) {
                if (props.value && props.value.length) {
                    let startDate = props.value[0];
                    let endDate = props.value[1];

                    if (!endDate) {
                        if (date.getTime() >= startDate.getTime()) {
                            endDate = date;
                        } else {
                            endDate = startDate;
                            startDate = date;
                        }
                    } else {
                        startDate = date;
                        endDate = null;
                    }

                    selectedValues = [startDate, endDate];
                    updateModel(event, selectedValues);

                    if (props.hideOnRangeSelection && endDate !== null) {
                        setTimeout(() => {
                            setOverlayVisibleState(false);
                        }, 150);
                    }
                } else {
                    selectedValues = [date, null];
                    updateModel(event, selectedValues);
                }
            }

            if (props.onSelect) {
                props.onSelect({
                    originalEvent: event,
                    value: date
                });
            }

            updateInputfield(selectedValues);
        };

        const decrementDecade = () => {
            const _currentYear = currentYear - 10;

            setCurrentYear(_currentYear);

            return _currentYear;
        };

        const incrementDecade = () => {
            const _currentYear = currentYear + 10;

            setCurrentYear(_currentYear);

            return _currentYear;
        };

        const switchToMonthView = (event) => {
            if (event && event.code && (event.code === 'Enter' || event.code === 'Space')) {
                viewChangedWithKeyDown.current = true;
            }

            setCurrentView('month');
            event.preventDefault();
        };

        const switchToYearView = (event) => {
            if (event && event.code && (event.code === 'Enter' || event.code === 'Space')) {
                viewChangedWithKeyDown.current = true;
            }

            setCurrentView('year');
            event.preventDefault();
        };

        const onMonthSelect = (event, month) => {
            if (props.view === 'month') {
                onDateSelect(event, { year: currentYear, month: month, day: 1, selectable: true });
                event.preventDefault();
            } else {
                setCurrentMonth(month);
                createMonthsMeta(month, currentYear);
                const currentDate = cloneDate(getCurrentDateTime());

                currentDate.setDate(1); // #2948 always set to 1st of month
                currentDate.setMonth(month);
                currentDate.setYear(currentYear);

                setViewDateState(currentDate);
                setCurrentView('date');
                props.onMonthChange && props.onMonthChange({ month: month + 1, year: currentYear });

                updateViewDate(event, currentDate);
            }
        };

        const onYearSelect = (event, year) => {
            if (props.view === 'year') {
                onDateSelect(event, { year: year, month: 0, day: 1, selectable: true });
            } else {
                setCurrentYear(year);
                setCurrentView('month');
                props.onMonthChange && props.onMonthChange({ month: currentMonth + 1, year: year });
            }
        };

        const updateModel = (event, value) => {
            if (props.onChange) {
                const newValue = cloneDate(value);

                viewStateChanged.current = true;

                onChangeRef.current({
                    originalEvent: event,
                    value: newValue,
                    stopPropagation: () => {
                        event.stopPropagation();
                    },
                    preventDefault: () => {
                        event.preventDefault();
                    },
                    target: {
                        name: props.name,
                        id: props.id,
                        value: newValue
                    }
                });
            }
        };

        const show = (type) => {
            if (props.onVisibleChange) {
                props.onVisibleChange({
                    visible: true,
                    type
                });
            } else {
                setOverlayVisibleState(true);

                overlayEventListener.current = (e) => {
                    if (!isOutsideClicked(e)) {
                        isOverlayClicked.current = true;
                    }
                };

                OverlayService.on('overlay-click', overlayEventListener.current);
            }
        };

        const hide = (type, callback) => {
            const _hideCallback = () => {
                viewStateChanged.current = false;
                ignoreFocusFunctionality.current = false;
                isOverlayClicked.current = false;

                callback && callback();

                OverlayService.off('overlay-click', overlayEventListener.current);
                overlayEventListener.current = null;
            };

            props.touchUI && disableModality();

            if (props.onVisibleChange) {
                props.onVisibleChange({
                    visible: type !== 'dateselect', // false only if selecting a value to close panel
                    type,
                    callback: _hideCallback
                });
            } else {
                setOverlayVisibleState(false);
                _hideCallback();
            }
        };

        const onOverlayEnter = () => {
            const styles = props.touchUI ? { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } : !props.inline ? { position: 'absolute', top: '0', left: '0' } : undefined;

            DomHandler.addStyles(overlayRef.current, styles);

            if (props.autoZIndex) {
                const key = props.touchUI ? 'modal' : 'overlay';

                ZIndexUtils.set(key, overlayRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, props.baseZIndex || (context && context.zIndex[key]) || PrimeReact.zIndex[key]);
            }

            if (!props.touchUI && overlayRef && overlayRef.current && inputRef && inputRef.current && !appendDisabled()) {
                let inputWidth = DomHandler.getOuterWidth(inputRef.current);

                // #5435 must have reasonable width if input is too small
                if (inputWidth < 220) {
                    inputWidth = 220;
                }

                if (props.view === 'date') {
                    overlayRef.current.style.width = DomHandler.getOuterWidth(overlayRef.current) + 'px';
                } else {
                    overlayRef.current.style.width = inputWidth + 'px';
                }

                // #5830 Tailwind does not need a min width it breaks the styling
                if (!isUnstyled()) {
                    overlayRef.current.style.minWidth = inputWidth + 'px';
                }
            }

            alignOverlay();
        };

        const onOverlayEntered = () => {
            bindOverlayListener();
            props.onShow && props.onShow();
            setFocusedState(false);
        };

        const onOverlayExit = () => {
            unbindOverlayListener();
        };

        const onOverlayExited = () => {
            ZIndexUtils.clear(overlayRef.current);

            props.onHide && props.onHide();
        };

        const appendDisabled = () => {
            const appendTo = props.appendTo || (context && context.appendTo) || PrimeReact.appendTo;

            return appendTo === 'self' || props.inline;
        };

        const alignOverlay = () => {
            if (props.touchUI) {
                enableModality();
            } else if (overlayRef && overlayRef.current && inputRef && inputRef.current) {
                DomHandler.alignOverlay(overlayRef.current, inputRef.current, props.appendTo || (context && context.appendTo) || PrimeReact.appendTo);

                if (appendDisabled()) {
                    DomHandler.relativePosition(overlayRef.current, inputRef.current);
                } else {
                    DomHandler.absolutePosition(overlayRef.current, inputRef.current);
                }
            }
        };

        const enableModality = () => {
            if (!touchUIMask.current) {
                touchUIMask.current = document.createElement('div');
                touchUIMask.current.style.zIndex = String(ZIndexUtils.get(overlayRef.current) - 1);
                !isUnstyled() && DomHandler.addMultipleClasses(touchUIMask.current, 'p-component-overlay p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay-enter');

                touchUIMaskClickListener.current = () => {
                    disableModality();
                    hide();
                };

                touchUIMask.current.addEventListener('click', touchUIMaskClickListener.current);

                document.body.appendChild(touchUIMask.current);
                DomHandler.blockBodyScroll();
            }
        };

        const disableModality = () => {
            if (touchUIMask.current) {
                if (isUnstyled) {
                    destroyMask();
                } else {
                    !isUnstyled() && DomHandler.addClass(touchUIMask.current, 'p-component-overlay-leave');

                    if (DomHandler.hasCSSAnimation(touchUIMask.current) > 0) {
                        touchUIMask.current.addEventListener('animationend', () => {
                            destroyMask();
                        });
                    } else {
                        destroyMask();
                    }
                }
            }
        };

        const destroyMask = () => {
            if (touchUIMask.current) {
                touchUIMask.current.removeEventListener('click', touchUIMaskClickListener.current);
                touchUIMaskClickListener.current = null;
                document.body.removeChild(touchUIMask.current);
                touchUIMask.current = null;
            }

            let bodyChildren = document.body.children;
            let hasBlockerMasks;

            for (let i = 0; i < bodyChildren.length; i++) {
                let bodyChild = bodyChildren[i];

                if (DomHandler.hasClass(bodyChild, 'p-datepicker-mask-scrollblocker')) {
                    hasBlockerMasks = true;
                    break;
                }
            }

            if (!hasBlockerMasks) {
                DomHandler.unblockBodyScroll();
            }
        };

        const isOutsideClicked = (event) => {
            return elementRef.current && !(elementRef.current.isSameNode(event.target) || isNavIconClicked(event.target) || elementRef.current.contains(event.target) || (overlayRef.current && overlayRef.current.contains(event.target)));
        };

        const isNavIconClicked = (target) => {
            return (previousButton.current && (previousButton.current.isSameNode(target) || previousButton.current.contains(target))) || (nextButton.current && (nextButton.current.isSameNode(target) || nextButton.current.contains(target)));
        };

        const getFirstDayOfMonthIndex = (month, year) => {
            let day = new Date();

            day.setDate(1);
            day.setMonth(month);
            day.setFullYear(year);

            let dayIndex = day.getDay() + getSundayIndex();

            return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
        };

        const getDaysCountInMonth = (month, year) => {
            return 32 - daylightSavingAdjust(new Date(year, month, 32)).getDate();
        };

        const getDaysCountInPrevMonth = (month, year) => {
            let prev = getPreviousMonthAndYear(month, year);

            return getDaysCountInMonth(prev.month, prev.year);
        };

        const daylightSavingAdjust = (date) => {
            if (!date) {
                return null;
            }

            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);

            return date;
        };

        const getPreviousMonthAndYear = (month, year) => {
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

        const getNextMonthAndYear = (month, year) => {
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

        const getSundayIndex = () => {
            const firstDayOfWeek = localeOption('firstDayOfWeek', props.locale);

            return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
        };

        const createWeekDaysMeta = () => {
            let weekDays = [];
            let { firstDayOfWeek: dayIndex, dayNamesMin } = localeOptions(props.locale);

            for (let i = 0; i < 7; i++) {
                weekDays.push(dayNamesMin[dayIndex]);
                dayIndex = dayIndex === 6 ? 0 : ++dayIndex;
            }

            return weekDays;
        };

        const createMonthsMeta = (month, year) => {
            let months = [];

            for (let i = 0; i < props.numberOfMonths; i++) {
                let m = month + i;
                let y = year;

                if (m > 11) {
                    m = (m % 11) - 1;
                    y = year + 1;
                }

                months.push(createMonthMeta(m, y));
            }

            return months;
        };

        const createMonthMeta = (month, year) => {
            let dates = [];
            let firstDay = getFirstDayOfMonthIndex(month, year);
            let daysLength = getDaysCountInMonth(month, year);
            let prevMonthDaysLength = getDaysCountInPrevMonth(month, year);
            let dayNo = 1;
            let today = new Date();
            let weekNumbers = [];
            let monthRows = Math.ceil((daysLength + firstDay) / 7);

            for (let i = 0; i < monthRows; i++) {
                let week = [];

                if (i === 0) {
                    for (let j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
                        let prev = getPreviousMonthAndYear(month, year);

                        week.push({
                            day: j,
                            month: prev.month,
                            year: prev.year,
                            otherMonth: true,
                            today: isToday(today, j, prev.month, prev.year),
                            selectable: isSelectable(j, prev.month, prev.year, true)
                        });
                    }

                    let remainingDaysLength = 7 - week.length;

                    for (let j = 0; j < remainingDaysLength; j++) {
                        week.push({
                            day: dayNo,
                            month: month,
                            year: year,
                            today: isToday(today, dayNo, month, year),
                            selectable: isSelectable(dayNo, month, year, false)
                        });
                        dayNo++;
                    }
                } else {
                    for (let j = 0; j < 7; j++) {
                        if (dayNo > daysLength) {
                            let next = getNextMonthAndYear(month, year);

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
                                today: isToday(today, dayNo, month, year),
                                selectable: isSelectable(dayNo, month, year, false)
                            });
                        }

                        dayNo++;
                    }
                }

                if (props.showWeek) {
                    weekNumbers.push(getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
                }

                dates.push(week);
            }

            return {
                month: month,
                year: year,
                dates: dates,
                weekNumbers: weekNumbers
            };
        };

        const getWeekNumber = (date) => {
            let checkDate = cloneDate(date);

            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            let time = checkDate.getTime();

            checkDate.setMonth(0);
            checkDate.setDate(1);

            return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
        };

        const isSelectable = (day, month, year, otherMonth) => {
            let validMin = true;
            let validMax = true;
            let validDate = true;
            let validDay = true;
            let validMonth = true;

            if (props.minDate) {
                if (props.minDate.getFullYear() > year) {
                    validMin = false;
                } else if (props.minDate.getFullYear() === year) {
                    if (month > -1 && props.minDate.getMonth() > month) {
                        validMin = false;
                    } else if (month > -1 && props.minDate.getMonth() === month) {
                        if (day > 0 && props.minDate.getDate() > day) {
                            validMin = false;
                        }
                    }
                }
            }

            if (props.maxDate) {
                if (props.maxDate.getFullYear() < year) {
                    validMax = false;
                } else if (props.maxDate.getFullYear() === year) {
                    if (month > -1 && props.maxDate.getMonth() < month) {
                        validMax = false;
                    } else if (month > -1 && props.maxDate.getMonth() === month) {
                        if (day > 0 && props.maxDate.getDate() < day) {
                            validMax = false;
                        }
                    }
                }
            }

            if (props.disabledDates || props.enabledDates || props.disabledDays) {
                validDay = !isDayDisabled(day, month, year);
            }

            if (props.selectOtherMonths === false && otherMonth) {
                validMonth = false;
            }

            return validMin && validMax && validDate && validDay && validMonth;
        };

        const isSelectableTime = (value) => {
            let validMin = true;
            let validMax = true;

            if (props.minDate && props.minDate.toDateString() === value.toDateString()) {
                if (props.minDate.getHours() > value.getHours()) {
                    validMin = false;
                } else if (props.minDate.getHours() === value.getHours()) {
                    if (props.minDate.getMinutes() > value.getMinutes()) {
                        validMin = false;
                    } else if (props.minDate.getMinutes() === value.getMinutes()) {
                        if (props.minDate.getSeconds() > value.getSeconds()) {
                            validMin = false;
                        } else if (props.minDate.getSeconds() === value.getSeconds()) {
                            if (props.minDate.getMilliseconds() > value.getMilliseconds()) {
                                validMin = false;
                            }
                        }
                    }
                }
            }

            if (props.maxDate && props.maxDate.toDateString() === value.toDateString()) {
                if (props.maxDate.getHours() < value.getHours()) {
                    validMax = false;
                } else if (props.maxDate.getHours() === value.getHours()) {
                    if (props.maxDate.getMinutes() < value.getMinutes()) {
                        validMax = false;
                    } else if (props.maxDate.getMinutes() === value.getMinutes()) {
                        if (props.maxDate.getSeconds() < value.getSeconds()) {
                            validMax = false;
                        } else if (props.maxDate.getSeconds() === value.getSeconds()) {
                            if (props.maxDate.getMilliseconds() < value.getMilliseconds()) {
                                validMax = false;
                            }
                        }
                    }
                }
            }

            return validMin && validMax;
        };

        const isSelected = (dateMeta) => {
            if (props.value) {
                if (isSingleSelection()) {
                    return isDateEquals(props.value, dateMeta);
                } else if (isMultipleSelection()) {
                    let selected = false;

                    for (let date of props.value) {
                        selected = isDateEquals(date, dateMeta);

                        if (selected) {
                            break;
                        }
                    }

                    return selected;
                } else if (isRangeSelection()) {
                    if (props.value[1]) return isDateEquals(props.value[0], dateMeta) || isDateEquals(props.value[1], dateMeta) || isDateBetween(props.value[0], props.value[1], dateMeta);
                    else {
                        return isDateEquals(props.value[0], dateMeta);
                    }
                }
            } else {
                return false;
            }
        };

        const isComparable = () => {
            return props.value != null && typeof props.value !== 'string';
        };

        const isMonthSelected = (month) => {
            if (isComparable()) {
                let value = isRangeSelection() ? props.value[0] : props.value;

                if (isMultipleSelection()) {
                    return value.some((currentValue) => currentValue.getMonth() === month && currentValue.getFullYear() === currentYear);
                } else {
                    return value.getMonth() === month && value.getFullYear() === currentYear;
                }
            }

            return false;
        };

        const isYearSelected = (year) => {
            if (isComparable()) {
                let value = isRangeSelection() ? props.value[0] : props.value;

                if (isMultipleSelection()) {
                    return value.some((currentValue) => currentValue.getFullYear() === year);
                } else {
                    return value.getFullYear() === year;
                }
            }

            return false;
        };

        const switchViewButtonDisabled = () => {
            return props.numberOfMonths > 1 || props.disabled;
        };

        const isDateEquals = (value, dateMeta) => {
            if (value && value instanceof Date) return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
            else return false;
        };

        const isDateBetween = (start, end, dateMeta) => {
            let between = false;

            if (start && end) {
                let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);

                return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
            }

            return between;
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

        const isToday = (today, day, month, year) => {
            return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
        };

        const isDayDisabled = (day, month, year) => {
            let isDisabled = false;

            // first check for disabled dates
            if (props.disabledDates) {
                if (props.disabledDates.some((d) => d.getFullYear() === year && d.getMonth() === month && d.getDate() === day)) {
                    isDisabled = true;
                }
            }

            // next if not disabled then check for disabled days
            if (!isDisabled && props.disabledDays && currentView === 'date') {
                let weekday = new Date(year, month, day);
                let weekdayNumber = weekday.getDay();

                if (props.disabledDays.indexOf(weekdayNumber) !== -1) {
                    isDisabled = true;
                }
            }

            // last check for enabled dates to force dates enabled
            if (props.enabledDates) {
                const isEnabled = props.enabledDates.some((d) => d.getFullYear() === year && d.getMonth() === month && d.getDate() === day);

                if (isEnabled) {
                    isDisabled = false;
                } else if (!props.disabledDays && !props.disabledDates) {
                    // disable other dates when only enabledDates are present
                    isDisabled = true;
                }
            }

            return isDisabled;
        };

        const isMonthYearDisabled = (month, year) => {
            const daysCountInAllMonth = month === -1 ? new Array(12).fill(0).map((_, i) => getDaysCountInMonth(i, year)) : [getDaysCountInMonth(month, year)];

            for (let i = 0; i < daysCountInAllMonth.length; i++) {
                const monthDays = daysCountInAllMonth[i];
                const _month = month === -1 ? i : month;

                for (let day = 1; day <= monthDays; day++) {
                    let isDateSelectable = isSelectable(day, _month, year);

                    if (isDateSelectable) {
                        return false;
                    }
                }
            }

            return true;
        };

        const updateInputfield = (value) => {
            if (!inputRef.current) {
                return;
            }

            let formattedValue = '';

            if (value) {
                try {
                    if (isSingleSelection()) {
                        formattedValue = isValidDate(value) ? formatDateTime(value) : props.keepInvalid ? value : '';
                    } else if (isMultipleSelection()) {
                        for (let i = 0; i < value.length; i++) {
                            let selectedValue = value[i];
                            let dateAsString = isValidDate(selectedValue) ? formatDateTime(selectedValue) : '';

                            formattedValue += dateAsString;

                            if (i !== value.length - 1) {
                                formattedValue += ', ';
                            }
                        }
                    } else if (isRangeSelection()) {
                        if (value && value.length) {
                            let startDate = value[0];
                            let endDate = value[1];

                            formattedValue = isValidDate(startDate) ? formatDateTime(startDate) : '';

                            if (endDate) {
                                formattedValue += isValidDate(endDate) ? ' - ' + formatDateTime(endDate) : '';
                            }
                        }
                    }
                } catch (err) {
                    formattedValue = value;
                }
            }

            inputRef.current.value = formattedValue;
        };

        const formatDateTime = (date) => {
            if (props.formatDateTime) {
                return props.formatDateTime(date);
            }

            let formattedValue = null;

            if (date) {
                if (props.timeOnly) {
                    formattedValue = formatTime(date);
                } else {
                    formattedValue = formatDate(date, getDateFormat());

                    if (props.showTime) {
                        formattedValue += ' ' + formatTime(date);
                    }
                }
            }

            return formattedValue;
        };

        const formatDate = (date, format) => {
            if (!date) {
                return '';
            }

            let iFormat;

            const lookAhead = (match) => {
                    const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

                    if (matches) {
                        iFormat++;
                    }

                    return matches;
                },
                formatNumber = (match, value, len) => {
                    let num = '' + value;

                    if (lookAhead(match)) {
                        while (num.length < len) {
                            num = '0' + num;
                        }
                    }

                    return num;
                },
                formatName = (match, value, shortNames, longNames) => {
                    return lookAhead(match) ? longNames[value] : shortNames[value];
                };

            let output = '';
            let literal = false;
            const { dayNamesShort, dayNames, monthNamesShort, monthNames } = localeOptions(props.locale);

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
                                output += formatName('D', date.getDay(), dayNamesShort, dayNames);
                                break;
                            case 'o':
                                output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case 'm':
                                output += formatNumber('m', date.getMonth() + 1, 2);
                                break;
                            case 'M':
                                output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
                                break;
                            case 'y':
                                output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + (date.getFullYear() % 100);
                                break;
                            case '@':
                                output += date.getTime();
                                break;
                            case '!':
                                output += date.getTime() * 10000 + ticksTo1970;
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

        const formatTime = (date) => {
            if (!date) {
                return '';
            }

            let output = '';
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let milliseconds = date.getMilliseconds();

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

            if (props.showMillisec) {
                output += '.';
                output += milliseconds < 100 ? (milliseconds < 10 ? '00' : '0') + milliseconds : milliseconds;
            }

            if (props.hourFormat === '12') {
                output += date.getHours() > 11 ? ' PM' : ' AM';
            }

            return output;
        };

        const parseValueFromString = (text) => {
            if (!text || text.trim().length === 0) {
                return null;
            }

            let value;

            if (isSingleSelection()) {
                value = parseDateTime(text);
            } else if (isMultipleSelection()) {
                let tokens = text.split(',');

                value = [];

                for (let token of tokens) {
                    value.push(parseDateTime(token.trim()));
                }
            } else if (isRangeSelection()) {
                let tokens = text.split(' - ');

                value = [];

                for (let i = 0; i < tokens.length; i++) {
                    value[i] = parseDateTime(tokens[i].trim());
                }
            }

            return value;
        };

        const parseDateTime = (text) => {
            if (props.parseDateTime) {
                return props.parseDateTime(text);
            }

            let date;
            let parts = text.split(' ');

            if (props.timeOnly) {
                date = new Date();
                populateTime(date, parts[0], parts[1]);
            } else {
                if (props.showTime) {
                    date = parseDate(parts[0], getDateFormat());
                    populateTime(date, parts[1], parts[2]);
                } else {
                    date = parseDate(text, getDateFormat());
                }
            }

            return date;
        };

        const populateTime = (value, timeString, ampm) => {
            if (props.hourFormat === '12' && ampm !== 'PM' && ampm !== 'AM') {
                throw new Error('Invalid Time');
            }

            let time = parseTime(timeString, ampm);

            value.setHours(time.hour);
            value.setMinutes(time.minute);
            value.setSeconds(time.second);
            value.setMilliseconds(time.millisecond);
        };

        const parseTime = (value, ampm) => {
            value = props.showMillisec ? value.replace('.', ':') : value;
            let tokens = value.split(':');
            let validTokenLength = props.showSeconds ? 3 : 2;

            validTokenLength = props.showMillisec ? validTokenLength + 1 : validTokenLength;

            if (tokens.length !== validTokenLength || tokens[0].length !== 2 || tokens[1].length !== 2 || (props.showSeconds && tokens[2].length !== 2) || (props.showMillisec && tokens[3].length !== 3)) {
                throw new Error('Invalid time');
            }

            let h = parseInt(tokens[0], 10);
            let m = parseInt(tokens[1], 10);
            let s = props.showSeconds ? parseInt(tokens[2], 10) : null;
            let ms = props.showMillisec ? parseInt(tokens[3], 10) : null;

            if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || (props.hourFormat === '12' && h > 12) || (props.showSeconds && (isNaN(s) || s > 59)) || (props.showMillisec && (isNaN(s) || s > 1000))) {
                throw new Error('Invalid time');
            } else {
                if (props.hourFormat === '12') {
                    if (h !== 12 && ampm === 'PM') {
                        h += 12;
                    }

                    if (h === 12 && ampm === 'AM') {
                        h -= 12;
                    }
                }

                return { hour: h, minute: m, second: s, millisecond: ms };
            }
        };

        // Ported from jquery-ui datepicker parseDate
        const parseDate = (value, format) => {
            if (format == null || value == null) {
                throw new Error('Invalid arguments');
            }

            value = typeof value === 'object' ? value.toString() : value + '';

            if (value === '') {
                return null;
            }

            let iFormat,
                dim,
                extra,
                iValue = 0,
                shortYearCutoff = typeof props.shortYearCutoff !== 'string' ? props.shortYearCutoff : (new Date().getFullYear() % 100) + parseInt(props.shortYearCutoff, 10),
                year = -1,
                month = -1,
                day = -1,
                doy = -1,
                literal = false,
                date,
                lookAhead = (match) => {
                    let matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

                    if (matches) {
                        iFormat++;
                    }

                    return matches;
                },
                getNumber = (match) => {
                    let isDoubled = lookAhead(match),
                        size = match === '@' ? 14 : match === '!' ? 20 : match === 'y' && isDoubled ? 4 : match === 'o' ? 3 : 2,
                        minSize = match === 'y' ? size : 1,
                        digits = new RegExp('^\\d{' + minSize + ',' + size + '}'),
                        num = value.substring(iValue).match(digits);

                    if (!num) {
                        throw new Error('Missing number at position ' + iValue);
                    }

                    iValue += num[0].length;

                    return parseInt(num[0], 10);
                },
                getName = (match, shortNames, longNames) => {
                    let index = -1;
                    let arr = lookAhead(match) ? longNames : shortNames;
                    let names = [];

                    for (let i = 0; i < arr.length; i++) {
                        names.push([i, arr[i]]);
                    }

                    names.sort((a, b) => {
                        return -(a[1].length - b[1].length);
                    });

                    for (let i = 0; i < names.length; i++) {
                        let name = names[i][1];

                        if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                            index = names[i][0];
                            iValue += name.length;
                            break;
                        }
                    }

                    if (index !== -1) {
                        return index + 1;
                    } else {
                        throw new Error('Unknown name at position ' + iValue);
                    }
                },
                checkLiteral = () => {
                    if (value.charAt(iValue) !== format.charAt(iFormat)) {
                        throw new Error('Unexpected literal at position ' + iValue);
                    }

                    iValue++;
                };

            if (props.view === 'month') {
                day = 1;
            }

            if (props.view === 'year') {
                day = 1;
                month = 1;
            }

            const { dayNamesShort, dayNames, monthNamesShort, monthNames } = localeOptions(props.locale);

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
                            getName('D', dayNamesShort, dayNames);
                            break;
                        case 'o':
                            doy = getNumber('o');
                            break;
                        case 'm':
                            month = getNumber('m');
                            break;
                        case 'M':
                            month = getName('M', monthNamesShort, monthNames);
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
                            date = new Date((getNumber('!') - ticksTo1970) / 10000);
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
                    throw new Error('Extra/unparsed characters found in date: ' + extra);
                }
            }

            if (year === -1) {
                year = new Date().getFullYear();
            } else if (year < 100) {
                year += new Date().getFullYear() - (new Date().getFullYear() % 100) + (year <= shortYearCutoff ? 0 : -100);
            }

            if (doy > -1) {
                month = 1;
                day = doy;

                do {
                    dim = getDaysCountInMonth(year, month - 1);

                    if (day <= dim) {
                        break;
                    }

                    month++;
                    day -= dim;
                } while (true);
            }

            date = daylightSavingAdjust(new Date(year, month - 1, day));

            if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
                throw new Error('Invalid date'); // E.g. 31/02/00
            }

            return date;
        };

        const isInMinYear = (viewDate) => {
            return props.minDate && props.minDate.getFullYear() === viewDate.getFullYear();
        };

        const isInMaxYear = (viewDate) => {
            return props.maxDate && props.maxDate.getFullYear() === viewDate.getFullYear();
        };

        React.useEffect(() => {
            ObjectUtils.combinedRefs(inputRef, props.inputRef);
        }, [inputRef, props.inputRef]);

        useMountEffect(() => {
            let viewDate = getViewDate(props.viewDate);

            validateDate(viewDate);
            setViewDateState(viewDate);

            setCurrentMonth(viewDate.getMonth());
            setCurrentYear(viewDate.getFullYear());
            setCurrentView(props.view);

            if (!idState) {
                const uniqueId = UniqueComponentId();

                !idState && setIdState(uniqueId);
            }

            if (props.inline) {
                overlayRef && overlayRef.current.setAttribute(attributeSelector, '');

                if (!props.disabled) {
                    initFocusableCell();

                    if (props.numberOfMonths === 1) {
                        overlayRef.current.style.width = DomHandler.getOuterWidth(overlayRef.current) + 'px';
                    }
                }
            } else {
                // @todo
                //alignOverlay();
            }

            if (props.value) {
                updateInputfield(props.value);
                setValue(props.value);
            }

            if (props.autoFocus) {
                // delay showing until rendered so `alignPanel()` method aligns the popup in the right location
                setTimeout(() => DomHandler.focus(inputRef.current, props.autoFocus), 200);
            }
        });

        React.useEffect(() => {
            // see https://github.com/primefaces/primereact/issues/4030
            onChangeRef.current = props.onChange;
        }, [props.onChange]);

        React.useEffect(() => {
            let unbindMaskEvents = null;

            if (props.mask) {
                unbindMaskEvents = mask(inputRef.current, {
                    mask: props.mask,
                    slotChar: props.maskSlotChar,
                    readOnly: props.readOnlyInput || props.disabled,
                    onChange: (e) => {
                        updateValueOnInput(e.originalEvent, e.value, () => {
                            return false;
                        });
                    },
                    onBlur: (e) => {
                        updateValueOnInput(e, e.target.value);
                    }
                }).unbindEvents;
            }

            return () => {
                props.mask && unbindMaskEvents && unbindMaskEvents();
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.disabled, props.mask, props.readOnlyInput]);

        useUpdateEffect(() => {
            if (viewChangedWithKeyDown.current) {
                setCurrentView(props.view);
            }

            viewChangedWithKeyDown.current = false;
        }, [props.view]);

        useUpdateEffect(() => {
            focusToFirstCell();
        }, [currentView]);

        useUpdateEffect(() => {
            if (!props.onViewDateChange && !viewStateChanged.current) {
                setValue(props.value);
            }

            if (props.viewDate) {
                updateViewDate(null, getViewDate(props.viewDate));
            }
        }, [props.onViewDateChange, props.value, props.viewDate]);

        useUpdateEffect(() => {
            if (overlayVisibleState || props.visible) {
                // Github #5529
                setTimeout(() => {
                    alignOverlay();
                });
            }
        }, [currentView, overlayVisibleState, props.visible]);

        useUpdateEffect(() => {
            const newDate = props.value;

            if (previousValue !== newDate) {
                updateInputfield(newDate);

                // #3516 view date not updated when value set programatically
                if (!visible && newDate) {
                    let viewDate = newDate;

                    if (isMultipleSelection()) {
                        if (newDate.length) {
                            viewDate = newDate[newDate.length - 1];
                        }
                    } else if (isRangeSelection()) {
                        if (newDate.length) {
                            let startDate = newDate[0];
                            let endDate = newDate[1];

                            viewDate = endDate || startDate;
                        }
                    }

                    if (viewDate instanceof Date) {
                        validateDate(viewDate);
                        setViewDateState(viewDate);
                        setCurrentMonth(viewDate.getMonth());
                        setCurrentYear(viewDate.getFullYear());
                    }
                }
            }
        }, [props.value, visible]);

        useUpdateEffect(() => {
            updateInputfield(props.value);
        }, [props.dateFormat, props.hourFormat, props.timeOnly, props.showSeconds, props.showMillisec, props.showTime, props.locale]);

        useUpdateEffect(() => {
            if (overlayRef.current) {
                setNavigationState(viewDateState);
                updateFocus();
            }
        });

        useUnmountEffect(() => {
            if (touchUIMask.current) {
                disableModality();
                touchUIMask.current = null;
            }

            ZIndexUtils.clear(overlayRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            hide,
            getCurrentDateTime,
            getViewDate,
            updateViewDate,
            focus: () => DomHandler.focus(inputRef.current),
            getElement: () => elementRef.current,
            getOverlay: () => overlayRef.current,
            getInput: () => inputRef.current
        }));

        const setValue = (propValue) => {
            if (Array.isArray(propValue)) {
                propValue = propValue[0];
            }

            let prevPropValue = previousValue;

            if (Array.isArray(prevPropValue)) {
                prevPropValue = prevPropValue[0];
            }

            let viewDate = props.viewDate && isValidDate(props.viewDate) ? props.viewDate : propValue && isValidDate(propValue) ? propValue : new Date();

            if (isClearClicked.current && props.showTime) {
                viewDate.setHours(0, 0, 0);

                isClearClicked.current = false;
            }

            if ((!prevPropValue && propValue) || (propValue && propValue instanceof Date && propValue.getTime() !== prevPropValue.getTime())) {
                validateDate(viewDate);
            }

            setViewDateState(viewDate);
            viewStateChanged.current = true;
        };

        const createBackwardNavigator = (isVisible) => {
            const navigatorProps = isVisible ? { onClick: onPrevButtonClick, onKeyDown: (e) => onContainerButtonKeydown(e, trapFocus) } : { style: { visibility: 'hidden' } };
            const previousIconProps = mergeProps(
                {
                    className: cx('previousIcon')
                },
                ptm('previousIcon')
            );
            const icon = props.prevIcon || <ChevronLeftIcon {...previousIconProps} />;
            const backwardNavigatorIcon = IconUtils.getJSXIcon(icon, { ...previousIconProps }, { props });
            const { prevDecade, prevYear, prevMonth } = localeOptions(props.locale);
            const previousButtonLabel = currentView === 'year' ? prevDecade : currentView === 'month' ? prevYear : prevMonth;
            const previousButtonProps = mergeProps(
                {
                    type: 'button',
                    className: cx('previousButton'),
                    'aria-label': previousButtonLabel,
                    ...navigatorProps
                },
                ptm('previousButton')
            );

            return (
                <button ref={previousButton} {...previousButtonProps}>
                    {backwardNavigatorIcon}
                    <Ripple />
                </button>
            );
        };

        const createForwardNavigator = (isVisible) => {
            const navigatorProps = isVisible ? { onClick: onNextButtonClick, onKeyDown: (e) => onContainerButtonKeydown(e) } : { style: { visibility: 'hidden' } };
            const nextIconProps = mergeProps(
                {
                    className: cx('nextIcon')
                },
                ptm('nextIcon')
            );
            const icon = props.nextIcon || <ChevronRightIcon {...nextIconProps} />;
            const forwardNavigatorIcon = IconUtils.getJSXIcon(icon, { ...nextIconProps }, { props });
            const { nextDecade, nextYear, nextMonth } = localeOptions(props.locale);
            const nextButtonLabel = currentView === 'year' ? nextDecade : currentView === 'month' ? nextYear : nextMonth;
            const nextButtonProps = mergeProps(
                {
                    type: 'button',
                    className: cx('nextButton'),
                    'aria-label': nextButtonLabel,
                    ...navigatorProps
                },
                ptm('nextButton')
            );

            return (
                <button ref={nextButton} {...nextButtonProps}>
                    {forwardNavigatorIcon}
                    <Ripple />
                </button>
            );
        };

        const renderMonthsNavigator = (index) => {
            return props.monthNavigator && props.view !== 'month' && (props.numberOfMonths === 1 || index === 0);
        };

        const createTitleMonthElement = (month, monthIndex) => {
            const monthNames = localeOption('monthNames', props.locale);

            if (renderMonthsNavigator(monthIndex)) {
                const viewDate = getViewDate();
                const viewMonth = viewDate.getMonth();
                const displayedMonthOptions = monthNames
                    .map((month, index) => ((!isInMinYear(viewDate) || index >= props.minDate.getMonth()) && (!isInMaxYear(viewDate) || index <= props.maxDate.getMonth()) ? { label: month, value: index, index } : null))
                    .filter((option) => !!option);
                const displayedMonthNames = displayedMonthOptions.map((option) => option.label);
                const selectProps = mergeProps(
                    {
                        className: cx('select'),
                        onChange: (e) => onMonthDropdownChange(e, e.target.value),
                        value: viewMonth
                    },
                    ptm('select')
                );
                const content = (
                    <select {...selectProps}>
                        {displayedMonthOptions.map((option) => {
                            const optionProps = mergeProps(
                                {
                                    value: option.value
                                },
                                ptm('option')
                            );

                            return (
                                <option {...optionProps} key={option.label}>
                                    {option.label}
                                </option>
                            );
                        })}
                    </select>
                );

                if (props.monthNavigatorTemplate) {
                    const defaultContentOptions = {
                        onChange: onMonthDropdownChange,
                        className: 'p-datepicker-month',
                        value: viewMonth,
                        names: displayedMonthNames,
                        options: displayedMonthOptions,
                        element: content,
                        props
                    };

                    return ObjectUtils.getJSXElement(props.monthNavigatorTemplate, defaultContentOptions);
                }

                return content;
            }

            const monthTitleProps = mergeProps(
                {
                    className: cx('monthTitle'),
                    onKeyDown: onContainerButtonKeydown,
                    'aria-label': localeOption('chooseMonth', props.locale),
                    onClick: switchToMonthView,
                    disabled: switchViewButtonDisabled()
                },
                ptm('monthTitle')
            );

            return currentView === 'date' && <button {...monthTitleProps}>{monthNames[month]}</button>;
        };

        const createTitleYearElement = (metaYear) => {
            const viewDate = getViewDate();
            const viewYear = viewDate.getFullYear();

            if (props.yearNavigator) {
                let yearOptions = [];

                if (props.yearRange) {
                    const years = props.yearRange.split(':');
                    const yearStart = parseInt(years[0], 10);
                    const yearEnd = parseInt(years[1], 10);

                    for (let i = yearStart; i <= yearEnd; i++) {
                        yearOptions.push(i);
                    }
                } else {
                    const base = viewYear - (viewYear % 10);

                    for (let i = 0; i < 10; i++) {
                        yearOptions.push(base + i);
                    }
                }

                const displayedYearNames = yearOptions.filter((year) => !(props.minDate && props.minDate.getFullYear() > year) && !(props.maxDate && props.maxDate.getFullYear() < year));
                const selectProps = mergeProps(
                    {
                        className: cx('select'),
                        onChange: (e) => onYearDropdownChange(e, e.target.value),
                        value: viewYear
                    },
                    ptm('select')
                );

                const content = (
                    <select {...selectProps}>
                        {displayedYearNames.map((year) => {
                            const optionProps = mergeProps(
                                {
                                    value: year
                                },
                                ptm('option')
                            );

                            return (
                                <option {...optionProps} key={year}>
                                    {year}
                                </option>
                            );
                        })}
                    </select>
                );

                if (props.yearNavigatorTemplate) {
                    const options = displayedYearNames.map((name, i) => ({ label: name, value: name, index: i }));
                    const defaultContentOptions = {
                        onChange: onYearDropdownChange,
                        className: 'p-datepicker-year',
                        value: viewYear,
                        names: displayedYearNames,
                        options,
                        element: content,
                        props
                    };

                    return ObjectUtils.getJSXElement(props.yearNavigatorTemplate, defaultContentOptions);
                }

                return content;
            }

            const displayYear = props.numberOfMonths > 1 ? metaYear : currentYear;
            const yearTitleProps = mergeProps(
                {
                    className: cx('yearTitle'),
                    'aria-label': localeOption('chooseYear', props.locale),
                    onClick: (e) => switchToYearView(e),
                    disabled: switchViewButtonDisabled()
                },
                ptm('yearTitle')
            );

            return currentView !== 'year' && <button {...yearTitleProps}>{displayYear}</button>;
        };

        const createTitleDecadeElement = () => {
            const years = yearPickerValues();
            const decadeTitleProps = mergeProps(
                {
                    className: cx('decadeTitle')
                },
                ptm('decadeTitle')
            );

            if (currentView === 'year') {
                const decadeTitleTextProps = mergeProps(ptm('decadeTitleText'));

                return <span {...decadeTitleProps}>{props.decadeTemplate ? props.decadeTemplate(years) : <span {...decadeTitleTextProps}>{`${yearPickerValues()[0]} - ${yearPickerValues()[yearPickerValues().length - 1]}`}</span>}</span>;
            }

            return null;
        };

        const createTitle = (monthMetaData, index) => {
            const month = createTitleMonthElement(monthMetaData.month, index);
            const year = createTitleYearElement(monthMetaData.year);
            const decade = createTitleDecadeElement();
            const titleProps = mergeProps(
                {
                    className: cx('title')
                },
                ptm('title')
            );
            const showMonthAfterYear = localeOption('showMonthAfterYear', props.locale);

            return (
                <div {...titleProps}>
                    {showMonthAfterYear ? year : month}
                    {showMonthAfterYear ? month : year}
                    {decade}
                </div>
            );
        };

        const createDayNames = (weekDays) => {
            const weekDayProps = mergeProps(ptm('weekDay'));
            const tableHeaderCellProps = mergeProps(
                {
                    scope: 'col'
                },
                ptm('tableHeaderCell')
            );
            const dayNames = weekDays.map((weekDay, index) => (
                <th {...tableHeaderCellProps} key={`${weekDay}-${index}`}>
                    <span {...weekDayProps}>{weekDay}</span>
                </th>
            ));

            if (props.showWeek) {
                const weekHeaderProps = mergeProps(
                    {
                        scope: 'col',
                        className: cx('weekHeader'),
                        'data-p-disabled': props.showWeek
                    },
                    ptm('weekHeader', {
                        context: {
                            disabled: props.showWeek
                        }
                    })
                );

                const weekLabel = mergeProps(ptm('weekLabel'));

                const weekHeader = (
                    <th {...weekHeaderProps} key="wn">
                        <span {...weekLabel}>{localeOption('weekHeader', props.locale)}</span>
                    </th>
                );

                return [weekHeader, ...dayNames];
            }

            return dayNames;
        };

        const createDateCellContent = (date, className, groupIndex) => {
            const content = props.dateTemplate ? props.dateTemplate(date) : date.day;

            const selected = isSelected(date);

            const dayLabelProps = mergeProps(
                {
                    className: cx('dayLabel', { className }),
                    'aria-selected': selected,
                    'aria-disabled': !date.selectable,
                    onClick: (e) => onDateSelect(e, date),
                    onKeyDown: (e) => onDateCellKeydown(e, date, groupIndex),
                    'data-p-highlight': selected,
                    'data-p-disabled': !date.selectable
                },
                ptm('dayLabel', {
                    context: {
                        selected: selected,
                        disabled: !date.selectable
                    }
                })
            );

            return (
                <span {...dayLabelProps}>
                    {content}
                    {selected && <div aria-live="polite" className="p-hidden-accessible" data-p-hidden-accessible={true} pt={ptm('hiddenSelectedDay')}></div>}
                </span>
            );
        };

        const createWeek = (weekDates, weekNumber, groupIndex) => {
            const week = weekDates.map((date) => {
                const selected = isSelected(date);
                const dateClassName = classNames({ 'p-highlight': selected, 'p-disabled': !date.selectable });
                const content = date.otherMonth && !props.showOtherMonths ? null : createDateCellContent(date, dateClassName, groupIndex);
                const dayProps = mergeProps(
                    {
                        className: cx('day', { date }),
                        'aria-label': date.day,
                        'data-p-today': date.today,
                        'data-p-other-month': date.otherMonth
                    },
                    ptm('day', {
                        context: {
                            date,
                            today: date.today,
                            otherMonth: date.otherMonth
                        }
                    })
                );

                return (
                    <td {...dayProps} key={date.day}>
                        {content}
                    </td>
                );
            });

            if (props.showWeek) {
                const weekNumberProps = mergeProps(
                    {
                        className: cx('weekNumber')
                    },
                    ptm('weekNumber')
                );

                const weekLabelContainerProps = mergeProps(
                    {
                        className: cx('weekLabelContainer'),
                        'data-p-disabled': props.showWeek
                    },
                    ptm('weekLabelContainer', {
                        context: {
                            disabled: props.showWeek
                        }
                    })
                );

                const weekNumberCell = (
                    <td {...weekNumberProps} key={'wn' + weekNumber}>
                        <span {...weekLabelContainerProps}>{weekNumber}</span>
                    </td>
                );

                return [weekNumberCell, ...week];
            }

            return week;
        };

        const createDates = (monthMetaData, groupIndex) => {
            const tableBodyRowProps = mergeProps(ptm('tableBodyRowProps'));

            return monthMetaData.dates.map((weekDates, index) => (
                <tr {...tableBodyRowProps} key={index}>
                    {createWeek(weekDates, monthMetaData.weekNumbers[index], groupIndex)}
                </tr>
            ));
        };

        const createDateViewGrid = (monthMetaData, weekDays, groupIndex) => {
            const dayNames = createDayNames(weekDays);
            const dates = createDates(monthMetaData, groupIndex);
            const containerProps = mergeProps(
                {
                    className: cx('container'),
                    key: UniqueComponentId('calendar_container_')
                },
                ptm('container')
            );
            const tableProps = mergeProps(
                {
                    role: 'grid',
                    className: cx('table')
                },
                ptm('table')
            );
            const tableHeaderProps = mergeProps(ptm('tableHeader'));
            const tableHeaderRowProps = mergeProps(ptm('tableHeaderRow'));
            const tableBodyProps = mergeProps(ptm('tableBody'));

            return (
                currentView === 'date' && (
                    <div {...containerProps}>
                        <table {...tableProps}>
                            <thead {...tableHeaderProps}>
                                <tr {...tableHeaderRowProps}>{dayNames}</tr>
                            </thead>
                            <tbody {...tableBodyProps}>{dates}</tbody>
                        </table>
                    </div>
                )
            );
        };

        const createMonth = (monthMetaData, index) => {
            const weekDays = createWeekDaysMeta();
            const backwardNavigator = createBackwardNavigator(index === 0);
            const forwardNavigator = createForwardNavigator(props.numberOfMonths === 1 || index === props.numberOfMonths - 1);
            const title = createTitle(monthMetaData, index);

            const dateViewGrid = createDateViewGrid(monthMetaData, weekDays, index);
            const header = props.headerTemplate ? props.headerTemplate() : null;
            const monthKey = monthMetaData.month + '-' + monthMetaData.year;
            const groupProps = mergeProps(
                {
                    className: cx('group')
                },
                ptm('group')
            );

            const headerProps = mergeProps(
                {
                    className: cx('header'),
                    key: index
                },
                ptm('header')
            );

            return (
                <div {...groupProps} key={monthKey}>
                    <div {...headerProps}>
                        {header}
                        {backwardNavigator}
                        {title}
                        {forwardNavigator}
                    </div>
                    {dateViewGrid}
                </div>
            );
        };

        const createMonths = (monthsMetaData) => {
            const groups = monthsMetaData.map(createMonth);

            const groupContainerProps = mergeProps(
                {
                    className: cx('groupContainer')
                },
                ptm('groupContainer')
            );

            return <div {...groupContainerProps}>{groups}</div>;
        };

        const createDateView = () => {
            const viewDate = getViewDate();
            const monthsMetaData = createMonthsMeta(viewDate.getMonth(), viewDate.getFullYear());
            const months = createMonths(monthsMetaData);

            return months;
        };

        const monthPickerValues = () => {
            let monthPickerValues = [];
            const monthNamesShort = localeOption('monthNamesShort', props.locale);

            for (let i = 0; i <= 11; i++) {
                monthPickerValues.push(monthNamesShort[i]);
            }

            return monthPickerValues;
        };

        const yearPickerValues = () => {
            let yearPickerValues = [];
            let base = currentYear - (currentYear % 10);

            for (let i = 0; i < 10; i++) {
                yearPickerValues.push(base + i);
            }

            return yearPickerValues;
        };

        const createMonthYearView = () => {
            const backwardNavigator = createBackwardNavigator(true);
            const forwardNavigator = createForwardNavigator(true);
            const yearElement = createTitleYearElement(getViewDate().getFullYear());
            const decade = createTitleDecadeElement();
            const groupContainerProps = mergeProps(
                {
                    className: cx('groupContainer')
                },
                ptm('groupContainer')
            );

            const groupProps = mergeProps(
                {
                    className: cx('group')
                },
                ptm('group')
            );

            const headerProps = mergeProps(
                {
                    className: cx('header')
                },
                ptm('header')
            );

            const titleProps = mergeProps(
                {
                    className: cx('title')
                },
                ptm('title')
            );

            return (
                <>
                    <div {...groupContainerProps}>
                        <div {...groupProps}>
                            <div {...headerProps}>
                                {backwardNavigator}
                                <div {...titleProps}>
                                    {yearElement}
                                    {decade}
                                </div>
                                {forwardNavigator}
                            </div>
                        </div>
                    </div>
                </>
            );
        };

        const createDatePicker = () => {
            if (!props.timeOnly) {
                if (props.view === 'date') {
                    return createDateView();
                } else {
                    return createMonthYearView();
                }
            }

            return null;
        };

        const incrementIconProps = mergeProps(ptm('incrementIcon'));
        const decrementIconProps = mergeProps(ptm('decrementIcon'));
        const incrementIcon = IconUtils.getJSXIcon(props.incrementIcon || <ChevronUpIcon {...incrementIconProps} />, { ...incrementIconProps }, { props });
        const decrementIcon = IconUtils.getJSXIcon(props.decrementIcon || <ChevronDownIcon {...decrementIconProps} />, { ...decrementIconProps }, { props });

        const createHourPicker = () => {
            const currentTime = getCurrentDateTime();
            const minute = doStepMinute(currentTime.getMinutes());
            let hour = currentTime.getHours();

            // #3770 account for step minutes rolling to next hour
            hour = minute > 59 ? hour + 1 : hour;

            if (props.hourFormat === '12') {
                if (hour === 0) hour = 12;
                else if (hour > 11 && hour !== 12) hour = hour - 12;
            }

            const hourProps = mergeProps(ptm('hour'));
            const { nextHour, prevHour } = localeOptions(props.locale);
            const hourDisplay = hour < 10 ? '0' + hour : hour;
            const hourPickerProps = mergeProps(
                {
                    className: cx('hourPicker')
                },
                ptm('hourPicker')
            );

            const incrementButtonProps = mergeProps(
                {
                    type: 'button',
                    className: cx('incrementButton'),
                    'aria-label': nextHour,
                    onMouseDown: (e) => onTimePickerElementMouseDown(e, 0, 1),
                    onMouseUp: onTimePickerElementMouseUp,
                    onMouseLeave: onTimePickerElementMouseLeave,
                    onKeyDown: (e) => onPickerKeyDown(e, 0, 1),
                    onKeyUp: onPickerKeyUp
                },
                ptm('incrementButton')
            );

            const decrementButtonProps = mergeProps(
                {
                    type: 'button',
                    className: cx('decrementButton'),
                    'aria-label': prevHour,
                    onMouseDown: (e) => onTimePickerElementMouseDown(e, 0, -1),
                    onMouseUp: onTimePickerElementMouseUp,
                    onMouseLeave: onTimePickerElementMouseLeave,
                    onKeyDown: (e) => onPickerKeyDown(e, 0, -1),
                    onKeyUp: onPickerKeyUp
                },
                ptm('decrementButton')
            );

            return (
                <div {...hourPickerProps}>
                    <button {...incrementButtonProps}>
                        {incrementIcon}
                        <Ripple />
                    </button>
                    <span {...hourProps}>{hourDisplay}</span>
                    <button {...decrementButtonProps}>
                        {decrementIcon}
                        <Ripple />
                    </button>
                </div>
            );
        };

        const createMinutePicker = () => {
            const currentTime = getCurrentDateTime();
            let minute = doStepMinute(currentTime.getMinutes());

            minute = minute > 59 ? minute - 60 : minute;
            const minuteProps = mergeProps(ptm('minute'));
            const { nextMinute, prevMinute } = localeOptions(props.locale);
            const minuteDisplay = minute < 10 ? '0' + minute : minute;
            const minutePickerProps = mergeProps(
                {
                    className: cx('minutePicker')
                },
                ptm('minutePicker')
            );

            const incrementButtonProps = mergeProps(
                {
                    type: 'button',
                    className: cx('incrementButton'),
                    'aria-label': nextMinute,
                    onMouseDown: (e) => onTimePickerElementMouseDown(e, 1, 1),
                    onMouseUp: onTimePickerElementMouseUp,
                    onMouseLeave: onTimePickerElementMouseLeave,
                    onKeyDown: (e) => onPickerKeyDown(e, 1, 1),
                    onKeyUp: onPickerKeyUp
                },
                ptm('incrementButton')
            );

            const decrementButtonProps = mergeProps(
                {
                    type: 'button',
                    className: cx('decrementButton'),
                    'aria-label': prevMinute,
                    onMouseDown: (e) => onTimePickerElementMouseDown(e, 1, -1),
                    onMouseUp: onTimePickerElementMouseUp,
                    onMouseLeave: onTimePickerElementMouseLeave,
                    onKeyDown: (e) => onPickerKeyDown(e, 1, -1),
                    onKeyUp: onPickerKeyUp
                },
                ptm('decrementButton')
            );

            return (
                <div {...minutePickerProps}>
                    <button {...incrementButtonProps}>
                        {incrementIcon}
                        <Ripple />
                    </button>
                    <span {...minuteProps}>{minuteDisplay}</span>
                    <button {...decrementButtonProps}>
                        {decrementIcon}
                        <Ripple />
                    </button>
                </div>
            );
        };

        const createSecondPicker = () => {
            if (props.showSeconds) {
                const currentTime = getCurrentDateTime();
                const { nextSecond, prevSecond } = localeOptions(props.locale);
                const secondProps = mergeProps(ptm('second'));
                const second = currentTime.getSeconds();
                const secondDisplay = second < 10 ? '0' + second : second;
                const secondPickerProps = mergeProps(
                    {
                        className: cx('secondPicker')
                    },
                    ptm('secondPicker')
                );

                const incrementButtonProps = mergeProps(
                    {
                        type: 'button',
                        className: cx('incrementButton'),
                        'aria-label': nextSecond,
                        onMouseDown: (e) => onTimePickerElementMouseDown(e, 2, 1),
                        onMouseUp: onTimePickerElementMouseUp,
                        onMouseLeave: onTimePickerElementMouseLeave,
                        onKeyDown: (e) => onPickerKeyDown(e, 2, 1),
                        onKeyUp: onPickerKeyUp
                    },
                    ptm('incrementButton')
                );

                const decrementButtonProps = mergeProps(
                    {
                        type: 'button',
                        className: cx('decrementButton'),
                        'aria-label': prevSecond,
                        onMouseDown: (e) => onTimePickerElementMouseDown(e, 2, -1),
                        onMouseUp: onTimePickerElementMouseUp,
                        onMouseLeave: onTimePickerElementMouseLeave,
                        onKeyDown: (e) => onPickerKeyDown(e, 2, -1),
                        onKeyUp: onPickerKeyUp
                    },
                    ptm('decrementButton')
                );

                return (
                    <div {...secondPickerProps}>
                        <button {...incrementButtonProps}>
                            {incrementIcon}
                            <Ripple />
                        </button>
                        <span {...secondProps}>{secondDisplay}</span>
                        <button {...decrementButtonProps}>
                            {decrementIcon}
                            <Ripple />
                        </button>
                    </div>
                );
            }

            return null;
        };

        const createMiliSecondPicker = () => {
            if (props.showMillisec) {
                const currentTime = getCurrentDateTime();
                const { nextMilliSecond, prevMilliSecond } = localeOptions(props.locale);
                const millisecondProps = mergeProps(ptm('millisecond'));
                const millisecond = currentTime.getMilliseconds();
                const millisecondDisplay = millisecond < 100 ? (millisecond < 10 ? '00' : '0') + millisecond : millisecond;
                const millisecondPickerProps = mergeProps(
                    {
                        className: cx('millisecondPicker')
                    },
                    ptm('millisecondPicker')
                );

                const incrementButtonProps = mergeProps(
                    {
                        type: 'button',
                        className: cx('incrementButton'),
                        'aria-label': nextMilliSecond,
                        onMouseDown: (e) => onTimePickerElementMouseDown(e, 3, 1),
                        onMouseUp: onTimePickerElementMouseUp,
                        onMouseLeave: onTimePickerElementMouseLeave,
                        onKeyDown: (e) => onPickerKeyDown(e, 3, 1),
                        onKeyUp: onPickerKeyUp
                    },
                    ptm('incrementButton')
                );

                const decrementButtonProps = mergeProps(
                    {
                        type: 'button',
                        className: cx('decrementButton'),
                        'aria-label': prevMilliSecond,
                        onMouseDown: (e) => onTimePickerElementMouseDown(e, 3, -1),
                        onMouseUp: onTimePickerElementMouseUp,
                        onMouseLeave: onTimePickerElementMouseLeave,
                        onKeyDown: (e) => onPickerKeyDown(e, 3, -1),
                        onKeyUp: onPickerKeyUp
                    },
                    ptm('decrementButton')
                );

                return (
                    <div {...millisecondPickerProps}>
                        <button {...incrementButtonProps}>
                            {incrementIcon}
                            <Ripple />
                        </button>
                        <span {...millisecondProps}>{millisecondDisplay}</span>
                        <button {...decrementButtonProps}>
                            {decrementIcon}
                            <Ripple />
                        </button>
                    </div>
                );
            }

            return null;
        };

        const createAmPmPicker = () => {
            if (props.hourFormat === '12') {
                const currentTime = getCurrentDateTime();
                const { am, pm } = localeOptions(props.locale);
                const hour = currentTime.getHours();
                const display = hour > 11 ? 'PM' : 'AM';
                const ampmProps = mergeProps(ptm('ampm'));
                const ampmPickerProps = mergeProps(
                    {
                        className: cx('ampmPicker')
                    },
                    ptm('ampmPicker')
                );

                const incrementButtonProps = mergeProps(
                    {
                        type: 'button',
                        className: cx('incrementButton'),
                        'aria-label': am,
                        onClick: (e) => toggleAmPm(e)
                    },
                    ptm('incrementButton')
                );

                const decrementButtonProps = mergeProps(
                    {
                        type: 'button',
                        className: cx('decrementButton'),
                        'aria-label': pm,
                        onClick: (e) => toggleAmPm(e)
                    },
                    ptm('decrementButton')
                );

                return (
                    <div {...ampmPickerProps}>
                        <button {...incrementButtonProps}>
                            {incrementIcon}
                            <Ripple />
                        </button>
                        <span {...ampmProps}>{display}</span>
                        <button {...decrementButtonProps}>
                            {decrementIcon}
                            <Ripple />
                        </button>
                    </div>
                );
            }

            return null;
        };

        const createSeparator = (separator) => {
            const separatorContainerProps = mergeProps(
                {
                    className: cx('separatorContainer')
                },
                ptm('separatorContainer')
            );

            const separatorProps = mergeProps(ptm('separator'));

            return (
                <div {...separatorContainerProps}>
                    <span {...separatorProps}>{separator}</span>
                </div>
            );
        };

        const createTimePicker = () => {
            if ((props.showTime || props.timeOnly) && currentView === 'date') {
                const timePickerProps = mergeProps(
                    {
                        className: cx('timePicker')
                    },
                    ptm('timePicker')
                );

                return (
                    <div {...timePickerProps}>
                        {createHourPicker()}
                        {createSeparator(':')}
                        {createMinutePicker()}
                        {props.showSeconds && createSeparator(':')}
                        {createSecondPicker()}
                        {props.showMillisec && createSeparator('.')}
                        {createMiliSecondPicker()}
                        {props.hourFormat === '12' && createSeparator(':')}
                        {createAmPmPicker()}
                    </div>
                );
            }

            return null;
        };

        const createInputElement = () => {
            if (!props.inline) {
                return (
                    <InputText
                        ref={inputRef}
                        id={props.inputId}
                        name={props.name}
                        type="text"
                        role="combobox"
                        className={props.inputClassName}
                        style={props.inputStyle}
                        readOnly={props.readOnlyInput}
                        disabled={props.disabled}
                        required={props.required}
                        autoComplete="off"
                        placeholder={props.placeholder}
                        tabIndex={props.tabIndex}
                        onInput={onUserInput}
                        onFocus={onInputFocus}
                        onBlur={onInputBlur}
                        onKeyDown={onInputKeyDown}
                        aria-expanded={overlayVisibleState}
                        aria-autocomplete="none"
                        aria-haspopup="dialog"
                        aria-controls={panelId}
                        aria-labelledby={props.ariaLabelledBy}
                        aria-label={props.ariaLabel}
                        inputMode={props.inputMode}
                        tooltip={props.tooltip}
                        tooltipOptions={props.tooltipOptions}
                        pt={ptm('input')}
                        __parentMetadata={{ parent: metaData }}
                    />
                );
            }

            return null;
        };

        const createButton = () => {
            if (props.showIcon) {
                return (
                    <Button
                        type="button"
                        icon={props.icon || <CalendarIcon />}
                        onClick={onButtonClick}
                        tabIndex="-1"
                        disabled={props.disabled}
                        aria-haspopup="dialog"
                        aria-label={localeOption('chooseDate', props.locale)}
                        aria-expanded={overlayVisibleState}
                        aria-controls={panelId}
                        className={cx('dropdownButton')}
                        pt={ptm('dropdownButton')}
                        __parentMetadata={{ parent: metaData }}
                    />
                );
            }

            return null;
        };

        const createContent = () => {
            const input = createInputElement();
            const button = createButton();

            if (props.iconPos === 'left') {
                return (
                    <>
                        {button}
                        {input}
                    </>
                );
            }

            return (
                <>
                    {input}
                    {button}
                </>
            );
        };

        const createButtonBar = () => {
            if (props.showButtonBar) {
                const { today, clear, now } = localeOptions(props.locale);
                const nowDate = new Date();
                const isHidden = (props.minDate && props.minDate > nowDate) || (props.maxDate && props.maxDate < nowDate);
                const buttonbarProps = mergeProps(
                    {
                        className: cx('buttonbar')
                    },
                    ptm('buttonbar')
                );

                return (
                    <div {...buttonbarProps}>
                        <Button
                            type="button"
                            label={props.showTime ? now : today}
                            onClick={onTodayButtonClick}
                            onKeyDown={(e) => onContainerButtonKeydown(e)}
                            className={classNames(props.todayButtonClassName, cx('todayButton'))}
                            pt={ptm('todayButton')}
                            style={isHidden ? { visibility: 'hidden' } : undefined}
                        />
                        <Button type="button" label={clear} onClick={onClearButtonClick} onKeyDown={(e) => onContainerButtonKeydown(e)} className={classNames(props.clearButtonClassName, cx('clearButton'))} pt={ptm('clearButton')} />
                    </div>
                );
            }

            return null;
        };

        const createFooter = () => {
            if (props.footerTemplate) {
                const content = props.footerTemplate();
                const footerProps = mergeProps(
                    {
                        className: cx('footer')
                    },
                    ptm('footer')
                );

                return <div {...footerProps}>{content}</div>;
            }

            return null;
        };

        const createMonthPicker = () => {
            if (currentView === 'month') {
                const monthPickerProps = mergeProps(
                    {
                        className: cx('monthPicker')
                    },
                    ptm('monthPicker')
                );

                return (
                    <div {...monthPickerProps}>
                        {monthPickerValues().map((m, i) => {
                            const selected = isMonthSelected(i);
                            const monthProps = mergeProps(
                                {
                                    className: cx('month', { isMonthSelected, isMonthYearDisabled, i, currentYear }),
                                    onClick: (event) => onMonthSelect(event, i),
                                    onKeyDown: (event) => onMonthCellKeydown(event, i),
                                    'data-p-disabled': isMonthYearDisabled(i, currentYear),
                                    'data-p-highlight': selected
                                },
                                ptm('month', {
                                    context: {
                                        month: m,
                                        monthIndex: i,
                                        selected: selected,
                                        disabled: isMonthYearDisabled(i, currentYear)
                                    }
                                })
                            );

                            return (
                                <span {...monthProps} key={`month${i + 1}`}>
                                    {m}
                                    {selected && (
                                        <div aria-live="polite" className="p-hidden-accessible" data-p-hidden-accessible={true} pt={ptm('hiddenMonth')}>
                                            {m}
                                        </div>
                                    )}
                                </span>
                            );
                        })}
                    </div>
                );
            }

            return null;
        };

        const createYearPicker = () => {
            if (currentView === 'year') {
                const yearPickerProps = mergeProps(
                    {
                        className: cx('yearPicker')
                    },
                    ptm('yearPicker')
                );

                return (
                    <div {...yearPickerProps}>
                        {yearPickerValues().map((y, i) => {
                            const selected = isYearSelected(y);

                            const yearProps = mergeProps(
                                {
                                    className: cx('year', { isYearSelected, isMonthYearDisabled, y }),
                                    onClick: (event) => onYearSelect(event, y),
                                    onKeyDown: (event) => onYearCellKeydown(event, y),
                                    'data-p-highlight': isYearSelected(y),
                                    'data-p-disabled': isMonthYearDisabled(-1, y)
                                },
                                ptm('year', {
                                    context: {
                                        year: y,
                                        yearIndex: i,
                                        selected,
                                        disabled: isMonthYearDisabled(-1, y)
                                    }
                                })
                            );

                            return (
                                <span {...yearProps} key={`year${i + 1}`}>
                                    {y}
                                    {selected && (
                                        <div aria-live="polite" className="p-hidden-accessible" data-p-hidden-accessible={true} pt={ptm('hiddenYear')}>
                                            {y}
                                        </div>
                                    )}
                                </span>
                            );
                        })}
                    </div>
                );
            }

            return null;
        };

        const panelClassName = classNames('p-datepicker p-component', props.panelClassName, {
            'p-datepicker-inline': props.inline,
            'p-disabled': props.disabled,
            'p-datepicker-timeonly': props.timeOnly,
            'p-datepicker-multiple-month': props.numberOfMonths > 1,
            'p-datepicker-monthpicker': currentView === 'month',
            'p-datepicker-touch-ui': props.touchUI,
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        });
        const content = createContent();
        const datePicker = createDatePicker();
        const timePicker = createTimePicker();
        const buttonBar = createButtonBar();
        const footer = createFooter();
        const monthPicker = createMonthPicker();
        const yearPicker = createYearPicker();
        const isFilled = DomHandler.hasClass(inputRef.current, 'p-filled') && inputRef.current.value !== '';
        const rootProps = mergeProps(
            {
                id: props.id,
                className: classNames(props.className, cx('root', { focusedState, isFilled, panelVisible: visible })),
                style: props.style
            },
            CalendarBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <span ref={elementRef} {...rootProps}>
                {content}
                <CalendarPanel
                    hostName="Calendar"
                    id={panelId}
                    locale={props.locale}
                    ref={overlayRef}
                    className={panelClassName}
                    style={props.panelStyle}
                    appendTo={props.appendTo}
                    inline={props.inline}
                    onClick={onPanelClick}
                    onMouseUp={onPanelMouseUp}
                    in={visible}
                    onEnter={onOverlayEnter}
                    onEntered={onOverlayEntered}
                    onExit={onOverlayExit}
                    onExited={onOverlayExited}
                    transitionOptions={props.transitionOptions}
                    ptm={ptm}
                    cx={cx}
                >
                    {datePicker}
                    {timePicker}
                    {monthPicker}
                    {yearPicker}
                    {buttonBar}
                    {footer}
                </CalendarPanel>
            </span>
        );
    })
);

Calendar.displayName = 'Calendar';

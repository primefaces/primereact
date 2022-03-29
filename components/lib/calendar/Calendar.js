import React, { forwardRef, memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PrimeReact, { localeOption, localeOptions } from '../api/Api';
import { CalendarPanel } from './CalendarPanel';
import { InputText } from '../inputtext/InputText';
import { Button } from '../button/Button';
import { tip } from '../tooltip/Tooltip';
import { Ripple } from '../ripple/Ripple';
import { OverlayService } from '../overlayservice/OverlayService';
import { DomHandler, ObjectUtils, classNames, mask, ZIndexUtils } from '../utils/Utils';
import { useMountEffect, useUnmountEffect, useUpdateEffect, useOverlayListener, usePrevious } from '../hooks/Hooks';

export const Calendar = memo(forwardRef((props, ref) => {
    const [focusedState, setFocusedState] = useState(false);
    const [overlayVisibleState, setOverlayVisibleState] = useState(false);
    const [viewDateState, setViewDateState] = useState(null);
    const elementRef = useRef(null);
    const overlayRef = useRef(null);
    const inputRef = useRef(props.inputRef);
    const tooltipRef = useRef(null);
    const navigation = useRef(null);
    const ignoreFocusFunctionality = useRef(false);
    const isKeydown = useRef(false);
    const timePickerTimer = useRef(null);
    const viewStateChanged = useRef(false);
    const touchUIMask = useRef(null);
    const overlayEventListener = useRef(null);
    const touchUIMaskClickListener = useRef(null);
    const isOverlayClicked = useRef(false);
    const previousValue = usePrevious(props.value);
    const visible = props.inline || (props.onVisibleChange ? props.visible : overlayVisibleState);

    const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
        target: elementRef, overlay: overlayRef, listener: (event, { type, valid }) => {
            if (valid) {
                (type === 'outside') ?
                    (!isOverlayClicked.current && !isNavIconClicked(event.target)) && hide('outside') : hide();
            }

            isOverlayClicked.current = false;
        }, when: !(props.touchUI || props.inline) && visible
    });

    const getDateFormat = () => {
        return props.dateFormat || localeOption('dateFormat', props.locale);
    }

    const onInputFocus = (event) => {
        if (ignoreFocusFunctionality.current) {
            setFocusedState(true);
            ignoreFocusFunctionality.current = false;
        }
        else {
            if (props.showOnFocus && !visible) {
                show();
            }

            setFocusedState(true);
            props.onFocus && props.onFocus(event);
        }
    }

    const onInputBlur = (event) => {
        setFocusedState(false);
        !props.keepInvalid && updateInputfield(props.value);
        props.onBlur && props.onBlur(event);
    }

    const onInputKeyDown = (event) => {
        isKeydown.current = true;

        switch (event.which) {
            //escape
            case 27: {
                hide();
                break;
            }

            //tab
            case 9: {
                visible && trapFocus(event);
                props.touchUI && disableModality();
                break;
            }

            default:
                //no op
                break;
        }
    }

    const onUserInput = (event) => {
        // IE 11 Workaround for input placeholder
        if (!isKeydown.current) {
            return;
        }
        isKeydown.current = false;

        updateValueOnInput(event, event.target.value);
        props.onInput && props.onInput(event);
    }

    const updateValueOnInput = (event, rawValue) => {
        try {
            const value = parseValueFromString(rawValue);
            if (isValidSelection(value)) {
                updateModel(event, value);
                updateViewDate(event, value.length ? value[0] : value);
            }
        }
        catch (err) {
            //invalid date
            const value = props.keepInvalid ? rawValue : null;
            updateModel(event, value);
        }
    }

    const reFocusInputField = () => {
        if (!props.inline && inputRef.current) {
            ignoreFocusFunctionality.current = true;
            inputRef.current.focus();
        }
    }

    const isValidSelection = (value) => {
        let isValid = true;
        if (isSingleSelection()) {
            if (!(isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false) && isSelectableTime(value))) {
                isValid = false;
            }
        }
        else if (value.every(v => (isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false) && isSelectableTime(v)))) {
            if (isRangeSelection()) {
                isValid = value.length > 1 && value[1] > value[0] ? true : false;
            }
        }

        return isValid;
    }

    const onButtonClick = () => {
        visible ? hide() : show();
    }

    const onPrevButtonClick = (event) => {
        navigation.current = { backward: true, button: true };
        navBackward(event);
    }

    const onNextButtonClick = (event) => {
        navigation.current = { backward: false, button: true };
        navForward(event);
    }

    const onContainerButtonKeydown = (event) => {
        switch (event.which) {
            //tab
            case 9:
                trapFocus(event);
                break;

            //escape
            case 27:
                hide(null, reFocusInputField);
                event.preventDefault();
                break;

            default:
                //Noop
                break;
        }
    }

    const trapFocus = (event) => {
        event.preventDefault();
        const focusableElements = DomHandler.getFocusableElements(overlayRef.current);

        if (focusableElements && focusableElements.length > 0) {
            if (!document.activeElement) {
                focusableElements[0].focus();
            }
            else {
                const focusedIndex = focusableElements.indexOf(document.activeElement);

                if (event.shiftKey) {
                    if (focusedIndex === -1 || focusedIndex === 0)
                        focusableElements[focusableElements.length - 1].focus();
                    else
                        focusableElements[focusedIndex - 1].focus();
                }
                else {
                    if (focusedIndex === -1 || focusedIndex === (focusableElements.length - 1))
                        focusableElements[0].focus();
                    else
                        focusableElements[focusedIndex + 1].focus();
                }
            }
        }
    }

    const updateFocus = () => {
        if (navigation.current) {
            if (navigation.current.button) {
                initFocusableCell();

                if (navigation.backward)
                    DomHandler.findSingle(overlayRef.current, '.p-datepicker-prev').focus();
                else
                    DomHandler.findSingle(overlayRef.current, '.p-datepicker-next').focus();
            }
            else {
                let cell;
                if (navigation.current.backward) {
                    let cells = DomHandler.find(overlayRef.current, '.p-datepicker-calendar td span:not(.p-disabled)');
                    cell = cells[cells.length - 1];
                }
                else {
                    cell = DomHandler.findSingle(overlayRef.current, '.p-datepicker-calendar td span:not(.p-disabled)');
                }

                if (cell) {
                    cell.tabIndex = '0';
                    cell.focus();
                }
            }

            navigation.current = null;
        }
        else {
            initFocusableCell();
        }
    }

    const initFocusableCell = () => {
        let cell;
        if (props.view === 'month') {
            const cells = DomHandler.find(overlayRef.current, '.p-monthpicker .p-monthpicker-month');
            const selectedCell = DomHandler.findSingle(overlayRef.current, '.p-monthpicker .p-monthpicker-month.p-highlight');
            cells.forEach(cell => cell.tabIndex = -1);
            cell = selectedCell || cells[0];
        }
        else {
            cell = DomHandler.findSingle(overlayRef.current, 'span.p-highlight');
            if (!cell) {
                const todayCell = DomHandler.findSingle(overlayRef.current, 'td.p-datepicker-today span:not(.p-disabled)');
                cell = todayCell || DomHandler.findSingle(overlayRef.current, '.p-datepicker-calendar td span:not(.p-disabled)');
            }
        }

        if (cell) {
            cell.tabIndex = '0';
        }
    }

    const navBackward = (event) => {
        if (props.disabled) {
            event.preventDefault();
            return;
        }

        let newViewDate = new Date(getViewDate().getTime());
        newViewDate.setDate(1);

        if (props.view === 'date') {
            if (newViewDate.getMonth() === 0) {
                newViewDate.setMonth(11);
                newViewDate.setFullYear(newViewDate.getFullYear() - 1);
            }
            else {
                newViewDate.setMonth(newViewDate.getMonth() - 1);
            }
        }
        else if (props.view === 'month') {
            let currentYear = newViewDate.getFullYear();
            let newYear = currentYear - 1;

            if (props.yearNavigator) {
                const minYear = parseInt(props.yearRange.split(':')[0], 10);

                if (newYear < minYear) {
                    newYear = minYear;
                }
            }

            newViewDate.setFullYear(newYear);
        }

        updateViewDate(event, newViewDate);

        event.preventDefault();
    }

    const navForward = (event) => {
        if (props.disabled) {
            event.preventDefault();
            return;
        }

        let newViewDate = new Date(getViewDate().getTime());
        newViewDate.setDate(1);

        if (props.view === 'date') {
            if (newViewDate.getMonth() === 11) {
                newViewDate.setMonth(0);
                newViewDate.setFullYear(newViewDate.getFullYear() + 1);
            }
            else {
                newViewDate.setMonth(newViewDate.getMonth() + 1);
            }
        }
        else if (props.view === 'month') {
            let currentYear = newViewDate.getFullYear();
            let newYear = currentYear + 1;

            if (props.yearNavigator) {
                const maxYear = parseInt(props.yearRange.split(':')[1], 10);

                if (newYear > maxYear) {
                    newYear = maxYear;
                }
            }

            newViewDate.setFullYear(newYear);
        }

        updateViewDate(event, newViewDate);

        event.preventDefault();
    }

    const onMonthDropdownChange = (event, value) => {
        const currentViewDate = getViewDate();
        let newViewDate = new Date(currentViewDate.getTime());
        newViewDate.setMonth(parseInt(value, 10));

        updateViewDate(event, newViewDate);
    }

    const onYearDropdownChange = (event, value) => {
        const currentViewDate = getViewDate();
        let newViewDate = new Date(currentViewDate.getTime());
        newViewDate.setFullYear(parseInt(value, 10));

        updateViewDate(event, newViewDate);
    }

    const onTodayButtonClick = (event) => {
        const today = new Date();
        const dateMeta = { day: today.getDate(), month: today.getMonth(), year: today.getFullYear(), today: true, selectable: true };
        const timeMeta = { hours: today.getHours(), minutes: today.getMinutes(), seconds: today.getSeconds(), milliseconds: today.getMilliseconds() };

        updateViewDate(event, today);
        onDateSelect(event, dateMeta, timeMeta);

        props.onTodayButtonClick && props.onTodayButtonClick(event);
    }

    const onClearButtonClick = (event) => {
        updateModel(event, null);
        updateInputfield(null);
        hide();

        props.onClearButtonClick && props.onClearButtonClick(event);
    }

    const onPanelClick = (event) => {
        if (!props.inline) {
            OverlayService.emit('overlay-click', {
                originalEvent: event,
                target: elementRef.current
            });
        }
    }

    const onPanelMouseUp = (event) => {
        onPanelClick(event);
    }

    const onTimePickerElementMouseDown = (event, type, direction) => {
        if (!props.disabled) {
            repeat(event, null, type, direction);
            event.preventDefault();
        }
    }

    const onTimePickerElementMouseUp = () => {
        if (!props.disabled) {
            clearTimePickerTimer();
        }
    }

    const onTimePickerElementMouseLeave = () => {
        if (!props.disabled) {
            clearTimePickerTimer();
        }
    }

    const repeat = (event, interval, type, direction) => {
        clearTimePickerTimer();
        timePickerTimer.current = setTimeout(() => {
            repeat(event, 100, type, direction);
        }, interval || 500);

        switch (type) {
            case 0:
                if (direction === 1)
                    incrementHour(event);
                else
                    decrementHour(event);
                break;

            case 1:
                if (direction === 1)
                    incrementMinute(event);
                else
                    decrementMinute(event);
                break;

            case 2:
                if (direction === 1)
                    incrementSecond(event);
                else
                    decrementSecond(event);
                break;

            case 3:
                if (direction === 1)
                    incrementMilliSecond(event);
                else
                    decrementMilliSecond(event);
                break;

            default:
                break;
        }
    }

    const clearTimePickerTimer = () => {
        if (timePickerTimer.current) {
            clearTimeout(timePickerTimer.current);
        }
    }

    const incrementHour = (event) => {
        const currentTime = getCurrentDateTime();
        const currentHour = currentTime.getHours();
        let newHour = currentHour + props.stepHour;
        newHour = (newHour >= 24) ? (newHour - 24) : newHour;

        if (validateHour(newHour, currentTime)) {
            if (props.maxDate && props.maxDate.toDateString() === currentTime.toDateString() && props.maxDate.getHours() === newHour) {
                if (props.maxDate.getMinutes() < currentTime.getMinutes()) {
                    if (props.maxDate.getSeconds() < currentTime.getSeconds()) {
                        if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
                            updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), props.maxDate.getMilliseconds());
                        }
                        else {
                            updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), currentTime.getMilliseconds());
                        }
                    }
                    else {
                        updateTime(event, newHour, props.maxDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                    }
                }
                else if (props.maxDate.getMinutes() === currentTime.getMinutes()) {
                    if (props.maxDate.getSeconds() < currentTime.getSeconds()) {
                        if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
                            updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), props.maxDate.getMilliseconds());
                        }
                        else {
                            updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), currentTime.getMilliseconds());
                        }
                    }
                    else {
                        updateTime(event, newHour, props.maxDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                    }
                }
                else {
                    updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                }
            }
            else {
                updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
            }
        }

        event.preventDefault();
    }

    const decrementHour = (event) => {
        const currentTime = getCurrentDateTime();
        const currentHour = currentTime.getHours();
        let newHour = currentHour - props.stepHour;
        newHour = (newHour < 0) ? (newHour + 24) : newHour;

        if (validateHour(newHour, currentTime)) {
            if (props.minDate && props.minDate.toDateString() === currentTime.toDateString() && props.minDate.getHours() === newHour) {
                if (props.minDate.getMinutes() > currentTime.getMinutes()) {
                    if (props.minDate.getSeconds() > currentTime.getSeconds()) {
                        if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
                            updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), props.minDate.getMilliseconds());
                        }
                        else {
                            updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), currentTime.getMilliseconds());
                        }
                    }
                    else {
                        updateTime(event, newHour, props.minDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                    }
                }
                else if (props.minDate.getMinutes() === currentTime.getMinutes()) {
                    if (props.minDate.getSeconds() > currentTime.getSeconds()) {
                        if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
                            updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), props.minDate.getMilliseconds());
                        }
                        else {
                            updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), currentTime.getMilliseconds());
                        }
                    }
                    else {
                        updateTime(event, newHour, props.minDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                    }
                }
                else {
                    updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                }
            }
            else {
                updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
            }
        }

        event.preventDefault();
    }

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
    }

    const incrementMinute = (event) => {
        const currentTime = getCurrentDateTime();
        const currentMinute = currentTime.getMinutes();
        let newMinute = doStepMinute(currentMinute, props.stepMinute);
        newMinute = (newMinute > 59) ? (newMinute - 60) : newMinute;

        if (validateMinute(newMinute, currentTime)) {
            if (props.maxDate && props.maxDate.toDateString() === currentTime.toDateString() && props.maxDate.getMinutes() === newMinute) {
                if (props.maxDate.getSeconds() < currentTime.getSeconds()) {
                    if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
                        updateTime(event, currentTime.getHours(), newMinute, props.maxDate.getSeconds(), props.maxDate.getMilliseconds());
                    }
                    else {
                        updateTime(event, currentTime.getHours(), newMinute, props.maxDate.getSeconds(), currentTime.getMilliseconds());
                    }
                }
                else {
                    updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
                }
            }
            else {
                updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
            }
        }

        event.preventDefault();
    }

    const decrementMinute = (event) => {
        const currentTime = getCurrentDateTime();
        const currentMinute = currentTime.getMinutes();
        let newMinute = doStepMinute(currentMinute, -props.stepMinute);
        newMinute = (newMinute < 0) ? (newMinute + 60) : newMinute;

        if (validateMinute(newMinute, currentTime)) {
            if (props.minDate && props.minDate.toDateString() === currentTime.toDateString() && props.minDate.getMinutes() === newMinute) {
                if (props.minDate.getSeconds() > currentTime.getSeconds()) {
                    if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
                        updateTime(event, currentTime.getHours(), newMinute, props.minDate.getSeconds(), props.minDate.getMilliseconds());
                    }
                    else {
                        updateTime(event, currentTime.getHours(), newMinute, props.minDate.getSeconds(), currentTime.getMilliseconds());
                    }
                }
                else {
                    updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
                }
            }
            else {
                updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
            }
        }

        event.preventDefault();
    }

    const incrementSecond = (event) => {
        const currentTime = getCurrentDateTime();
        const currentSecond = currentTime.getSeconds();
        let newSecond = currentSecond + props.stepSecond;
        newSecond = (newSecond > 59) ? (newSecond - 60) : newSecond;

        if (validateSecond(newSecond, currentTime)) {
            if (props.maxDate && props.maxDate.toDateString() === currentTime.toDateString() && props.maxDate.getSeconds() === newSecond) {
                if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
                    updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, props.maxDate.getMilliseconds());
                }
                else {
                    updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
                }
            }
            else {
                updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
            }
        }

        event.preventDefault();
    }

    const decrementSecond = (event) => {
        const currentTime = getCurrentDateTime();
        const currentSecond = currentTime.getSeconds();
        let newSecond = currentSecond - props.stepSecond;
        newSecond = (newSecond < 0) ? (newSecond + 60) : newSecond;

        if (validateSecond(newSecond, currentTime)) {
            if (props.minDate && props.minDate.toDateString() === currentTime.toDateString() && props.minDate.getSeconds() === newSecond) {
                if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
                    updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, props.minDate.getMilliseconds());
                }
                else {
                    updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
                }
            }
            else {
                updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
            }
        }

        event.preventDefault();
    }

    const incrementMilliSecond = (event) => {
        const currentTime = getCurrentDateTime();
        const currentMillisecond = currentTime.getMilliseconds();
        let newMillisecond = currentMillisecond + props.stepMillisec;
        newMillisecond = (newMillisecond > 999) ? (newMillisecond - 1000) : newMillisecond;

        if (validateMillisecond(newMillisecond, currentTime)) {
            updateTime(event, currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMillisecond);
        }

        event.preventDefault();
    }

    const decrementMilliSecond = (event) => {
        const currentTime = getCurrentDateTime();
        const currentMillisecond = currentTime.getMilliseconds();
        let newMillisecond = currentMillisecond - props.stepMillisec;
        newMillisecond = (newMillisecond < 0) ? (newMillisecond + 999) : newMillisecond;

        if (validateMillisecond(newMillisecond, currentTime)) {
            updateTime(event, currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMillisecond);
        }

        event.preventDefault();
    }

    const toggleAmPm = (event) => {
        const currentTime = getCurrentDateTime();
        const currentHour = currentTime.getHours();
        const newHour = (currentHour >= 12) ? currentHour - 12 : currentHour + 12;

        updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
        event.preventDefault();
    }

    const getViewDate = (date) => {
        let propValue = props.value;
        let viewDate = date || (props.onViewDateChange ? props.viewDate : viewDateState);
        if (Array.isArray(propValue)) {
            propValue = propValue[0];
        }

        return viewDate && isValidDate(viewDate) ? viewDate : (propValue && isValidDate(propValue) ? propValue : new Date());
    }

    const getCurrentDateTime = () => {
        if (isSingleSelection()) {
            return (props.value && props.value instanceof Date) ? props.value : getViewDate();
        }
        else if (isMultipleSelection()) {
            if (props.value && props.value.length) {
                return props.value[props.value.length - 1];
            }
        }
        else if (isRangeSelection()) {
            if (props.value && props.value.length) {
                let startDate = props.value[0];
                let endDate = props.value[1];

                return endDate || startDate;
            }
        }

        return new Date();
    }

    const isValidDate = (date) => {
        return date instanceof Date && !isNaN(date);
    }

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
    }

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
    }

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
    }

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
    }

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
                viewYear = maxYear
            }

            value.setFullYear(viewYear);
        }

        if (props.monthNavigator && props.view !== 'month') {
            let viewMonth = value.getMonth();
            let viewMonthWithMinMax = parseInt((isInMinYear(value) && Math.max(props.minDate.getMonth(), viewMonth).toString()) || (isInMaxYear(value) && Math.min(props.maxDate.getMonth(), viewMonth).toString()) || viewMonth);

            value.setMonth(viewMonthWithMinMax);
        }
    }

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
            }
            else {
                newDateTime = [newDateTime];
            }
        }
        else if (isRangeSelection()) {
            if (props.value && props.value.length) {
                let startDate = props.value[0];
                let endDate = props.value[1];

                newDateTime = endDate ? [startDate, newDateTime] : [newDateTime, null];
            }
            else {
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
    }

    const updateViewDate = (event, value) => {
        validateDate(value);

        if (props.onViewDateChange) {
            props.onViewDateChange({
                originalEvent: event,
                value
            });
        }
        else {
            viewStateChanged.current = true;
            setViewDateState(value);
        }
    }

    const onDateCellKeydown = (event, date, groupIndex) => {
        const cellContent = event.currentTarget;
        const cell = cellContent.parentElement;

        switch (event.which) {
            //down arrow
            case 40: {
                cellContent.tabIndex = '-1';
                let cellIndex = DomHandler.index(cell);
                let nextRow = cell.parentElement.nextElementSibling;
                if (nextRow) {
                    let focusCell = nextRow.children[cellIndex].children[0];
                    if (DomHandler.hasClass(focusCell, 'p-disabled')) {
                        navigation.current = { backward: false };
                        navForward(event);
                    }
                    else {
                        nextRow.children[cellIndex].children[0].tabIndex = '0';
                        nextRow.children[cellIndex].children[0].focus();
                    }
                }
                else {
                    navigation.current = { backward: false };
                    navForward(event);
                }
                event.preventDefault();
                break;
            }

            //up arrow
            case 38: {
                cellContent.tabIndex = '-1';
                let cellIndex = DomHandler.index(cell);
                let prevRow = cell.parentElement.previousElementSibling;
                if (prevRow) {
                    let focusCell = prevRow.children[cellIndex].children[0];
                    if (DomHandler.hasClass(focusCell, 'p-disabled')) {
                        navigation.current = { backward: true };
                        navBackward(event);
                    }
                    else {
                        focusCell.tabIndex = '0';
                        focusCell.focus();
                    }
                }
                else {
                    navigation.current = { backward: true };
                    navBackward(event);
                }
                event.preventDefault();
                break;
            }

            //left arrow
            case 37: {
                cellContent.tabIndex = '-1';
                let prevCell = cell.previousElementSibling;
                if (prevCell) {
                    let focusCell = prevCell.children[0];
                    if (DomHandler.hasClass(focusCell, 'p-disabled')) {
                        navigateToMonth(true, groupIndex, event);
                    }
                    else {
                        focusCell.tabIndex = '0';
                        focusCell.focus();
                    }
                }
                else {
                    navigateToMonth(true, groupIndex, event);
                }
                event.preventDefault();
                break;
            }

            //right arrow
            case 39: {
                cellContent.tabIndex = '-1';
                let nextCell = cell.nextElementSibling;
                if (nextCell) {
                    let focusCell = nextCell.children[0];
                    if (DomHandler.hasClass(focusCell, 'p-disabled')) {
                        navigateToMonth(false, groupIndex, event);
                    }
                    else {
                        focusCell.tabIndex = '0';
                        focusCell.focus();
                    }
                }
                else {
                    navigateToMonth(false, groupIndex, event);
                }
                event.preventDefault();
                break;
            }

            //enter
            case 13: {
                onDateSelect(event, date);
                event.preventDefault();
                break;
            }

            //escape
            case 27: {
                hide(null, reFocusInputField)
                event.preventDefault();
                break;
            }

            //tab
            case 9: {
                trapFocus(event);
                break;
            }

            default:
                //no op
                break;
        }
    }

    const navigateToMonth = (prev, groupIndex, event) => {
        if (prev) {
            if (props.numberOfMonths === 1 || (groupIndex === 0)) {
                navigation.current = { backward: true };
                navBackward(event);
            }
            else {
                const prevMonthContainer = overlayRef.current.children[groupIndex - 1];
                const cells = DomHandler.find(prevMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled)');
                const focusCell = cells[cells.length - 1];
                focusCell.tabIndex = '0';
                focusCell.focus();
            }
        }
        else {
            if (props.numberOfMonths === 1 || (groupIndex === props.numberOfMonths - 1)) {
                navigation.current = { backward: false };
                navForward(event);
            }
            else {
                const nextMonthContainer = overlayRef.current.children[groupIndex + 1];
                const focusCell = DomHandler.findSingle(nextMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled)');
                focusCell.tabIndex = '0';
                focusCell.focus();
            }
        }
    }

    const onMonthCellKeydown = (event, index) => {
        const cell = event.currentTarget;

        switch (event.which) {
            //arrows
            case 38:
            case 40: {
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

            //left arrow
            case 37: {
                cell.tabIndex = '-1';
                const prevCell = cell.previousElementSibling;
                if (prevCell) {
                    prevCell.tabIndex = '0';
                    prevCell.focus();
                }
                event.preventDefault();
                break;
            }

            //right arrow
            case 39: {
                cell.tabIndex = '-1';
                const nextCell = cell.nextElementSibling;
                if (nextCell) {
                    nextCell.tabIndex = '0';
                    nextCell.focus();
                }
                event.preventDefault();
                break;
            }

            //enter
            case 13: {
                onMonthSelect(event, index);
                event.preventDefault();
                break;
            }

            //escape
            case 27: {
                hide(null, reFocusInputField);
                event.preventDefault();
                break;
            }

            //tab
            case 9: {
                trapFocus(event);
                break;
            }

            default:
                //no op
                break;
        }
    }

    const onDateSelect = (event, dateMeta, timeMeta) => {
        if (props.disabled || !dateMeta.selectable) {
            event.preventDefault();
            return;
        }

        DomHandler.find(overlayRef.current, '.p-datepicker-calendar td span:not(.p-disabled)').forEach(cell => cell.tabIndex = -1);
        event.currentTarget.focus();

        if (isMultipleSelection()) {
            if (isSelected(dateMeta)) {
                let value = props.value.filter((date, i) => {
                    return !isDateEquals(date, dateMeta);
                });
                updateModel(event, value);
                updateInputfield(value);
            }
            else if (!props.maxDateCount || !props.value || props.maxDateCount > props.value.length) {
                selectDate(event, dateMeta, timeMeta);
            }
        }
        else {
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
    }

    const selectTime = (date, timeMeta) => {
        if (props.showTime) {
            let hours, minutes, seconds, milliseconds;

            if (timeMeta) {
                ({ hours, minutes, seconds, milliseconds } = timeMeta);
            }
            else {
                let time = getCurrentDateTime();
                [hours, minutes, seconds, milliseconds] = [time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()];
            }

            date.setHours(hours);
            date.setMinutes(minutes);
            date.setSeconds(seconds);
            date.setMilliseconds(milliseconds);
        }
    }

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
        }
        else if (isMultipleSelection()) {
            selectedValues = props.value ? [...props.value, date] : [date];
            updateModel(event, selectedValues);
        }
        else if (isRangeSelection()) {
            if (props.value && props.value.length) {
                let startDate = props.value[0];
                let endDate = props.value[1];

                if (!endDate) {
                    if (date.getTime() >= startDate.getTime()) {
                        endDate = date;
                    }
                    else {
                        endDate = startDate;
                        startDate = date;
                    }
                }
                else {
                    startDate = date;
                    endDate = null;
                }

                selectedValues = [startDate, endDate];
                updateModel(event, selectedValues);
            }
            else {
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
    }

    const onMonthSelect = (event, month) => {
        onDateSelect(event, { year: getViewDate().getFullYear(), month: month, day: 1, selectable: true });
        event.preventDefault();
    }

    const updateModel = (event, value) => {
        if (props.onChange) {
            const newValue = (value && value instanceof Date) ? new Date(value.getTime()) : value;
            viewStateChanged.current = true;

            props.onChange({
                originalEvent: event,
                value: newValue,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value: newValue
                }
            });
        }
    }

    const show = (type) => {
        if (props.onVisibleChange) {
            props.onVisibleChange({
                visible: true,
                type
            });
        }
        else {
            setOverlayVisibleState(true);
            overlayEventListener.current = (e) => {
                if (!isOutsideClicked(e)) {
                    isOverlayClicked.current = true;
                }
            };

            OverlayService.on('overlay-click', overlayEventListener.current);
        }
    }

    const hide = (type, callback) => {
        const _hideCallback = () => {
            viewStateChanged.current = false;
            ignoreFocusFunctionality.current = false;
            isOverlayClicked.current = false;

            callback && callback();

            OverlayService.off('overlay-click', overlayEventListener.current);
            overlayEventListener.current = null;
        };

        if (props.onVisibleChange) {
            props.onVisibleChange({
                visible: false,
                type,
                callback: _hideCallback
            });
        }
        else {
            setOverlayVisibleState(false);
            _hideCallback();
        }
    }

    const onOverlayEnter = () => {
        if (props.autoZIndex) {
            const key = props.touchUI ? 'modal' : 'overlay';
            ZIndexUtils.set(key, overlayRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex[key]);
        }
        alignOverlay();
    }

    const onOverlayEntered = () => {
        bindOverlayListener();
        props.onShow && props.onShow();
    }

    const onOverlayExit = () => {
        unbindOverlayListener();
    }

    const onOverlayExited = () => {
        ZIndexUtils.clear(overlayRef.current);

        props.onHide && props.onHide();
    }

    const alignOverlay = () => {
        if (props.touchUI) {
            enableModality();
        }
        else {
            DomHandler.alignOverlay(overlayRef.current, inputRef.current.parentElement, props.appendTo || PrimeReact.appendTo);
        }
    }

    const enableModality = () => {
        if (!touchUIMask.current) {
            touchUIMask.current = document.createElement('div');
            touchUIMask.current.style.zIndex = String(ZIndexUtils.get(overlayRef.current) - 1);
            DomHandler.addMultipleClasses(touchUIMask.current, 'p-component-overlay p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay-enter');

            touchUIMaskClickListener.current = () => {
                disableModality();
            };
            touchUIMask.current.addEventListener('click', touchUIMaskClickListener.current);

            document.body.appendChild(touchUIMask.current);
            DomHandler.addClass(document.body, 'p-overflow-hidden');
        }
    }

    const disableModality = () => {
        if (touchUIMask.current) {
            DomHandler.addClass(touchUIMask.current, 'p-component-overlay-leave');
            touchUIMask.current.addEventListener('animationend', () => {
                destroyMask();
            });
        }
    }

    const destroyMask = () => {
        touchUIMask.current.removeEventListener('click', touchUIMaskClickListener.current);
        touchUIMaskClickListener.current = null;
        document.body.removeChild(touchUIMask.current);
        touchUIMask.current = null;

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
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
    }

    const isOutsideClicked = (event) => {
        return elementRef.current && !(elementRef.current.isSameNode(event.target) || isNavIconClicked(event.target) ||
            elementRef.current.contains(event.target) || (overlayRef.current && overlayRef.current.contains(event.target)));
    }

    const isNavIconClicked = (target) => {
        return (DomHandler.hasClass(target, 'p-datepicker-prev') || DomHandler.hasClass(target, 'p-datepicker-prev-icon')
            || DomHandler.hasClass(target, 'p-datepicker-next') || DomHandler.hasClass(target, 'p-datepicker-next-icon'));
    }

    const getFirstDayOfMonthIndex = (month, year) => {
        let day = new Date();
        day.setDate(1);
        day.setMonth(month);
        day.setFullYear(year);

        let dayIndex = day.getDay() + getSundayIndex();
        return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
    }

    const getDaysCountInMonth = (month, year) => {
        return 32 - daylightSavingAdjust(new Date(year, month, 32)).getDate();
    }

    const getDaysCountInPrevMonth = (month, year) => {
        let prev = getPreviousMonthAndYear(month, year);
        return getDaysCountInMonth(prev.month, prev.year);
    }

    const daylightSavingAdjust = (date) => {
        if (!date) {
            return null;
        }

        date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);

        return date;
    }

    const getPreviousMonthAndYear = (month, year) => {
        let m, y;

        if (month === 0) {
            m = 11;
            y = year - 1;
        }
        else {
            m = month - 1;
            y = year;
        }

        return { 'month': m, 'year': y };
    }

    const getNextMonthAndYear = (month, year) => {
        let m, y;

        if (month === 11) {
            m = 0;
            y = year + 1;
        }
        else {
            m = month + 1;
            y = year;
        }

        return { 'month': m, 'year': y };
    }

    const getSundayIndex = () => {
        const firstDayOfWeek = localeOption('firstDayOfWeek', props.locale);
        return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
    }

    const createWeekDaysMeta = () => {
        let weekDays = [];
        let { firstDayOfWeek: dayIndex, dayNamesMin } = localeOptions(props.locale);
        for (let i = 0; i < 7; i++) {
            weekDays.push(dayNamesMin[dayIndex]);
            dayIndex = (dayIndex === 6) ? 0 : ++dayIndex;
        }

        return weekDays;
    }

    const createMonthsMeta = (month, year) => {
        let months = [];
        for (let i = 0; i < props.numberOfMonths; i++) {
            let m = month + i;
            let y = year;
            if (m > 11) {
                m = m % 11 - 1;
                y = year + 1;
            }

            months.push(createMonthMeta(m, y));
        }

        return months;
    }

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
                for (let j = (prevMonthDaysLength - firstDay + 1); j <= prevMonthDaysLength; j++) {
                    let prev = getPreviousMonthAndYear(month, year);
                    week.push({
                        day: j, month: prev.month, year: prev.year, otherMonth: true,
                        today: isToday(today, j, prev.month, prev.year), selectable: isSelectable(j, prev.month, prev.year, true)
                    });
                }

                let remainingDaysLength = 7 - week.length;
                for (let j = 0; j < remainingDaysLength; j++) {
                    week.push({
                        day: dayNo, month: month, year: year, today: isToday(today, dayNo, month, year),
                        selectable: isSelectable(dayNo, month, year, false)
                    });
                    dayNo++;
                }
            }
            else {
                for (let j = 0; j < 7; j++) {
                    if (dayNo > daysLength) {
                        let next = getNextMonthAndYear(month, year);
                        week.push({
                            day: dayNo - daysLength, month: next.month, year: next.year, otherMonth: true,
                            today: isToday(today, dayNo - daysLength, next.month, next.year),
                            selectable: isSelectable((dayNo - daysLength), next.month, next.year, true)
                        });
                    }
                    else {
                        week.push({
                            day: dayNo, month: month, year: year, today: isToday(today, dayNo, month, year),
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
        }
    }

    const getWeekNumber = (date) => {
        let checkDate = new Date(date.getTime());
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        let time = checkDate.getTime();
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
    }

    const isSelectable = (day, month, year, otherMonth) => {
        let validMin = true;
        let validMax = true;
        let validDate = true;
        let validDay = true;
        let validMonth = true;

        if (props.minDate) {
            if (props.minDate.getFullYear() > year) {
                validMin = false;
            }
            else if (props.minDate.getFullYear() === year) {
                if (props.minDate.getMonth() > month) {
                    validMin = false;
                }
                else if (props.minDate.getMonth() === month) {
                    if (props.minDate.getDate() > day) {
                        validMin = false;
                    }
                }
            }
        }

        if (props.maxDate) {
            if (props.maxDate.getFullYear() < year) {
                validMax = false;
            }
            else if (props.maxDate.getFullYear() === year) {
                if (props.maxDate.getMonth() < month) {
                    validMax = false;
                }
                else if (props.maxDate.getMonth() === month) {
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
            validDay = !isDayDisabled(day, month, year)
        }

        if (props.selectOtherMonths === false && otherMonth) {
            validMonth = false;
        }

        return validMin && validMax && validDate && validDay && validMonth;
    }

    const isSelectableTime = (value) => {
        let validMin = true;
        let validMax = true;

        if (props.minDate && props.minDate.toDateString() === value.toDateString()) {
            if (props.minDate.getHours() > value.getHours()) {
                validMin = false;
            }
            else if (props.minDate.getHours() === value.getHours()) {
                if (props.minDate.getMinutes() > value.getMinutes()) {
                    validMin = false;
                }
                else if (props.minDate.getMinutes() === value.getMinutes()) {
                    if (props.minDate.getSeconds() > value.getSeconds()) {
                        validMin = false;
                    }
                    else if (props.minDate.getSeconds() === value.getSeconds()) {
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
            }
            else if (props.maxDate.getHours() === value.getHours()) {
                if (props.maxDate.getMinutes() < value.getMinutes()) {
                    validMax = false;
                }
                else if (props.maxDate.getMinutes() === value.getMinutes()) {
                    if (props.maxDate.getSeconds() < value.getSeconds()) {
                        validMax = false;
                    }
                    else if (props.maxDate.getSeconds() === value.getSeconds()) {
                        if (props.maxDate.getMilliseconds() < value.getMilliseconds()) {
                            validMax = false;
                        }
                    }
                }
            }
        }

        return validMin && validMax;
    }

    const isSelected = (dateMeta) => {
        if (props.value) {
            if (isSingleSelection()) {
                return isDateEquals(props.value, dateMeta);
            }
            else if (isMultipleSelection()) {
                let selected = false;
                for (let date of props.value) {
                    selected = isDateEquals(date, dateMeta);
                    if (selected) {
                        break;
                    }
                }

                return selected;
            }
            else if (isRangeSelection()) {
                if (props.value[1])
                    return isDateEquals(props.value[0], dateMeta) || isDateEquals(props.value[1], dateMeta) || isDateBetween(props.value[0], props.value[1], dateMeta);
                else {
                    return isDateEquals(props.value[0], dateMeta);
                }

            }
        }
        else {
            return false;
        }
    }

    const isMonthSelected = (month) => {
        const viewDate = getViewDate();

        if (props.value && props.value instanceof Date)
            return props.value.getDate() === 1 && props.value.getMonth() === month && props.value.getFullYear() === viewDate.getFullYear();
        else
            return false;
    }

    const isDateEquals = (value, dateMeta) => {
        if (value && value instanceof Date)
            return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
        else
            return false;
    }

    const isDateBetween = (start, end, dateMeta) => {
        let between = false;
        if (start && end) {
            let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
            return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
        }

        return between;
    }

    const isSingleSelection = () => {
        return props.selectionMode === 'single';
    }

    const isRangeSelection = () => {
        return props.selectionMode === 'range';
    }

    const isMultipleSelection = () => {
        return props.selectionMode === 'multiple';
    }

    const isToday = (today, day, month, year) => {
        return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
    }

    const isDateDisabled = (day, month, year) => {
        return props.disabledDates ? props.disabledDates.some(d => d.getFullYear() === year && d.getMonth() === month && d.getDate() === day) : false;
    }

    const isDayDisabled = (day, month, year) => {
        if (props.disabledDays) {
            let weekday = new Date(year, month, day);
            let weekdayNumber = weekday.getDay();

            return props.disabledDays.indexOf(weekdayNumber) !== -1;
        }

        return false;
    }

    const updateInputfield = (value) => {
        if (!inputRef.current) {
            return;
        }

        let formattedValue = '';

        if (value) {
            try {
                if (isSingleSelection()) {
                    formattedValue = isValidDate(value) ? formatDateTime(value) : '';
                }
                else if (isMultipleSelection()) {
                    for (let i = 0; i < value.length; i++) {
                        let selectedValue = value[i];
                        let dateAsString = isValidDate(selectedValue) ? formatDateTime(selectedValue) : '';
                        formattedValue += dateAsString;
                        if (i !== (value.length - 1)) {
                            formattedValue += ', ';
                        }
                    }
                }
                else if (isRangeSelection()) {
                    if (value && value.length) {
                        let startDate = value[0];
                        let endDate = value[1];

                        formattedValue = isValidDate(startDate) ? formatDateTime(startDate) : '';
                        if (endDate) {
                            formattedValue += (isValidDate(endDate) ? ' - ' + formatDateTime(endDate) : '');
                        }
                    }
                }
            }
            catch (err) {
                formattedValue = value;
            }
        }

        inputRef.current.value = formattedValue;
    }

    const formatDateTime = (date) => {
        let formattedValue = null;
        if (date) {
            if (props.timeOnly) {
                formattedValue = formatTime(date);
            }
            else {
                formattedValue = formatDate(date, getDateFormat());
                if (props.showTime) {
                    formattedValue += ' ' + formatTime(date);
                }
            }
        }

        return formattedValue;
    }

    const formatDate = (date, format) => {
        if (!date) {
            return '';
        }

        let iFormat;
        const lookAhead = (match) => {
            const matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
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
                return (lookAhead(match) ? longNames[value] : shortNames[value]);
            };
        let output = '';
        let literal = false;
        const { dayNamesShort, dayNames, monthNamesShort, monthNames } = localeOptions(props.locale);

        if (date) {
            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === '\'' && !lookAhead('\'')) {
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
                            output += formatNumber('o',
                                Math.round((
                                    new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() -
                                    new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
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
                        case '\'':
                            if (lookAhead('\'')) {
                                output += '\'';
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
    }

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
            output += hours === 0 ? 12 : (hours < 10) ? '0' + hours : hours;
        }
        else {
            output += (hours < 10) ? '0' + hours : hours;
        }
        output += ':';
        output += (minutes < 10) ? '0' + minutes : minutes;

        if (props.showSeconds) {
            output += ':';
            output += (seconds < 10) ? '0' + seconds : seconds;
        }

        if (props.showMillisec) {
            output += '.';
            output += milliseconds < 100 ? (milliseconds < 10 ? '00' : '0') + milliseconds : milliseconds;
        }

        if (props.hourFormat === '12') {
            output += date.getHours() > 11 ? ' PM' : ' AM';
        }

        return output;
    }

    const parseValueFromString = (text) => {
        if (!text || text.trim().length === 0) {
            return null;
        }

        let value;

        if (isSingleSelection()) {
            value = parseDateTime(text);
        }
        else if (isMultipleSelection()) {
            let tokens = text.split(',');
            value = [];
            for (let token of tokens) {
                value.push(parseDateTime(token.trim()));
            }
        }
        else if (isRangeSelection()) {
            let tokens = text.split(' - ');
            value = [];
            for (let i = 0; i < tokens.length; i++) {
                value[i] = parseDateTime(tokens[i].trim());
            }
        }

        return value;
    }

    const parseDateTime = (text) => {
        let date;
        let parts = text.split(' ');

        if (props.timeOnly) {
            date = new Date();
            populateTime(date, parts[0], parts[1]);
        }
        else {
            if (props.showTime) {
                date = parseDate(parts[0], getDateFormat());
                populateTime(date, parts[1], parts[2]);
            }
            else {
                date = parseDate(text, getDateFormat());
            }
        }

        return date;
    }

    const populateTime = (value, timeString, ampm) => {
        if (props.hourFormat === '12' && (ampm !== 'PM' && ampm !== 'AM')) {
            throw new Error('Invalid Time');
        }

        let time = parseTime(timeString, ampm);
        value.setHours(time.hour);
        value.setMinutes(time.minute);
        value.setSeconds(time.second);
        value.setMilliseconds(time.millisecond);
    }

    const parseTime = (value, ampm) => {
        value = props.showMillisec ? value.replace('.', ':') : value;
        let tokens = value.split(':');
        let validTokenLength = props.showSeconds ? 3 : 2;
        validTokenLength = props.showMillisec ? validTokenLength + 1 : validTokenLength;

        if (tokens.length !== validTokenLength || tokens[0].length !== 2 || tokens[1].length !== 2 ||
            (props.showSeconds && tokens[2].length !== 2) ||
            (props.showMillisec && tokens[3].length !== 3)) {
            throw new Error('Invalid time');
        }

        let h = parseInt(tokens[0], 10);
        let m = parseInt(tokens[1], 10);
        let s = props.showSeconds ? parseInt(tokens[2], 10) : null;
        let ms = props.showMillisec ? parseInt(tokens[3], 10) : null;

        if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || (props.hourFormat === '12' && h > 12) ||
            (props.showSeconds && (isNaN(s) || s > 59)) ||
            (props.showMillisec && (isNaN(s) || s > 1000))) {
            throw new Error('Invalid time');
        }
        else {
            if (props.hourFormat === '12' && h !== 12 && ampm === 'PM') {
                h += 12;
            }

            return { hour: h, minute: m, second: s, millisecond: ms };
        }
    }

    // Ported from jquery-ui datepicker parseDate
    const parseDate = (value, format) => {
        if (format == null || value == null) {
            throw new Error('Invalid arguments');
        }

        value = (typeof value === "object" ? value.toString() : value + "");
        if (value === "") {
            return null;
        }

        let iFormat, dim, extra,
            iValue = 0,
            shortYearCutoff = (typeof props.shortYearCutoff !== "string" ? props.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(props.shortYearCutoff, 10)),
            year = -1,
            month = -1,
            day = -1,
            doy = -1,
            literal = false,
            date,
            lookAhead = (match) => {
                let matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                if (matches) {
                    iFormat++;
                }
                return matches;
            },
            getNumber = (match) => {
                let isDoubled = lookAhead(match),
                    size = (match === "@" ? 14 : (match === "!" ? 20 :
                        (match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
                    minSize = (match === "y" ? size : 1),
                    digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
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
                    case "d":
                        day = getNumber("d");
                        break;
                    case "D":
                        getName("D", dayNamesShort, dayNames);
                        break;
                    case "o":
                        doy = getNumber("o");
                        break;
                    case "m":
                        month = getNumber("m");
                        break;
                    case "M":
                        month = getName("M", monthNamesShort, monthNames);
                        break;
                    case "y":
                        year = getNumber("y");
                        break;
                    case "@":
                        date = new Date(getNumber("@"));
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case "!":
                        date = new Date((getNumber("!") - ticksTo1970) / 10000);
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
            year += new Date().getFullYear() - new Date().getFullYear() % 100 +
                (year <= shortYearCutoff ? 0 : -100);
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
    }

    const isInMinYear = (viewDate) => {
        return props.minDate && props.minDate.getFullYear() === viewDate.getFullYear();
    }

    const isInMaxYear = (viewDate) => {
        return props.maxDate && props.maxDate.getFullYear() === viewDate.getFullYear();
    }

    useEffect(() => {
        ObjectUtils.combinedRefs(inputRef, props.inputRef);
    }, [inputRef, props.inputRef]);

    useEffect(() => {
        if (tooltipRef.current) {
            tooltipRef.current.update({ content: props.tooltip, ...(props.tooltipOptions || {}) });
        }
        else if (props.tooltip) {
            tooltipRef.current = tip({
                target: inputRef.current,
                content: props.tooltip,
                options: props.tooltipOptions
            });
        }
    }, [props.tooltip, props.tooltipOptions]);

    useMountEffect(() => {
        let viewDate = getViewDate(props.viewDate);
        validateDate(viewDate);
        setViewDateState(viewDate);

        if (props.inline) {
            initFocusableCell();
        }
        else if (props.mask) {
            mask(inputRef.current, {
                mask: props.mask,
                readOnly: props.readOnlyInput || props.disabled,
                onChange: (e) => updateValueOnInput(e.originalEvent, e.value)
            });
        }

        if (props.value) {
            updateInputfield(props.value);
        }
    });

    useUpdateEffect(() => {
        if (!props.onViewDateChange && !viewStateChanged.current) {
            let propValue = props.value;
            if (Array.isArray(propValue)) {
                propValue = propValue[0];
            }

            let prevPropValue = previousValue;
            if (Array.isArray(prevPropValue)) {
                prevPropValue = prevPropValue[0];
            }

            if ((!prevPropValue && propValue) || (propValue && propValue instanceof Date && propValue.getTime() !== prevPropValue.getTime())) {
                let viewDate = props.viewDate && isValidDate(props.viewDate) ?
                    props.viewDate : (propValue && isValidDate(propValue) ? propValue : new Date());

                validateDate(viewDate);

                setViewDateState(viewDate);
                viewStateChanged.current = true;
            }
        }
    }, [props.onViewDateChange, props.value]);

    useUpdateEffect(() => {
        if (previousValue !== props.value && (!viewStateChanged.current || !visible)) {
            updateInputfield(props.value);
        }
    }, [props.value, visible]);

    useUpdateEffect(() => {
        updateInputfield(props.value);
    }, [props.dateFormat, props.hourFormat, props.timeOnly, props.showSeconds, props.showMillisec]);

    useUpdateEffect(() => {
        overlayRef.current && updateFocus();
    });

    useUnmountEffect(() => {
        if (touchUIMask.current) {
            disableModality();
            touchUIMask.current = null;
        }

        if (tooltipRef.current) {
            tooltipRef.current.destroy();
            tooltipRef.current = null;
        }

        ZIndexUtils.clear(overlayRef.current);
    });

    const createBackwardNavigator = (isVisible) => {
        const navigatorProps = isVisible ? { 'onClick': onPrevButtonClick, 'onKeyDown': e => onContainerButtonKeydown(e) } : { 'style': { visibility: 'hidden' } };
        return (
            <button type="button" className="p-datepicker-prev p-link" {...navigatorProps}>
                <span className="p-datepicker-prev-icon pi pi-chevron-left"></span>
                <Ripple />
            </button>
        )
    }

    const createForwardNavigator = (isVisible) => {
        const navigatorProps = isVisible ? { 'onClick': onNextButtonClick, 'onKeyDown': e => onContainerButtonKeydown(e) } : { 'style': { visibility: 'hidden' } };
        return (
            <button type="button" className="p-datepicker-next p-link" {...navigatorProps}>
                <span className="p-datepicker-next-icon pi pi-chevron-right"></span>
                <Ripple />
            </button>
        )
    }

    const createTitleMonthElement = (month) => {
        const monthNames = localeOption('monthNames', props.locale);

        if (props.monthNavigator && props.view !== 'month') {
            const viewDate = getViewDate();
            const viewMonth = viewDate.getMonth();
            const displayedMonthOptions = monthNames.map((month, index) => ((!isInMinYear(viewDate) || index >= props.minDate.getMonth()) && (!isInMaxYear(viewDate) || index <= props.maxDate.getMonth())) ? { label: month, value: index, index } : null).filter(option => !!option);
            const displayedMonthNames = displayedMonthOptions.map(option => option.label);
            const content = (
                <select className="p-datepicker-month" onChange={(e) => onMonthDropdownChange(e, e.target.value)} value={viewMonth}>
                    {
                        displayedMonthOptions.map(option => <option key={option.label} value={option.value}>{option.label}</option>)
                    }
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

        return <span className="p-datepicker-month">{monthNames[month]}</span>
    }

    const createTitleYearElement = (year) => {
        if (props.yearNavigator) {
            let yearOptions = [];
            const years = props.yearRange.split(':');
            const yearStart = parseInt(years[0], 10);
            const yearEnd = parseInt(years[1], 10);

            for (let i = yearStart; i <= yearEnd; i++) {
                yearOptions.push(i);
            }

            const viewDate = getViewDate();
            const viewYear = viewDate.getFullYear();
            const displayedYearNames = yearOptions.filter(year => (!(props.minDate && props.minDate.getFullYear() > year) && !(props.maxDate && props.maxDate.getFullYear() < year)));
            const content = (
                <select className="p-datepicker-year" onChange={(e) => onYearDropdownChange(e, e.target.value)} value={viewYear}>
                    {
                        displayedYearNames.map(year => <option key={year} value={year}>{year}</option>)
                    }
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

        return <span className="p-datepicker-year">{year}</span>
    }

    const createTitle = (monthMetaData) => {
        const month = createTitleMonthElement(monthMetaData.month);
        const year = createTitleYearElement(monthMetaData.year);

        return (
            <div className="p-datepicker-title">
                {month}
                {year}
            </div>
        )
    }

    const createDayNames = (weekDays) => {
        const dayNames = weekDays.map((weekDay, index) => (
            <th key={`${weekDay}-${index}`} scope="col">
                <span>{weekDay}</span>
            </th>
        ));

        if (props.showWeek) {
            const weekHeader = (
                <th scope="col" key="wn" className="p-datepicker-weekheader p-disabled">
                    <span>{localeOption('weekHeader', props.locale)}</span>
                </th>
            );

            return [weekHeader, ...dayNames];
        }

        return dayNames;
    }

    const createDateCellContent = (date, className, groupIndex) => {
        const content = props.dateTemplate ? props.dateTemplate(date) : date.day;

        return (
            <span className={className} onClick={e => onDateSelect(e, date)} onKeyDown={e => onDateCellKeydown(e, date, groupIndex)}>
                {content}
                <Ripple />
            </span>
        )
    }

    const createWeek = (weekDates, weekNumber, groupIndex) => {
        const week = weekDates.map((date) => {
            const selected = isSelected(date);
            const cellClassName = classNames({ 'p-datepicker-other-month': date.otherMonth, 'p-datepicker-today': date.today });
            const dateClassName = classNames({ 'p-highlight': selected, 'p-disabled': !date.selectable });
            const content = (date.otherMonth && !props.showOtherMonths) ? null : createDateCellContent(date, dateClassName, groupIndex);

            return (
                <td key={date.day} className={cellClassName}>
                    {content}
                </td>
            )
        });

        if (props.showWeek) {
            const weekNumberCell = (
                <td key={'wn' + weekNumber} className="p-datepicker-weeknumber">
                    <span className="p-disabled">
                        {weekNumber}
                    </span>
                </td>
            );

            return [weekNumberCell, ...week];
        }

        return week;
    }

    const createDates = (monthMetaData, groupIndex) => {
        return monthMetaData.dates.map((weekDates, index) => (
            <tr key={index}>
                {createWeek(weekDates, monthMetaData.weekNumbers[index], groupIndex)}
            </tr>
        ));
    }

    const createDateViewGrid = (monthMetaData, weekDays, groupIndex) => {
        const dayNames = createDayNames(weekDays);
        const dates = createDates(monthMetaData, groupIndex);

        return (
            <div className="p-datepicker-calendar-container">
                <table className="p-datepicker-calendar">
                    <thead>
                        <tr>
                            {dayNames}
                        </tr>
                    </thead>
                    <tbody>
                        {dates}
                    </tbody>
                </table>
            </div>
        )
    }

    const createMonth = (monthMetaData, index) => {
        const weekDays = createWeekDaysMeta();
        const backwardNavigator = createBackwardNavigator((index === 0));
        const forwardNavigator = createForwardNavigator((props.numberOfMonths === 1) || (index === props.numberOfMonths - 1));
        const title = createTitle(monthMetaData);
        const dateViewGrid = createDateViewGrid(monthMetaData, weekDays, index);
        const header = props.headerTemplate ? props.headerTemplate() : null;

        return (
            <div key={monthMetaData.month} className="p-datepicker-group">
                <div className="p-datepicker-header">
                    {header}
                    {backwardNavigator}
                    {title}
                    {forwardNavigator}
                </div>
                {dateViewGrid}
            </div>
        )
    }

    const createMonths = (monthsMetaData) => {
        const groups = monthsMetaData.map(createMonth);

        return (
            <div className="p-datepicker-group-container">
                {groups}
            </div>
        )
    }

    const createDateView = () => {
        const viewDate = getViewDate();
        const monthsMetaData = createMonthsMeta(viewDate.getMonth(), viewDate.getFullYear());
        const months = createMonths(monthsMetaData);

        return months;
    }

    const createMonthViewMonth = (index) => {
        const className = classNames('p-monthpicker-month', { 'p-highlight': isMonthSelected(index) });
        const monthNamesShort = localeOption('monthNamesShort', props.locale);
        const monthName = monthNamesShort[index];

        return (
            <span key={monthName} className={className} onClick={event => onMonthSelect(event, index)} onKeyDown={event => onMonthCellKeydown(event, index)}>
                {monthName}
                <Ripple />
            </span>
        )
    }

    const createMonthViewMonths = () => {
        let months = [];
        for (let i = 0; i <= 11; i++) {
            months.push(createMonthViewMonth(i));
        }

        return months;
    }

    const createMonthView = () => {
        const backwardNavigator = createBackwardNavigator(true);
        const forwardNavigator = createForwardNavigator(true);
        const yearElement = createTitleYearElement(getViewDate().getFullYear());
        const months = createMonthViewMonths();

        return (
            <>
                <div className="p-datepicker-group-container">
                    <div className="p-datepicker-group">
                        <div className="p-datepicker-header">
                            {backwardNavigator}
                            <div className="p-datepicker-title">
                                {yearElement}
                            </div>
                            {forwardNavigator}
                        </div>
                    </div>
                </div>
                <div className="p-monthpicker">
                    {months}
                </div>
            </>
        )
    }

    const createDatePicker = () => {
        if (!props.timeOnly) {
            if (props.view === 'date') {
                return createDateView();
            }
            else if (props.view === 'month') {
                return createMonthView();
            }
        }

        return null;
    }

    const createHourPicker = () => {
        let currentTime = getCurrentDateTime();
        let hour = currentTime.getHours();

        if (props.hourFormat === '12') {
            if (hour === 0)
                hour = 12;
            else if (hour > 11 && hour !== 12)
                hour = hour - 12;
        }

        const hourDisplay = hour < 10 ? '0' + hour : hour;

        return (
            <div className="p-hour-picker">
                <button type="button" className="p-link" onMouseDown={(e) => onTimePickerElementMouseDown(e, 0, 1)} onMouseUp={onTimePickerElementMouseUp}
                    onMouseLeave={onTimePickerElementMouseLeave} onKeyDown={e => onContainerButtonKeydown(e)}>
                    <span className="pi pi-chevron-up"></span>
                    <Ripple />
                </button>
                <span>{hourDisplay}</span>
                <button type="button" className="p-link" onMouseDown={(e) => onTimePickerElementMouseDown(e, 0, -1)} onMouseUp={onTimePickerElementMouseUp}
                    onMouseLeave={onTimePickerElementMouseLeave} onKeyDown={e => onContainerButtonKeydown(e)}>
                    <span className="pi pi-chevron-down"></span>
                    <Ripple />
                </button>
            </div>
        )
    }

    const createMinutePicker = () => {
        const currentTime = getCurrentDateTime();
        const minute = currentTime.getMinutes();
        const minuteDisplay = minute < 10 ? '0' + minute : minute;

        return (
            <div className="p-minute-picker">
                <button type="button" className="p-link" onMouseDown={(e) => onTimePickerElementMouseDown(e, 1, 1)} onMouseUp={onTimePickerElementMouseUp}
                    onMouseLeave={onTimePickerElementMouseLeave} onKeyDown={e => onContainerButtonKeydown(e)}>
                    <span className="pi pi-chevron-up"></span>
                    <Ripple />
                </button>
                <span>{minuteDisplay}</span>
                <button type="button" className="p-link" onMouseDown={(e) => onTimePickerElementMouseDown(e, 1, -1)} onMouseUp={onTimePickerElementMouseUp}
                    onMouseLeave={onTimePickerElementMouseLeave} onKeyDown={e => onContainerButtonKeydown(e)}>
                    <span className="pi pi-chevron-down"></span>
                    <Ripple />
                </button>
            </div>
        )
    }

    const createSecondPicker = () => {
        if (props.showSeconds) {
            const currentTime = getCurrentDateTime();
            const second = currentTime.getSeconds();
            const secondDisplay = second < 10 ? '0' + second : second;

            return (
                <div className="p-second-picker">
                    <button type="button" className="p-link" onMouseDown={(e) => onTimePickerElementMouseDown(e, 2, 1)} onMouseUp={onTimePickerElementMouseUp}
                        onMouseLeave={onTimePickerElementMouseLeave} onKeyDown={e => onContainerButtonKeydown(e)}>
                        <span className="pi pi-chevron-up"></span>
                        <Ripple />
                    </button>
                    <span>{secondDisplay}</span>
                    <button type="button" className="p-link" onMouseDown={(e) => onTimePickerElementMouseDown(e, 2, -1)} onMouseUp={onTimePickerElementMouseUp}
                        onMouseLeave={onTimePickerElementMouseLeave} onKeyDown={e => onContainerButtonKeydown(e)}>
                        <span className="pi pi-chevron-down"></span>
                        <Ripple />
                    </button>
                </div>
            )
        }

        return null;
    }

    const createMiliSecondPicker = () => {
        if (props.showMillisec) {
            const currentTime = getCurrentDateTime();
            const millisecond = currentTime.getMilliseconds();
            const millisecondDisplay = millisecond < 100 ? (millisecond < 10 ? '00' : '0') + millisecond : millisecond;

            return (
                <div className="p-millisecond-picker">
                    <button type="button" className="p-link" onMouseDown={(e) => onTimePickerElementMouseDown(e, 3, 1)} onMouseUp={onTimePickerElementMouseUp}
                        onMouseLeave={onTimePickerElementMouseLeave} onKeyDown={e => onContainerButtonKeydown(e)}>
                        <span className="pi pi-chevron-up"></span>
                        <Ripple />
                    </button>
                    <span>{millisecondDisplay}</span>
                    <button type="button" className="p-link" onMouseDown={(e) => onTimePickerElementMouseDown(e, 3, -1)} onMouseUp={onTimePickerElementMouseUp}
                        onMouseLeave={onTimePickerElementMouseLeave} onKeyDown={e => onContainerButtonKeydown(e)}>
                        <span className="pi pi-chevron-down"></span>
                        <Ripple />
                    </button>
                </div>
            )
        }

        return null;
    }

    const createAmPmPicker = () => {
        if (props.hourFormat === '12') {
            const currentTime = getCurrentDateTime();
            const hour = currentTime.getHours();
            const display = hour > 11 ? 'PM' : 'AM';

            return (
                <div className="p-ampm-picker">
                    <button type="button" className="p-link" onClick={toggleAmPm}>
                        <span className="pi pi-chevron-up"></span>
                        <Ripple />
                    </button>
                    <span>{display}</span>
                    <button type="button" className="p-link" onClick={toggleAmPm}>
                        <span className="pi pi-chevron-down"></span>
                        <Ripple />
                    </button>
                </div>
            )
        }

        return null;
    }

    const createSeparator = (separator) => {
        return (
            <div className="p-separator">
                <span>{separator}</span>
            </div>
        )
    }

    const createTimePicker = () => {
        if (props.showTime || props.timeOnly) {
            return (
                <div className="p-timepicker">
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
            )
        }

        return null;
    }

    const createInputElement = () => {
        if (!props.inline) {
            return (
                <InputText ref={inputRef} id={props.inputId} name={props.name} type="text" className={props.inputClassName} style={props.inputStyle}
                    readOnly={props.readOnlyInput} disabled={props.disabled} required={props.required} autoComplete="off" placeholder={props.placeholder} tabIndex={props.tabIndex}
                    onInput={onUserInput} onFocus={onInputFocus} onBlur={onInputBlur} onKeyDown={onInputKeyDown} aria-labelledby={props.ariaLabelledBy} inputMode={props.inputMode} />
            )
        }

        return null;
    }

    const createButton = () => {
        if (props.showIcon) {
            return <Button type="button" icon={props.icon} onClick={onButtonClick} tabIndex="-1" disabled={props.disabled} className="p-datepicker-trigger" />
        }

        return null;
    }

    const createContent = () => {
        const input = createInputElement();
        const button = createButton();

        if (props.iconPos === 'left') {
            return (
                <>
                    {button}
                    {input}
                </>
            )
        }

        return (
            <>
                {input}
                {button}
            </>
        )
    }

    const createButtonBar = () => {
        if (props.showButtonBar) {
            const todayClassName = classNames('p-button-text', props.todayButtonClassName);
            const clearClassName = classNames('p-button-text', props.clearButtonClassName);
            const { today, clear } = localeOptions(props.locale);

            return (
                <div className="p-datepicker-buttonbar">
                    <Button type="button" label={today} onClick={onTodayButtonClick} onKeyDown={e => onContainerButtonKeydown(e)} className={todayClassName} />
                    <Button type="button" label={clear} onClick={onClearButtonClick} onKeyDown={e => onContainerButtonKeydown(e)} className={clearClassName} />
                </div>
            )
        }

        return null;
    }

    const createFooter = () => {
        if (props.footerTemplate) {
            const content = props.footerTemplate();

            return (
                <div className="p-datepicker-footer">
                    {content}
                </div>
            )
        }

        return null;
    }

    const className = classNames('p-calendar p-component p-inputwrapper', props.className, {
        [`p-calendar-w-btn p-calendar-w-btn-${props.iconPos}`]: props.showIcon,
        'p-calendar-disabled': props.disabled,
        'p-calendar-timeonly': props.timeOnly,
        'p-inputwrapper-filled': props.value || (DomHandler.hasClass(inputRef.current, 'p-filled') && inputRef.current.value !== ''),
        'p-inputwrapper-focus': focusedState
    });
    const panelClassName = classNames('p-datepicker p-component', props.panelClassName, {
        'p-datepicker-inline': props.inline,
        'p-disabled': props.disabled,
        'p-datepicker-timeonly': props.timeOnly,
        'p-datepicker-multiple-month': props.numberOfMonths > 1,
        'p-datepicker-monthpicker': (props.view === 'month'),
        'p-datepicker-touch-ui': props.touchUI
    });
    const content = createContent();
    const datePicker = createDatePicker();
    const timePicker = createTimePicker();
    const buttonBar = createButtonBar();
    const footer = createFooter();

    return (
        <span ref={elementRef} id={props.id} className={className} style={props.style}>
            {content}
            <CalendarPanel ref={overlayRef} className={panelClassName} style={props.panelStyle} appendTo={props.appendTo} inline={props.inline} onClick={onPanelClick} onMouseUp={onPanelMouseUp}
                in={visible} onEnter={onOverlayEnter} onEntered={onOverlayEntered} onExit={onOverlayExit} onExited={onOverlayExited}
                transitionOptions={props.transitionOptions}>
                {datePicker}
                {timePicker}
                {buttonBar}
                {footer}
            </CalendarPanel>
        </span>
    )
}));

Calendar.defaultProps = {
    __TYPE: 'Calendar',
    id: null,
    inputRef: null,
    name: null,
    value: null,
    visible: false,
    viewDate: null,
    style: null,
    className: null,
    inline: false,
    selectionMode: 'single',
    inputId: null,
    inputStyle: null,
    inputClassName: null,
    inputMode: 'none',
    required: false,
    readOnlyInput: false,
    keepInvalid: false,
    mask: null,
    disabled: false,
    tabIndex: null,
    placeholder: null,
    showIcon: false,
    icon: 'pi pi-calendar',
    iconPos: 'right',
    showOnFocus: true,
    numberOfMonths: 1,
    view: 'date',
    touchUI: false,
    showTime: false,
    timeOnly: false,
    showSeconds: false,
    showMillisec: false,
    hourFormat: '24',
    stepHour: 1,
    stepMinute: 1,
    stepSecond: 1,
    stepMillisec: 1,
    shortYearCutoff: '+10',
    hideOnDateTimeSelect: false,
    showWeek: false,
    locale: null,
    dateFormat: null,
    panelStyle: null,
    panelClassName: null,
    monthNavigator: false,
    yearNavigator: false,
    yearRange: null,
    disabledDates: null,
    disabledDays: null,
    minDate: null,
    maxDate: null,
    maxDateCount: null,
    showOtherMonths: true,
    selectOtherMonths: false,
    showButtonBar: false,
    todayButtonClassName: 'p-button-secondary',
    clearButtonClassName: 'p-button-secondary',
    autoZIndex: true,
    baseZIndex: 0,
    appendTo: null,
    tooltip: null,
    tooltipOptions: null,
    ariaLabelledBy: null,
    dateTemplate: null,
    headerTemplate: null,
    footerTemplate: null,
    monthNavigatorTemplate: null,
    yearNavigatorTemplate: null,
    transitionOptions: null,
    onVisibleChange: null,
    onFocus: null,
    onBlur: null,
    onInput: null,
    onSelect: null,
    onChange: null,
    onViewDateChange: null,
    onTodayButtonClick: null,
    onClearButtonClick: null,
    onShow: null,
    onHide: null
}

Calendar.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    inputRef: PropTypes.any,
    name: PropTypes.string,
    value: PropTypes.any,
    visible: PropTypes.bool,
    viewDate: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
    inline: PropTypes.bool,
    selectionMode: PropTypes.string,
    inputId: PropTypes.string,
    inputStyle: PropTypes.object,
    inputClassName: PropTypes.string,
    inputMode: PropTypes.string,
    required: PropTypes.bool,
    readOnlyInput: PropTypes.bool,
    keepInvalid: PropTypes.bool,
    mask: PropTypes.string,
    disabled: PropTypes.bool,
    tabIndex: PropTypes.number,
    placeholder: PropTypes.string,
    showIcon: PropTypes.bool,
    icon: PropTypes.any,
    iconPos: PropTypes.string,
    showOnFocus: PropTypes.bool,
    numberOfMonths: PropTypes.number,
    view: PropTypes.string,
    touchUI: PropTypes.bool,
    showTime: PropTypes.bool,
    timeOnly: PropTypes.bool,
    showSeconds: PropTypes.bool,
    showMillisec: PropTypes.bool,
    hourFormat: PropTypes.string,
    stepHour: PropTypes.number,
    stepMinute: PropTypes.number,
    stepSecond: PropTypes.number,
    stepMillisec: PropTypes.number,
    shortYearCutoff: PropTypes.string,
    hideOnDateTimeSelect: PropTypes.bool,
    showWeek: PropTypes.bool,
    locale: PropTypes.string,
    dateFormat: PropTypes.string,
    panelStyle: PropTypes.object,
    panelClassName: PropTypes.string,
    monthNavigator: PropTypes.bool,
    yearNavigator: PropTypes.bool,
    yearRange: PropTypes.string,
    disabledDates: PropTypes.array,
    disabledDays: PropTypes.array,
    minDate: PropTypes.any,
    maxDate: PropTypes.any,
    maxDateCount: PropTypes.number,
    showOtherMonths: PropTypes.bool,
    selectOtherMonths: PropTypes.bool,
    showButtonBar: PropTypes.bool,
    todayButtonClassName: PropTypes.string,
    clearButtonClassName: PropTypes.string,
    autoZIndex: PropTypes.bool,
    baseZIndex: PropTypes.number,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    ariaLabelledBy: PropTypes.string,
    dateTemplate: PropTypes.func,
    headerTemplate: PropTypes.func,
    footerTemplate: PropTypes.func,
    monthNavigatorTemplate: PropTypes.func,
    yearNavigatorTemplate: PropTypes.func,
    transitionOptions: PropTypes.object,
    onVisibleChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onInput: PropTypes.func,
    onSelect: PropTypes.func,
    onChange: PropTypes.func,
    onViewDateChange: PropTypes.func,
    onTodayButtonClick: PropTypes.func,
    onClearButtonClick: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func
}

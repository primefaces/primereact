import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputText } from '../inputtext/InputText';
import { Button } from '../button/Button';
import { CalendarPanel } from './CalendarPanel';
import DomHandler from '../utils/DomHandler';
import { classNames } from '../utils/ClassNames';
import { tip } from '../tooltip/Tooltip';
import { Ripple } from '../ripple/Ripple';
import UniqueComponentId from '../utils/UniqueComponentId';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import { localeOption, localeOptions } from '../api/Locale';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';

export class Calendar extends Component {

    static defaultProps = {
        id: null,
        name: null,
        value: null,
        viewDate: null,
        style: null,
        className: null,
        inline: false,
        selectionMode: 'single',
        inputId: null,
        inputStyle: null,
        inputClassName: null,
        required: false,
        readOnlyInput: false,
        keepInvalid: false,
        disabled: false,
        tabIndex: null,
        placeholder: null,
        showIcon: false,
        icon: 'pi pi-calendar',
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
        onFocus: null,
        onBlur: null,
        onInput: null,
        onSelect: null,
        onChange: null,
        onViewDateChange: null,
        onTodayButtonClick: null,
        onClearButtonClick: null
    }

    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.any,
        viewDate: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        inline: PropTypes.bool,
        selectionMode: PropTypes.string,
        inputId: PropTypes.string,
        inputStyle: PropTypes.object,
        inputClassName: PropTypes.string,
        required: PropTypes.bool,
        readOnlyInput: PropTypes.bool,
        keepInvalid: PropTypes.bool,
        disabled: PropTypes.bool,
        tabIndex: PropTypes.number,
        placeholder: PropTypes.string,
        showIcon: PropTypes.bool,
        icon: PropTypes.string,
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
        appendTo: PropTypes.any,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        dateTemplate: PropTypes.func,
        headerTemplate: PropTypes.func,
        footerTemplate: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onInput: PropTypes.func,
        onSelect: PropTypes.func,
        onChange: PropTypes.func,
        onViewDateChange: PropTypes.func,
        onTodayButtonClick: PropTypes.func,
        onClearButtonClick: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.state = {
            focused: false,
            overlayVisible: false
        };

        if (!this.props.onViewDateChange) {
            let propValue = this.props.value;
            if (Array.isArray(propValue)) {
                propValue = propValue[0];
            }

            let viewDate = this.props.viewDate && this.isValidDate(this.props.viewDate) ?
                this.props.viewDate : (propValue && this.isValidDate(propValue) ? propValue : new Date());

            this.validateDate(viewDate);

            this.state = {
                ...this.state,
                viewDate
            }
        }

        this.navigation = null;

        this.onUserInput = this.onUserInput.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onPrevButtonClick = this.onPrevButtonClick.bind(this);
        this.onNextButtonClick = this.onNextButtonClick.bind(this);
        this.onMonthDropdownChange = this.onMonthDropdownChange.bind(this);
        this.onYearDropdownChange = this.onYearDropdownChange.bind(this);
        this.onTodayButtonClick = this.onTodayButtonClick.bind(this);
        this.onClearButtonClick = this.onClearButtonClick.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);
        this.incrementHour = this.incrementHour.bind(this);
        this.decrementHour = this.decrementHour.bind(this);
        this.incrementMinute = this.incrementMinute.bind(this);
        this.decrementMinute = this.decrementMinute.bind(this);
        this.incrementSecond = this.incrementSecond.bind(this);
        this.decrementSecond = this.decrementSecond.bind(this);
        this.toggleAmPm = this.toggleAmPm.bind(this);
        this.onTimePickerElementMouseDown = this.onTimePickerElementMouseDown.bind(this);
        this.onTimePickerElementMouseUp = this.onTimePickerElementMouseUp.bind(this);
        this.onTimePickerElementMouseLeave = this.onTimePickerElementMouseLeave.bind(this);
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.reFocusInputField = this.reFocusInputField.bind(this);

        this.id = this.props.id || UniqueComponentId();
        this.overlayRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.tooltip) {
            this.renderTooltip();
        }

        if (this.props.inline) {
            this.initFocusableCell();
        }

        if (this.props.value) {
            this.updateInputfield(this.props.value);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
            if (this.tooltip)
                this.tooltip.update({ content: this.props.tooltip, ...(this.props.tooltipOptions || {}) });
            else
                this.renderTooltip();
        }

        if (!this.props.onViewDateChange && !this.viewStateChanged) {
            let propValue = this.props.value;
            if (Array.isArray(propValue)) {
                propValue = propValue[0];
            }

            let prevPropValue = prevProps.value;
            if (Array.isArray(prevPropValue)) {
                prevPropValue = prevPropValue[0];
            }

            if ((!prevPropValue && propValue) || (propValue && propValue instanceof Date && propValue.getTime() !== prevPropValue.getTime())) {
                let viewDate = this.props.viewDate && this.isValidDate(this.props.viewDate) ?
                    this.props.viewDate : (propValue && this.isValidDate(propValue) ? propValue : new Date());

                this.validateDate(viewDate);

                this.setState({
                    viewDate
                }, () => {
                    this.viewStateChanged = true;
                });
            }
        }

        if (this.overlayRef && this.overlayRef.current) {
            this.updateFocus();
        }

        if ((prevProps.value !== this.props.value && (!this.viewStateChanged || !this.state.overlayVisible)) || this.isOptionChanged(prevProps)) {
            this.updateInputfield(this.props.value);
        }
    }

    componentWillUnmount() {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
        }
        if (this.mask) {
            this.disableModality();
            this.mask = null;
        }

        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }

        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
    }

    renderTooltip() {
        this.tooltip = tip({
            target: this.inputElement,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    isOptionChanged(prevProps) {
        const optionProps = ['dateFormat', 'hourFormat', 'timeOnly', 'showSeconds', 'showMillisec'];
        return optionProps.some((option) => prevProps[option] !== this.props[option]);
    }

    getDateFormat() {
        return this.props.dateFormat || localeOption('dateFormat', this.props.locale);
    }

    onInputFocus(event) {
        if (this.ignoreFocusFunctionality) {
            this.setState({ focused: true }, () => {
                this.ignoreFocusFunctionality = false;
            });
        }
        else {
            event.persist();

            if (this.props.showOnFocus && !this.state.overlayVisible) {
                this.showOverlay();
            }

            this.setState({ focused: true }, () => {
                if (this.props.onFocus) {
                    this.props.onFocus(event);
                }
            });
        }
    }

    onInputBlur(event) {
        event.persist();

        this.setState({ focused: false }, () => {
            if (this.props.onBlur) {
                this.props.onBlur(event);
            }

            if (!this.props.keepInvalid) {
                this.updateInputfield(this.props.value);
            }
        });
    }

    onInputKeyDown(event) {
        this.isKeydown = true;

        switch (event.which) {
            //escape
            case 27: {
                this.hideOverlay();
                break;
            }

            //tab
            case 9: {
                if (this.state.overlayVisible) {
                    this.trapFocus(event);
                }

                if (this.props.touchUI) {
                    this.disableModality();
                }
                break;
            }

            default:
                //no op
                break;
        }
    }

    onUserInput(event) {
        // IE 11 Workaround for input placeholder
        if (!this.isKeydown) {
            return;
        }
        this.isKeydown = false;

        let rawValue = event.target.value;

        try {
            let value = this.parseValueFromString(rawValue);
            if (this.isValidSelection(value)) {
                this.updateModel(event, value);
                this.updateViewDate(event, value.length ? value[0] : value);
            }
        }
        catch (err) {
            //invalid date
            let value = this.props.keepInvalid ? rawValue : null;
            this.updateModel(event, value);
        }

        if (this.props.onInput) {
            this.props.onInput(event);
        }
    }

    reFocusInputField() {
        if (!this.props.inline && this.inputElement) {
            this.ignoreFocusFunctionality = true;
            this.inputElement.focus();
        }
    }

    isValidSelection(value) {
        let isValid = true;
        if (this.isSingleSelection()) {
            if (!(this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false) && this.isSelectableTime(value))) {
                isValid = false;
            }
        } else if (value.every(v => (this.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false) && this.isSelectableTime(value)))) {
            if (this.isRangeSelection()) {
                isValid = value.length > 1 && value[1] > value[0] ? true : false;
            }
        }
        return isValid;
    }

    onButtonClick() {
        if (this.state.overlayVisible) {
            this.hideOverlay();
        }
        else {
            this.showOverlay();
        }
    }

    onPrevButtonClick(event) {
        this.navigation = { backward: true, button: true };
        this.navBackward(event);
    }

    onNextButtonClick(event) {
        this.navigation = { backward: false, button: true };
        this.navForward(event);
    }

    onContainerButtonKeydown(event) {
        switch (event.which) {
            //tab
            case 9:
                this.trapFocus(event);
                break;

            //escape
            case 27:
                this.hideOverlay(this.reFocusInputField);
                event.preventDefault();
                break;

            default:
                //Noop
                break;
        }
    }

    trapFocus(event) {
        event.preventDefault();
        let focusableElements = DomHandler.getFocusableElements(this.overlayRef.current);

        if (focusableElements && focusableElements.length > 0) {
            if (!document.activeElement) {
                focusableElements[0].focus();
            }
            else {
                let focusedIndex = focusableElements.indexOf(document.activeElement);

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

    updateFocus() {
        let cell;
        if (this.navigation) {
            if (this.navigation.button) {
                this.initFocusableCell();

                if (this.navigation.backward)
                    DomHandler.findSingle(this.overlayRef.current, '.p-datepicker-prev').focus();
                else
                    DomHandler.findSingle(this.overlayRef.current, '.p-datepicker-next').focus();
            }
            else {
                if (this.navigation.backward) {
                    let cells = DomHandler.find(this.overlayRef.current, '.p-datepicker-calendar td span:not(.p-disabled)');
                    cell = cells[cells.length - 1];
                }
                else {
                    cell = DomHandler.findSingle(this.overlayRef.current, '.p-datepicker-calendar td span:not(.p-disabled)');
                }

                if (cell) {
                    cell.tabIndex = '0';
                    cell.focus();
                }
            }

            this.navigation = null;
        }
        else {
            this.initFocusableCell();
        }
    }

    initFocusableCell() {
        let cell;
        if (this.view === 'month') {
            let cells = DomHandler.find(this.overlayRef.current, '.p-monthpicker .p-monthpicker-month');
            let selectedCell = DomHandler.findSingle(this.overlayRef.current, '.p-monthpicker .p-monthpicker-month.p-highlight');
            cells.forEach(cell => cell.tabIndex = -1);
            cell = selectedCell || cells[0];
        }
        else {
            cell = DomHandler.findSingle(this.overlayRef.current, 'span.p-highlight');
            if (!cell) {
                let todayCell = DomHandler.findSingle(this.overlayRef.current, 'td.p-datepicker-today span:not(.p-disabled)');
                if (todayCell)
                    cell = todayCell;
                else
                    cell = DomHandler.findSingle(this.overlayRef.current, '.p-datepicker-calendar td span:not(.p-disabled)');
            }
        }

        if (cell) {
            cell.tabIndex = '0';
        }
    }

    navBackward(event) {
        if (this.props.disabled) {
            event.preventDefault();
            return;
        }

        let newViewDate = new Date(this.getViewDate().getTime());
        newViewDate.setDate(1);

        if (this.props.view === 'date') {
            if (newViewDate.getMonth() === 0) {
                newViewDate.setMonth(11);
                newViewDate.setFullYear(newViewDate.getFullYear() - 1);
            }
            else {
                newViewDate.setMonth(newViewDate.getMonth() - 1);
            }
        }
        else if (this.props.view === 'month') {
            let currentYear = newViewDate.getFullYear();
            let newYear = currentYear - 1;

            if (this.props.yearNavigator) {
                const minYear = parseInt(this.props.yearRange.split(':')[0], 10);

                if (newYear < minYear) {
                    newYear = minYear;
                }
            }

            newViewDate.setFullYear(newYear);
        }

        this.updateViewDate(event, newViewDate);

        event.preventDefault();
    }

    navForward(event) {
        if (this.props.disabled) {
            event.preventDefault();
            return;
        }

        let newViewDate = new Date(this.getViewDate().getTime());
        newViewDate.setDate(1);

        if (this.props.view === 'date') {
            if (newViewDate.getMonth() === 11) {
                newViewDate.setMonth(0);
                newViewDate.setFullYear(newViewDate.getFullYear() + 1);
            }
            else {
                newViewDate.setMonth(newViewDate.getMonth() + 1);
            }
        }
        else if (this.props.view === 'month') {
            let currentYear = newViewDate.getFullYear();
            let newYear = currentYear + 1;

            if (this.props.yearNavigator) {
                const maxYear = parseInt(this.props.yearRange.split(':')[1], 10);

                if (newYear > maxYear) {
                    newYear = maxYear;
                }
            }

            newViewDate.setFullYear(newYear);
        }

        this.updateViewDate(event, newViewDate);

        event.preventDefault();
    }

    onMonthDropdownChange(event) {
        const currentViewDate = this.getViewDate();
        let newViewDate = new Date(currentViewDate.getTime());
        newViewDate.setMonth(parseInt(event.target.value, 10));

        this.updateViewDate(event, newViewDate);
    }

    onYearDropdownChange(event) {
        const currentViewDate = this.getViewDate();
        let newViewDate = new Date(currentViewDate.getTime());
        newViewDate.setFullYear(parseInt(event.target.value, 10));

        this.updateViewDate(event, newViewDate);
    }

    onTodayButtonClick(event) {
        const today = new Date();
        const dateMeta = { day: today.getDate(), month: today.getMonth(), year: today.getFullYear(), today: true, selectable: true };
        const timeMeta = { hours: today.getHours(), minutes: today.getMinutes(), seconds: today.getSeconds(), milliseconds: today.getMilliseconds() };

        this.updateViewDate(event, today);
        this.onDateSelect(event, dateMeta, timeMeta);

        if (this.props.onTodayButtonClick) {
            this.props.onTodayButtonClick(event);
        }
    }

    onClearButtonClick(event) {
        this.updateModel(event, null);
        this.updateInputfield(null);
        this.hideOverlay(this.reFocusInputField);

        if (this.props.onClearButtonClick) {
            this.props.onClearButtonClick(event);
        }
    }

    onPanelClick(event) {
        if (!this.props.inline) {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.container
            });
        }
    }

    onTimePickerElementMouseDown(event, type, direction) {
        if (!this.props.disabled) {
            this.repeat(event, null, type, direction);
            event.preventDefault();
        }
    }

    onTimePickerElementMouseUp() {
        if (!this.props.disabled) {
            this.clearTimePickerTimer();
        }
    }

    onTimePickerElementMouseLeave() {
        if (!this.props.disabled) {
            this.clearTimePickerTimer();
        }
    }

    repeat(event, interval, type, direction) {
        event.persist();

        let i = interval || 500;

        this.clearTimePickerTimer();
        this.timePickerTimer = setTimeout(() => {
            this.repeat(event, 100, type, direction);
        }, i);

        switch (type) {
            case 0:
                if (direction === 1)
                    this.incrementHour(event);
                else
                    this.decrementHour(event);
                break;

            case 1:
                if (direction === 1)
                    this.incrementMinute(event);
                else
                    this.decrementMinute(event);
                break;

            case 2:
                if (direction === 1)
                    this.incrementSecond(event);
                else
                    this.decrementSecond(event);
                break;

            case 3:
                if (direction === 1)
                    this.incrementMilliSecond(event);
                else
                    this.decrementMilliSecond(event);
                break;

            default:
                break;
        }
    }

    clearTimePickerTimer() {
        if (this.timePickerTimer) {
            clearTimeout(this.timePickerTimer);
        }
    }

    incrementHour(event) {
        const currentTime = (this.props.value && this.props.value instanceof Date) ? this.props.value : this.getViewDate();
        const currentHour = currentTime.getHours();
        let newHour = currentHour + this.props.stepHour;
        newHour = (newHour >= 24) ? (newHour - 24) : newHour;

        if (this.validateHour(newHour, currentTime)) {

            if (this.props.maxDate && this.props.maxDate.toDateString() === currentTime.toDateString() && this.props.maxDate.getHours() === newHour) {
                if (this.props.maxDate.getMinutes() < currentTime.getMinutes()) {
                    if (this.props.maxDate.getSeconds() < currentTime.getSeconds()) {
                        if (this.props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
                            this.updateTime(event, newHour, this.props.maxDate.getMinutes(), this.props.maxDate.getSeconds(), this.props.maxDate.getMilliseconds());
                        }
                        else {
                            this.updateTime(event, newHour, this.props.maxDate.getMinutes(), this.props.maxDate.getSeconds(), currentTime.getMilliseconds());
                        }
                    }
                    else {
                        this.updateTime(event, newHour, this.props.maxDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                    }
                }
                else if (this.props.maxDate.getMinutes() === currentTime.getMinutes()) {
                    if (this.props.maxDate.getSeconds() < currentTime.getSeconds()) {
                        if (this.props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
                            this.updateTime(event, newHour, this.props.maxDate.getMinutes(), this.props.maxDate.getSeconds(), this.props.maxDate.getMilliseconds());
                        }
                        else {
                            this.updateTime(event, newHour, this.props.maxDate.getMinutes(), this.props.maxDate.getSeconds(), currentTime.getMilliseconds());
                        }
                    }
                    else {
                        this.updateTime(event, newHour, this.props.maxDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                    }
                }
                else {
                    this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                }
            }
            else {
                this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
            }
        }

        event.preventDefault();
    }

    decrementHour(event) {
        const currentTime = (this.props.value && this.props.value instanceof Date) ? this.props.value : this.getViewDate();
        const currentHour = currentTime.getHours();
        let newHour = currentHour - this.props.stepHour;
        newHour = (newHour < 0) ? (newHour + 24) : newHour;

        if (this.validateHour(newHour, currentTime)) {
            if (this.props.minDate && this.props.minDate.toDateString() === currentTime.toDateString() && this.props.minDate.getHours() === newHour) {
                if (this.props.minDate.getMinutes() > currentTime.getMinutes()) {
                    if (this.props.minDate.getSeconds() > currentTime.getSeconds()) {
                        if (this.props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
                            this.updateTime(event, newHour, this.props.minDate.getMinutes(), this.props.minDate.getSeconds(), this.props.minDate.getMilliseconds());
                        }
                        else {
                            this.updateTime(event, newHour, this.props.minDate.getMinutes(), this.props.minDate.getSeconds(), currentTime.getMilliseconds());
                        }
                    }
                    else {
                        this.updateTime(event, newHour, this.props.minDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                    }
                }
                else if (this.props.minDate.getMinutes() === currentTime.getMinutes()) {
                    if (this.props.minDate.getSeconds() > currentTime.getSeconds()) {
                        if (this.props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
                            this.updateTime(event, newHour, this.props.minDate.getMinutes(), this.props.minDate.getSeconds(), this.props.minDate.getMilliseconds());
                        }
                        else {
                            this.updateTime(event, newHour, this.props.minDate.getMinutes(), this.props.minDate.getSeconds(), currentTime.getMilliseconds());
                        }
                    }
                    else {
                        this.updateTime(event, newHour, this.props.minDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                    }
                }
                else {
                    this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
                }
            }
            else {
                this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
            }
        }

        event.preventDefault();
    }

    incrementMinute(event) {
        const currentTime = (this.props.value && this.props.value instanceof Date) ? this.props.value : this.getViewDate();
        const currentMinute = currentTime.getMinutes();
        let newMinute = currentMinute + this.props.stepMinute;
        newMinute = (newMinute > 59) ? (newMinute - 60) : newMinute;

        if (this.validateMinute(newMinute, currentTime)) {
            if (this.props.maxDate && this.props.maxDate.toDateString() === currentTime.toDateString() && this.props.maxDate.getMinutes() === newMinute) {
                if (this.props.maxDate.getSeconds() < currentTime.getSeconds()) {
                    if (this.props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
                        this.updateTime(event, currentTime.getHours(), newMinute, this.props.maxDate.getSeconds(), this.props.maxDate.getMilliseconds());
                    }
                    else {
                        this.updateTime(event, currentTime.getHours(), newMinute, this.props.maxDate.getSeconds(), currentTime.getMilliseconds());
                    }
                }
                else {
                    this.updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
                }
            }
            else {
                this.updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
            }
        }

        event.preventDefault();
    }

    decrementMinute(event) {
        const currentTime = (this.props.value && this.props.value instanceof Date) ? this.props.value : this.getViewDate();
        const currentMinute = currentTime.getMinutes();
        let newMinute = currentMinute - this.props.stepMinute;
        newMinute = (newMinute < 0) ? (newMinute + 60) : newMinute;

        if (this.validateMinute(newMinute, currentTime)) {
            if (this.props.minDate && this.props.minDate.toDateString() === currentTime.toDateString() && this.props.minDate.getMinutes() === newMinute) {
                if (this.props.minDate.getSeconds() > currentTime.getSeconds()) {
                    if (this.props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
                        this.updateTime(event, currentTime.getHours(), newMinute, this.props.minDate.getSeconds(), this.props.minDate.getMilliseconds());
                    }
                    else {
                        this.updateTime(event, currentTime.getHours(), newMinute, this.props.minDate.getSeconds(), currentTime.getMilliseconds());
                    }
                }
                else {
                    this.updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
                }
            }
            else {
                this.updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
            }
        }

        event.preventDefault();
    }

    incrementSecond(event) {
        const currentTime = (this.props.value && this.props.value instanceof Date) ? this.props.value : this.getViewDate();
        const currentSecond = currentTime.getSeconds();
        let newSecond = currentSecond + this.props.stepSecond;
        newSecond = (newSecond > 59) ? (newSecond - 60) : newSecond;

        if (this.validateSecond(newSecond, currentTime)) {
            if (this.props.maxDate && this.props.maxDate.toDateString() === currentTime.toDateString() && this.props.maxDate.getSeconds() === newSecond) {
                if (this.props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
                    this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, this.props.maxDate.getMilliseconds());
                }
                else {
                    this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
                }
            }
            else {
                this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
            }
        }

        event.preventDefault();
    }

    decrementSecond(event) {
        const currentTime = (this.props.value && this.props.value instanceof Date) ? this.props.value : this.getViewDate();
        const currentSecond = currentTime.getSeconds();
        let newSecond = currentSecond - this.props.stepSecond;
        newSecond = (newSecond < 0) ? (newSecond + 60) : newSecond;

        if (this.validateSecond(newSecond, currentTime)) {
            if (this.props.minDate && this.props.minDate.toDateString() === currentTime.toDateString() && this.props.minDate.getSeconds() === newSecond) {
                if (this.props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
                    this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, this.props.minDate.getMilliseconds());
                }
                else {
                    this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
                }
            }
            else {
                this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
            }
        }

        event.preventDefault();
    }

    incrementMilliSecond(event) {
        const currentTime = (this.props.value && this.props.value instanceof Date) ? this.props.value : this.getViewDate();
        const currentMillisecond = currentTime.getMilliseconds();
        let newMillisecond = currentMillisecond + this.props.stepMillisec;
        newMillisecond = (newMillisecond > 999) ? (newMillisecond - 1000) : newMillisecond;

        if (this.validateMillisecond(newMillisecond, currentTime)) {
            this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMillisecond);
        }

        event.preventDefault();
    }

    decrementMilliSecond(event) {
        const currentTime = (this.props.value && this.props.value instanceof Date) ? this.props.value : this.getViewDate();
        const currentMillisecond = currentTime.getMilliseconds();
        let newMillisecond = currentMillisecond - this.props.stepMillisec;
        newMillisecond = (newMillisecond < 0) ? (newMillisecond + 999) : newMillisecond;

        if (this.validateMillisecond(newMillisecond, currentTime)) {
            this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMillisecond);
        }

        event.preventDefault();
    }

    toggleAmPm(event) {
        const currentTime = (this.props.value && this.props.value instanceof Date) ? this.props.value : this.getViewDate();
        const currentHour = currentTime.getHours();
        const newHour = (currentHour >= 12) ? currentHour - 12 : currentHour + 12;

        this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
        event.preventDefault();
    }

    getViewDate() {
        return this.props.onViewDateChange ? this.props.viewDate : this.state.viewDate;
    }

    isValidDate(date) {
        return date instanceof Date && !isNaN(date);
    }

    validateHour(hour, value) {
        let valid = true;
        let valueDateString = value ? value.toDateString() : null;

        if (this.props.minDate && valueDateString && this.props.minDate.toDateString() === valueDateString) {
            if (this.props.minDate.getHours() > hour) {
                valid = false;
            }
        }

        if (this.props.maxDate && valueDateString && this.props.maxDate.toDateString() === valueDateString) {
            if (this.props.maxDate.getHours() < hour) {
                valid = false;
            }
        }

        return valid;
    }

    validateMinute(minute, value) {
        let valid = true;
        let valueDateString = value ? value.toDateString() : null;

        if (this.props.minDate && valueDateString && this.props.minDate.toDateString() === valueDateString) {
            if (value.getHours() === this.props.minDate.getHours()) {
                if (this.props.minDate.getMinutes() > minute) {
                    valid = false;
                }
            }
        }

        if (this.props.maxDate && valueDateString && this.props.maxDate.toDateString() === valueDateString) {
            if (value.getHours() === this.props.maxDate.getHours()) {
                if (this.props.maxDate.getMinutes() < minute) {
                    valid = false;
                }
            }
        }

        return valid;
    }

    validateSecond(second, value) {
        let valid = true;
        let valueDateString = value ? value.toDateString() : null;

        if (this.props.minDate && valueDateString && this.props.minDate.toDateString() === valueDateString) {
            if (value.getHours() === this.props.minDate.getHours() && value.getMinutes() === this.props.minDate.getMinutes()) {
                if (this.props.minDate.getSeconds() > second) {
                    valid = false;
                }
            }
        }

        if (this.props.maxDate && valueDateString && this.props.maxDate.toDateString() === valueDateString) {
            if (value.getHours() === this.props.maxDate.getHours() && value.getMinutes() === this.props.maxDate.getMinutes()) {
                if (this.props.maxDate.getSeconds() < second) {
                    valid = false;
                }
            }
        }

        return valid;
    }

    validateMillisecond(millisecond, value) {
        let valid = true;
        let valueDateString = value ? value.toDateString() : null;

        if (this.props.minDate && valueDateString && this.props.minDate.toDateString() === valueDateString) {
            if (value.getHours() === this.props.minDate.getHours() && value.getSeconds() === this.props.minDate.getSeconds() && value.getMinutes() === this.props.minDate.getMinutes()) {
                if (this.props.minDate.getMilliseconds() > millisecond) {
                    valid = false;
                }
            }
        }

        if (this.props.maxDate && valueDateString && this.props.maxDate.toDateString() === valueDateString) {
            if (value.getHours() === this.props.maxDate.getHours() && value.getSeconds() === this.props.maxDate.getSeconds() && value.getMinutes() === this.props.maxDate.getMinutes()) {
                if (this.props.maxDate.getMilliseconds() < millisecond) {
                    valid = false;
                }
            }
        }

        return valid;
    }

    validateDate(value) {
        if (this.props.yearNavigator) {
            let viewYear = value.getFullYear();

            const minRangeYear = this.props.yearRange ? parseInt(this.props.yearRange.split(':')[0], 10) : null;
            const maxRangeYear = this.props.yearRange ? parseInt(this.props.yearRange.split(':')[1], 10) : null;
            const minYear = this.props.minDate && minRangeYear != null ? Math.max(this.props.minDate.getFullYear(), minRangeYear) : this.props.minDate || minRangeYear;
            const maxYear = this.props.maxDate && maxRangeYear != null ? Math.min(this.props.maxDate.getFullYear(), maxRangeYear) : this.props.maxDate || maxRangeYear;

            if (minYear && minYear > viewYear) {
                viewYear = minYear;
            }
            if (maxYear && maxYear < viewYear) {
                viewYear = maxYear
            }

            value.setFullYear(viewYear);
        }

        if (this.props.monthNavigator && this.props.view !== 'month') {
            let viewMonth = value.getMonth();
            let viewMonthWithMinMax = parseInt((this.isInMinYear(value) && Math.max(this.props.minDate.getMonth(), viewMonth).toString()) || (this.isInMaxYear(value) && Math.min(this.props.maxDate.getMonth(), viewMonth).toString()) || viewMonth);

            value.setMonth(viewMonthWithMinMax);
        }
    }

    updateTime(event, hour, minute, second, millisecond) {
        let newDateTime = (this.props.value && this.props.value instanceof Date) ? new Date(this.props.value) : new Date();

        newDateTime.setHours(hour);
        newDateTime.setMinutes(minute);
        newDateTime.setSeconds(second);
        newDateTime.setMilliseconds(millisecond);

        this.updateModel(event, newDateTime);

        if (this.props.onSelect) {
            this.props.onSelect({
                originalEvent: event,
                value: newDateTime
            });
        }

        this.updateInputfield(newDateTime);
    }

    updateViewDate(event, value) {
        this.validateDate(value);

        if (this.props.onViewDateChange) {
            this.props.onViewDateChange({
                originalEvent: event,
                value: value
            });
        }
        else {
            this.viewStateChanged = true;
            this.setState({
                viewDate: value
            });
        }
    }

    onDateCellKeydown(event, date, groupIndex) {
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
                        this.navigation = { backward: false };
                        this.navForward(event);
                    }
                    else {
                        nextRow.children[cellIndex].children[0].tabIndex = '0';
                        nextRow.children[cellIndex].children[0].focus();
                    }
                }
                else {
                    this.navigation = { backward: false };
                    this.navForward(event);
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
                        this.navigation = { backward: true };
                        this.navBackward(event);
                    }
                    else {
                        focusCell.tabIndex = '0';
                        focusCell.focus();
                    }
                }
                else {
                    this.navigation = { backward: true };
                    this.navBackward(event);
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
                        this.navigateToMonth(true, groupIndex, event);
                    }
                    else {
                        focusCell.tabIndex = '0';
                        focusCell.focus();
                    }
                }
                else {
                    this.navigateToMonth(true, groupIndex, event);
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
                        this.navigateToMonth(false, groupIndex, event);
                    }
                    else {
                        focusCell.tabIndex = '0';
                        focusCell.focus();
                    }
                }
                else {
                    this.navigateToMonth(false, groupIndex, event);
                }
                event.preventDefault();
                break;
            }

            //enter
            case 13: {
                this.onDateSelect(event, date);
                event.preventDefault();
                break;
            }

            //escape
            case 27: {
                this.hideOverlay(this.reFocusInputField)
                event.preventDefault();
                break;
            }

            //tab
            case 9: {
                this.trapFocus(event);
                break;
            }

            default:
                //no op
                break;
        }
    }

    navigateToMonth(prev, groupIndex, event) {
        if (prev) {
            if (this.props.numberOfMonths === 1 || (groupIndex === 0)) {
                this.navigation = { backward: true };
                this.navBackward(event);
            }
            else {
                let prevMonthContainer = this.overlayRef.current.children[groupIndex - 1];
                let cells = DomHandler.find(prevMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled)');
                let focusCell = cells[cells.length - 1];
                focusCell.tabIndex = '0';
                focusCell.focus();
            }
        }
        else {
            if (this.props.numberOfMonths === 1 || (groupIndex === this.props.numberOfMonths - 1)) {
                this.navigation = { backward: false };
                this.navForward(event);
            }
            else {
                let nextMonthContainer = this.overlayRef.current.children[groupIndex + 1];
                let focusCell = DomHandler.findSingle(nextMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled)');
                focusCell.tabIndex = '0';
                focusCell.focus();
            }
        }
    }

    onMonthCellKeydown(event, index) {
        const cell = event.currentTarget;

        switch (event.which) {
            //arrows
            case 38:
            case 40: {
                cell.tabIndex = '-1';
                let cells = cell.parentElement.children;
                let cellIndex = DomHandler.index(cell);
                let nextCell = cells[event.which === 40 ? cellIndex + 3 : cellIndex - 3];
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
                let prevCell = cell.previousElementSibling;
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
                let nextCell = cell.nextElementSibling;
                if (nextCell) {
                    nextCell.tabIndex = '0';
                    nextCell.focus();
                }
                event.preventDefault();
                break;
            }

            //enter
            case 13: {
                this.onMonthSelect(event, index);
                event.preventDefault();
                break;
            }

            //escape
            case 27: {
                this.hideOverlay(this.reFocusInputField);
                event.preventDefault();
                break;
            }

            //tab
            case 9: {
                this.trapFocus(event);
                break;
            }

            default:
                //no op
                break;
        }
    }

    onDateSelect(event, dateMeta, timeMeta) {
        if (this.props.disabled || !dateMeta.selectable) {
            event.preventDefault();
            return;
        }

        DomHandler.find(this.overlayRef.current, '.p-datepicker-calendar td span:not(.p-disabled)').forEach(cell => cell.tabIndex = -1);
        event.currentTarget.focus();

        if (this.isMultipleSelection()) {
            if (this.isSelected(dateMeta)) {
                let value = this.props.value.filter((date, i) => {
                    return !this.isDateEquals(date, dateMeta);
                });
                this.updateModel(event, value);
            }
            else if (!this.props.maxDateCount || !this.props.value || this.props.maxDateCount > this.props.value.length) {
                this.selectDate(event, dateMeta, timeMeta);
            }
        }
        else {
            this.selectDate(event, dateMeta, timeMeta);
        }

        if (!this.props.inline && this.isSingleSelection() && (!this.props.showTime || this.props.hideOnDateTimeSelect)) {
            setTimeout(() => {
                this.hideOverlay();
            }, 100);

            if (this.mask) {
                this.disableModality();
            }
        }

        event.preventDefault();
    }

    selectTime(date, timeMeta) {
        if (this.props.showTime) {
            let hours, minutes, seconds, milliseconds;

            if (timeMeta) {
                ({ hours, minutes, seconds, milliseconds } = timeMeta);
            }
            else {
                let time = (this.props.value && this.props.value instanceof Date) ? this.props.value : new Date();
                [hours, minutes, seconds, milliseconds] = [time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()];
            }

            date.setHours(hours);
            date.setMinutes(minutes);
            date.setSeconds(seconds);
            date.setMilliseconds(milliseconds);
        }
    }

    selectDate(event, dateMeta, timeMeta) {
        let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);

        this.selectTime(date, timeMeta);

        if (this.props.minDate && this.props.minDate > date) {
            date = this.props.minDate;
        }

        if (this.props.maxDate && this.props.maxDate < date) {
            date = this.props.maxDate;
        }

        let selectedValues = date;

        if (this.isSingleSelection()) {
            this.updateModel(event, date);
        }
        else if (this.isMultipleSelection()) {
            selectedValues = this.props.value ? [...this.props.value, date] : [date];
            this.updateModel(event, selectedValues);
        }
        else if (this.isRangeSelection()) {
            if (this.props.value && this.props.value.length) {
                let startDate = this.props.value[0];
                let endDate = this.props.value[1];

                if (!endDate && date.getTime() >= startDate.getTime()) {
                    endDate = date;
                }
                else {
                    startDate = date;
                    endDate = null;
                }

                selectedValues = [startDate, endDate];
                this.updateModel(event, selectedValues);
            }
            else {
                selectedValues = [date, null];
                this.updateModel(event, selectedValues);
            }
        }

        if (this.props.onSelect) {
            this.props.onSelect({
                originalEvent: event,
                value: date
            });
        }

        this.updateInputfield(selectedValues);
    }

    onMonthSelect(event, month) {
        this.onDateSelect(event, { year: this.getViewDate().getFullYear(), month: month, day: 1, selectable: true });
        event.preventDefault();
    }

    updateModel(event, value) {
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: value,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: this.props.name,
                    id: this.id,
                    value: value
                }
            });

            this.viewStateChanged = true;
        }
    }

    showOverlay() {
        this.setState({ overlayVisible: true });
    }

    hideOverlay(callback) {
        this.setState({ overlayVisible: false }, () => {
            this.viewStateChanged = false;
            this.ignoreFocusFunctionality = false;
            if (callback) {
                callback();
            }
        });
    }

    onOverlayEnter() {
        if (this.props.autoZIndex) {
            this.overlayRef.current.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        }
        this.alignOverlay();
    }

    onOverlayEntered() {
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindScrollListener();
    }

    onOverlayExit() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.state.overlayVisible && this.isOutsideClicked(event)) {
                    this.hideOverlay();
                }
            };

            document.addEventListener('mousedown', this.documentClickListener);
        }
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('mousedown', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    bindDocumentResizeListener() {
        if (!this.documentResizeListener && !this.props.touchUI) {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.documentResizeListener);
        }
    }

    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }

    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.container, () => {
                if (this.state.overlayVisible) {
                    this.hideOverlay();
                }
            });
        }

        this.scrollHandler.bindScrollListener();
    }

    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }

    isOutsideClicked(event) {
        return this.container && !(this.container.isSameNode(event.target) || this.isNavIconClicked(event) ||
            this.container.contains(event.target) || (this.overlayRef && this.overlayRef.current.contains(event.target)));
    }

    isNavIconClicked(event) {
        return (DomHandler.hasClass(event.target, 'p-datepicker-prev') || DomHandler.hasClass(event.target, 'p-datepicker-prev-icon')
            || DomHandler.hasClass(event.target, 'p-datepicker-next') || DomHandler.hasClass(event.target, 'p-datepicker-next-icon'));
    }

    onWindowResize() {
        if (this.state.overlayVisible && !DomHandler.isAndroid()) {
            this.hideOverlay();
        }
    }

    alignOverlay() {
        if (this.props.touchUI) {
            this.enableModality();
        }
        else {
            if (this.props.appendTo) {
                DomHandler.absolutePosition(this.overlayRef.current, this.inputElement);
                this.overlayRef.current.style.minWidth = DomHandler.getWidth(this.container) + 'px';
            }
            else {
                DomHandler.relativePosition(this.overlayRef.current, this.inputElement);
            }
        }
    }

    enableModality() {
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(this.overlayRef.current.style.zIndex, 10) - 1);
            DomHandler.addMultipleClasses(this.mask, 'p-component-overlay p-datepicker-mask p-datepicker-mask-scrollblocker');

            this.maskClickListener = () => {
                this.disableModality();
            };
            this.mask.addEventListener('click', this.maskClickListener);

            document.body.appendChild(this.mask);
            DomHandler.addClass(document.body, 'p-overflow-hidden');
        }
    }

    disableModality() {
        if (this.mask) {
            this.mask.removeEventListener('click', this.maskClickListener);
            this.maskClickListener = null;
            document.body.removeChild(this.mask);
            this.mask = null;

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

            this.hideOverlay();
        }
    }

    getFirstDayOfMonthIndex(month, year) {
        let day = new Date();
        day.setDate(1);
        day.setMonth(month);
        day.setFullYear(year);

        let dayIndex = day.getDay() + this.getSundayIndex();
        return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
    }

    getDaysCountInMonth(month, year) {
        return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
    }

    getDaysCountInPrevMonth(month, year) {
        let prev = this.getPreviousMonthAndYear(month, year);
        return this.getDaysCountInMonth(prev.month, prev.year);
    }

    daylightSavingAdjust(date) {
        if (!date) {
            return null;
        }

        date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);

        return date;
    }

    getPreviousMonthAndYear(month, year) {
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

    getNextMonthAndYear(month, year) {
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

    getSundayIndex() {
        const firstDayOfWeek = localeOption('firstDayOfWeek', this.props.locale);
        return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
    }

    createWeekDays() {
        let weekDays = [];
        let { firstDayOfWeek: dayIndex, dayNamesMin } = localeOptions(this.props.locale);
        for (let i = 0; i < 7; i++) {
            weekDays.push(dayNamesMin[dayIndex]);
            dayIndex = (dayIndex === 6) ? 0 : ++dayIndex;
        }

        return weekDays;
    }

    createMonths(month, year) {
        let months = [];
        for (let i = 0; i < this.props.numberOfMonths; i++) {
            let m = month + i;
            let y = year;
            if (m > 11) {
                m = m % 11 - 1;
                y = year + 1;
            }

            months.push(this.createMonth(m, y));
        }

        return months;
    }

    createMonth(month, year) {
        let dates = [];
        let firstDay = this.getFirstDayOfMonthIndex(month, year);
        let daysLength = this.getDaysCountInMonth(month, year);
        let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
        let dayNo = 1;
        let today = new Date();
        let weekNumbers = [];
        let monthRows = Math.ceil((daysLength + firstDay) / 7);

        for (let i = 0; i < monthRows; i++) {
            let week = [];

            if (i === 0) {
                for (let j = (prevMonthDaysLength - firstDay + 1); j <= prevMonthDaysLength; j++) {
                    let prev = this.getPreviousMonthAndYear(month, year);
                    week.push({
                        day: j, month: prev.month, year: prev.year, otherMonth: true,
                        today: this.isToday(today, j, prev.month, prev.year), selectable: this.isSelectable(j, prev.month, prev.year, true)
                    });
                }

                let remainingDaysLength = 7 - week.length;
                for (let j = 0; j < remainingDaysLength; j++) {
                    week.push({
                        day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),
                        selectable: this.isSelectable(dayNo, month, year, false)
                    });
                    dayNo++;
                }
            }
            else {
                for (let j = 0; j < 7; j++) {
                    if (dayNo > daysLength) {
                        let next = this.getNextMonthAndYear(month, year);
                        week.push({
                            day: dayNo - daysLength, month: next.month, year: next.year, otherMonth: true,
                            today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                            selectable: this.isSelectable((dayNo - daysLength), next.month, next.year, true)
                        });
                    }
                    else {
                        week.push({
                            day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),
                            selectable: this.isSelectable(dayNo, month, year, false)
                        });
                    }

                    dayNo++;
                }
            }

            if (this.props.showWeek) {
                weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
            }

            dates.push(week);
        }

        return {
            month: month,
            year: year,
            dates: dates,
            weekNumbers: weekNumbers
        };
    }

    getWeekNumber(date) {
        let checkDate = new Date(date.getTime());
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        let time = checkDate.getTime();
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
    }

    isSelectable(day, month, year, otherMonth) {
        let validMin = true;
        let validMax = true;
        let validDate = true;
        let validDay = true;
        let validMonth = true;

        if (this.props.minDate) {
            if (this.props.minDate.getFullYear() > year) {
                validMin = false;
            }
            else if (this.props.minDate.getFullYear() === year) {
                if (this.props.minDate.getMonth() > month) {
                    validMin = false;
                }
                else if (this.props.minDate.getMonth() === month) {
                    if (this.props.minDate.getDate() > day) {
                        validMin = false;
                    }
                }
            }
        }

        if (this.props.maxDate) {
            if (this.props.maxDate.getFullYear() < year) {
                validMax = false;
            }
            else if (this.props.maxDate.getFullYear() === year) {
                if (this.props.maxDate.getMonth() < month) {
                    validMax = false;
                }
                else if (this.props.maxDate.getMonth() === month) {
                    if (this.props.maxDate.getDate() < day) {
                        validMax = false;
                    }
                }
            }
        }

        if (this.props.disabledDates) {
            validDate = !this.isDateDisabled(day, month, year);
        }

        if (this.props.disabledDays) {
            validDay = !this.isDayDisabled(day, month, year)
        }

        if (this.props.selectOtherMonths === false && otherMonth) {
            validMonth = false;
        }

        return validMin && validMax && validDate && validDay && validMonth;
    }

    isSelectableTime(value) {
        let validMin = true;
        let validMax = true;

        if (this.props.minDate && this.props.minDate.toDateString() === value.toDateString()) {
            if (this.props.minDate.getHours() > value.getHours()) {
                validMin = false;
            }
            else if (this.props.minDate.getHours() === value.getHours()) {
                if (this.props.minDate.getMinutes() > value.getMinutes()) {
                    validMin = false;
                }
                else if (this.props.minDate.getMinutes() === value.getMinutes()) {
                    if (this.props.minDate.getSeconds() > value.getSeconds()) {
                        validMin = false;
                    }
                    else if (this.props.minDate.getSeconds() === value.getSeconds()) {
                        if (this.props.minDate.getMilliseconds() > value.getMilliseconds()) {
                            validMin = false;
                        }
                    }
                }
            }
        }

        if (this.props.maxDate && this.props.maxDate.toDateString() === value.toDateString()) {
            if (this.props.maxDate.getHours() < value.getHours()) {
                validMax = false;
            }
            else if (this.props.maxDate.getHours() === value.getHours()) {
                if (this.props.maxDate.getMinutes() < value.getMinutes()) {
                    validMax = false;
                }
                else if (this.props.maxDate.getMinutes() === value.getMinutes()) {
                    if (this.props.maxDate.getSeconds() < value.getSeconds()) {
                        validMax = false;
                    }
                    else if (this.props.maxDate.getSeconds() === value.getSeconds()) {
                        if (this.props.maxDate.getMilliseconds() < value.getMilliseconds()) {
                            validMax = false;
                        }
                    }
                }
            }
        }

        return validMin && validMax;
    }

    isSelected(dateMeta) {
        if (this.props.value) {
            if (this.isSingleSelection()) {
                return this.isDateEquals(this.props.value, dateMeta);
            }
            else if (this.isMultipleSelection()) {
                let selected = false;
                for (let date of this.props.value) {
                    selected = this.isDateEquals(date, dateMeta);
                    if (selected) {
                        break;
                    }
                }

                return selected;
            }
            else if (this.isRangeSelection()) {
                if (this.props.value[1])
                    return this.isDateEquals(this.props.value[0], dateMeta) || this.isDateEquals(this.props.value[1], dateMeta) || this.isDateBetween(this.props.value[0], this.props.value[1], dateMeta);
                else {
                    return this.isDateEquals(this.props.value[0], dateMeta);
                }

            }
        }
        else {
            return false;
        }
    }

    isMonthSelected(month) {
        const viewDate = this.getViewDate();

        if (this.props.value && this.props.value instanceof Date)
            return this.props.value.getDate() === 1 && this.props.value.getMonth() === month && this.props.value.getFullYear() === viewDate.getFullYear();
        else
            return false;
    }

    isDateEquals(value, dateMeta) {
        if (value && value instanceof Date)
            return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
        else
            return false;
    }

    isDateBetween(start, end, dateMeta) {
        let between = false;
        if (start && end) {
            let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
            return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
        }

        return between;
    }

    isSingleSelection() {
        return this.props.selectionMode === 'single';
    }

    isRangeSelection() {
        return this.props.selectionMode === 'range';
    }

    isMultipleSelection() {
        return this.props.selectionMode === 'multiple';
    }

    isToday(today, day, month, year) {
        return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
    }

    isDateDisabled(day, month, year) {
        if (this.props.disabledDates) {
            for (let i = 0; i < this.props.disabledDates.length; i++) {
                let disabledDate = this.props.disabledDates[i];

                if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
                    return true;
                }
            }
        }

        return false;
    }

    isDayDisabled(day, month, year) {
        if (this.props.disabledDays) {
            let weekday = new Date(year, month, day);
            let weekdayNumber = weekday.getDay();

            return this.props.disabledDays.indexOf(weekdayNumber) !== -1;
        }

        return false;
    }

    updateInputfield(value) {
        if (!this.inputElement) {
            return;
        }

        let formattedValue = '';

        if (value) {
            try {
                if (this.isSingleSelection()) {
                    formattedValue = this.isValidDate(value) ? this.formatDateTime(value) : '';
                }
                else if (this.isMultipleSelection()) {
                    for (let i = 0; i < value.length; i++) {
                        let selectedValue = value[i];
                        let dateAsString = this.isValidDate(selectedValue) ? this.formatDateTime(selectedValue) : '';
                        formattedValue += dateAsString;
                        if (i !== (value.length - 1)) {
                            formattedValue += ', ';
                        }
                    }
                }
                else if (this.isRangeSelection()) {
                    if (value && value.length) {
                        let startDate = value[0];
                        let endDate = value[1];

                        formattedValue = this.isValidDate(startDate) ? this.formatDateTime(startDate) : '';
                        if (endDate) {
                            formattedValue += (this.isValidDate(endDate) ? ' - ' + this.formatDateTime(endDate) : '');
                        }
                    }
                }
            }
            catch (err) {
                formattedValue = value;
            }
        }

        this.inputElement.value = formattedValue;
    }

    formatDateTime(date) {
        let formattedValue = null;
        if (date) {
            if (this.props.timeOnly) {
                formattedValue = this.formatTime(date);
            }
            else {
                formattedValue = this.formatDate(date, this.getDateFormat());
                if (this.props.showTime) {
                    formattedValue += ' ' + this.formatTime(date);
                }
            }
        }

        return formattedValue;
    }

    formatDate(date, format) {
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
        const { dayNamesShort, dayNames, monthNamesShort, monthNames } = localeOptions(this.props.locale);

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
                            output += date.getTime() * 10000 + this.ticksTo1970;
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

    formatTime(date) {
        if (!date) {
            return '';
        }

        let output = '';
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let milliseconds = date.getMilliseconds();

        if (this.props.hourFormat === '12' && hours > 11 && hours !== 12) {
            hours -= 12;
        }

        if (this.props.hourFormat === '12') {
            output += hours === 0 ? 12 : (hours < 10) ? '0' + hours : hours;
        }
        else {
            output += (hours < 10) ? '0' + hours : hours;
        }
        output += ':';
        output += (minutes < 10) ? '0' + minutes : minutes;

        if (this.props.showSeconds) {
            output += ':';
            output += (seconds < 10) ? '0' + seconds : seconds;
        }

        if (this.props.showMillisec) {
            output += '.';
            output += milliseconds < 100 ? (milliseconds < 10 ? '00' : '0') + milliseconds : milliseconds;
        }

        if (this.props.hourFormat === '12') {
            output += date.getHours() > 11 ? ' PM' : ' AM';
        }

        return output;
    }

    parseValueFromString(text) {
        if (!text || text.trim().length === 0) {
            return null;
        }

        let value;

        if (this.isSingleSelection()) {
            value = this.parseDateTime(text);
        }
        else if (this.isMultipleSelection()) {
            let tokens = text.split(',');
            value = [];
            for (let token of tokens) {
                value.push(this.parseDateTime(token.trim()));
            }
        }
        else if (this.isRangeSelection()) {
            let tokens = text.split(' - ');
            value = [];
            for (let i = 0; i < tokens.length; i++) {
                value[i] = this.parseDateTime(tokens[i].trim());
            }
        }

        return value;
    }

    parseDateTime(text) {
        let date;
        let parts = text.split(' ');

        if (this.props.timeOnly) {
            date = new Date();
            this.populateTime(date, parts[0], parts[1]);
        }
        else {
            if (this.props.showTime) {
                date = this.parseDate(parts[0], this.getDateFormat());
                this.populateTime(date, parts[1], parts[2]);
            }
            else {
                date = this.parseDate(text, this.getDateFormat());
            }
        }

        return date;
    }

    populateTime(value, timeString, ampm) {
        if (this.props.hourFormat === '12' && (ampm !== 'PM' && ampm !== 'AM')) {
            throw new Error('Invalid Time');
        }

        let time = this.parseTime(timeString, ampm);
        value.setHours(time.hour);
        value.setMinutes(time.minute);
        value.setSeconds(time.second);
        value.setMilliseconds(time.millisecond);
    }

    parseTime(value, ampm) {
        value = this.props.showMillisec ? value.replace('.', ':') : value;
        let tokens = value.split(':');
        let validTokenLength = this.props.showSeconds ? 3 : 2;
        validTokenLength = this.props.showMillisec ? validTokenLength + 1 : validTokenLength;

        if (tokens.length !== validTokenLength || tokens[0].length !== 2 || tokens[1].length !== 2 ||
            (this.props.showSeconds && tokens[2].length !== 2) ||
            (this.props.showMillisec && tokens[3].length !== 3)) {
            throw new Error('Invalid time');
        }

        let h = parseInt(tokens[0], 10);
        let m = parseInt(tokens[1], 10);
        let s = this.props.showSeconds ? parseInt(tokens[2], 10) : null;
        let ms = this.props.showMillisec ? parseInt(tokens[3], 10) : null;

        if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || (this.props.hourFormat === '12' && h > 12) ||
            (this.props.showSeconds && (isNaN(s) || s > 59)) ||
            (this.props.showMillisec && (isNaN(s) || s > 1000))) {
            throw new Error('Invalid time');
        }
        else {
            if (this.props.hourFormat === '12' && h !== 12 && ampm === 'PM') {
                h += 12;
            }

            return { hour: h, minute: m, second: s, millisecond: ms };
        }
    }

    // Ported from jquery-ui datepicker parseDate
    parseDate(value, format) {
        if (format == null || value == null) {
            throw new Error('Invalid arguments');
        }

        value = (typeof value === "object" ? value.toString() : value + "");
        if (value === "") {
            return null;
        }

        let iFormat, dim, extra,
            iValue = 0,
            shortYearCutoff = (typeof this.props.shortYearCutoff !== "string" ? this.props.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.props.shortYearCutoff, 10)),
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

        if (this.props.view === 'month') {
            day = 1;
        }

        const { dayNamesShort, dayNames, monthNamesShort, monthNames } = localeOptions(this.props.locale);

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
                        date = new Date((getNumber("!") - this.ticksTo1970) / 10000);
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
                dim = this.getDaysCountInMonth(year, month - 1);
                if (day <= dim) {
                    break;
                }
                month++;
                day -= dim;
            } while (true);
        }

        date = this.daylightSavingAdjust(new Date(year, month - 1, day));
        if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
            throw new Error('Invalid date'); // E.g. 31/02/00
        }

        return date;
    }

    renderBackwardNavigator(isVisible) {
        let navigatorProps = isVisible ? { 'onClick': this.onPrevButtonClick, 'onKeyDown': e => this.onContainerButtonKeydown(e) } : { 'style': { visibility: 'hidden' } };
        return (
            <button type="button" className="p-datepicker-prev p-link" {...navigatorProps}>
                <span className="p-datepicker-prev-icon pi pi-chevron-left"></span>
                <Ripple />
            </button>
        );
    }

    renderForwardNavigator(isVisible) {
        let navigatorProps = isVisible ? { 'onClick': this.onNextButtonClick, 'onKeyDown': e => this.onContainerButtonKeydown(e) } : { 'style': { visibility: 'hidden' } };
        return (
            <button type="button" className="p-datepicker-next p-link" {...navigatorProps}>
                <span className="p-datepicker-next-icon pi pi-chevron-right"></span>
                <Ripple />
            </button>
        );
    }

    isInMinYear(viewDate) {
        return this.props.minDate && this.props.minDate.getFullYear() === viewDate.getFullYear();
    }

    isInMaxYear(viewDate) {
        return this.props.maxDate && this.props.maxDate.getFullYear() === viewDate.getFullYear();
    }

    renderTitleMonthElement(month) {
        const monthNames = localeOption('monthNames', this.props.locale);

        if (this.props.monthNavigator && this.props.view !== 'month') {
            const viewDate = this.getViewDate();
            const viewMonth = viewDate.getMonth();

            return (
                <select className="p-datepicker-month" onChange={this.onMonthDropdownChange} value={viewMonth}>
                    {
                        monthNames.map((month, index) => {
                            if ((!this.isInMinYear(viewDate) || index >= this.props.minDate.getMonth()) && (!this.isInMaxYear(viewDate) || index <= this.props.maxDate.getMonth())) {
                                return <option key={month} value={index}>{month}</option>
                            }
                            return null;
                        })
                    }
                </select>
            );
        }
        else {
            return (
                <span className="p-datepicker-month">{monthNames[month]}</span>
            );
        }
    }

    renderTitleYearElement(year) {
        if (this.props.yearNavigator) {
            let yearOptions = [];
            const years = this.props.yearRange.split(':');
            const yearStart = parseInt(years[0], 10);
            const yearEnd = parseInt(years[1], 10);

            for (let i = yearStart; i <= yearEnd; i++) {
                yearOptions.push(i);
            }

            let viewDate = this.getViewDate();
            let viewYear = viewDate.getFullYear();

            return (
                <select className="p-datepicker-year" onChange={this.onYearDropdownChange} value={viewYear}>
                    {
                        yearOptions.map(year => {
                            if (!(this.props.minDate && this.props.minDate.getFullYear() > year) && !(this.props.maxDate && this.props.maxDate.getFullYear() < year)) {
                                return <option key={year} value={year}>{year}</option>
                            }
                            return null;
                        })
                    }
                </select>
            );
        }
        else {
            return (
                <span className="p-datepicker-year">{year}</span>
            );
        }
    }

    renderTitle(monthMetaData) {
        const month = this.renderTitleMonthElement(monthMetaData.month);
        const year = this.renderTitleYearElement(monthMetaData.year);

        return (
            <div className="p-datepicker-title">
                {month}
                {year}
            </div>
        );
    }

    renderDayNames(weekDays) {
        const dayNames = weekDays.map(weekDay =>
        (
            <th key={weekDay} scope="col">
                <span>{weekDay}</span>
            </th>
        )
        );

        if (this.props.showWeek) {
            const weekHeader = (
                <th scope="col" key={'wn'} className="p-datepicker-weekheader p-disabled">
                    <span>{localeOption('weekHeader', this.props.locale)}</span>
                </th>
            );

            return [weekHeader, ...dayNames];
        }
        else {
            return dayNames;
        }
    }

    renderDateCellContent(date, className, groupIndex) {
        const content = this.props.dateTemplate ? this.props.dateTemplate(date) : date.day;

        return (
            <span className={className} onClick={e => this.onDateSelect(e, date)} onKeyDown={e => this.onDateCellKeydown(e, date, groupIndex)}>
                {content}
                <Ripple />
            </span>
        );
    }

    renderWeek(weekDates, weekNumber, groupIndex) {
        const week = weekDates.map((date) => {
            const selected = this.isSelected(date);
            const cellClassName = classNames({ 'p-datepicker-other-month': date.otherMonth, 'p-datepicker-today': date.today });
            const dateClassName = classNames({ 'p-highlight': selected, 'p-disabled': !date.selectable });
            const content = (date.otherMonth && !this.props.showOtherMonths) ? null : this.renderDateCellContent(date, dateClassName, groupIndex);

            return (
                <td key={date.day} className={cellClassName}>
                    {content}
                </td>
            );
        });

        if (this.props.showWeek) {
            const weekNumberCell = (
                <td key={'wn' + weekNumber} className="p-datepicker-weeknumber">
                    <span className="p-disabled">
                        {weekNumber}
                    </span>
                </td>
            );

            return [weekNumberCell, ...week];
        }
        else {
            return week;
        }
    }

    renderDates(monthMetaData, groupIndex) {
        return monthMetaData.dates.map((weekDates, index) => {
            return (
                <tr key={index}>
                    {this.renderWeek(weekDates, monthMetaData.weekNumbers[index], groupIndex)}
                </tr>
            );
        });
    }

    renderDateViewGrid(monthMetaData, weekDays, groupIndex) {
        const dayNames = this.renderDayNames(weekDays);
        const dates = this.renderDates(monthMetaData, groupIndex);

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
        );
    }

    renderMonth(monthMetaData, index) {
        const weekDays = this.createWeekDays();
        const backwardNavigator = this.renderBackwardNavigator((index === 0));
        const forwardNavigator = this.renderForwardNavigator((this.props.numberOfMonths === 1) || (index === this.props.numberOfMonths - 1));
        const title = this.renderTitle(monthMetaData);
        const dateViewGrid = this.renderDateViewGrid(monthMetaData, weekDays, index);
        const header = this.props.headerTemplate ? this.props.headerTemplate() : null;

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
        );
    }

    renderMonths(monthsMetaData) {
        const groups = monthsMetaData.map((monthMetaData, index) => {
            return this.renderMonth(monthMetaData, index);
        });

        return (
            <div className="p-datepicker-group-container">
                {groups}
            </div>
        )
    }

    renderDateView() {
        let viewDate = this.getViewDate();
        const monthsMetaData = this.createMonths(viewDate.getMonth(), viewDate.getFullYear());
        const months = this.renderMonths(monthsMetaData);

        return (
            <>
                {months}
            </>
        );
    }

    renderMonthViewMonth(index) {
        const className = classNames('p-monthpicker-month', { 'p-highlight': this.isMonthSelected(index) });
        const monthNamesShort = localeOption('monthNamesShort', this.props.locale);
        const monthName = monthNamesShort[index];

        return (
            <span key={monthName} className={className} onClick={event => this.onMonthSelect(event, index)} onKeyDown={event => this.onMonthCellKeydown(event, index)}>
                {monthName}
                <Ripple />
            </span>
        );
    }

    renderMonthViewMonths() {
        let months = [];
        for (let i = 0; i <= 11; i++) {
            months.push(this.renderMonthViewMonth(i));
        }

        return months;
    }

    renderMonthView() {
        const backwardNavigator = this.renderBackwardNavigator();
        const forwardNavigator = this.renderForwardNavigator();
        const yearElement = this.renderTitleYearElement(this.getViewDate().getFullYear());
        const months = this.renderMonthViewMonths();

        return (
            <>
                <div className="p-datepicker-header">
                    {backwardNavigator}
                    {forwardNavigator}
                    <div className="p-datepicker-title">
                        {yearElement}
                    </div>
                </div>
                <div className="p-monthpicker">
                    {months}
                </div>
            </>
        );
    }

    renderDatePicker() {
        if (!this.props.timeOnly) {
            if (this.props.view === 'date') {
                return this.renderDateView();
            }
            else if (this.props.view === 'month') {
                return this.renderMonthView();
            }
            else {
                return null;
            }
        }
    }

    renderHourPicker() {
        let currentTime = (this.props.value && this.props.value instanceof Date) ? this.props.value : this.getViewDate();
        let hour = currentTime.getHours();

        if (this.props.hourFormat === '12') {
            if (hour === 0)
                hour = 12;
            else if (hour > 11 && hour !== 12)
                hour = hour - 12;
        }

        const hourDisplay = hour < 10 ? '0' + hour : hour;

        return (
            <div className="p-hour-picker">
                <button type="button" className="p-link" onMouseDown={(e) => this.onTimePickerElementMouseDown(e, 0, 1)} onMouseUp={this.onTimePickerElementMouseUp}
                    onMouseLeave={this.onTimePickerElementMouseLeave} onKeyDown={e => this.onContainerButtonKeydown(e)}>
                    <span className="pi pi-chevron-up"></span>
                    <Ripple />
                </button>
                <span>{hourDisplay}</span>
                <button type="button" className="p-link" onMouseDown={(e) => this.onTimePickerElementMouseDown(e, 0, -1)} onMouseUp={this.onTimePickerElementMouseUp}
                    onMouseLeave={this.onTimePickerElementMouseLeave} onKeyDown={e => this.onContainerButtonKeydown(e)}>
                    <span className="pi pi-chevron-down"></span>
                    <Ripple />
                </button>
            </div>
        );
    }

    renderMinutePicker() {
        let currentTime = (this.props.value && this.props.value instanceof Date) ? this.props.value : this.getViewDate();
        let minute = currentTime.getMinutes();
        let minuteDisplay = minute < 10 ? '0' + minute : minute;

        return (
            <div className="p-minute-picker">
                <button type="button" className="p-link" onMouseDown={(e) => this.onTimePickerElementMouseDown(e, 1, 1)} onMouseUp={this.onTimePickerElementMouseUp}
                    onMouseLeave={this.onTimePickerElementMouseLeave} onKeyDown={e => this.onContainerButtonKeydown(e)}>
                    <span className="pi pi-chevron-up"></span>
                    <Ripple />
                </button>
                <span>{minuteDisplay}</span>
                <button type="button" className="p-link" onMouseDown={(e) => this.onTimePickerElementMouseDown(e, 1, -1)} onMouseUp={this.onTimePickerElementMouseUp}
                    onMouseLeave={this.onTimePickerElementMouseLeave} onKeyDown={e => this.onContainerButtonKeydown(e)}>
                    <span className="pi pi-chevron-down"></span>
                    <Ripple />
                </button>
            </div>
        );
    }

    renderSecondPicker() {
        if (this.props.showSeconds) {
            let currentTime = (this.props.value && this.props.value instanceof Date) ? this.props.value : this.getViewDate();
            let second = currentTime.getSeconds();
            let secondDisplay = second < 10 ? '0' + second : second;

            return (
                <div className="p-second-picker">
                    <button type="button" className="p-link" onMouseDown={(e) => this.onTimePickerElementMouseDown(e, 2, 1)} onMouseUp={this.onTimePickerElementMouseUp}
                        onMouseLeave={this.onTimePickerElementMouseLeave} onKeyDown={e => this.onContainerButtonKeydown(e)}>
                        <span className="pi pi-chevron-up"></span>
                        <Ripple />
                    </button>
                    <span>{secondDisplay}</span>
                    <button type="button" className="p-link" onMouseDown={(e) => this.onTimePickerElementMouseDown(e, 2, -1)} onMouseUp={this.onTimePickerElementMouseUp}
                        onMouseLeave={this.onTimePickerElementMouseLeave} onKeyDown={e => this.onContainerButtonKeydown(e)}>
                        <span className="pi pi-chevron-down"></span>
                        <Ripple />
                    </button>
                </div>
            );
        }

        return null;
    }

    renderMiliSecondPicker() {
        if (this.props.showMillisec) {
            let currentTime = (this.props.value && this.props.value instanceof Date) ? this.props.value : this.getViewDate();
            let millisecond = currentTime.getMilliseconds();
            let millisecondDisplay = millisecond < 100 ? (millisecond < 10 ? '00' : '0') + millisecond : millisecond;

            return (
                <div className="p-millisecond-picker">
                    <button type="button" className="p-link" onMouseDown={(e) => this.onTimePickerElementMouseDown(e, 3, 1)} onMouseUp={this.onTimePickerElementMouseUp}
                        onMouseLeave={this.onTimePickerElementMouseLeave} onKeyDown={e => this.onContainerButtonKeydown(e)}>
                        <span className="pi pi-chevron-up"></span>
                        <Ripple />
                    </button>
                    <span>{millisecondDisplay}</span>
                    <button type="button" className="p-link" onMouseDown={(e) => this.onTimePickerElementMouseDown(e, 3, -1)} onMouseUp={this.onTimePickerElementMouseUp}
                        onMouseLeave={this.onTimePickerElementMouseLeave} onKeyDown={e => this.onContainerButtonKeydown(e)}>
                        <span className="pi pi-chevron-down"></span>
                        <Ripple />
                    </button>
                </div>
            );
        }

        return null;
    }

    renderAmPmPicker() {
        if (this.props.hourFormat === '12') {
            let currentTime = (this.props.value && this.props.value instanceof Date) ? this.props.value : this.getViewDate();
            let hour = currentTime.getHours();
            let display = hour > 11 ? 'PM' : 'AM';

            return (
                <div className="p-ampm-picker">
                    <button type="button" className="p-link" onClick={this.toggleAmPm}>
                        <span className="pi pi-chevron-up"></span>
                        <Ripple />
                    </button>
                    <span>{display}</span>
                    <button type="button" className="p-link" onClick={this.toggleAmPm}>
                        <span className="pi pi-chevron-down"></span>
                        <Ripple />
                    </button>
                </div>
            );
        }

        return null;
    }

    renderSeparator(separator) {
        return (
            <div className="p-separator">
                <span>{separator}</span>
            </div>
        );
    }

    renderTimePicker() {
        if (this.props.showTime || this.props.timeOnly) {
            return (
                <div className="p-timepicker">
                    {this.renderHourPicker()}
                    {this.renderSeparator(':')}
                    {this.renderMinutePicker()}
                    {this.props.showSeconds && this.renderSeparator(':')}
                    {this.renderSecondPicker()}
                    {this.props.showMillisec && this.renderSeparator('.')}
                    {this.renderMiliSecondPicker()}
                    {this.props.hourFormat === '12' && this.renderSeparator(':')}
                    {this.renderAmPmPicker()}
                </div>
            )
        }

        return null;
    }

    renderInputElement() {
        if (!this.props.inline) {
            return (
                <InputText ref={(el) => this.inputElement = el} id={this.props.inputId} name={this.props.name} type="text" className={this.props.inputClassName} style={this.props.inputStyle}
                    readOnly={this.props.readOnlyInput} disabled={this.props.disabled} required={this.props.required} autoComplete="off" placeholder={this.props.placeholder}
                    onInput={this.onUserInput} onFocus={this.onInputFocus} onBlur={this.onInputBlur} onKeyDown={this.onInputKeyDown} aria-labelledby={this.props.ariaLabelledBy} inputMode="none" />
            );
        }

        return null;
    }

    renderButton() {
        if (this.props.showIcon) {
            return (
                <Button type="button" icon={this.props.icon} onClick={this.onButtonClick} tabIndex="-1"
                    disabled={this.props.disabled} className="p-datepicker-trigger" />
            );
        }

        return null;
    }

    renderButtonBar() {
        if (this.props.showButtonBar) {
            const todayClassName = classNames('p-button-text', this.props.todayButtonClassName);
            const clearClassName = classNames('p-button-text', this.props.clearButtonClassName);
            const { today, clear } = localeOptions(this.props.locale);

            return (
                <div className="p-datepicker-buttonbar">
                    <Button type="button" label={today} onClick={this.onTodayButtonClick} onKeyDown={e => this.onContainerButtonKeydown(e)} className={todayClassName} />
                    <Button type="button" label={clear} onClick={this.onClearButtonClick} onKeyDown={e => this.onContainerButtonKeydown(e)} className={clearClassName} />
                </div>
            );
        }

        return null;
    }

    renderFooter() {
        if (this.props.footerTemplate) {
            const content = this.props.footerTemplate();

            return (
                <div className="p-datepicker-footer">
                    {content}
                </div>
            )
        }

        return null;
    }

    render() {
        const className = classNames('p-calendar p-component p-inputwrapper', this.props.className, {
            'p-calendar-w-btn': this.props.showIcon,
            'p-calendar-timeonly': this.props.timeOnly,
            'p-inputwrapper-filled': this.props.value || (DomHandler.hasClass(this.inputElement, 'p-filled') && this.inputElement.value !== ''),
            'p-inputwrapper-focus': this.state.focused
        });
        const panelClassName = classNames('p-datepicker p-component', this.props.panelClassName, {
            'p-datepicker-inline': this.props.inline,
            'p-disabled': this.props.disabled,
            'p-datepicker-timeonly': this.props.timeOnly,
            'p-datepicker-multiple-month': this.props.numberOfMonths > 1,
            'p-datepicker-monthpicker': (this.props.view === 'month'),
            'p-datepicker-touch-ui': this.props.touchUI
        });
        const input = this.renderInputElement();
        const button = this.renderButton();
        const datePicker = this.renderDatePicker();
        const timePicker = this.renderTimePicker();
        const buttonBar = this.renderButtonBar();
        const footer = this.renderFooter();

        return (
            <span ref={(el) => this.container = el} id={this.id} className={className} style={this.props.style}>
                {input}
                {button}
                <CalendarPanel ref={this.overlayRef} className={panelClassName} style={this.props.panelStyle} appendTo={this.props.appendTo} onClick={this.onPanelClick}
                    in={this.props.inline || this.state.overlayVisible} onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit}>
                    {datePicker}
                    {timePicker}
                    {buttonBar}
                    {footer}
                </CalendarPanel>
            </span>
        );
    }
}


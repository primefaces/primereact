import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import { InputText } from "../inputtext/InputText";
import { Button } from "../button/Button";
import { CalendarPanel } from "./CalendarPanel";
import DomHandler from "../utils/DomHandler";
import { classNames } from "../utils/ClassNames";
import { tip } from "../tooltip/Tooltip";
import { Ripple } from "../ripple/Ripple";
import ConnectedOverlayScrollHandler from "../utils/ConnectedOverlayScrollHandler";
import { localeOption, localeOptions } from "../api/Locale";
import OverlayEventBus from "../overlayeventbus/OverlayEventBus";
import { mask } from "../utils/Mask";
import { ZIndexUtils } from "../utils/ZIndexUtils";
import PrimeReact from "../api/PrimeReact";
import moment from "jalali-moment";
export class Calendar extends Component {
    static defaultProps = {
        id: null,
        inputRef: null,
        name: null,
        value: null,
        viewDate: null,
        style: null,
        className: null,
        inline: false,
        selectionMode: "single",
        inputId: null,
        inputStyle: null,
        inputClassName: null,
        required: false,
        readOnlyInput: false,
        keepInvalid: false,
        mask: null,
        disabled: false,
        tabIndex: null,
        placeholder: null,
        showIcon: false,
        icon: "pi pi-calendar",
        showOnFocus: true,
        numberOfMonths: 1,
        view: "jDate",
        touchUI: false,
        showTime: false,
        timeOnly: false,
        showSeconds: false,
        showMillisec: false,
        hourFormat: "24",
        stepHour: 1,
        stepMinute: 1,
        stepSecond: 1,
        stepMillisec: 1,
        shortYearCutoff: "+10",
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
        todayButtonClassName: "p-button-secondary",
        clearButtonClassName: "p-button-secondary",
        autoZIndex: true,
        baseZIndex: 0,
        appendTo: null,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        dateTemplate: null,
        headerTemplate: null,
        footerTemplate: null,
        transitionOptions: null,
        onFocus: null,
        onBlur: null,
        onInput: null,
        onSelect: null,
        onChange: null,
        onViewDateChange: null,
        onTodayButtonClick: null,
        onClearButtonClick: null,
        onShow: null,
        onHide: null,
    };

    static propTypes = {
        id: PropTypes.string,
        inputRef: PropTypes.any,
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
        mask: PropTypes.string,
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
        transitionOptions: PropTypes.object,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onInput: PropTypes.func,
        onSelect: PropTypes.func,
        onChange: PropTypes.func,
        onViewDateChange: PropTypes.func,
        onTodayButtonClick: PropTypes.func,
        onClearButtonClick: PropTypes.func,
        onShow: PropTypes.func,
        onHide: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            focused: false,
            overlayVisible: false,
        };

        if (!this.props.onViewDateChange) {
            let propValue = this.props.value;
            if (Array.isArray(propValue)) {
                propValue = propValue[0];
            }

            let viewDate =
                this.props.viewDate &&
                    this.isValidDate(moment(this.props.viewDate))
                    ? this.props.viewDate
                    : propValue && this.isValidDate(moment(propValue))
                        ? propValue
                        : moment();

            this.validateDate(viewDate);

            this.state = {
                ...this.state,
                viewDate,
            };
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
        this.onTimePickerElementMouseDown = this.onTimePickerElementMouseDown.bind(
            this
        );
        this.onTimePickerElementMouseUp = this.onTimePickerElementMouseUp.bind(
            this
        );
        this.onTimePickerElementMouseLeave = this.onTimePickerElementMouseLeave.bind(
            this
        );
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.onOverlayExited = this.onOverlayExited.bind(this);
        this.reFocusInputField = this.reFocusInputField.bind(this);

        this.overlayRef = createRef();
        this.inputRef = createRef(this.props.inputRef);
    }

    updateInputRef() {
        let ref = this.props.inputRef;

        if (ref) {
            if (typeof ref === "function") {
                ref(this.inputRef.current);
            } else {
                ref.current = this.inputRef.current;
            }
        }
    }

    componentDidMount() {
        this.updateInputRef();

        if (this.props.tooltip) {
            this.renderTooltip();
        }

        if (this.props.inline) {
            this.initFocusableCell();
        } else if (this.props.mask) {
            mask(this.inputRef.current, {
                mask: this.props.mask,
                readOnly: this.props.readOnlyInput || this.props.disabled,
                onChange: (e) =>
                    this.updateValueOnInput(e.originalEvent, e.value),
            });
        }

        if (this.props.value) {
            this.updateInputfield(this.props.value);
        }
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.tooltip !== this.props.tooltip ||
            prevProps.tooltipOptions !== this.props.tooltipOptions
        ) {
            if (this.tooltip)
                this.tooltip.update({
                    content: this.props.tooltip,
                    ...(this.props.tooltipOptions || {}),
                });
            else this.renderTooltip();
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

            if (
                (!prevPropValue && propValue) ||
                (propValue &&
                    propValue instanceof moment &&
                    propValue.valueOf() !== prevPropValue.valueOf())
            ) {
                let viewDate =
                    this.props.viewDate && this.isValidDate(this.props.viewDate)
                        ? this.props.viewDate
                        : propValue && this.isValidDate(propValue)
                            ? propValue
                            : moment();

                this.validateDate(viewDate);

                this.setState(
                    {
                        viewDate,
                    },
                    () => {
                        this.viewStateChanged = true;
                    }
                );
            }
        }

        if (this.overlayRef && this.overlayRef.current) {
            this.updateFocus();
        }

        if (
            (prevProps.value !== this.props.value &&
                (!this.viewStateChanged || !this.state.overlayVisible)) ||
            this.isOptionChanged(prevProps)
        ) {
            this.updateInputfield(this.props.value);
        }
    }

    componentWillUnmount() {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
        }
        if (this.touchUIMask) {
            this.disableModality();
            this.touchUIMask = null;
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

        ZIndexUtils.clear(this.overlayRef.current);
    }

    renderTooltip() {
        this.tooltip = tip({
            target: this.inputRef.current,
            content: this.props.tooltip,
            options: this.props.tooltipOptions,
        });
    }

    isOptionChanged(prevProps) {
        const optionProps = [
            "dateFormat",
            "hourFormat",
            "timeOnly",
            "showSeconds",
            "showMillisec",
        ];
        return optionProps.some(
            (option) => prevProps[option] !== this.props[option]
        );
    }

    getDateFormat() {
        return (
            this.props.dateFormat ||
            localeOption("dateFormat", this.props.locale)
        );
    }

    onInputFocus(event) {
        if (this.ignoreFocusFunctionality) {
            this.setState({ focused: true }, () => {
                this.ignoreFocusFunctionality = false;
            });
        } else {
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

        this.updateValueOnInput(event, event.target.value);

        if (this.props.onInput) {
            this.props.onInput(event);
        }
    }

    updateValueOnInput(event, rawValue) {
        try {
            let value = this.parseValueFromString(rawValue);
            if (this.isValidSelection(value)) {
                this.updateModel(event, value);
                this.updateViewDate(event, value.length ? value[0] : value);
            }
        } catch (err) {
            //invalid jDate
            let value = this.props.keepInvalid ? rawValue : null;
            this.updateModel(event, value);
        }
    }

    reFocusInputField() {
        if (!this.props.inline && this.inputRef.current) {
            this.ignoreFocusFunctionality = true;
            this.inputRef.current.focus();
        }
    }

    isValidSelection(value) {
        let isValid = true;
        if (this.isSingleSelection()) {
            if (
                !(
                    this.isSelectable(
                        value.jDate(),
                        value.jMonth(),
                        value.jYear(),
                        false
                    ) && this.isSelectableTime(value)
                )
            ) {
                isValid = false;
            }
        } else if (
            value.every(
                (v) =>
                    this.isSelectable(v.jDate(), v.jMonth(), v.jYear(), false) &&
                    this.isSelectableTime(value)
            )
        ) {
            if (this.isRangeSelection()) {
                isValid =
                    value.length > 1 && value[1] > value[0] ? true : false;
            }
        }
        return isValid;
    }

    onButtonClick() {
        if (this.state.overlayVisible) {
            this.hideOverlay();
        } else {
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
        let focusableElements = DomHandler.getFocusableElements(
            this.overlayRef.current
        );

        if (focusableElements && focusableElements.length > 0) {
            if (!document.activeElement) {
                focusableElements[0].focus();
            } else {
                let focusedIndex = focusableElements.indexOf(
                    document.activeElement
                );

                if (event.shiftKey) {
                    if (focusedIndex === -1 || focusedIndex === 0)
                        focusableElements[focusableElements.length - 1].focus();
                    else focusableElements[focusedIndex - 1].focus();
                } else {
                    if (
                        focusedIndex === -1 ||
                        focusedIndex === focusableElements.length - 1
                    )
                        focusableElements[0].focus();
                    else focusableElements[focusedIndex + 1].focus();
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
                    DomHandler.findSingle(
                        this.overlayRef.current,
                        ".p-datepicker-prev"
                    ).focus();
                else
                    DomHandler.findSingle(
                        this.overlayRef.current,
                        ".p-datepicker-next"
                    ).focus();
            } else {
                if (this.navigation.backward) {
                    let cells = DomHandler.find(
                        this.overlayRef.current,
                        ".p-datepicker-calendar td span:not(.p-disabled)"
                    );
                    cell = cells[cells.length - 1];
                } else {
                    cell = DomHandler.findSingle(
                        this.overlayRef.current,
                        ".p-datepicker-calendar td span:not(.p-disabled)"
                    );
                }

                if (cell) {
                    cell.tabIndex = "0";
                    cell.focus();
                }
            }

            this.navigation = null;
        } else {
            this.initFocusableCell();
        }
    }

    initFocusableCell() {
        let cell;
        if (this.view === "jMonth") {
            let cells = DomHandler.find(
                this.overlayRef.current,
                ".p-monthpicker .p-monthpicker-jMonth"
            );
            let selectedCell = DomHandler.findSingle(
                this.overlayRef.current,
                ".p-monthpicker .p-monthpicker-jMonth.p-highlight"
            );
            cells.forEach((cell) => (cell.tabIndex = -1));
            cell = selectedCell || cells[0];
        } else {
            cell = DomHandler.findSingle(
                this.overlayRef.current,
                "span.p-highlight"
            );
            if (!cell) {
                let todayCell = DomHandler.findSingle(
                    this.overlayRef.current,
                    "td.p-datepicker-today span:not(.p-disabled)"
                );
                if (todayCell) cell = todayCell;
                else
                    cell = DomHandler.findSingle(
                        this.overlayRef.current,
                        ".p-datepicker-calendar td span:not(.p-disabled)"
                    );
            }
        }

        if (cell) {
            cell.tabIndex = "0";
        }
    }

    navBackward(event) {
        if (this.props.disabled) {
            event.preventDefault();
            return;
        }

        let newViewDate = moment(this.getViewDate().valueOf());
        newViewDate.jDate(1);

        if (this.props.view === "jDate") {
            if (newViewDate.jMonth() === 0) {
                newViewDate.jMonth(11);
                newViewDate.jYear(newViewDate.jYear() - 1);
            } else {
                newViewDate.jMonth(newViewDate.jMonth() - 1);
            }
        } else if (this.props.view === "jMonth") {
            let currentYear = newViewDate.jYear();
            let newYear = currentYear - 1;

            if (this.props.yearNavigator) {
                const minYear = parseInt(
                    this.props.yearRange.split(":")[0],
                    10
                );

                if (newYear < minYear) {
                    newYear = minYear;
                }
            }

            newViewDate.jYear(newYear);
        }

        this.updateViewDate(event, newViewDate);

        event.preventDefault();
    }

    navForward(event) {
        if (this.props.disabled) {
            event.preventDefault();
            return;
        }

        let newViewDate = moment(this.getViewDate().valueOf());
        newViewDate.jDate(1);

        if (this.props.view === "jDate") {
            if (newViewDate.jMonth() === 11) {
                newViewDate.jMonth(0);
                newViewDate.jYear(newViewDate.jYear() + 1);
            } else {
                newViewDate.jMonth(newViewDate.jMonth() + 1);
            }
        } else if (this.props.view === "jMonth") {
            let currentYear = newViewDate.jYear();
            let newYear = currentYear + 1;

            if (this.props.yearNavigator) {
                const maxYear = parseInt(
                    this.props.yearRange.split(":")[1],
                    10
                );

                if (newYear > maxYear) {
                    newYear = maxYear;
                }
            }

            newViewDate.jYear(newYear);
        }

        this.updateViewDate(event, newViewDate);

        event.preventDefault();
    }

    onMonthDropdownChange(event) {
        const currentViewDate = this.getViewDate();
        let newViewDate = moment(currentViewDate.valueOf());
        newViewDate.jMonth(parseInt(event.target.value, 10));

        this.updateViewDate(event, newViewDate);
    }

    onYearDropdownChange(event) {
        const currentViewDate = this.getViewDate();
        let newViewDate = moment(currentViewDate.valueOf());
        newViewDate.jYear(parseInt(event.target.value, 10));

        this.updateViewDate(event, newViewDate);
    }

    onTodayButtonClick(event) {
        const today = moment();
        const dateMeta = {
            day: today.jDate(),
            jMonth: today.jMonth(),
            jYear: today.jYear(),
            today: true,
            selectable: true,
        };
        const timeMeta = {
            hours: today.hour(),
            minutes: today.minute(),
            seconds: today.second(),
            milliseconds: today.valueOf(),
        };

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
            OverlayEventBus.emit("overlay-click", {
                originalEvent: event,
                target: this.container,
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
                if (direction === 1) this.incrementHour(event);
                else this.decrementHour(event);
                break;

            case 1:
                if (direction === 1) this.incrementMinute(event);
                else this.decrementMinute(event);
                break;

            case 2:
                if (direction === 1) this.incrementSecond(event);
                else this.decrementSecond(event);
                break;

            case 3:
                if (direction === 1) this.incrementMilliSecond(event);
                else this.decrementMilliSecond(event);
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
        const currentTime =
            this.props.value && this.props.value instanceof moment
                ? this.props.value
                : this.getViewDate();
        const currentHour = currentTime.hour();
        let newHour = currentHour + this.props.stepHour;
        newHour = newHour >= 24 ? newHour - 24 : newHour;

        if (this.validateHour(newHour, currentTime)) {
            if (
                this.props.maxDate &&
                this.props.maxDate.format("YYYY-MM-DD") ===
                currentTime.format("YYYY-MM-DD") &&
                this.props.maxDate.hour() === newHour
            ) {
                if (this.props.maxDate.minute() < currentTime.minute()) {
                    if (this.props.maxDate.second() < currentTime.second()) {
                        if (
                            this.props.maxDate.valueOf() < currentTime.valueOf()
                        ) {
                            this.updateTime(
                                event,
                                newHour,
                                this.props.maxDate.minute(),
                                this.props.maxDate.second(),
                                this.props.maxDate.valueOf()
                            );
                        } else {
                            this.updateTime(
                                event,
                                newHour,
                                this.props.maxDate.minute(),
                                this.props.maxDate.second(),
                                currentTime.valueOf()
                            );
                        }
                    } else {
                        this.updateTime(
                            event,
                            newHour,
                            this.props.maxDate.minute(),
                            currentTime.second(),
                            currentTime.valueOf()
                        );
                    }
                } else if (
                    this.props.maxDate.minute() === currentTime.minute()
                ) {
                    if (this.props.maxDate.second() < currentTime.second()) {
                        if (
                            this.props.maxDate.valueOf() < currentTime.valueOf()
                        ) {
                            this.updateTime(
                                event,
                                newHour,
                                this.props.maxDate.minute(),
                                this.props.maxDate.second(),
                                this.props.maxDate.valueOf()
                            );
                        } else {
                            this.updateTime(
                                event,
                                newHour,
                                this.props.maxDate.minute(),
                                this.props.maxDate.second(),
                                currentTime.valueOf()
                            );
                        }
                    } else {
                        this.updateTime(
                            event,
                            newHour,
                            this.props.maxDate.minute(),
                            currentTime.second(),
                            currentTime.valueOf()
                        );
                    }
                } else {
                    this.updateTime(
                        event,
                        newHour,
                        currentTime.minute(),
                        currentTime.second(),
                        currentTime.valueOf()
                    );
                }
            } else {
                this.updateTime(
                    event,
                    newHour,
                    currentTime.minute(),
                    currentTime.second(),
                    currentTime.valueOf()
                );
            }
        }

        event.preventDefault();
    }

    decrementHour(event) {
        const currentTime =
            this.props.value && this.props.value instanceof moment
                ? this.props.value
                : this.getViewDate();
        const currentHour = currentTime.hour();
        let newHour = currentHour - this.props.stepHour;
        newHour = newHour < 0 ? newHour + 24 : newHour;

        if (this.validateHour(newHour, currentTime)) {
            if (
                this.props.minDate &&
                this.props.minDate.format("YYYY-MM-DD") ===
                currentTime.format("YYYY-MM-DD") &&
                this.props.minDate.hour() === newHour
            ) {
                if (this.props.minDate.minute() > currentTime.minute()) {
                    if (this.props.minDate.second() > currentTime.second()) {
                        if (
                            this.props.minDate.valueOf() > currentTime.valueOf()
                        ) {
                            this.updateTime(
                                event,
                                newHour,
                                this.props.minDate.minute(),
                                this.props.minDate.second(),
                                this.props.minDate.valueOf()
                            );
                        } else {
                            this.updateTime(
                                event,
                                newHour,
                                this.props.minDate.minute(),
                                this.props.minDate.second(),
                                currentTime.valueOf()
                            );
                        }
                    } else {
                        this.updateTime(
                            event,
                            newHour,
                            this.props.minDate.minute(),
                            currentTime.second(),
                            currentTime.valueOf()
                        );
                    }
                } else if (
                    this.props.minDate.minute() === currentTime.minute()
                ) {
                    if (this.props.minDate.second() > currentTime.second()) {
                        if (
                            this.props.minDate.valueOf() > currentTime.valueOf()
                        ) {
                            this.updateTime(
                                event,
                                newHour,
                                this.props.minDate.minute(),
                                this.props.minDate.second(),
                                this.props.minDate.valueOf()
                            );
                        } else {
                            this.updateTime(
                                event,
                                newHour,
                                this.props.minDate.minute(),
                                this.props.minDate.second(),
                                currentTime.valueOf()
                            );
                        }
                    } else {
                        this.updateTime(
                            event,
                            newHour,
                            this.props.minDate.minute(),
                            currentTime.second(),
                            currentTime.valueOf()
                        );
                    }
                } else {
                    this.updateTime(
                        event,
                        newHour,
                        currentTime.minute(),
                        currentTime.second(),
                        currentTime.valueOf()
                    );
                }
            } else {
                this.updateTime(
                    event,
                    newHour,
                    currentTime.minute(),
                    currentTime.second(),
                    currentTime.valueOf()
                );
            }
        }

        event.preventDefault();
    }

    incrementMinute(event) {
        const currentTime =
            this.props.value && this.props.value instanceof moment
                ? this.props.value
                : this.getViewDate();
        const currentMinute = currentTime.minute();
        let newMinute = currentMinute + this.props.stepMinute;
        newMinute = newMinute > 59 ? newMinute - 60 : newMinute;

        if (this.validateMinute(newMinute, currentTime)) {
            if (
                this.props.maxDate &&
                this.props.maxDate.format("YYYY-MM-DD") ===
                currentTime.format("YYYY-MM-DD") &&
                this.props.maxDate.minute() === newMinute
            ) {
                if (this.props.maxDate.second() < currentTime.second()) {
                    if (this.props.maxDate.valueOf() < currentTime.valueOf()) {
                        this.updateTime(
                            event,
                            currentTime.hour(),
                            newMinute,
                            this.props.maxDate.second(),
                            this.props.maxDate.valueOf()
                        );
                    } else {
                        this.updateTime(
                            event,
                            currentTime.hour(),
                            newMinute,
                            this.props.maxDate.second(),
                            currentTime.valueOf()
                        );
                    }
                } else {
                    this.updateTime(
                        event,
                        currentTime.hour(),
                        newMinute,
                        currentTime.second(),
                        currentTime.valueOf()
                    );
                }
            } else {
                this.updateTime(
                    event,
                    currentTime.hour(),
                    newMinute,
                    currentTime.second(),
                    currentTime.valueOf()
                );
            }
        }

        event.preventDefault();
    }

    decrementMinute(event) {
        const currentTime =
            this.props.value && this.props.value instanceof moment
                ? this.props.value
                : this.getViewDate();
        const currentMinute = currentTime.minute();
        let newMinute = currentMinute - this.props.stepMinute;
        newMinute = newMinute < 0 ? newMinute + 60 : newMinute;

        if (this.validateMinute(newMinute, currentTime)) {
            if (
                this.props.minDate &&
                this.props.minDate.format("YYYY-MM-DD") ===
                currentTime.format("YYYY-MM-DD") &&
                this.props.minDate.minute() === newMinute
            ) {
                if (this.props.minDate.second() > currentTime.second()) {
                    if (this.props.minDate.valueOf() > currentTime.valueOf()) {
                        this.updateTime(
                            event,
                            currentTime.hour(),
                            newMinute,
                            this.props.minDate.second(),
                            this.props.minDate.valueOf()
                        );
                    } else {
                        this.updateTime(
                            event,
                            currentTime.hour(),
                            newMinute,
                            this.props.minDate.second(),
                            currentTime.valueOf()
                        );
                    }
                } else {
                    this.updateTime(
                        event,
                        currentTime.hour(),
                        newMinute,
                        currentTime.second(),
                        currentTime.valueOf()
                    );
                }
            } else {
                this.updateTime(
                    event,
                    currentTime.hour(),
                    newMinute,
                    currentTime.second(),
                    currentTime.valueOf()
                );
            }
        }

        event.preventDefault();
    }

    incrementSecond(event) {
        const currentTime =
            this.props.value && this.props.value instanceof moment
                ? this.props.value
                : this.getViewDate();
        const currentSecond = currentTime.second();
        let newSecond = currentSecond + this.props.stepSecond;
        newSecond = newSecond > 59 ? newSecond - 60 : newSecond;

        if (this.validateSecond(newSecond, currentTime)) {
            if (
                this.props.maxDate &&
                this.props.maxDate.format("YYYY-MM-DD") ===
                currentTime.format("YYYY-MM-DD") &&
                this.props.maxDate.second() === newSecond
            ) {
                if (this.props.maxDate.valueOf() < currentTime.valueOf()) {
                    this.updateTime(
                        event,
                        currentTime.hour(),
                        currentTime.minute(),
                        newSecond,
                        this.props.maxDate.valueOf()
                    );
                } else {
                    this.updateTime(
                        event,
                        currentTime.hour(),
                        currentTime.minute(),
                        newSecond,
                        currentTime.valueOf()
                    );
                }
            } else {
                this.updateTime(
                    event,
                    currentTime.hour(),
                    currentTime.minute(),
                    newSecond,
                    currentTime.valueOf()
                );
            }
        }

        event.preventDefault();
    }

    decrementSecond(event) {
        const currentTime =
            this.props.value && this.props.value instanceof moment
                ? this.props.value
                : this.getViewDate();
        const currentSecond = currentTime.second();
        let newSecond = currentSecond - this.props.stepSecond;
        newSecond = newSecond < 0 ? newSecond + 60 : newSecond;

        if (this.validateSecond(newSecond, currentTime)) {
            if (
                this.props.minDate &&
                this.props.minDate.format("YYYY-MM-DD") ===
                currentTime.format("YYYY-MM-DD") &&
                this.props.minDate.second() === newSecond
            ) {
                if (this.props.minDate.valueOf() > currentTime.valueOf()) {
                    this.updateTime(
                        event,
                        currentTime.hour(),
                        currentTime.minute(),
                        newSecond,
                        this.props.minDate.valueOf()
                    );
                } else {
                    this.updateTime(
                        event,
                        currentTime.hour(),
                        currentTime.minute(),
                        newSecond,
                        currentTime.valueOf()
                    );
                }
            } else {
                this.updateTime(
                    event,
                    currentTime.hour(),
                    currentTime.minute(),
                    newSecond,
                    currentTime.valueOf()
                );
            }
        }

        event.preventDefault();
    }

    incrementMilliSecond(event) {
        const currentTime =
            this.props.value && this.props.value instanceof moment
                ? this.props.value
                : this.getViewDate();
        const currentMillisecond = currentTime.valueOf();
        let newMillisecond = currentMillisecond + this.props.stepMillisec;
        newMillisecond =
            newMillisecond > 999 ? newMillisecond - 1000 : newMillisecond;

        if (this.validateMillisecond(newMillisecond, currentTime)) {
            this.updateTime(
                event,
                currentTime.hour(),
                currentTime.minute(),
                currentTime.second(),
                newMillisecond
            );
        }

        event.preventDefault();
    }

    decrementMilliSecond(event) {
        const currentTime =
            this.props.value && this.props.value instanceof moment
                ? this.props.value
                : this.getViewDate();
        const currentMillisecond = currentTime.valueOf();
        let newMillisecond = currentMillisecond - this.props.stepMillisec;
        newMillisecond =
            newMillisecond < 0 ? newMillisecond + 999 : newMillisecond;

        if (this.validateMillisecond(newMillisecond, currentTime)) {
            this.updateTime(
                event,
                currentTime.hour(),
                currentTime.minute(),
                currentTime.second(),
                newMillisecond
            );
        }

        event.preventDefault();
    }

    toggleAmPm(event) {
        const currentTime =
            this.props.value && this.props.value instanceof moment
                ? this.props.value
                : this.getViewDate();
        const currentHour = currentTime.hour();
        const newHour = currentHour >= 12 ? currentHour - 12 : currentHour + 12;

        this.updateTime(
            event,
            newHour,
            currentTime.minute(),
            currentTime.second(),
            currentTime.valueOf()
        );
        event.preventDefault();
    }

    getViewDate() {
        return this.props.onViewDateChange
            ? this.props.viewDate
            : this.state.viewDate;
    }

    isValidDate(jDate) {
        return jDate instanceof moment.Moment && !isNaN(moment(jDate));
    }

    validateHour(hour, value) {
        let valid = true;
        let valueDateString = value ? value.format("YYYY-MM-DD") : null;

        if (
            this.props.minDate &&
            valueDateString &&
            this.props.minDate.format("YYYY-MM-DD") === valueDateString
        ) {
            if (this.props.minDate.hour() > hour) {
                valid = false;
            }
        }

        if (
            this.props.maxDate &&
            valueDateString &&
            this.props.maxDate.format("YYYY-MM-DD") === valueDateString
        ) {
            if (this.props.maxDate.hour() < hour) {
                valid = false;
            }
        }

        return valid;
    }

    validateMinute(minute, value) {
        let valid = true;
        let valueDateString = value ? value.format("YYYY-MM-DD") : null;

        if (
            this.props.minDate &&
            valueDateString &&
            this.props.minDate.format("YYYY-MM-DD") === valueDateString
        ) {
            if (value.hour() === this.props.minDate.hour()) {
                if (this.props.minDate.minute() > minute) {
                    valid = false;
                }
            }
        }

        if (
            this.props.maxDate &&
            valueDateString &&
            this.props.maxDate.format("YYYY-MM-DD") === valueDateString
        ) {
            if (value.hour() === this.props.maxDate.hour()) {
                if (this.props.maxDate.minute() < minute) {
                    valid = false;
                }
            }
        }

        return valid;
    }

    validateSecond(second, value) {
        let valid = true;
        let valueDateString = value ? value.format("YYYY-MM-DD") : null;

        if (
            this.props.minDate &&
            valueDateString &&
            this.props.minDate.format("YYYY-MM-DD") === valueDateString
        ) {
            if (
                value.hour() === this.props.minDate.hour() &&
                value.minute() === this.props.minDate.minute()
            ) {
                if (this.props.minDate.second() > second) {
                    valid = false;
                }
            }
        }

        if (
            this.props.maxDate &&
            valueDateString &&
            this.props.maxDate.format("YYYY-MM-DD") === valueDateString
        ) {
            if (
                value.hour() === this.props.maxDate.hour() &&
                value.minute() === this.props.maxDate.minute()
            ) {
                if (this.props.maxDate.second() < second) {
                    valid = false;
                }
            }
        }

        return valid;
    }

    validateMillisecond(millisecond, value) {
        let valid = true;
        let valueDateString = value ? value.format("YYYY-MM-DD") : null;

        if (
            this.props.minDate &&
            valueDateString &&
            this.props.minDate.format("YYYY-MM-DD") === valueDateString
        ) {
            if (
                value.hour() === this.props.minDate.hour() &&
                value.second() === this.props.minDate.second() &&
                value.minute() === this.props.minDate.minute()
            ) {
                if (this.props.minDate.valueOf() > millisecond) {
                    valid = false;
                }
            }
        }

        if (
            this.props.maxDate &&
            valueDateString &&
            this.props.maxDate.format("YYYY-MM-DD") === valueDateString
        ) {
            if (
                value.hour() === this.props.maxDate.hour() &&
                value.second() === this.props.maxDate.second() &&
                value.minute() === this.props.maxDate.minute()
            ) {
                if (this.props.maxDate.valueOf() < millisecond) {
                    valid = false;
                }
            }
        }

        return valid;
    }

    validateDate(value) {
        if (this.props.yearNavigator) {
            let viewYear = value.jYear();

            const minRangeYear = this.props.yearRange
                ? parseInt(this.props.yearRange.split(":")[0], 10)
                : null;
            const maxRangeYear = this.props.yearRange
                ? parseInt(this.props.yearRange.split(":")[1], 10)
                : null;
            const minYear =
                this.props.minDate && minRangeYear != null
                    ? Math.max(this.props.minDate.jYear(), minRangeYear)
                    : this.props.minDate || minRangeYear;
            const maxYear =
                this.props.maxDate && maxRangeYear != null
                    ? Math.min(this.props.maxDate.jYear(), maxRangeYear)
                    : this.props.maxDate || maxRangeYear;

            if (minYear && minYear > viewYear) {
                viewYear = minYear;
            }
            if (maxYear && maxYear < viewYear) {
                viewYear = maxYear;
            }

            value.jYear(viewYear);
        }

        if (this.props.monthNavigator && this.props.view !== "jMonth") {
            let viewMonth = value.jMonth();
            let viewMonthWithMinMax = parseInt(
                (this.isInMinYear(value) &&
                    Math.max(
                        this.props.minDate.jMonth(),
                        viewMonth
                    ).toString()) ||
                (this.isInMaxYear(value) &&
                    Math.min(
                        this.props.maxDate.jMonth(),
                        viewMonth
                    ).toString()) ||
                viewMonth
            );

            value.jMonth(viewMonthWithMinMax);
        }
    }

    updateTime(event, hour, minute, second, millisecond) {
        let newDateTime =
            this.props.value && this.props.value instanceof moment
                ? moment(this.props.value)
                : moment();

        newDateTime.hour(hour);
        newDateTime.minutes(minute);
        newDateTime.second(second);
        newDateTime.valueOf(millisecond);

        this.updateModel(event, newDateTime);

        if (this.props.onSelect) {
            this.props.onSelect({
                originalEvent: event,
                value: newDateTime,
            });
        }

        this.updateInputfield(newDateTime);
    }

    updateViewDate(event, value) {
        this.validateDate(value);
        if (this.props.onViewDateChange) {
            this.props.onViewDateChange({
                originalEvent: event,
                value: value,
            });
        } else {
            this.viewStateChanged = true;
            this.setState({
                viewDate: value,
            });
        }
    }

    onDateCellKeydown(event, jDate, groupIndex) {
        const cellContent = event.currentTarget;
        const cell = cellContent.parentElement;

        switch (event.which) {
            //down arrow
            case 40: {
                cellContent.tabIndex = "-1";
                let cellIndex = DomHandler.index(cell);
                let nextRow = cell.parentElement.nextElementSibling;
                if (nextRow) {
                    let focusCell = nextRow.children[cellIndex].children[0];
                    if (DomHandler.hasClass(focusCell, "p-disabled")) {
                        this.navigation = { backward: false };
                        this.navForward(event);
                    } else {
                        nextRow.children[cellIndex].children[0].tabIndex = "0";
                        nextRow.children[cellIndex].children[0].focus();
                    }
                } else {
                    this.navigation = { backward: false };
                    this.navForward(event);
                }
                event.preventDefault();
                break;
            }

            //up arrow
            case 38: {
                cellContent.tabIndex = "-1";
                let cellIndex = DomHandler.index(cell);
                let prevRow = cell.parentElement.previousElementSibling;
                if (prevRow) {
                    let focusCell = prevRow.children[cellIndex].children[0];
                    if (DomHandler.hasClass(focusCell, "p-disabled")) {
                        this.navigation = { backward: true };
                        this.navBackward(event);
                    } else {
                        focusCell.tabIndex = "0";
                        focusCell.focus();
                    }
                } else {
                    this.navigation = { backward: true };
                    this.navBackward(event);
                }
                event.preventDefault();
                break;
            }

            //left arrow
            case 37: {
                cellContent.tabIndex = "-1";
                let prevCell = cell.previousElementSibling;
                if (prevCell) {
                    let focusCell = prevCell.children[0];
                    if (DomHandler.hasClass(focusCell, "p-disabled")) {
                        this.navigateToMonth(true, groupIndex, event);
                    } else {
                        focusCell.tabIndex = "0";
                        focusCell.focus();
                    }
                } else {
                    this.navigateToMonth(true, groupIndex, event);
                }
                event.preventDefault();
                break;
            }

            //right arrow
            case 39: {
                cellContent.tabIndex = "-1";
                let nextCell = cell.nextElementSibling;
                if (nextCell) {
                    let focusCell = nextCell.children[0];
                    if (DomHandler.hasClass(focusCell, "p-disabled")) {
                        this.navigateToMonth(false, groupIndex, event);
                    } else {
                        focusCell.tabIndex = "0";
                        focusCell.focus();
                    }
                } else {
                    this.navigateToMonth(false, groupIndex, event);
                }
                event.preventDefault();
                break;
            }

            //enter
            case 13: {
                this.onDateSelect(event, jDate);
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

    navigateToMonth(prev, groupIndex, event) {
        if (prev) {
            if (this.props.numberOfMonths === 1 || groupIndex === 0) {
                this.navigation = { backward: true };
                this.navBackward(event);
            } else {
                let prevMonthContainer = this.overlayRef.current.children[
                    groupIndex - 1
                ];
                let cells = DomHandler.find(
                    prevMonthContainer,
                    ".p-datepicker-calendar td span:not(.p-disabled)"
                );
                let focusCell = cells[cells.length - 1];
                focusCell.tabIndex = "0";
                focusCell.focus();
            }
        } else {
            if (
                this.props.numberOfMonths === 1 ||
                groupIndex === this.props.numberOfMonths - 1
            ) {
                this.navigation = { backward: false };
                this.navForward(event);
            } else {
                let nextMonthContainer = this.overlayRef.current.children[
                    groupIndex + 1
                ];
                let focusCell = DomHandler.findSingle(
                    nextMonthContainer,
                    ".p-datepicker-calendar td span:not(.p-disabled)"
                );
                focusCell.tabIndex = "0";
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
                cell.tabIndex = "-1";
                let cells = cell.parentElement.children;
                let cellIndex = DomHandler.index(cell);
                let nextCell =
                    cells[event.which === 40 ? cellIndex + 3 : cellIndex - 3];
                if (nextCell) {
                    nextCell.tabIndex = "0";
                    nextCell.focus();
                }
                event.preventDefault();
                break;
            }

            //left arrow
            case 37: {
                cell.tabIndex = "-1";
                let prevCell = cell.previousElementSibling;
                if (prevCell) {
                    prevCell.tabIndex = "0";
                    prevCell.focus();
                }
                event.preventDefault();
                break;
            }

            //right arrow
            case 39: {
                cell.tabIndex = "-1";
                let nextCell = cell.nextElementSibling;
                if (nextCell) {
                    nextCell.tabIndex = "0";
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

        DomHandler.find(
            this.overlayRef.current,
            ".p-datepicker-calendar td span:not(.p-disabled)"
        ).forEach((cell) => (cell.tabIndex = -1));
        event.currentTarget.focus();

        if (this.isMultipleSelection()) {
            if (this.isSelected(dateMeta)) {
                let value = this.props.value.filter((jDate, i) => {
                    return !this.isDateEquals(jDate, dateMeta);
                });
                this.updateModel(event, value);
            } else if (
                !this.props.maxDateCount ||
                !this.props.value ||
                this.props.maxDateCount > this.props.value.length
            ) {
                this.selectDate(event, dateMeta, timeMeta);
            }
        } else {
            this.selectDate(event, dateMeta, timeMeta);
        }

        if (
            !this.props.inline &&
            this.isSingleSelection() &&
            (!this.props.showTime || this.props.hideOnDateTimeSelect)
        ) {
            setTimeout(() => {
                this.hideOverlay();
            }, 100);

            if (this.touchUIMask) {
                this.disableModality();
            }
        }

        event.preventDefault();
    }

    selectTime(jDate, timeMeta) {
        if (this.props.showTime) {
            let hours, minutes, seconds, milliseconds;

            if (timeMeta) {
                ({ hours, minutes, seconds, milliseconds } = timeMeta);
            } else {
                let time =
                    this.props.value && this.props.value instanceof moment
                        ? this.props.value
                        : moment();
                [hours, minutes, seconds, milliseconds] = [
                    time.hour(),
                    time.minute(),
                    time.second(),
                    time.valueOf(),
                ];
            }
            console.log("jDate : " , jDate);

            // jDate.hour(hours);
            // jDate.minutes(minutes);
            // jDate.second(seconds);
            // jDate.valueOf(milliseconds);
        }
    }

    selectDate(event, dateMeta, timeMeta) {
        let jDate = moment([dateMeta.jYear, dateMeta.jMonth, dateMeta.day]).format(
            "YYYY-MM-DD"
        );
        this.selectTime(jDate, timeMeta);

        if (this.props.minDate && this.props.minDate > jDate) {
            jDate = this.props.minDate;
        }

        if (this.props.maxDate && this.props.maxDate < jDate) {
            jDate = this.props.maxDate;
        }

        let selectedValues = jDate;

        if (this.isSingleSelection()) {
            this.updateModel(event, jDate);
        } else if (this.isMultipleSelection()) {
            selectedValues = this.props.value
                ? [...this.props.value, jDate]
                : [jDate];
            this.updateModel(event, selectedValues);
        } else if (this.isRangeSelection()) {
            if (this.props.value && this.props.value.length) {
                let startDate = this.props.value[0];
                let endDate = this.props.value[1];

                if (!endDate && jDate.valueOf() >= startDate.valueOf()) {
                    endDate = jDate;
                } else {
                    startDate = jDate;
                    endDate = null;
                }

                selectedValues = [startDate, endDate];
                this.updateModel(event, selectedValues);
            } else {
                selectedValues = [jDate, null];
                this.updateModel(event, selectedValues);
            }
        }

        if (this.props.onSelect) {
            this.props.onSelect({
                originalEvent: event,
                value: jDate,
            });
        }

        this.updateInputfield(selectedValues);
    }

    onMonthSelect(event, jMonth) {
        this.onDateSelect(event, {
            jYear: this.getViewDate().jYear(),
            jMonth: jMonth,
            day: 1,
            selectable: true,
        });
        event.preventDefault();
    }

    updateModel(event, value) {
        if (this.props.onChange) {
            this.viewStateChanged = true;

            this.props.onChange({
                originalEvent: event,
                value: value,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: value,
                },
            });
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
            ZIndexUtils.set(
                this.props.touchUI ? "modal" : "overlay",
                this.overlayRef.current,
                this.props.baseZIndex
            );
        }
        this.alignOverlay();
    }

    onOverlayEntered() {
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindScrollListener();

        this.props.onShow && this.props.onShow();
    }

    onOverlayExit() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
    }

    onOverlayExited() {
        ZIndexUtils.clear(this.overlayRef.current);

        this.props.onHide && this.props.onHide();
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.state.overlayVisible && this.isOutsideClicked(event)) {
                    this.hideOverlay();
                }
            };

            document.addEventListener("mousedown", this.documentClickListener);
        }
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener(
                "mousedown",
                this.documentClickListener
            );
            this.documentClickListener = null;
        }
    }

    bindDocumentResizeListener() {
        if (!this.documentResizeListener && !this.props.touchUI) {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener("resize", this.documentResizeListener);
        }
    }

    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener("resize", this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }

    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(
                this.container,
                () => {
                    if (this.state.overlayVisible) {
                        this.hideOverlay();
                    }
                }
            );
        }

        this.scrollHandler.bindScrollListener();
    }

    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }

    isOutsideClicked(event) {
        return (
            this.container &&
            !(
                this.container.isSameNode(event.target) ||
                this.isNavIconClicked(event) ||
                this.container.contains(event.target) ||
                (this.overlayRef &&
                    this.overlayRef.current.contains(event.target))
            )
        );
    }

    isNavIconClicked(event) {
        return (
            DomHandler.hasClass(event.target, "p-datepicker-prev") ||
            DomHandler.hasClass(event.target, "p-datepicker-prev-icon") ||
            DomHandler.hasClass(event.target, "p-datepicker-next") ||
            DomHandler.hasClass(event.target, "p-datepicker-next-icon")
        );
    }

    onWindowResize() {
        if (this.state.overlayVisible && !DomHandler.isAndroid()) {
            this.hideOverlay();
        }
    }

    alignOverlay() {
        if (this.props.touchUI) {
            this.enableModality();
        } else {
            DomHandler.alignOverlay(
                this.overlayRef.current,
                this.inputRef.current.parentElement,
                this.props.appendTo || PrimeReact.appendTo
            );
        }
    }

    enableModality() {
        if (!this.touchUIMask) {
            this.touchUIMask = document.createElement("div");
            this.touchUIMask.style.zIndex = String(
                ZIndexUtils.get(this.overlayRef.current) - 1
            );
            DomHandler.addMultipleClasses(
                this.touchUIMask,
                "p-component-overlay p-datepicker-mask p-datepicker-mask-scrollblocker"
            );

            this.touchUIMaskClickListener = () => {
                this.disableModality();
            };
            this.touchUIMask.addEventListener(
                "click",
                this.touchUIMaskClickListener
            );

            document.body.appendChild(this.touchUIMask);
            DomHandler.addClass(document.body, "p-overflow-hidden");
        }
    }

    disableModality() {
        if (this.touchUIMask) {
            this.touchUIMask.removeEventListener(
                "click",
                this.touchUIMaskClickListener
            );
            this.touchUIMaskClickListener = null;
            document.body.removeChild(this.touchUIMask);
            this.touchUIMask = null;

            let bodyChildren = document.body.children;
            let hasBlockerMasks;
            for (let i = 0; i < bodyChildren.length; i++) {
                let bodyChild = bodyChildren[i];
                if (
                    DomHandler.hasClass(
                        bodyChild,
                        "p-datepicker-mask-scrollblocker"
                    )
                ) {
                    hasBlockerMasks = true;
                    break;
                }
            }

            if (!hasBlockerMasks) {
                DomHandler.removeClass(document.body, "p-overflow-hidden");
            }

            this.hideOverlay();
        }
    }

    getFirstDayOfMonthIndex(jMonth, jYear) {
        let day = moment();
        day.jDate(1);
        day.jMonth(jMonth);
        day.jYear(jYear);
        let dayIndex = day.day() + this.getSundayIndex();
        return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
    }

    getDaysCountInMonth(jMonth, jYear) {
        var newDate = moment().jYear(jYear).jMonth(jMonth).jDate(32);

        var temp = this.daylightSavingAdjust(newDate).jDate();

        return 32 - temp;
    }

    getDaysCountInPrevMonth(jMonth, jYear) {
        let prev = this.getPreviousMonthAndYear(jMonth, jYear);
        return this.getDaysCountInMonth(prev.jMonth, prev.jYear);
    }

    daylightSavingAdjust(jDate) {
        if (!jDate) {
            return null;
        }

        jDate.hour(jDate.hour() > 12 ? jDate.hour() + 2 : 0);

        return jDate;
    }

    getPreviousMonthAndYear(jMonth, jYear) {
        let m, y;

        if (jMonth === 0) {
            m = 11;
            y = jYear - 1;
        } else {
            m = jMonth - 1;
            y = jYear;
        }

        return { jMonth: m, jYear: y };
    }

    getNextMonthAndYear(jMonth, jYear) {
        let m, y;

        if (jMonth === 11) {
            m = 0;
            y = jYear + 1;
        } else {
            m = jMonth + 1;
            y = jYear;
        }

        return { jMonth: m, jYear: y };
    }

    getSundayIndex() {
        const firstDayOfWeek = localeOption(
            "firstDayOfWeek",
            this.props.locale
        );
        return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
    }

    createWeekDays() {
        let weekDays = [];
        let { firstDayOfWeek: dayIndex, dayNamesMin } = localeOptions(
            this.props.locale
        );
        for (let i = 0; i < 7; i++) {
            weekDays.push(dayNamesMin[dayIndex]);
            dayIndex = dayIndex === 6 ? 0 : ++dayIndex;
        }

        return weekDays;
    }

    createMonths(jMonth, jYear) {
        let months = [];
        for (let i = 0; i < this.props.numberOfMonths; i++) {
            let m = jMonth + i;
            let y = jYear;
            if (m > 11) {
                m = (m % 11) - 1;
                y = jYear + 1;
            }

            months.push(this.createMonth(m, y));
        }

        return months;
    }

    createMonth(jMonth, jYear) {
        let dates = [];
        let firstDay = this.getFirstDayOfMonthIndex(jMonth, jYear);
        let daysLength = this.getDaysCountInMonth(jMonth, jYear);
        let prevMonthDaysLength = this.getDaysCountInPrevMonth(jMonth, jYear);
        let dayNo = 1;
        let today = moment();
        let weekNumbers = [];
        let monthRows = Math.ceil((daysLength + firstDay) / 7);

        for (let i = 0; i < monthRows; i++) {
            let week = [];

            if (i === 0) {
                for (
                    let j = prevMonthDaysLength - firstDay + 1;
                    j <= prevMonthDaysLength;
                    j++
                ) {
                    let prev = this.getPreviousMonthAndYear(jMonth, jYear);
                    week.push({
                        day: j,
                        jMonth: prev.jMonth,
                        jYear: prev.jYear,
                        otherMonth: true,
                        today: this.isToday(today, j, prev.jMonth, prev.jYear),
                        selectable: this.isSelectable(
                            j,
                            prev.jMonth,
                            prev.jYear,
                            true
                        ),
                    });
                }

                let remainingDaysLength = 7 - week.length;
                for (let j = 0; j < remainingDaysLength; j++) {
                    week.push({
                        day: dayNo,
                        jMonth: jMonth,
                        jYear: jYear,
                        today: this.isToday(today, dayNo, jMonth, jYear),
                        selectable: this.isSelectable(
                            dayNo,
                            jMonth,
                            jYear,
                            false
                        ),
                    });
                    dayNo++;
                }
            } else {
                for (let j = 0; j < 7; j++) {
                    if (dayNo > daysLength) {
                        let next = this.getNextMonthAndYear(jMonth, jYear);
                        week.push({
                            day: dayNo - daysLength,
                            jMonth: next.jMonth,
                            jYear: next.jYear,
                            otherMonth: true,
                            today: this.isToday(
                                today,
                                dayNo - daysLength,
                                next.jMonth,
                                next.jYear
                            ),
                            selectable: this.isSelectable(
                                dayNo - daysLength,
                                next.jMonth,
                                next.jYear,
                                true
                            ),
                        });
                    } else {
                        week.push({
                            day: dayNo,
                            jMonth: jMonth,
                            jYear: jYear,
                            today: this.isToday(today, dayNo, jMonth, jYear),
                            selectable: this.isSelectable(
                                dayNo,
                                jMonth,
                                jYear,
                                false
                            ),
                        });
                    }

                    dayNo++;
                }
            }

            if (this.props.showWeek) {
                weekNumbers.push(
                    this.getWeekNumber(
                        moment([week[0].jYear, week[0].jMonth, week[0].day])
                    )
                );
            }

            dates.push(week);
        }

        return {
            jMonth: jMonth,
            jYear: jYear,
            dates: dates,
            weekNumbers: weekNumbers,
        };
    }

    getWeekNumber(jDate) {
        let checkDate = moment(jDate.valueOf());
        checkDate.jDate(checkDate.jDate() + 4 - (checkDate.day() || 7));
        let time = checkDate.valueOf();
        checkDate.jMonth(0);
        checkDate.jDate(1);
        return (
            Math.floor(
                Math.round((time - checkDate.valueOf()) / 86400000) / 7
            ) + 1
        );
    }

    isSelectable(day, jMonth, jYear, otherMonth) {
        let validMin = true;
        let validMax = true;
        let validDate = true;
        let validDay = true;
        let validMonth = true;

        if (this.props.minDate) {
            if (this.props.minDate.jYear() > jYear) {
                validMin = false;
            } else if (this.props.minDate.jYear() === jYear) {
                if (this.props.minDate.jMonth() > jMonth) {
                    validMin = false;
                } else if (this.props.minDate.jMonth() === jMonth) {
                    if (this.props.minDate.jDate() > day) {
                        validMin = false;
                    }
                }
            }
        }

        if (this.props.maxDate) {
            if (this.props.maxDate.jYear() < jYear) {
                validMax = false;
            } else if (this.props.maxDate.jYear() === jYear) {
                if (this.props.maxDate.jMonth() < jMonth) {
                    validMax = false;
                } else if (this.props.maxDate.jMonth() === jMonth) {
                    if (this.props.maxDate.jDate() < day) {
                        validMax = false;
                    }
                }
            }
        }

        if (this.props.disabledDates) {
            validDate = !this.isDateDisabled(day, jMonth, jYear);
        }

        if (this.props.disabledDays) {
            validDay = !this.isDayDisabled(day, jMonth, jYear);
        }

        if (this.props.selectOtherMonths === false && otherMonth) {
            validMonth = false;
        }

        return validMin && validMax && validDate && validDay && validMonth;
    }

    isSelectableTime(value) {
        let validMin = true;
        let validMax = true;

        if (
            this.props.minDate &&
            this.props.minDate.format("YYYY-MM-DD") ===
            value.format("YYYY-MM-DD")
        ) {
            if (this.props.minDate.hour() > value.hour()) {
                validMin = false;
            } else if (this.props.minDate.hour() === value.hour()) {
                if (this.props.minDate.minute() > value.minute()) {
                    validMin = false;
                } else if (this.props.minDate.minute() === value.minute()) {
                    if (this.props.minDate.second() > value.second()) {
                        validMin = false;
                    } else if (this.props.minDate.second() === value.second()) {
                        if (this.props.minDate.valueOf() > value.valueOf()) {
                            validMin = false;
                        }
                    }
                }
            }
        }

        if (
            this.props.maxDate &&
            this.props.maxDate.format("YYYY-MM-DD") ===
            value.format("YYYY-MM-DD")
        ) {
            if (this.props.maxDate.hour() < value.hour()) {
                validMax = false;
            } else if (this.props.maxDate.hour() === value.hour()) {
                if (this.props.maxDate.minute() < value.minute()) {
                    validMax = false;
                } else if (this.props.maxDate.minute() === value.minute()) {
                    if (this.props.maxDate.second() < value.second()) {
                        validMax = false;
                    } else if (this.props.maxDate.second() === value.second()) {
                        if (this.props.maxDate.valueOf() < value.valueOf()) {
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
            } else if (this.isMultipleSelection()) {
                let selected = false;
                for (let jDate of this.props.value) {
                    selected = this.isDateEquals(jDate, dateMeta);
                    if (selected) {
                        break;
                    }
                }
                return selected;
            } else if (this.isRangeSelection()) {
                if (this.props.value[1])
                    return (
                        this.isDateEquals(this.props.value[0], dateMeta) ||
                        this.isDateEquals(this.props.value[1], dateMeta) ||
                        this.isDateBetween(
                            this.props.value[0],
                            this.props.value[1],
                            dateMeta
                        )
                    );
                else {
                    return this.isDateEquals(this.props.value[0], dateMeta);
                }
            }
        } else {
            return false;
        }
    }

    isMonthSelected(jMonth) {
        const viewDate = this.getViewDate();

        if (this.props.value && this.props.value instanceof moment)
            return (
                this.props.value.jDate() === 1 &&
                this.props.value.jMonth() === jMonth &&
                this.props.value.jYear() === viewDate.jYear()
            );
        else return false;
    }

    isDateEquals(value, dateMeta) {
        if (value && value instanceof moment)
            return (
                value.jDate() === dateMeta.day &&
                value.jMonth() === dateMeta.jMonth &&
                value.jYear() === dateMeta.jYear
            );
        else return false;
    }

    isDateBetween(start, end, dateMeta) {
        let between = false;
        if (start && end) {
            let jDate = moment([dateMeta.jYear, dateMeta.jMonth, dateMeta.day]);
            return start.unix() <= jDate.unix() && end.unix() >= jDate.unix();
        }

        return between;
    }

    isSingleSelection() {
        return this.props.selectionMode === "single";
    }

    isRangeSelection() {
        return this.props.selectionMode === "range";
    }

    isMultipleSelection() {
        return this.props.selectionMode === "multiple";
    }

    isToday(today, day, jMonth, jYear) {
        return (
            today.jDate() === day &&
            today.jMonth() === jMonth &&
            today.jYear() === jYear
        );
    }

    isDateDisabled(day, jMonth, jYear) {
        if (this.props.disabledDates) {
            for (let i = 0; i < this.props.disabledDates.length; i++) {
                let disabledDate = this.props.disabledDates[i];

                if (
                    disabledDate.jYear() === jYear &&
                    disabledDate.jMonth() === jMonth &&
                    disabledDate.jDate() === day
                ) {
                    return true;
                }
            }
        }

        return false;
    }

    isDayDisabled(day, jMonth, jYear) {
        if (this.props.disabledDays) {
            let weekday = moment([jYear, jMonth, day]);
            let weekdayNumber = weekday.day();

            return this.props.disabledDays.indexOf(weekdayNumber) !== -1;
        }

        return false;
    }

    updateInputfield(value) {
        if (!(this.inputRef && this.inputRef.current)) {
            return;
        }

        let formattedValue = "";

        if (value) {
            try {
                if (this.isSingleSelection()) {
                    formattedValue = this.isValidDate(moment(value))
                        ? this.formatDateTime(value)
                        : "";
                } else if (this.isMultipleSelection()) {
                    for (let i = 0; i < value.length; i++) {
                        let selectedValue = value[i];
                        let dateAsString = this.isValidDate(
                            moment(selectedValue)
                        )
                            ? this.formatDateTime(selectedValue)
                            : "";
                        formattedValue += dateAsString;
                        if (i !== value.length - 1) {
                            formattedValue += ", ";
                        }
                    }
                } else if (this.isRangeSelection()) {
                    if (value && value.length) {
                        let startDate = value[0];
                        let endDate = value[1];

                        formattedValue = this.isValidDate(moment(startDate))
                            ? this.formatDateTime(startDate)
                            : "";
                        if (endDate) {
                            formattedValue += this.isValidDate(moment(endDate))
                                ? " - " + this.formatDateTime(endDate)
                                : "";
                        }
                    }
                }
            } catch (err) {
                formattedValue = value;
            }
        }

        this.inputRef.current.value = formattedValue;
    }

    formatDateTime(jDate) {
        let formattedValue = null;
        if (jDate) {
            if (this.props.timeOnly) {
                formattedValue = this.formatTime(jDate);
            } else {
                formattedValue = this.formatDate(jDate, this.getDateFormat());
                if (this.props.showTime) {
                    formattedValue += " " + this.formatTime(jDate);
                }
            }
        }

        return formattedValue;
    }

    formatDate(jDate, format) {
        if (!jDate) {
            return "";
        }

        let iFormat;
        const lookAhead = (match) => {
            const matches =
                iFormat + 1 < format.length &&
                format.charAt(iFormat + 1) === match;
            if (matches) {
                iFormat++;
            }
            return matches;
        },
            formatNumber = (match, value, len) => {
                let num = "" + value;
                if (lookAhead(match)) {
                    while (num.length < len) {
                        num = "0" + num;
                    }
                }
                return num;
            },
            formatName = (match, value, shortNames, longNames) => {
                return lookAhead(match) ? longNames[value] : shortNames[value];
            };
        let output = "";
        let literal = false;
        const {
            dayNamesShort,
            dayNames,
            monthNamesShort,
            monthNames,
        } = localeOptions(this.props.locale);

        if (jDate) {
            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        output += format.charAt(iFormat);
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                        case "d":
                            output += formatNumber("d", jDate.jDate(), 2);
                            break;
                        case "D":
                            output += formatName(
                                "D",
                                jDate.day(),
                                dayNamesShort,
                                dayNames
                            );
                            break;
                        case "o":
                            output += formatNumber(
                                "o",
                                Math.round(
                                    (moment(
                                        jDate.jYear(),
                                        jDate.jMonth(),
                                        jDate.jDate()
                                    ).unix() -
                                        moment(jDate.jYear(), 0, 0).unix()) /
                                    86400000
                                ),
                                3
                            );
                            break;
                        case "m":
                            output += formatNumber("m", jDate.jMonth() + 1, 2);
                            break;
                        case "M":
                            output += formatName(
                                "M",
                                jDate.jMonth(),
                                monthNamesShort,
                                monthNames
                            );
                            break;
                        case "y":
                            output += lookAhead("y")
                                ? jDate.jYear()
                                : (jDate.jYear() % 100 < 10 ? "0" : "") +
                                (jDate.jYear() % 100);
                            break;
                        case "@":
                            output += jDate.valueOf();
                            break;
                        case "!":
                            output += jDate.valueOf() * 10000 + this.ticksTo1970;
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
    }

    formatTime(jDate) {
        if (!jDate) {
            return "";
        }

        let output = "";
        let hours = jDate.hour();
        let minutes = jDate.minute();
        let seconds = jDate.second();
        let milliseconds = jDate.valueOf();

        if (this.props.hourFormat === "12" && hours > 11 && hours !== 12) {
            hours -= 12;
        }

        if (this.props.hourFormat === "12") {
            output += hours === 0 ? 12 : hours < 10 ? "0" + hours : hours;
        } else {
            output += hours < 10 ? "0" + hours : hours;
        }
        output += ":";
        output += minutes < 10 ? "0" + minutes : minutes;

        if (this.props.showSeconds) {
            output += ":";
            output += seconds < 10 ? "0" + seconds : seconds;
        }

        if (this.props.showMillisec) {
            output += ".";
            output +=
                milliseconds < 100
                    ? (milliseconds < 10 ? "00" : "0") + milliseconds
                    : milliseconds;
        }

        if (this.props.hourFormat === "12") {
            output += jDate.hour() > 11 ? " PM" : " AM";
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
        } else if (this.isMultipleSelection()) {
            let tokens = text.split(",");
            value = [];
            for (let token of tokens) {
                value.push(this.parseDateTime(token.trim()));
            }
        } else if (this.isRangeSelection()) {
            let tokens = text.split(" - ");
            value = [];
            for (let i = 0; i < tokens.length; i++) {
                value[i] = this.parseDateTime(tokens[i].trim());
            }
        }

        return value;
    }

    parseDateTime(text) {
        let jDate;
        let parts = text.split(" ");

        if (this.props.timeOnly) {
            jDate = moment();
            this.populateTime(jDate, parts[0], parts[1]);
        } else {
            if (this.props.showTime) {
                jDate = this.parseDate(parts[0], this.getDateFormat());
                this.populateTime(jDate, parts[1], parts[2]);
            } else {
                jDate = this.parseDate(text, this.getDateFormat());
            }
        }

        return jDate;
    }

    populateTime(value, timeString, ampm) {
        if (this.props.hourFormat === "12" && ampm !== "PM" && ampm !== "AM") {
            throw new Error("Invalid Time");
        }

        let time = this.parseTime(timeString, ampm);
        value.hour(time.hour);
        value.minutes(time.minute);
        value.second(time.second);
        value.valueOf(time.millisecond);
    }

    parseTime(value, ampm) {
        value = this.props.showMillisec ? value.replace(".", ":") : value;
        let tokens = value.split(":");
        let validTokenLength = this.props.showSeconds ? 3 : 2;
        validTokenLength = this.props.showMillisec
            ? validTokenLength + 1
            : validTokenLength;

        if (
            tokens.length !== validTokenLength ||
            tokens[0].length !== 2 ||
            tokens[1].length !== 2 ||
            (this.props.showSeconds && tokens[2].length !== 2) ||
            (this.props.showMillisec && tokens[3].length !== 3)
        ) {
            throw new Error("Invalid time");
        }

        let h = parseInt(tokens[0], 10);
        let m = parseInt(tokens[1], 10);
        let s = this.props.showSeconds ? parseInt(tokens[2], 10) : null;
        let ms = this.props.showMillisec ? parseInt(tokens[3], 10) : null;

        if (
            isNaN(h) ||
            isNaN(m) ||
            h > 23 ||
            m > 59 ||
            (this.props.hourFormat === "12" && h > 12) ||
            (this.props.showSeconds && (isNaN(s) || s > 59)) ||
            (this.props.showMillisec && (isNaN(s) || s > 1000))
        ) {
            throw new Error("Invalid time");
        } else {
            if (this.props.hourFormat === "12" && h !== 12 && ampm === "PM") {
                h += 12;
            }

            return { hour: h, minute: m, second: s, millisecond: ms };
        }
    }

    // Ported from jquery-ui datepicker parseDate
    parseDate(value, format) {
        if (format == null || value == null) {
            throw new Error("Invalid arguments");
        }

        value = typeof value === "object" ? value.toString() : value + "";
        if (value === "") {
            return null;
        }

        let iFormat,
            dim,
            extra,
            iValue = 0,
            shortYearCutoff =
                typeof this.props.shortYearCutoff !== "string"
                    ? this.props.shortYearCutoff
                    : (moment().jYear() % 100) +
                    parseInt(this.props.shortYearCutoff, 10),
            jYear = -1,
            jMonth = -1,
            day = -1,
            doy = -1,
            literal = false,
            jDate,
            lookAhead = (match) => {
                let matches =
                    iFormat + 1 < format.length &&
                    format.charAt(iFormat + 1) === match;
                if (matches) {
                    iFormat++;
                }
                return matches;
            },
            getNumber = (match) => {
                let isDoubled = lookAhead(match),
                    size =
                        match === "@"
                            ? 14
                            : match === "!"
                                ? 20
                                : match === "y" && isDoubled
                                    ? 4
                                    : match === "o"
                                        ? 3
                                        : 2,
                    minSize = match === "y" ? size : 1,
                    digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
                    num = value.substring(iValue).match(digits);
                if (!num) {
                    throw new Error("Missing number at position " + iValue);
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
                    if (
                        value.substr(iValue, name.length).toLowerCase() ===
                        name.toLowerCase()
                    ) {
                        index = names[i][0];
                        iValue += name.length;
                        break;
                    }
                }

                if (index !== -1) {
                    return index + 1;
                } else {
                    throw new Error("Unknown name at position " + iValue);
                }
            },
            checkLiteral = () => {
                if (value.charAt(iValue) !== format.charAt(iFormat)) {
                    throw new Error("Unexpected literal at position " + iValue);
                }
                iValue++;
            };

        if (this.props.view === "jMonth") {
            day = 1;
        }

        const {
            dayNamesShort,
            dayNames,
            monthNamesShort,
            monthNames,
        } = localeOptions(this.props.locale);

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
                        jMonth = getNumber("m");
                        break;
                    case "M":
                        jMonth = getName("M", monthNamesShort, monthNames);
                        break;
                    case "y":
                        jYear = getNumber("y");
                        break;
                    case "@":
                        jDate = moment(getNumber("@"));
                        jYear = jDate.jYear();
                        jMonth = jDate.jMonth() + 1;
                        day = jDate.jDate();
                        break;
                    case "!":
                        jDate = moment(
                            (getNumber("!") - this.ticksTo1970) / 10000
                        );
                        jYear = jDate.jYear();
                        jMonth = jDate.jMonth() + 1;
                        day = jDate.jDate();
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
                throw new Error(
                    "Extra/unparsed characters found in jDate: " + extra
                );
            }
        }

        if (jYear === -1) {
            jYear = moment().jYear();
        } else if (jYear < 100) {
            jYear +=
                moment().jYear() -
                (moment().jYear() % 100) +
                (jYear <= shortYearCutoff ? 0 : -100);
        }

        if (doy > -1) {
            jMonth = 1;
            day = doy;
            do {
                dim = this.getDaysCountInMonth(jYear, jMonth - 1);
                if (day <= dim) {
                    break;
                }
                jMonth++;
                day -= dim;
            } while (true);
        }

        jDate = this.daylightSavingAdjust(moment([jYear, jMonth - 1, day]));
        if (
            jDate.jYear() !== jYear ||
            jDate.jMonth() + 1 !== jMonth ||
            jDate.jDate() !== day
        ) {
            throw new Error("Invalid jDate"); // E.g. 31/02/00
        }

        return jDate;
    }

    renderBackwardNavigator(isVisible) {
        let navigatorProps = isVisible
            ? {
                onClick: this.onPrevButtonClick,
                onKeyDown: (e) => this.onContainerButtonKeydown(e),
            }
            : { style: { visibility: "hidden" } };
        return (
            <button
                type="button"
                className="p-datepicker-prev p-link"
                {...navigatorProps}
            >
                <span className="p-datepicker-prev-icon pi pi-chevron-left"></span>
                <Ripple />
            </button>
        );
    }

    renderForwardNavigator(isVisible) {
        let navigatorProps = isVisible
            ? {
                onClick: this.onNextButtonClick,
                onKeyDown: (e) => this.onContainerButtonKeydown(e),
            }
            : { style: { visibility: "hidden" } };
        return (
            <button
                type="button"
                className="p-datepicker-next p-link"
                {...navigatorProps}
            >
                <span className="p-datepicker-next-icon pi pi-chevron-right"></span>
                <Ripple />
            </button>
        );
    }

    isInMinYear(viewDate) {
        return (
            this.props.minDate && this.props.minDate.jYear() === viewDate.jYear()
        );
    }

    isInMaxYear(viewDate) {
        return (
            this.props.maxDate && this.props.maxDate.jYear() === viewDate.jYear()
        );
    }

    renderTitleMonthElement(jMonth) {
        const monthNames = localeOption("monthNames", this.props.locale);

        if (this.props.monthNavigator && this.props.view !== "jMonth") {
            const viewDate = this.getViewDate();
            const viewMonth = viewDate.jMonth();

            return (
                <select
                    className="p-datepicker-jMonth"
                    onChange={this.onMonthDropdownChange}
                    value={viewMonth}
                >
                    {monthNames.map((jMonth, index) => {
                        if (
                            (!this.isInMinYear(viewDate) ||
                                index >= this.props.minDate.jMonth()) &&
                            (!this.isInMaxYear(viewDate) ||
                                index <= this.props.maxDate.jMonth())
                        ) {
                            return (
                                <option key={jMonth} value={index}>
                                    {jMonth}
                                </option>
                            );
                        }
                        return null;
                    })}
                </select>
            );
        } else {
            return (
                <span className="p-datepicker-jMonth">{monthNames[jMonth]}</span>
            );
        }
    }

    renderTitleYearElement(jYear) {
        if (this.props.yearNavigator) {
            let yearOptions = [];
            const years = this.props.yearRange.split(":");
            const yearStart = parseInt(years[0], 10);
            const yearEnd = parseInt(years[1], 10);

            for (let i = yearStart; i <= yearEnd; i++) {
                yearOptions.push(i);
            }

            let viewDate = this.getViewDate();
            let viewYear = viewDate.jYear();

            return (
                <select
                    className="p-datepicker-jYear"
                    onChange={this.onYearDropdownChange}
                    value={viewYear}
                >
                    {yearOptions.map((jYear) => {
                        if (
                            !(
                                this.props.minDate &&
                                this.props.minDate.jYear() > jYear
                            ) &&
                            !(
                                this.props.maxDate &&
                                this.props.maxDate.jYear() < jYear
                            )
                        ) {
                            return (
                                <option key={jYear} value={jYear}>
                                    {jYear}
                                </option>
                            );
                        }
                        return null;
                    })}
                </select>
            );
        } else {
            return <span className="p-datepicker-jYear">{jYear}</span>;
        }
    }

    renderTitle(monthMetaData) {
        const jMonth = this.renderTitleMonthElement(monthMetaData.jMonth);
        const jYear = this.renderTitleYearElement(monthMetaData.jYear);

        return (
            <div className="p-datepicker-title">
                {jMonth}
                {jYear}
            </div>
        );
    }

    renderDayNames(weekDays) {
        const dayNames = weekDays.map((weekDay, index) => (
            <th key={`${weekDay}-${index}`} scope="col">
                <span>{weekDay}</span>
            </th>
        ));

        if (this.props.showWeek) {
            const weekHeader = (
                <th
                    scope="col"
                    key={"wn"}
                    className="p-datepicker-weekheader p-disabled"
                >
                    <span>{localeOption("weekHeader", this.props.locale)}</span>
                </th>
            );

            return [weekHeader, ...dayNames];
        } else {
            return dayNames;
        }
    }

    renderDateCellContent(jDate, className, groupIndex) {
        const content = this.props.dateTemplate
            ? this.props.dateTemplate(jDate)
            : jDate.day;

        return (
            <span
                className={className}
                onClick={(e) => this.onDateSelect(e, jDate)}
                onKeyDown={(e) => this.onDateCellKeydown(e, jDate, groupIndex)}
            >
                {content}
                <Ripple />
            </span>
        );
    }

    renderWeek(weekDates, weekNumber, groupIndex) {
        const week = weekDates.map((jDate) => {
            const selected = this.isSelected(jDate);
            const cellClassName = classNames({
                "p-datepicker-other-jMonth": jDate.otherMonth,
                "p-datepicker-today": jDate.today,
            });
            const dateClassName = classNames({
                "p-highlight": selected,
                "p-disabled": !jDate.selectable,
            });
            const content =
                jDate.otherMonth && !this.props.showOtherMonths
                    ? null
                    : this.renderDateCellContent(
                        jDate,
                        dateClassName,
                        groupIndex
                    );

            return (
                <td key={jDate.day} className={cellClassName}>
                    {content}
                </td>
            );
        });

        if (this.props.showWeek) {
            const weekNumberCell = (
                <td key={"wn" + weekNumber} className="p-datepicker-weeknumber">
                    <span className="p-disabled">{weekNumber}</span>
                </td>
            );

            return [weekNumberCell, ...week];
        } else {
            return week;
        }
    }

    renderDates(monthMetaData, groupIndex) {
        return monthMetaData.dates.map((weekDates, index) => {
            return (
                <tr key={index}>
                    {this.renderWeek(
                        weekDates,
                        monthMetaData.weekNumbers[index],
                        groupIndex
                    )}
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
                        <tr>{dayNames}</tr>
                    </thead>
                    <tbody>{dates}</tbody>
                </table>
            </div>
        );
    }

    renderMonth(monthMetaData, index) {
        const weekDays = this.createWeekDays();
        const backwardNavigator = this.renderBackwardNavigator(index === 0);
        const forwardNavigator = this.renderForwardNavigator(
            this.props.numberOfMonths === 1 ||
            index === this.props.numberOfMonths - 1
        );
        const title = this.renderTitle(monthMetaData);
        const dateViewGrid = this.renderDateViewGrid(
            monthMetaData,
            weekDays,
            index
        );
        const header = this.props.headerTemplate
            ? this.props.headerTemplate()
            : null;

        return (
            <div key={monthMetaData.jMonth} className="p-datepicker-group">
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

        return <div className="p-datepicker-group-container">{groups}</div>;
    }

    renderDateView() {
        let viewDate = this.getViewDate();
        const monthsMetaData = this.createMonths(
            viewDate.jMonth(),
            viewDate.jYear()
        );
        const months = this.renderMonths(monthsMetaData);

        return <>{months}</>;
    }

    renderMonthViewMonth(index) {
        const className = classNames("p-monthpicker-jMonth", {
            "p-highlight": this.isMonthSelected(index),
        });
        const monthNamesShort = localeOption(
            "monthNamesShort",
            this.props.locale
        );
        const monthName = monthNamesShort[index];

        return (
            <span
                key={monthName}
                className={className}
                onClick={(event) => this.onMonthSelect(event, index)}
                onKeyDown={(event) => this.onMonthCellKeydown(event, index)}
            >
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
        const backwardNavigator = this.renderBackwardNavigator(true);
        const forwardNavigator = this.renderForwardNavigator(true);
        const yearElement = this.renderTitleYearElement(
            this.getViewDate().jYear()
        );
        const months = this.renderMonthViewMonths();

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
                <div className="p-monthpicker">{months}</div>
            </>
        );
    }

    renderDatePicker() {
        if (!this.props.timeOnly) {
            if (this.props.view === "jDate") {
                return this.renderDateView();
            } else if (this.props.view === "jMonth") {
                return this.renderMonthView();
            } else {
                return null;
            }
        }
    }

    renderHourPicker() {
        let currentTime =
            this.props.value && this.props.value instanceof moment
                ? this.props.value
                : this.getViewDate();
        let hour = currentTime.hour();

        if (this.props.hourFormat === "12") {
            if (hour === 0) hour = 12;
            else if (hour > 11 && hour !== 12) hour = hour - 12;
        }

        const hourDisplay = hour < 10 ? "0" + hour : hour;

        return (
            <div className="p-hour-picker">
                <button
                    type="button"
                    className="p-link"
                    onMouseDown={(e) =>
                        this.onTimePickerElementMouseDown(e, 0, 1)
                    }
                    onMouseUp={this.onTimePickerElementMouseUp}
                    onMouseLeave={this.onTimePickerElementMouseLeave}
                    onKeyDown={(e) => this.onContainerButtonKeydown(e)}
                >
                    <span className="pi pi-chevron-up"></span>
                    <Ripple />
                </button>
                <span>{hourDisplay}</span>
                <button
                    type="button"
                    className="p-link"
                    onMouseDown={(e) =>
                        this.onTimePickerElementMouseDown(e, 0, -1)
                    }
                    onMouseUp={this.onTimePickerElementMouseUp}
                    onMouseLeave={this.onTimePickerElementMouseLeave}
                    onKeyDown={(e) => this.onContainerButtonKeydown(e)}
                >
                    <span className="pi pi-chevron-down"></span>
                    <Ripple />
                </button>
            </div>
        );
    }

    renderMinutePicker() {
        let currentTime =
            this.props.value && this.props.value instanceof moment
                ? this.props.value
                : this.getViewDate();
        let minute = currentTime.minute();
        let minuteDisplay = minute < 10 ? "0" + minute : minute;

        return (
            <div className="p-minute-picker">
                <button
                    type="button"
                    className="p-link"
                    onMouseDown={(e) =>
                        this.onTimePickerElementMouseDown(e, 1, 1)
                    }
                    onMouseUp={this.onTimePickerElementMouseUp}
                    onMouseLeave={this.onTimePickerElementMouseLeave}
                    onKeyDown={(e) => this.onContainerButtonKeydown(e)}
                >
                    <span className="pi pi-chevron-up"></span>
                    <Ripple />
                </button>
                <span>{minuteDisplay}</span>
                <button
                    type="button"
                    className="p-link"
                    onMouseDown={(e) =>
                        this.onTimePickerElementMouseDown(e, 1, -1)
                    }
                    onMouseUp={this.onTimePickerElementMouseUp}
                    onMouseLeave={this.onTimePickerElementMouseLeave}
                    onKeyDown={(e) => this.onContainerButtonKeydown(e)}
                >
                    <span className="pi pi-chevron-down"></span>
                    <Ripple />
                </button>
            </div>
        );
    }

    renderSecondPicker() {
        if (this.props.showSeconds) {
            let currentTime =
                this.props.value && this.props.value instanceof moment
                    ? this.props.value
                    : this.getViewDate();
            let second = currentTime.second();
            let secondDisplay = second < 10 ? "0" + second : second;

            return (
                <div className="p-second-picker">
                    <button
                        type="button"
                        className="p-link"
                        onMouseDown={(e) =>
                            this.onTimePickerElementMouseDown(e, 2, 1)
                        }
                        onMouseUp={this.onTimePickerElementMouseUp}
                        onMouseLeave={this.onTimePickerElementMouseLeave}
                        onKeyDown={(e) => this.onContainerButtonKeydown(e)}
                    >
                        <span className="pi pi-chevron-up"></span>
                        <Ripple />
                    </button>
                    <span>{secondDisplay}</span>
                    <button
                        type="button"
                        className="p-link"
                        onMouseDown={(e) =>
                            this.onTimePickerElementMouseDown(e, 2, -1)
                        }
                        onMouseUp={this.onTimePickerElementMouseUp}
                        onMouseLeave={this.onTimePickerElementMouseLeave}
                        onKeyDown={(e) => this.onContainerButtonKeydown(e)}
                    >
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
            let currentTime =
                this.props.value && this.props.value instanceof moment
                    ? this.props.value
                    : this.getViewDate();
            let millisecond = currentTime.valueOf();
            let millisecondDisplay =
                millisecond < 100
                    ? (millisecond < 10 ? "00" : "0") + millisecond
                    : millisecond;

            return (
                <div className="p-millisecond-picker">
                    <button
                        type="button"
                        className="p-link"
                        onMouseDown={(e) =>
                            this.onTimePickerElementMouseDown(e, 3, 1)
                        }
                        onMouseUp={this.onTimePickerElementMouseUp}
                        onMouseLeave={this.onTimePickerElementMouseLeave}
                        onKeyDown={(e) => this.onContainerButtonKeydown(e)}
                    >
                        <span className="pi pi-chevron-up"></span>
                        <Ripple />
                    </button>
                    <span>{millisecondDisplay}</span>
                    <button
                        type="button"
                        className="p-link"
                        onMouseDown={(e) =>
                            this.onTimePickerElementMouseDown(e, 3, -1)
                        }
                        onMouseUp={this.onTimePickerElementMouseUp}
                        onMouseLeave={this.onTimePickerElementMouseLeave}
                        onKeyDown={(e) => this.onContainerButtonKeydown(e)}
                    >
                        <span className="pi pi-chevron-down"></span>
                        <Ripple />
                    </button>
                </div>
            );
        }

        return null;
    }

    renderAmPmPicker() {
        if (this.props.hourFormat === "12") {
            let currentTime =
                this.props.value && this.props.value instanceof moment
                    ? this.props.value
                    : this.getViewDate();
            let hour = currentTime.hour();
            let display = hour > 11 ? "PM" : "AM";

            return (
                <div className="p-ampm-picker">
                    <button
                        type="button"
                        className="p-link"
                        onClick={this.toggleAmPm}
                    >
                        <span className="pi pi-chevron-up"></span>
                        <Ripple />
                    </button>
                    <span>{display}</span>
                    <button
                        type="button"
                        className="p-link"
                        onClick={this.toggleAmPm}
                    >
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
                    {this.renderSeparator(":")}
                    {this.renderMinutePicker()}
                    {this.props.showSeconds && this.renderSeparator(":")}
                    {this.renderSecondPicker()}
                    {this.props.showMillisec && this.renderSeparator(".")}
                    {this.renderMiliSecondPicker()}
                    {this.props.hourFormat === "12" &&
                        this.renderSeparator(":")}
                    {this.renderAmPmPicker()}
                </div>
            );
        }

        return null;
    }

    renderInputElement() {
        if (!this.props.inline) {
            return (
                <InputText
                    ref={this.inputRef}
                    id={this.props.inputId}
                    name={this.props.name}
                    type="text"
                    className={this.props.inputClassName}
                    style={this.props.inputStyle}
                    readOnly={this.props.readOnlyInput}
                    disabled={this.props.disabled}
                    required={this.props.required}
                    autoComplete="off"
                    placeholder={this.props.placeholder}
                    onInput={this.onUserInput}
                    onFocus={this.onInputFocus}
                    onBlur={this.onInputBlur}
                    onKeyDown={this.onInputKeyDown}
                    aria-labelledby={this.props.ariaLabelledBy}
                    inputMode="none"
                />
            );
        }

        return null;
    }

    renderButton() {
        if (this.props.showIcon) {
            return (
                <Button
                    type="button"
                    icon={this.props.icon}
                    onClick={this.onButtonClick}
                    tabIndex="-1"
                    disabled={this.props.disabled}
                    className="p-datepicker-trigger"
                />
            );
        }

        return null;
    }

    renderButtonBar() {
        if (this.props.showButtonBar) {
            const todayClassName = classNames(
                "p-button-text",
                this.props.todayButtonClassName
            );
            const clearClassName = classNames(
                "p-button-text",
                this.props.clearButtonClassName
            );
            const { today, clear } = localeOptions(this.props.locale);

            return (
                <div className="p-datepicker-buttonbar">
                    <Button
                        type="button"
                        label={today}
                        onClick={this.onTodayButtonClick}
                        onKeyDown={(e) => this.onContainerButtonKeydown(e)}
                        className={todayClassName}
                    />
                    <Button
                        type="button"
                        label={clear}
                        onClick={this.onClearButtonClick}
                        onKeyDown={(e) => this.onContainerButtonKeydown(e)}
                        className={clearClassName}
                    />
                </div>
            );
        }

        return null;
    }

    renderFooter() {
        if (this.props.footerTemplate) {
            const content = this.props.footerTemplate();

            return <div className="p-datepicker-footer">{content}</div>;
        }

        return null;
    }

    render() {
        const className = classNames(
            "p-calendar p-component p-inputwrapper",
            this.props.className,
            {
                "p-calendar-w-btn": this.props.showIcon,
                "p-calendar-disabled": this.props.disabled,
                "p-calendar-timeonly": this.props.timeOnly,
                "p-inputwrapper-filled":
                    this.props.value ||
                    (DomHandler.hasClass(this.inputRef.current, "p-filled") &&
                        this.inputRef.current.value !== ""),
                "p-inputwrapper-focus": this.state.focused,
            }
        );
        const panelClassName = classNames(
            "p-datepicker p-component",
            this.props.panelClassName,
            {
                "p-datepicker-inline": this.props.inline,
                "p-disabled": this.props.disabled,
                "p-datepicker-timeonly": this.props.timeOnly,
                "p-datepicker-multiple-jMonth": this.props.numberOfMonths > 1,
                "p-datepicker-monthpicker": this.props.view === "jMonth",
                "p-datepicker-touch-ui": this.props.touchUI,
            }
        );
        const input = this.renderInputElement();
        const button = this.renderButton();
        const datePicker = this.renderDatePicker();
        const timePicker = this.renderTimePicker();
        const buttonBar = this.renderButtonBar();
        const footer = this.renderFooter();

        return (
            <span
                ref={(el) => (this.container = el)}
                id={this.props.id}
                className={className}
                style={this.props.style}
            >
                {input}
                {button}
                <CalendarPanel
                    ref={this.overlayRef}
                    className={panelClassName}
                    style={this.props.panelStyle}
                    appendTo={this.props.appendTo}
                    inline={this.props.inline}
                    onClick={this.onPanelClick}
                    in={this.props.inline || this.state.overlayVisible}
                    onEnter={this.onOverlayEnter}
                    onEntered={this.onOverlayEntered}
                    onExit={this.onOverlayExit}
                    onExited={this.onOverlayExited}
                    transitionOptions={this.props.transitionOptions}
                >
                    {datePicker}
                    {timePicker}
                    {buttonBar}
                    {footer}
                </CalendarPanel>
            </span>
        );
    }
}

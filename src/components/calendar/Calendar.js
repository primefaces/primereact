import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {InputText} from '../inputtext/InputText';
import {Button} from '../button/Button';
import {CalendarPanel} from './CalendarPanel';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

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
        hideOnDateTimeSelect: false,
        locale: {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
            monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            today: 'Today',
            clear: 'Clear'
        },
        dateFormat: 'mm/dd/yy',
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
        onFocus: null,
        onBlur: null,
        onInput: null,
        onSelect: null,
        onChange: null,
        onViewDateChange: null
    }

    static propsTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.any,
        viewDate: null,
        style: PropTypes.object,
        className: PropTypes.string,
        inline: PropTypes.bool,
        selectionMode: PropTypes.string,
        inputId: PropTypes.string,
        inputStyle: PropTypes.object,
        inputClassName: PropTypes.string,
        required: PropTypes.bool,
        readOnlyInput: PropTypes.bool,
        disabled: PropTypes.bool,
        tabIndex: PropTypes.string,
        placeholder: PropTypes.string,
        showIcon: PropTypes.bool,
        icon: PropTypes.string,
        showOnFocus: PropTypes.bool,
        numberOfMonths: PropTypes.number,
        view: PropTypes.string,
        touchUI: PropTypes.bool,
        showTime: PropTypes.bool,
        timeOnly: PropTypes.bool,
        hideOnDateTimeSelect: PropTypes.bool,
        locale: PropTypes.string,
        dateFormat: PropTypes.string,
        panelStyle: PropTypes.object,
        panelClassName: PropTypes.string,
        monthNavigator: PropTypes.bool,
        yearNavigator: PropTypes.bool,
        disabledDates: PropTypes.array,
        disabledDays: PropTypes.array,
        minDate: PropTypes.date,
        maxDate: PropTypes.date,
        maxDateCount: PropTypes.number,
        showOtherMonths: PropTypes.bool,
        selectOtherMonths: PropTypes.bool,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onInput: PropTypes.func,
        onSelect: PropTypes.func,
        onChange: PropTypes.func,
        onViewDateChange: PropTypes.func
    }

    constructor(props) {
        super(props);

        if (!this.props.onViewDateChange) {
            this.state = {
                viewDate: (this.props.viewDate || this.props.value || new Date())
            }
        }

        this.onInputClick = this.onInputClick.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);
        this.navBackward = this.navBackward.bind(this);
        this.navForward = this.navForward.bind(this);
    }

    onInputClick(event) {
        if (this.documentClickListener) {
            this.datepickerClick = true;
        }
    }

    onInputFocus(event) {
        if (this.props.showOnFocus) {
            this.showOverlay();
        }

        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    onInputBlur(event) {
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    onInputKeyDown(event) {
        
    }

    onInput(event) {
        if (this.props.onInput) {
            this.props.onInput(event);
        }
    }

    onButtonClick(event) {
        if (this.documentClickListener) {
            this.datepickerClick = true;
        }

        if (!this.panel.offsetParent) {
            this.showOverlay();
        }
    }

    onPanelClick(event) {
        if (this.documentClickListener) {
            this.datepickerClick = true;
        }
    }

    navBackward(event) {
        if(this.props.disabled) {
            event.preventDefault();
            return;
        }

        const currentViewDate = this.onViewDateChange ? this.props.viewDate : this.state.viewDate;
        let newViewDate = new Date(currentViewDate.getTime());

        if (this.props.view === 'date') {
            if(newViewDate.getMonth() === 0) {
                newViewDate.setMonth(11);
                newViewDate.setFullYear(newViewDate.getFullYear() - 1);
            }
            else {
                newViewDate.setMonth(newViewDate.getMonth() - 1);
            }
        }
        else if (this.props.view === 'month') {
            //this.decrementYear();
        }

        if (this.onViewDateChange) {
            this.onViewDateChange({
                originalEvent: event,
                value: newViewDate
            });
        }
        else {
            this.setState({
                viewDate: newViewDate
            });
        }
 
        event.preventDefault();
    } 

    navForward(event) {
        if(this.props.disabled) {
            event.preventDefault();
            return;
        }

        const currentViewDate = this.onViewDateChange ? this.props.viewDate : this.state.viewDate;
        let newViewDate = new Date(currentViewDate.getTime());

        if (this.props.view === 'date') {
            if(newViewDate.getMonth() === 11) {
                newViewDate.setMonth(0);
                newViewDate.setFullYear(newViewDate.getFullYear() + 1);
            }
            else {
                newViewDate.setMonth(newViewDate.getMonth() + 1);
            }
        }
        else if (this.props.view === 'month') {
            //this.incrementYear();
        }

        if (this.onViewDateChange) {
            this.onViewDateChange({
                originalEvent: event,
                value: newViewDate
            });
        }
        else {
            this.setState({
                viewDate: newViewDate
            });
        }

        event.preventDefault();
    }

    onDateSelect(event, dateMeta) {
        if(this.props.disabled || !dateMeta.selectable) {
            event.preventDefault();
            return;
        }
        
        if(this.isMultipleSelection() && this.isSelected(dateMeta)) {
            let value = this.props.value.filter((date, i) => {
                return !this.isDateEquals(date, dateMeta);
            });
            this.updateModel(event, value);
        }
        else {
            if(this.shouldSelectDate(dateMeta)) {
                if(dateMeta.otherMonth) {
                    if(this.props.selectOtherMonths) {
                        this.selectDate(event, dateMeta);
                    }
                }
                else {
                     this.selectDate(event, dateMeta);
                }
            }
        }
        
        if(!this.props.inline && this.isSingleSelection() && (!this.props.showTime || this.props.hideOnDateTimeSelect)) {
            this.hideOverlay();

            /*if(this.mask) {
                this.disableModality();
            }*/
        }

        event.preventDefault();
    }

    shouldSelectDate(dateMeta) {
        if(this.isMultipleSelection())
            return !this.props.maxDateCount || !this.props.value || this.props.maxDateCount > this.props.value.length;
        else
            return true;
    }

    selectDate(event, dateMeta) {
        let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
        
        /*if(this.showTime) {
            if(this.hourFormat === '12' && this.pm && this.currentHour != 12)
                date.setHours(this.currentHour + 12);
            else
                date.setHours(this.currentHour);

            date.setMinutes(this.currentMinute);
            date.setSeconds(this.currentSecond);
        }
        
        if(this.props.minDate && this.minDate > date) {
            date = this.minDate;
            this.currentHour = date.getHours();
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
        }
        
        if(this.maxDate && this.maxDate < date) {
            date = this.maxDate;
            this.currentHour = date.getHours();
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
        }*/
        
        if(this.isSingleSelection()) {
            this.updateModel(event, date);
        }
        else if(this.isMultipleSelection()) {
            this.updateModel(event, this.props.value ? [...this.value, date] : [date]);
        }
        else if(this.isRangeSelection()) {
            if(this.props.value && this.props.value.length) {
                let startDate = this.value[0];
                let endDate = this.value[1];
                
                if(!endDate && date.getTime() >= startDate.getTime()) {
                    endDate = date;
                }
                else {
                    startDate = date;
                    endDate = null;
                }
                
                this.updateModel(event, [startDate, endDate]);
            }
            else {
                this.updateModel(event, [date, null]);
            }
        }
        
        if (this.props.onSelect) {
            this.props.onSelect({
                originalEvent: event,
                value: date
            });
        }
    }
    
    updateModel(event, value) {   
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: value
            });
        }
    }

    showOverlay() {
        this.panel.style.zIndex = String(DomHandler.generateZIndex());
        this.panel.style.display = 'block';
        this.alignPanel();
        DomHandler.fadeIn(this.panel, 250);
        this.bindDocumentClickListener();
    }

    hideOverlay() {
        this.panel.style.display = 'none';
        this.unbindDocumentClickListener();
        this.datepickerClick = false;
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {            
                if (!this.datepickerClick) {
                    this.hideOverlay();
                }
                    
                this.datepickerClick = false;
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }
    
    unbindDocumentClickListener() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }
    
    alignPanel() {
        if(this.props.appendTo) {
            DomHandler.absolutePosition(this.panel, this.container);
            this.panel.style.minWidth = DomHandler.getWidth(this.container) + 'px';
        }
        else {
            DomHandler.relativePosition(this.panel, this.container);
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
        
        if(month === 0) {
            m = 11;
            y = year - 1;
        }
        else {
            m = month - 1;
            y = year;
        }
        
        return {'month':m, 'year':y};
    }
    
    getNextMonthAndYear(month, year) {
        let m, y;
        
        if(month === 11) {
            m = 0;
            y = year + 1;
        }
        else {
            m = month + 1;
            y = year;
        }
        
        return {'month':m,'year':y};
    }
    
    getSundayIndex() {
        return this.props.locale.firstDayOfWeek > 0 ? 7 - this.props.locale.firstDayOfWeek : 0;
    }

    createWeekDays() {
        let weekDays = [];
        let dayIndex = this.props.locale.firstDayOfWeek;
        for(let i = 0; i < 7; i++) {
            weekDays.push(this.props.locale.dayNamesMin[dayIndex]);
            dayIndex = (dayIndex === 6) ? 0 : ++dayIndex;
        }

        return weekDays;
    }

    createMonths(month, year) {
        let months = [];
        for (let i = 0 ; i < this.props.numberOfMonths; i++) {
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
        
        for(let i = 0; i < 6; i++) {
            let week = [];
            
            if(i === 0) {
                for(let j = (prevMonthDaysLength - firstDay + 1); j <= prevMonthDaysLength; j++) {
                    let prev = this.getPreviousMonthAndYear(month, year);
                    week.push({day: j, month: prev.month, year: prev.year, otherMonth: true,
                            today: this.isToday(today, j, prev.month, prev.year), selectable: this.isSelectable(j, prev.month, prev.year, true)});
                }
                
                let remainingDaysLength = 7 - week.length;
                for(let j = 0; j < remainingDaysLength; j++) {
                    week.push({day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),
                            selectable: this.isSelectable(dayNo, month, year, false)});
                    dayNo++;
                }
            }
            else {
                for (let j = 0; j < 7; j++) {
                    if(dayNo > daysLength) {
                        let next = this.getNextMonthAndYear(month, year);
                        week.push({day: dayNo - daysLength, month: next.month, year: next.year, otherMonth:true,
                                    today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                                    selectable: this.isSelectable((dayNo - daysLength), next.month, next.year, true)});
                    }
                    else {
                        week.push({day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),
                            selectable: this.isSelectable(dayNo, month, year, false)});
                    }
                    
                    dayNo++;
                }
            }
            
            dates.push(week);
        }

        return {
            month: month,
            year: year,
            dates: dates
        };
    }

    isSelectable(day, month, year, otherMonth) {
        let validMin = true;
        let validMax = true;
        let validDate = true;
        let validDay = true;
        let validMonth = true;
        
        if (this.props.minDate) {
             if(this.props.minDate.getFullYear() > year) {
                 validMin = false;
             }
             else if(this.props.minDate.getFullYear() === year) {
                 if(this.props.minDate.getMonth() > month) {
                     validMin = false;
                 }
                 else if(this.props.minDate.getMonth() === month) {
                     if(this.props.minDate.getDate() > day) {
                         validMin = false;
                     }
                 }
             }
        }
        
        if (this.props.maxDate) {
             if(this.props.maxDate.getFullYear() < year) {
                 validMax = false;
             }
             else if(this.props.maxDate.getFullYear() === year) {
                 if(this.props.maxDate.getMonth() < month) {
                     validMax = false;
                 }
                 else if(this.props.maxDate.getMonth() === month) {
                     if(this.props.maxDate.getDate() < day) {
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

    isSelected(dateMeta) {
        if(this.props.value) {
            if(this.isSingleSelection()) {
                return this.isDateEquals(this.value, dateMeta);
            }
            else if(this.isMultipleSelection()) {
                let selected = false;
                for(let date of this.value) {
                    selected = this.isDateEquals(date, dateMeta);
                    if(selected) {
                        break;
                    }
                }
                
                return selected;
            }
            else if(this.isRangeSelection()) {
                if(this.value[1])
                    return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);
                else
                    return this.isDateEquals(this.value[0], dateMeta)
            }
        }
        else {
            return false;
        }         
    }

    isMonthSelected(month) {
        if(this.value) {
            return this.value.getDate() === 1 && this.value.getMonth() === month && this.value.getFullYear() === this.currentYear;
        }
        else {
            return false;
        }
    }
     
    isDateEquals(value, dateMeta) {
        if(value)
            return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
        else
            return false;
    }
    
    isDateBetween(start, end, dateMeta) {
        let between = false;
        if(start && end) {
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
            for (let i = 0 ; i < this.props.disabledDates.length; i++) {
                let disabledDate = this.props.disabledDates[i];

                if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    isDayDisabled(day, month, year) {
        if(this.props.disabledDays) {
            let weekday = new Date(year, month, day);
            let weekdayNumber = weekday.getDay();

            return this.props.disabledDays.indexOf(weekdayNumber) !== -1;
        }

        return false;
    }

    getValueToRender() {
        let formattedValue = '';

        if(this.props.value) {
            if(this.isSingleSelection()) {
                formattedValue = this.formatDateTime(this.props.value);
            }
            else if(this.isMultipleSelection()) {
                for(let i = 0; i < this.props.value.length; i++) {
                    let dateAsString = this.formatDateTime(this.props.value[i]);
                    formattedValue += dateAsString;
                    if(i !== (this.props.value.length - 1)) {
                        formattedValue += ', ';
                    }
                }
            }
            else if(this.isRangeSelection()) {
                if(this.props.value && this.props.value.length) {
                    let startDate = this.value[0];
                    let endDate = this.value[1];
                    
                    formattedValue = this.formatDateTime(startDate);
                    if(endDate) {
                        formattedValue += ' - ' + this.formatDateTime(endDate);
                    }
                }
            }
        }
        
        return formattedValue;
    }
    
    formatDateTime(date) {
        let formattedValue = null;
        if(date) {
            if(this.props.timeOnly) {
                formattedValue = this.formatTime(date);
            }
            else {
                formattedValue = this.formatDate(date, this.props.dateFormat);
                if(this.props.showTime) {
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
                            output += formatName('D', date.getDay(), this.locale.dayNamesShort, this.locale.dayNames);
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
                            output += formatName('M',date.getMonth(), this.locale.monthNamesShort, this.locale.monthNames);
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
        
        if (this.hourFormat == '12' && hours > 11 && hours != 12) {
            hours-=12;
        }
        
        if (this.hourFormat == '12') {
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
        
        if (this.props.hourFormat == '12') {
            output += date.getHours() > 11 ? ' PM' : ' AM';
        }
        
        return output;
    }
    
    parseTime(value) {
        let tokens = value.split(':');
        let validTokenLength = this.showSeconds ? 3 : 2;
        
        if(tokens.length !== validTokenLength) {
            throw "Invalid time";
        }
        
        let h = parseInt(tokens[0]);
        let m = parseInt(tokens[1]);
        let s = this.showSeconds ? parseInt(tokens[2]) : null;
        
        if(isNaN(h) || isNaN(m) || h > 23 || m > 59 || (this.hourFormat == '12' && h > 12) || (this.showSeconds && (isNaN(s) || s > 59))) {
            throw "Invalid time";
        }
        else {
            if(this.hourFormat == '12' && h !== 12 && this.pm) {
                h+= 12;
            }
            
            return {hour: h, minute: m, second: s};
        }
    }
    
    // Ported from jquery-ui datepicker parseDate
    parseDate(value, format) {
        if(format == null || value == null) {
            throw "Invalid arguments";
        }

        value = (typeof value === "object" ? value.toString() : value + "");
        if(value === "") {
            return null;
        }

        let iFormat, dim, extra,
        iValue = 0,
        shortYearCutoff = (typeof this.shortYearCutoff !== "string" ? this.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.shortYearCutoff, 10)),
        year = -1,
        month = -1,
        day = -1,
        doy = -1,
        literal = false,
        date,
        lookAhead = (match) => {
            let matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
            if(matches) {
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
            if(!num) {
                throw "Missing number at position " + iValue;
            }
            iValue += num[ 0 ].length;
            return parseInt(num[ 0 ], 10);
        },
        getName = (match, shortNames, longNames) => {
            let index = -1;
            let arr = lookAhead(match) ? longNames : shortNames;
            let names = [];
            
            for(let i = 0; i < arr.length; i++) {
                names.push([i,arr[i]]);
            }
            names.sort((a,b) => {
                return -(a[ 1 ].length - b[ 1 ].length);
            });
            
            for(let i = 0; i < names.length; i++) {
                let name = names[i][1];
                if(value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                    index = names[i][0];
                    iValue += name.length;
                    break;
                }
            }

            if(index !== -1) {
                return index + 1;
            } else {
                throw "Unknown name at position " + iValue;
            }
        },
        checkLiteral = () => {
            if(value.charAt(iValue) !== format.charAt(iFormat)) {
                throw "Unexpected literal at position " + iValue;
            }
            iValue++;
        };

        for (iFormat = 0; iFormat < format.length; iFormat++) {
            if(literal) {
                if(format.charAt(iFormat) === "'" && !lookAhead("'")) {
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
                        getName("D", this.locale.dayNamesShort, this.locale.dayNames);
                        break;
                    case "o":
                        doy = getNumber("o");
                        break;
                    case "m":
                        month = getNumber("m");
                        break;
                    case "M":
                        month = getName("M", this.locale.monthNamesShort, this.locale.monthNames);
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
                        if(lookAhead("'")) {
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

        if(iValue < value.length) {
            extra = value.substr(iValue);
            if(!/^\s+/.test(extra)) {
                throw "Extra/unparsed characters found in date: " + extra;
            }
        }

        if(year === -1) {
            year = new Date().getFullYear();
        } else if(year < 100) {
            year += new Date().getFullYear() - new Date().getFullYear() % 100 +
                (year <= shortYearCutoff ? 0 : -100);
        }

        if(doy > -1) {
            month = 1;
            day = doy;
            do {
                dim = this.getDaysCountInMonth(year, month - 1);
                if(day <= dim) {
                    break;
                }
                month++;
                day -= dim;
            } while (true);
        }

        date = this.daylightSavingAdjust(new Date(year, month - 1, day));
                if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
                    throw "Invalid date"; // E.g. 31/02/00
                }

        return date;
    }

    renderBackwardNavigator() {
        return (
            <a className="ui-datepicker-prev ui-corner-all" onClick={this.navBackward}>
                <span className="pi pi-chevron-left"></span>
            </a>
        );
    }

    renderForwardNavigator() {
        return (
            <a className="ui-datepicker-next ui-corner-all" onClick={this.navForward}>
                <span className="pi pi-chevron-right"></span>
            </a>
        );
    }

    renderTitleMonthElement(month) {
        return (
            <span className="ui-datepicker-month">{this.props.locale.monthNames[month]}</span>
        );
    }

    renderTitleYearElement(year) {
        return (
            <span className="ui-datepicker-year">{year}</span>  
        );
    }

    renderTitle(monthMetaData) {
        const month = this.renderTitleMonthElement(monthMetaData.month);
        const year = this.renderTitleYearElement(monthMetaData.year);

        return (
            <div className="ui-datepicker-title">
                {month}
                {year}
            </div>
        );
    }

    renderDayNames(weekDays) {
        return weekDays.map(weekDay =>
            (
                <th key={weekDay} scope="col">
                    <span>{weekDay}</span>
                </th>
            )
        );
    }

    renderDateCellContent(date, className) {
        if (date.selectable) {
            return (
                <a className={className} onClick={e => this.onDateSelect(e, date)}>
                    {date.day}
                </a>
            );
        }
        else {
            return (
                <span className={className}>
                    {date.day}
                </span>
            );
        }
    }

    renderWeek(weekDates) {
        return weekDates.map((date) => {
            const selected = this.isSelected(date);
            const cellClassName = classNames({'ui-datepicker-other-month': date.otherMonth, 'ui-datepicker-current-day': selected, 'ui-datepicker-today': date.today});
            const dateClassName = classNames('ui-state-default', {'ui-state-active': selected, 'ui-state-highlight': date.today, 'ui-state-disabled': !date.selectable});
            const content = this.renderDateCellContent(date, dateClassName);

            return (
                <td key={date.day} className={cellClassName}>
                    {content}
                </td>
            );
        });
    } 

    renderDates(monthMetaData) {
        return monthMetaData.dates.map((weekDates, index) => {
            return (
                <tr key={index}>
                    {this.renderWeek(weekDates)}
                </tr>
            );
        });
    }

    renderDateViewGrid(monthMetaData, weekDays) {
        const dayNames = this.renderDayNames(weekDays);
        const dates = this.renderDates(monthMetaData);

        return (
            <div className="ui-datepicker-calendar-container">
                <table className="ui-datepicker-calendar">
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
        const backwardNavigator = (index === 0) ? this.renderBackwardNavigator(): null;
        const forwardNavigator = (this.props.numberOfMonths === 1) || (index === this.props.numberOfMonths -1) ? this.renderForwardNavigator(): null;
        const title = this.renderTitle(monthMetaData);
        const dateViewGrid = this.renderDateViewGrid(monthMetaData, weekDays);

        return (
            <div key={monthMetaData.month} className="ui-datepicker-group ui-widget-content">
                <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
                    {backwardNavigator}
                    {forwardNavigator}
                    {title}
                </div>
                {dateViewGrid}
            </div>
        );
    }

    renderMonths(monthsMetaData) {
        return (
            monthsMetaData.map((monthMetaData, index) => {
                return this.renderMonth(monthMetaData, index);
            })
        );
    }

    renderDateView() {
        let viewDate = this.props.onViewDateChange ? this.props.viewDate : this.state.viewDate;
        const monthsMetaData = this.createMonths(viewDate.getMonth(), viewDate.getFullYear());
        const months = this.renderMonths(monthsMetaData);

        return (
            <React.Fragment>
               {months}
            </React.Fragment>
        );
    }

    renderMonthView() {
        //todo
    }

    renderDatePicker() {
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

    renderInputElement() {
        if (!this.props.inline) {
            const className = classNames('ui-inputtext ui-widget ui-state-default ui-corner-all', this.props.inputClassName);
            const value = this.getValueToRender();

            return (
                <InputText ref={(el) => this.inputElement = ReactDOM.findDOMNode(el)} id={this.props.inputId} name={this.props.name} value={value} type="text" className={className} style={this.props.inputStyle} 
                    readOnly={this.props.readOnlyInput} disabled={this.props.disabled} tabIndex={this.props.tabIndex} required={this.props.required} autoComplete="off" placeholder={this.props.placeholder}
                    onInput={this.onInput} onClick={this.onInputClick} onFocus={this.onInputFocus} onBlur={this.onInputBlur} onKeyDown={this.onInputKeyDown} />
            );
        }
        else {
            return null;
        }
    }

    renderButton() {
        if (this.props.showIcon) {
            return (
                <Button type="button" icon={this.props.icon} onClick={this.onButtonClick} tabIndex="-1"
                    disabled={this.props.disabled} className="ui-datepicker-trigger ui-calendar-button" />
            );
        }
        else {
            return null;
        }
    }
    
    render() {
        const className = classNames('ui-calendar', this.props.className, {
            'ui-calendar-w-btn': this.props.showIcon, 
            'ui-calendar-timeonly': this.props.timeOnly,
            'ui-inputwrapper-filled': this.props.value
        });
        const panelClassName = classNames('ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all', this.props.panelClassName, {
            'ui-datepicker-inline': this.props.inline,
            'ui-shadow': !this.props.inline,
            'ui-state-disabled': this.props.disabled,
            'ui-datepicker-timeonly': this.props.timeOnly,
            'ui-datepicker-multiple-month': this.props.numberOfMonths > 1, 
            'ui-datepicker-monthpicker': (this.props.view === 'month'), 
            'ui-datepicker-touch-ui': this.props.touchUI
        });
        const input = this.renderInputElement();
        const button = this.renderButton();
        const datePicker = this.renderDatePicker();

        return (
            <span ref={(el) => this.container = el} id={this.props.id} className={className} style={this.props.style}>
                {input}
                {button}
                <CalendarPanel ref={(el) => this.panel = ReactDOM.findDOMNode(el)} className={panelClassName} style={this.props.panelStyle} 
                        appendTo={this.props.appendTo} onClick={this.onPanelClick}>
                    {datePicker}
                </CalendarPanel>
            </span>
        );
    }
}
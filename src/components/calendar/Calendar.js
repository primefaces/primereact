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
        dateFormat: null,
        panelStyle: null,
        panelClassName: null,
        monthNavigator: false,
        yearNavigator: false,
        minDate: null,
        maxDate: null,
        maxDateCount: null,
        showOtherMonths: true,
        selectOtherMonths: false,
        onFocus: null,
        onBlur: null,
        onInput: null,
        onSelect: null,
        onChange: null
    }

    static propsTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.any,
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
        minDate: PropTypes.date,
        maxDate: PropTypes.date,
        maxDateCount: PropTypes.number,
        showOtherMonths: PropTypes.bool,
        selectOtherMonths: PropTypes.bool,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onInput: PropTypes.func,
        onSelect: PropTypes.func,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);

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
        if(this.props.showOnFocus) {
            this.showOverlay();
        }
    }

    onInputBlur(event) {

    }

    onInputKeyDown(event) {
        
    }

    onInput(event) {

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

    } 

    navForward(event) {

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
            this.props.onSelect(date);
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
                            today: this.isToday(today, j, prev.month, prev.year), selectable: this.isSelectable(j, prev.month, prev.year)});
                }
                
                let remainingDaysLength = 7 - week.length;
                for(let j = 0; j < remainingDaysLength; j++) {
                    week.push({day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),
                            selectable: this.isSelectable(dayNo, month, year)});
                    dayNo++;
                }
            }
            else {
                for (let j = 0; j < 7; j++) {
                    if(dayNo > daysLength) {
                        let next = this.getNextMonthAndYear(month, year);
                        week.push({day: dayNo - daysLength, month: next.month, year: next.year, otherMonth:true,
                                    today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                                    selectable: this.isSelectable((dayNo - daysLength), next.month, next.year)});
                    }
                    else {
                        week.push({day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),
                            selectable: this.isSelectable(dayNo, month, year)});
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

    isSelectable(day, month, year) {
        let validMin = true;
        let validMax = true;
        let validDate = true;
        let validDay = true;
        
        if(this.minDate) {
             if(this.minDate.getFullYear() > year) {
                 validMin = false;
             }
             else if(this.minDate.getFullYear() === year) {
                 if(this.minDate.getMonth() > month) {
                     validMin = false;
                 }
                 else if(this.minDate.getMonth() === month) {
                     if(this.minDate.getDate() > day) {
                         validMin = false;
                     }
                 }
             }
        }
        
        if(this.maxDate) {
             if(this.maxDate.getFullYear() < year) {
                 validMax = false;
             }
             else if(this.maxDate.getFullYear() === year) {
                 if(this.maxDate.getMonth() < month) {
                     validMax = false;
                 }
                 else if(this.maxDate.getMonth() === month) {
                     if(this.maxDate.getDate() < day) {
                         validMax = false;
                     }
                 }
             }
        }
        
        if(this.disabledDates) {
           validDate = !this.isDateDisabled(day,month,year);
        }
       
        if(this.disabledDays) {
           validDay = !this.isDayDisabled(day,month,year)
        }
        
        return validMin && validMax && validDate && validDay;
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

    renderBackwardNavigator() {
        return (
            <a className="ui-datepicker-prev ui-corner-all" onClick={this.navBackward}>
                <span className="pi pi-chevron-left"></span>
            </a>
        );
    }

    renderForwardNavigator(index) {
        return (
            <a className="ui-datepicker-next ui-corner-all" onClick={this.navForward}>
                <span className="pi pi-chevron-right"></span>
            </a>
        );
    }

    renderTitleMonthElement(month) {
        return (
            <span className="ui-datepicker-month" >{this.props.locale.monthNames[month]}</span>
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

    renderWeek(weekDates) {
        return weekDates.map((date) => {
            const selected = this.isSelected(date);
            const cellClassName = classNames({'ui-datepicker-other-month ui-state-disabled': date.otherMonth, 'ui-datepicker-current-day': selected,'ui-datepicker-today': date.today});
            const dateClassName = classNames({'ui-state-active': selected, 'ui-state-highlight': date.today, 'ui-state-disabled': !date.selectable});

            return (
                <td key={date.day} className={cellClassName}>
                    <a className={dateClassName} onClick={e => this.onDateSelect(e, date)} tabIndex={date.selectable ? null : '-1'}>
                        {date.day}
                    </a>
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
        const navBackward = (index === 0) ? this.renderBackwardNavigator(): null;
        const navForward = (this.props.numberOfMonths === 1) || (index === this.props.numberOfMonths -1) ? this.renderForwardNavigator(): null;
        const title = this.renderTitle(monthMetaData);
        const dateViewGrid = this.renderDateViewGrid(monthMetaData, weekDays);

        return (
            <div key={monthMetaData.month} className="ui-datepicker-group ui-widget-content">
                <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
                    {navBackward}
                    {navForward}
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
        let val = this.props.value || this.props.defaultDate || new Date();
        if (Array.isArray(val)){
            val = val[0];
        }

        const monthsMetaData = this.createMonths(val.getMonth(), val.getFullYear());
        const months = this.renderMonths(monthsMetaData);

        return (
            <React.Fragment>
               {months}
            </React.Fragment>
        );
    }

    renderMonthView() {

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
            
            return (
                <InputText ref={(el) => this.inputElement = ReactDOM.findDOMNode(el)} id={this.props.inputId} name={this.props.name} type="text" className={className} style={this.props.inputStyle} 
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
        const className = classNames('ui-calendar', this.props.className, {'ui-calendar-w-btn': this.props.showIcon, 'ui-calendar-timeonly': this.props.timeOnly});
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { InputText } from '../inputtext/InputText';
import { Button } from '../button/Button';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class Calendar extends Component {

    static defaultProps = {
        value: null,
        defaultDate: null,
        style: null,
        className: null,
        inputStyle: null,
        inputStyleClass: null,
        placeholder: null,
        disabled: false,
        dateFormat: "mm/dd/yy",
        inline: false,
        showOtherMonths: true,
        selectOtherMonths: false,
        showIcon: false,
        icon: "fa-calendar",
        appendTo: null,
        readonlyInput: false,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        monthNavigator: false,
        yearNavigator: false,
        yearRange: null,
        showTime: false,
        hourFormat: "24",
        locale: {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
            monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
        },
        timeOnly: false,
        stepHour: 1,
        stepMinute: 1,
        stepSecond: 1,
        showSeconds: false,
        dataType: "date",
        required: false,
        showOnFocus: true,
        tabindex: null,
        onFocus: null,
        onSelect: null,
        onBlur: null,
    }

    static propsTypes = {
        value: PropTypes.any,
        defaultDate: PropTypes.instanceOf(Date),
        style: PropTypes.string,
        className: PropTypes.string,
        inputStyle: PropTypes.string,
        inputStyleClass: PropTypes.string,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        dateFormat: PropTypes.string,
        inline: PropTypes.bool,
        showOtherMonths: PropTypes.bool,
        selectOtherMonths: PropTypes.bool,
        showIcon: PropTypes.bool,
        icon: PropTypes.string,
        appendTo: PropTypes.string,
        readonlyInput: PropTypes.bool,
        shortYearCutoff: PropTypes.string,
        minDate: PropTypes.instanceOf(Date),
        maxDate: PropTypes.instanceOf(Date),
        monthNavigator: PropTypes.bool,
        yearNavigator: PropTypes.bool,
        yearRange: PropTypes.string,
        showTime: PropTypes.bool,
        hourFormat: PropTypes.string,
        locale: PropTypes.object,
        timeOnly: PropTypes.bool,
        stepHour: PropTypes.number,
        stepMinute: PropTypes.number,
        stepSecond: PropTypes.number,
        showSeconds: PropTypes.bool,
        dataType: PropTypes.string,
        required: PropTypes.bool,
        showOnFocus: PropTypes.bool,
        tabindex: PropTypes.number,
        onFocus: PropTypes.func,
        onSelect: PropTypes.func,
        onBlur: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {};

        this.weekDays = [];
    }

    get minDate() {
        return this._minDate;
    }
    
    set minDate(date) {
        this._minDate = date;
        this.createMonth(this.currentMonth, this.currentYear);
    }
    
    get maxDate() {
        return this._maxDate;
    }
    
    set maxDate(date) {
        this._maxDate = date;
        this.createMonth(this.currentMonth, this.currentYear);
    }

    createMonth(month, year) {
        this.dates = [];
        this.currentMonth = month;
        this.currentYear = year;
        this.currentMonthText = this.props.locale.monthNames[month];
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
            
            this.dates.push(week);
        }
        this.setState({dates: this.dates, currentMonth: this.currentMonth, currentYear: this.currentYear, currentMonthText: this.currentMonthText})
        if(this.selectedLinkItem) {
            DomHandler.removeClass(this.selectedLinkItem, 'ui-state-active');
            DomHandler.removeClass(this.selectedLinkItem.parentElement, 'ui-datepicker-current-day');
        }
    }
    
    prevMonth(event) {
        if(this.props.disabled) {
            event.preventDefault();
            return;
        }
        
        if(this.currentMonth === 0) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        else {
            this.currentMonth--;
        }
        
        this.createMonth(this.currentMonth, this.currentYear);
        event.preventDefault();
    }
    
    nextMonth(event) {
        if(this.props.disabled) {
            event.preventDefault();
            return;
        }
        
        if(this.currentMonth === 11) {
            this.currentMonth = 0;
            this.currentYear++;
        }
        else {
            this.currentMonth++;
        }
        
        this.createMonth(this.currentMonth, this.currentYear);
        event.preventDefault();
    }
    
    onDateSelect(event,dateMeta) {
        if(this.props.disabled || !dateMeta.selectable) {
            event.preventDefault();
            return;
        }
        
        if(dateMeta.otherMonth) {
            if(this.props.selectOtherMonths)
                this.selectDate(event,dateMeta);
        }
        else {
             this.selectDate(event,dateMeta);
        }
        
        this.dateClick = true;
        this.updateInputfield();
        event.preventDefault();
    }
    
    updateInputfield() {
        if(this.value) {
            let formattedValue;
            
            if(this.props.timeOnly) {
                formattedValue = this.formatTime(this.value);
            }
            else {
                formattedValue = this.formatDate(this.value, this.props.dateFormat);
                if(this.props.showTime) {
                    formattedValue += ' ' + this.formatTime(this.value);
                }
            }
            
            this.inputFieldValue = formattedValue;
        }
        else {
            this.inputFieldValue = '';
        }

        if(!this.props.inline) {
            this.inputfield.value = this.inputFieldValue;
        }

        this.updateFilledState();
    }
    
    selectDate(event, dateMeta) {
        if(this.selectedLinkItem) {
            DomHandler.removeClass(this.selectedLinkItem, 'ui-state-active');
            DomHandler.removeClass(this.selectedLinkItem.parentElement, 'ui-datepicker-current-day');
        }

        this.value = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
        if(this.props.showTime) {
            if(this.props.hourFormat === '12' && this.pm && this.currentHour !== 12)
                this.value.setHours(this.currentHour + 12);
            else
                this.value.setHours(this.currentHour);

            this.value.setMinutes(this.currentMinute);
            this.value.setSeconds(this.currentSecond);
        }

        DomHandler.addClass(event.target, 'ui-state-active');
        DomHandler.addClass(event.target.parentElement, 'ui-datepicker-current-day');
        this.selectedLinkItem = event.target;

        this._isValid = true;
        this.updateModel(event);
        if (this.props.onSelect) {
            this.props.onSelect({
                originalEvent: event,
                value: this.value
            })
        }
    }
    
    updateModel(event) {
        if(this.props.onChange) {
            if(this.props.dataType === 'date') {
                this.props.onChange({
                    originalEvent: event,
                    value: this.value
                })
            }
            else if(this.props.dataType === 'string') {
                if(this.timeOnly) {
                    this.props.onChange({
                        originalEvent: event,
                        value: this.formatDate(this.value)
                    })
                }
                else {
                    this.props.onChange({
                        originalEvent: event,
                        value: this.formatDate(this.value, this.props.dateFormat)
                    })
                }
            }
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
        
        return {'month':m,'year':y};
    }
    
    getNextMonthAndYear(month, year) {
        let m, y;
        
        if(month === 11) {
            m = 0;
            y = year + 1;
        }
        else {
            m = month + 1;
        }
        
        return {'month':m,'year':y};
    }
    
    getSundayIndex() {
        return this.props.locale.firstDayOfWeek > 0 ? 7 - this.props.locale.firstDayOfWeek : 0;
    }
    
    isSelected(dateMeta) {     
        if(this.value)
            return this.value.getDate() === dateMeta.day && this.value.getMonth() === dateMeta.month && this.value.getFullYear() === dateMeta.year;
        else
            return false;
    }
    
    isToday(today, day, month, year) {     
        return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
    }
    
    isSelectable(day, month, year) {
        let validMin = true;
        let validMax = true;
        
        if(this.props.minDate) {
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
        
        if(this.props.maxDate) {
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
        
        return validMin && validMax;
    }
    
    onInputFocus(inputfield, event) {
        this.focus = true;
        if(this.props.showOnFocus) {
            this.showOverlay(inputfield);
        }

        if (this.props.onFocus) {
            this.props.onFocus({
                originalEvent: event
            })
        }
    }
    
    onInputBlur(event) {
        this.focus = false;
        if (this.props.onBlur) {
            this.props.onBlur({
                originalEvent: event
            })
        }
    }
    
    onButtonClick(event,inputfield) {
        this.closeOverlay = false;
        
        if(!this.overlay.offsetParent) {
            inputfield.focus();
            this.showOverlay(inputfield);
        }
        else
            this.closeOverlay = true;
    }

    onInputClick(event) {
        this.closeOverlay = false;
    }
    
    onInputKeydown(event) {
        if(event.keyCode === 9) {
            this.overlayVisible = false;
            this.overlay.style.display = 'none';
        }
    }
    
    onMonthDropdownChange(m) {
        this.currentMonth = parseInt(m,10);
        this.createMonth(this.currentMonth, this.currentYear);
    }
    
    onYearDropdownChange(y) {
        this.currentYear = parseInt(y,10);
        this.createMonth(this.currentMonth, this.currentYear);
    }
    
    incrementHour(event) {
        let newHour = this.currentHour + this.props.stepHour;
        if(this.props.hourFormat === '24')
            this.currentHour = (newHour >= 24) ? (newHour - 24) : newHour;        
        else if(this.props.hourFormat === '12')
            this.currentHour = (newHour >= 13) ? (newHour - 12) : newHour;
        
        this.updateTime(event);
                
        event.preventDefault();
    }
    
    decrementHour(event) {
        let newHour = this.currentHour - this.props.stepHour;
        if(this.props.hourFormat === '24')
            this.currentHour = (newHour < 0) ? (24 + newHour) : newHour;        
        else if(this.props.hourFormat === '12')
            this.currentHour = (newHour <= 0) ? (12 + newHour) : newHour;
            
        this.updateTime(event);

        event.preventDefault();
    }
    
    incrementMinute(event) {
        let newMinute = this.currentMinute + this.props.stepMinute;
        this.currentMinute = (newMinute > 59) ? newMinute - 60 : newMinute;
            
        this.updateTime(event);
                
        event.preventDefault();
    }
    
    decrementMinute(event) {
        let newMinute = this.currentMinute - this.props.stepMinute;
        this.currentMinute = (newMinute < 0) ? 60 + newMinute : newMinute;
            
        this.updateTime(event);
            
        event.preventDefault();
    }
    
    incrementSecond(event) {
        let newSecond = this.currentSecond + this.props.stepSecond;
        this.currentSecond = (newSecond > 59) ? newSecond - 60 : newSecond;
            
        this.updateTime(event);
                
        event.preventDefault();
    }
    
    decrementSecond(event) {
        let newSecond = this.currentSecond - this.props.stepSecond;
        this.currentSecond = (newSecond < 0) ? 60 + newSecond : newSecond;
            
        this.updateTime(event);
            
        event.preventDefault();
    }
    
    updateTime(event) {
        this.value = this.value||new Date();
        if(this.props.hourFormat === '12' && this.pm && this.currentHour !== 12)
            this.value.setHours(this.currentHour + 12);
        else
            this.value.setHours(this.currentHour);
        
        this.value.setMinutes(this.currentMinute);
        this.value.setSeconds(this.currentSecond);
        this.updateModel(event);
        if (this.props.onSelect) {
            this.props.onSelect({
                originalEvent: event,
                value: this.value
            })
        }
        this.updateInputfield();
    }
    
    toggleAMPM(event) {
        this.pm = !this.pm;
        this.updateTime(event);
        event.preventDefault();
    }
    
    onInput(event) {
        try {
            this.value = this.parseValueFromString(event.target.value);
            this.updateUI();
        } 
        catch(err) {
            //invalid date
            this.value = null;
            this._isValid = false;
        }
        
        this.updateModel(event);
        this.updateFilledState();
    }
    
    parseValueFromString(text) {
        let dateValue;
        let parts = text.split(' ');
        
        if(this.props.timeOnly) {
            dateValue = new Date();
            this.populateTime(dateValue, parts[0], parts[1]);
        }
        else {
            if(this.props.showTime) {
                dateValue = this.parseDate(parts[0], this.props.dateFormat);
                this.populateTime(dateValue, parts[1], parts[2]);
            }
            else {
                 dateValue = this.parseDate(text, this.props.dateFormat);
            }
        }
        
        return dateValue;
    }
    
    populateTime(value, timeString, ampm) {
        let time = this.parseTime(timeString);
        
        if(this.props.hourFormat === '12') {
            if(!ampm)
                throw new Error('Invalid Time');
            else if(ampm.toLowerCase() === 'PM' && time.hour !== 12)
                value.setHours(time.hour + 12);
        }
        else {
            value.setHours(time.hour);
        }

        value.setMinutes(time.minute);
        value.setSeconds(time.second);
    }
    
    updateUI() {
        let val = this.value||this.props.defaultDate||new Date();
        this.createMonth(val.getMonth(), val.getFullYear());
        
        if(this.props.showTime||this.props.timeOnly) {
            let hours = val.getHours();
            
            if(this.props.hourFormat === '12') {
                if(hours >= 12) {
                    this.pm = true;
                    this.currentHour = (hours === 12) ? 12 : hours - 12;
                }
                else {
                    this.pm = false;
                    this.currentHour = (hours === 0) ? 12 : hours;
                }
            }
            else {
                this.currentHour = val.getHours();
            }
            
            this.currentMinute = val.getMinutes();
            this.currentSecond = val.getSeconds();
        }
    }
    
    onDatePickerClick(event) {
        this.closeOverlay = this.dateClick;
    }
    
    showOverlay(inputfield) {
        if(this.props.appendTo)
            DomHandler.absolutePosition(this.overlay, inputfield);
        else
            DomHandler.relativePosition(this.overlay, inputfield);
        
        this.overlayVisible = true;
        this.overlay.style.zIndex = String(DomHandler.getZindex());
        this.overlay.style.display = 'block';

        this.bindDocumentClickListener();
    }

    writeValue(value) {
        this.value = value;
        if(this.value && typeof this.value === 'string') {
            this.value = this.parseValueFromString(this.value);
        }
        
        this.updateInputfield();
        this.updateUI();
    }
    
    // Ported from jquery-ui datepicker formatDate    
    formatDate(date, format) {
        if(!date) {
            return "";
        }

        let iFormat,
        lookAhead = (match) => {
            let matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
            if(matches) {
                iFormat++;
            }
            return matches;
        },
        formatNumber = (match, value, len) => {
            let num = "" + value;
            if(lookAhead(match)) {
                while (num.length < len) {
                    num = "0" + num;
                }
            }
            return num;
        },
        formatName = (match, value, shortNames, longNames) => {
            return (lookAhead(match) ? longNames[ value ] : shortNames[ value ]);
        },
        output = "",
        literal = false;

        if(date) {
            for(iFormat = 0; iFormat < format.length; iFormat++) {
                if(literal) {
                    if(format.charAt(iFormat) === "'" && !lookAhead("'"))
                        literal = false;
                    else
                        output += format.charAt(iFormat);
                }
                else {
                    switch (format.charAt(iFormat)) {
                        case "d":
                            output += formatNumber("d", date.getDate(), 2);
                            break;
                        case "D":
                            output += formatName("D", date.getDay(), this.props.locale.dayNamesShort, this.props.locale.dayNames);
                            break;
                        case "o":
                            output += formatNumber("o",
                                Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                            break;
                        case "m":
                            output += formatNumber("m", date.getMonth() + 1, 2);
                            break;
                        case "M":
                            output += formatName("M", date.getMonth(), this.props.locale.monthNamesShort, this.props.locale.monthNames);
                            break;
                        case "y":
                            output += (lookAhead("y") ? date.getFullYear() :
                                (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100);
                            break;
                        case "@":
                            output += date.getTime();
                            break;
                        case "!":
                            output += date.getTime() * 10000 + this.ticksTo1970;
                            break;
                        case "'":
                            if(lookAhead("'"))
                                output += "'";
                            else
                                literal = true;

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
        if(!date) {
            return '';
        }
        
        let output = '';
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        
        if(this.props.hourFormat === '12' && this.pm && hours !== 12) {
            hours-=12;
        }
        
        output += (hours < 10) ? '0' + hours : hours;
        output += ':';
        output += (minutes < 10) ? '0' + minutes : minutes;
        
        if(this.props.showSeconds) {
            output += ':';
            output += (seconds < 10) ? '0' + seconds : seconds;
        }
        
        if(this.props.hourFormat === '12') {
            output += this.pm ? ' PM' : ' AM';
        }
        
        return output;
    }
    
    parseTime(value) {
        let tokens= value.split(':');
        let validTokentLength = this.props.showSeconds ? 3 : 2;
        
        if(tokens.length !== validTokentLength) {
            throw new Error("Invalid time");
        }
        
        let h = parseInt(tokens[0],10);
        let m = parseInt(tokens[1],10);
        let s = this.props.showSeconds ? parseInt(tokens[2],10) : null;
        
        if(isNaN(h) || isNaN(m) || h > 23 || m > 59 || (this.props.hourFormat === '12' && h > 12) || (this.props.showSeconds && (isNaN(s) || s > 59))) {
            throw new Error("Invalid time");
        }
        else {
            if(this.props.hourFormat === '12' && h !== 12) {
                h+= 12;
            }
            
            return {hour: h, minute: m, second: s};
        }
    }
    
    // Ported from jquery-ui datepicker parseDate 
    parseDate(value, format) {
		if(format === null || value === null) {
            throw new Error("Invalid arguments");
		}

		value = (typeof value === "object" ? value.toString() : value + "");
		if(value === "") {
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
                throw new Error("Missing number at position " + iValue);
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
                throw new Error("Unknown name at position " + iValue);
			}
		},
		checkLiteral = () => {
			if(value.charAt(iValue) !== format.charAt(iFormat)) {
                throw new Error("Unexpected literal at position " + iValue);
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
						getName("D", this.props.locale.dayNamesShort, this.props.locale.dayNames);
						break;
					case "o":
						doy = getNumber("o");
						break;
					case "m":
						month = getNumber("m");
						break;
					case "M":
						month = getName("M", this.props.locale.monthNamesShort, this.props.locale.monthNames);
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
                throw new Error("Extra/unparsed characters found in date: " + extra);
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
		if(date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
            throw new Error("Invalid date"); // E.g. 31/02/00
		}
		return date;
	}
    
    daylightSavingAdjust(date) {
        if(!date) {
            return null;
        }
        date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
        return date;
    }
    
    updateFilledState() {
        this.filled = this.inputFieldValue && this.inputFieldValue !== '';
    }
    
    bindDocumentClickListener() {
        if(!this.documentClickListener) {
            this.documentClickListener = this.docClickListener.bind(this);
            document.addEventListener('click', this.documentClickListener);
        }
    }
    
    docClickListener() {
        if(this.closeOverlay) {
           this.overlayVisible = false;
           this.overlay.style.display = 'none';
        }
                
        this.closeOverlay = true;
        this.dateClick = false;
    }

    unbindDocumentClickListener() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
        }
    }
        
    componentWillUnmount() {
        this.unbindDocumentClickListener();
        
        if(!this.props.inline && this.props.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    }

    componentWillMount() {
        let date = this.props.defaultDate||new Date();        
        let dayIndex = this.props.locale.firstDayOfWeek;
        for(let i = 0; i < 7; i++) {
            this.weekDays.push(this.props.locale.dayNamesMin[dayIndex]);
            dayIndex = (dayIndex === 6) ? 0 : ++dayIndex;
        }
                
        this.currentMonth = date.getMonth();
        this.currentYear = date.getFullYear();
        if(this.props.showTime) {
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
            this.pm = date.getHours() > 11;
            
            if(this.props.hourFormat === '12')
                this.currentHour = date.getHours() === 0 ? 12 : date.getHours() % 12;
            else
                this.currentHour = date.getHours();
        }
        else if(this.props.timeOnly) {
            this.currentMinute = 0;
            this.currentHour = 0;
            this.currentSecond = 0;
        }

        this.createMonth(this.currentMonth, this.currentYear);
        
        this.ticksTo1970 = (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
    		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000);
            
        if(this.props.yearNavigator && this.props.yearRange) {
            this.yearOptions = [];
            let years = this.props.yearRange.split(':'),
            yearStart = parseInt(years[0], 10),
            yearEnd = parseInt(years[1], 10);
            
            for(let i = yearStart; i <= yearEnd; i++) {
                this.yearOptions.push(i);
            }
        }
    }
    
    componentDidMount() {           
        if(!this.props.inline && this.props.appendTo) {
            if(this.props.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                DomHandler.appendChild(this.overlay, this.props.appendTo);
        }

        this.writeValue(this.props.value);
    }
    

    render() {

        var containerStyleClass = classNames('ui-calendar', this.props.className, {
            'ui-calendar-w-btn': this.props.showIcon
        });

        if (!this.props.inline) {
            var inputElement = <InputText ref={(el) => this.inputfield = ReactDOM.findDOMNode(el)} type="text" required={this.props.required} onFocus={(e) => this.onInputFocus(this.inputfield, e)} onKeyDown={this.onInputKeydown.bind(this)} onClick={this.onInputClick.bind(this)}
                onBlur={this.onInputBlur.bind(this)} readOnly={this.props.readonlyInput} onInput={this.onInput.bind(this)} style={this.props.inputStyle} className={this.props.inputStyleClass} placeholder={this.props.placeholder || ''} disabled={this.props.disabled} tabIndex={this.props.tabindex} />

            if (this.props.showIcon) {
                var buttonStyleClass = classNames('ui-datepicker-trigger', {
                    'ui-state-disabled': this.props.disabled
                });

                var buttonElement = <Button type="button" icon={this.props.icon} onClick={(e) => this.onButtonClick(e, this.inputfield)}
                    className={buttonStyleClass} disabled={this.props.disabled} />
            }
        }

        var datepickerStyleClass = classNames('ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all', {
            'ui-datepicker-inline': this.props.inline,
            'ui-shadow': !this.props.inline,
            'ui-state-disabled': this.props.disabled,
            'ui-datepicker-timeonly': this.props.timeOnly
        }),
        datepickerStyle = { 'display': this.props.inline ? 'inline-block' : (this.overlayVisible ? 'block' : 'none') };

        /* Datepicker */
        if (!this.props.timeOnly) {
            /* datepicker header */
            var prevLink = (<a className="ui-datepicker-prev ui-corner-all" href="#" onClick={this.prevMonth.bind(this)}>
                                <span className="fa fa-angle-left"></span>
                            </a>),
                nextLink = (<a className="ui-datepicker-next ui-corner-all" href="#" onClick={this.nextMonth.bind(this)}>
                                <span className="fa fa-angle-right"></span>
                            </a>);

            var currentMonthText = !this.props.monthNavigator && (<span className="ui-datepicker-month">{this.state.currentMonthText} </span>),
                monthNav = this.props.monthNavigator && (<select className="ui-datepicker-month" value={this.state.currentMonth} onChange={(e) => this.onMonthDropdownChange(e.target.value)}>
                                        {this.props.locale.monthNames.map((month, i) => <option key={"month_" + i} value={i}>{month}</option>)}
                                    </select>),
                yearNav = this.props.yearNavigator && (<select className="ui-datepicker-year" value={this.state.currentYear} onChange={(e) => this.onYearDropdownChange(e.target.value)}>
                                        {this.yearOptions.map((year, i) => <option key={"year_" + i} value={year}>{year}</option>)}
                                    </select>),
                currentYearText = !this.props.yearNavigator && (<span className="ui-datepicker-year">{this.state.currentYear}</span>);

            var title = (<div className="ui-datepicker-title">
                            {currentMonthText}
                            {monthNav}
                            {yearNav}
                            {currentYearText}
                        </div>);

            var datepickerHeader = (<div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
                                        {prevLink}
                                        {nextLink}
                                        {title}
                                    </div>);

            /* datepicker table */
            var $this = this,
                thead = (<thead>
                            <tr>
                                {this.weekDays.map((weekDay, i) => <th key={i} scope="col"><span>{weekDay}</span></th>)}
                            </tr>
                        </thead>),
                tbody = (<tbody>
                            {this.state.dates.map(function (week, rowIndex) {
                                    var columns = week.map(function (date, columnIndex) {
                                        var dateStyleClass = classNames({
                                            'ui-datepicker-other-month ui-state-disabled': date.otherMonth,
                                            'ui-datepicker-current-day': $this.isSelected(date),
                                            'ui-datepicker-today': date.today
                                        });

                                        var dayStyleClass = classNames('ui-state-default', {
                                            'ui-state-active': $this.isSelected(date),
                                            'ui-state-highlight': date.today,
                                            'ui-state-disabled': !date.selectable
                                        }),
                                        dayLinks = (date.otherMonth ? $this.props.showOtherMonths : true) && (<a href="#" className={dayStyleClass} onClick={(e) => $this.onDateSelect(e, date)}>{date.day}</a>);

                                        return (<td className={dateStyleClass} key={rowIndex + '_' + columnIndex}>
                                            {dayLinks}
                                        </td>)
                                    })

                                    return (<tr key={rowIndex}>
                                        {columns}
                                    </tr>)
                                })
                            }
                        </tbody>);
            
            var table = (<table className="ui-datepicker-calendar">
                            {thead}
                            {tbody}
                        </table>)

        }

        /* Timepicker */
        if(this.props.showTime||this.props.timeOnly) {
            var separator = (<div className="ui-separator">
                                <a href="#">
                                    <span className="fa fa-angle-up"></span>
                                </a>
                                <span>:</span>
                                <a href="#">
                                    <span className="fa fa-angle-down"></span>
                                </a>
                            </div>);

            var hourPicker = (<div className="ui-hour-picker">
                                <a href="#" onClick={this.incrementHour.bind(this)}>
                                    <span className="fa fa-angle-up"></span>
                                </a>
                                <span style={{'display': this.currentHour < 10 ? 'inline': 'none'}}>0</span><span>{this.currentHour}</span>
                                <a href="#" onClick={this.decrementHour.bind(this)}>
                                    <span className="fa fa-angle-down"></span>
                                </a>
                            </div>),
                minutePicker = (<div className="ui-minute-picker">
                                <a href="#" onClick={this.incrementMinute.bind(this)}>
                                    <span className="fa fa-angle-up"></span>
                                </a>
                                <span style={{'display': this.currentMinute < 10 ? 'inline': 'none'}}>0</span><span>{this.currentMinute}</span>
                                <a href="#" onClick={this.decrementMinute.bind(this)}>
                                    <span className="fa fa-angle-down"></span>
                                </a>
                            </div>),
                secondPicker = this.props.showSeconds && (<div className="ui-second-picker">
                                    <a href="#" onClick={this.incrementSecond.bind(this)}>
                                        <span className="fa fa-angle-up"></span>
                                    </a>
                                    <span style={{'display': this.currentSecond < 10 ? 'inline': 'none'}}>0</span><span>{this.currentSecond}</span>
                                    <a href="#" onClick={this.incrementSecond.bind(this)}>
                                        <span className="fa fa-angle-down"></span>
                                    </a>
                                </div>),
                ampmPicker = this.props.hourFormat==='12' && (<div className="ui-ampm-picker">
                                    <a href="#" onClick={this.toggleAMPM.bind(this)}>
                                        <span className="fa fa-angle-up"></span>
                                    </a>
                                    <span>{this.pm ? 'PM' : 'AM'}</span>
                                    <a href="#" onClick={this.toggleAMPM.bind(this)}>
                                        <span className="fa fa-angle-down"></span>
                                    </a>
                                </div>);

                var timepickerHeader = (<div className="ui-timepicker ui-widget-header ui-corner-all">
                                            {hourPicker}
                                            {separator}
                                            {minutePicker}
                                            {this.props.showSeconds && separator}
                                            {secondPicker}
                                            {ampmPicker}
                                        </div>);
        }


        return (
            <span className={containerStyleClass} style={this.props.style}>
                {inputElement}
                {buttonElement}

                <div ref={(el) => this.overlay = ReactDOM.findDOMNode(el)} className={datepickerStyleClass} style={datepickerStyle} onClick={this.onDatePickerClick.bind(this)}>
                    {datepickerHeader}
                    {table}
                    {timepickerHeader}
                </div>
            </span >
        );
    }
}
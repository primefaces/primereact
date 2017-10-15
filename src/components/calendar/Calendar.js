import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {InputText} from '../inputtext/InputText';
import {Button} from '../button/Button';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class Calendar extends Component {

  static get defaultProps() {
    return {
      id: null,
      value: null,
      defaultDate: null,
      selectionMode: 'single',
      style: null,
      className: null,
      inputStyle: null,
      inputClassName: null,
      placeholder: null,
      disabled: false,
      dateFormat: "mm/dd/yy",
      inline: false,
      showOtherMonths: true,
      selectOtherMonths: false,
      showIcon: false,
      icon: "fa-calendar",
      utc: false,
      showOnFocus: true,
      appendTo: null,
      readOnlyInput: false,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      monthNavigator: false,
      yearNavigator: false,
      maxDateCount: null,
      yearRange: null,
      showTime: false,
      hourFormat: "24",
      timeOnly: false,
      locale: {
        firstDayOfWeek: 0,
        dayNames: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        dayNamesShort: [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ],
        dayNamesMin: [
          "Su",
          "Mo",
          "Tu",
          "We",
          "Th",
          "Fr",
          "Sa"
        ],
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        monthNamesShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        today: 'Today',
        clear: 'Clear'
      },
      dataType: "date",
      showButtonBar: false,
      todayButtonClassName: 'ui-button-secondary',
      clearButtonClassName: 'ui-button-secondary',
      required: false,
      tabindex: null,
      stepHour: 1,
      stepMinute: 1,
      stepSecond: 1,
      showSeconds: false,
      disabledDates: null,
      disabledDays: null,
      onFocus: null,
      onSelect: null,
      onBlur: null,
      onChange: null,
      onTodayButtonClick: null,
      onClearButtonClick: null,
      onMouseDown: null,
      onKeyUp: null,
      onKeyPress: null,
      onContextMenu: null
    }
  }

  static get propsTypes() {
    return {
      id: PropTypes.string,
      value: PropTypes.any,
      defaultDate: PropTypes.instanceOf(Date),
      selectionMode: PropTypes.string,
      style: PropTypes.string,
      className: PropTypes.string,
      inputStyle: PropTypes.string,
      inputClassName: PropTypes.string,
      placeholder: PropTypes.string,
      disabled: PropTypes.bool,
      dateFormat: PropTypes.string,
      inline: PropTypes.bool,
      showOtherMonths: PropTypes.bool,
      selectOtherMonths: PropTypes.bool,
      showIcon: PropTypes.bool,
      icon: PropTypes.string,
      utc: PropTypes.bool,
      showOnFocus: PropTypes.bool,
      appendTo: PropTypes.string,
      readOnlyInput: PropTypes.bool,
      shortYearCutoff: PropTypes.string,
      minDate: PropTypes.any,
      maxDate: PropTypes.any,
      monthNavigator: PropTypes.bool,
      yearNavigator: PropTypes.bool,
      maxDateCount: PropTypes.number,
      yearRange: PropTypes.string,
      showTime: PropTypes.bool,
      hourFormat: PropTypes.string,
      timeOnly: PropTypes.bool,
      locale: PropTypes.object,
      dataType: PropTypes.string,
      showButtonBar: PropTypes.bool,
      todayButtonClassName: PropTypes.bool,
      clearButtonClassName: PropTypes.bool,
      required: PropTypes.bool,
      tabindex: PropTypes.number,
      stepHour: PropTypes.number,
      stepMinute: PropTypes.number,
      stepSecond: PropTypes.number,
      showSeconds: PropTypes.bool,
      disabledDates: PropTypes.Array,
      disabledDays: PropTypes.Array,
      onFocus: PropTypes.func,
      onSelect: PropTypes.func,
      onBlur: PropTypes.func,
      onChange: PropTypes.func,
      onTodayButtonClick: PropTypes.func,
      onClearButtonClick: PropTypes.func,
      onMouseDown: PropTypes.func,
      onKeyUp: PropTypes.func,
      onKeyPress: PropTypes.func,
      onContextMenu: PropTypes.func
    }
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.onTodayButtonClick = this.onTodayButtonClick.bind(this);
    this.onClearButtonClick = this.onClearButtonClick.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onInputKeydown = this.onInputKeydown.bind(this);
    this.onInputClick = this.onInputClick.bind(this);
    this.onUserInput = this.onUserInput.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.incrementHour = this.incrementHour.bind(this);
    this.decrementHour = this.decrementHour.bind(this);
    this.incrementMinute = this.incrementMinute.bind(this);
    this.decrementMinute = this.decrementMinute.bind(this);
    this.incrementSecond = this.incrementSecond.bind(this);
    this.decrementSecond = this.decrementSecond.bind(this);
    this.toggleAMPM = this.toggleAMPM.bind(this);
    this.onDatePickerClick = this.onDatePickerClick.bind(this);
  }

  createMonth(month, year) {
    let dates = [];
    let firstDay = this.getFirstDayOfMonthIndex(month, year);
    let daysLength = this.getDaysCountInMonth(month, year);
    let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
    let dayNo = 1;
    let today = new Date();

    for (let i = 0; i < 6; i++) {
      let week = [];

      if (i === 0) {
        for (let j = (prevMonthDaysLength - firstDay + 1); j <= prevMonthDaysLength; j++) {
          let prev = this.getPreviousMonthAndYear(month, year);
          week.push({
            day: j,
            month: prev.month,
            year: prev.year,
            otherMonth: true,
            today: this.isToday(today, j, prev.month, prev.year),
            selectable: this.isSelectable(j, prev.month, prev.year)
          });
        }

        let remainingDaysLength = 7 - week.length;
        for (let j = 0; j < remainingDaysLength; j++) {
          week.push({
            day: dayNo,
            month: month,
            year: year,
            today: this.isToday(today, dayNo, month, year),
            selectable: this.isSelectable(dayNo, month, year)
          });
          dayNo++;
        }
      } else {
        for (let j = 0; j < 7; j++) {
          if (dayNo > daysLength) {
            let next = this.getNextMonthAndYear(month, year);
            week.push({
              day: dayNo - daysLength,
              month: next.month,
              year: next.year,
              otherMonth: true,
              today: this.isToday(today, dayNo - daysLength, next.month, next.year),
              selectable: this.isSelectable((dayNo - daysLength), next.month, next.year)
            });
          } else {
            week.push({
              day: dayNo,
              month: month,
              year: year,
              today: this.isToday(today, dayNo, month, year),
              selectable: this.isSelectable(dayNo, month, year)
            });
          }

          dayNo++;
        }
      }

      dates.push(week);
    }

    return dates;
  }

  createWeekDays() {
    this.weekDays = [];
    let dayIndex = this.props.locale.firstDayOfWeek;
    for (let i = 0; i < 7; i++) {
      this.weekDays.push(this.props.locale.dayNamesMin[dayIndex]);
      dayIndex = (dayIndex === 6)
        ? 0
        : ++dayIndex;
    }
  }

  getTime() {
    let date;
    if (this.props.value) {
      if (this.isSingleSelection())
        date = this.props.value;
      else
        date = this.props.value.length
          ? this.props.value[0]
          : this.props.defaultDate || new Date();
      }
    else {
      date = this.props.defaultDate || new Date();
    }

    this.pm = date.getHours() > 11;
    let hour,
      minute,
      second;
    if (this.props.showTime) {
      minute = date.getMinutes();
      second = date.getSeconds();

      if (this.props.hourFormat === '12')
        hour = date.getHours() === 0
          ? 12
          : date.getHours() % 12;
      else
        hour = date.getHours();
      }
    else if (this.props.timeOnly) {
      hour = 0;
      minute = 0;
      second = 0;
    }

    return {hour: hour, minute: minute, second: second};
  }

  getMonthYearDate(value) {
    let date;
    if (value) {
      if (this.isSingleSelection())
        date = value;
      else
        date = value.length
          ? value[0]
          : this.props.defaultDate || new Date();
      }
    else {
      date = this.props.defaultDate || new Date();
    }

    return date;
  }

  prevMonth(event) {
    if (this.props.disabled) {
      event.preventDefault();
      return;
    }

    let month = this.state.currentMonth;

    let year = this.state.currentYear;

    if (month === 0) {
      month = 11;
      year--;

      if (this.props.yearNavigator && year < this.props.yearOptions[0]) {
        year = this.props.yearOptions[this.props.yearOptions.length - 1];
      }
    } else {
      month--;
    }

    this.setState({
      currentMonth: month,
      currentYear: year,
      dates: this.createMonth(month, year)
    });

    this.triggerMonthYearChange(month, year);
    event.preventDefault();
  }

  nextMonth(event) {
    if (this.props.disabled) {
      event.preventDefault();
      return;
    }

    let month = this.state.currentMonth;
    let year = this.state.currentYear;

    if (month === 11) {
      month = 0;
      year++;

      if (this.props.yearNavigator && year > this.props.yearOptions[this.props.yearOptions.length - 1]) {
        year = this.props.yearOptions[0];
      }
    } else {
      month++;
    }

    this.setState({
      currentMonth: month,
      currentYear: year,
      dates: this.createMonth(month, year)
    });

    this.triggerMonthYearChange(month, year);
    event.preventDefault();
  }

  triggerMonthYearChange(month, year) {
    const newDate = new Date(this.state.currentSelectedDate);
    newDate.setMonth(month);
    newDate.setFullYear(year);
    this.updateModel(event, newDate);
    this.updateInputfield(newDate);

  }

  onDateSelect(event, dateMeta) {
    if (this.props.disabled || !dateMeta.selectable) {
      event.preventDefault();
      return;
    }

    if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
      let filteredValue = this.props.value.filter((date, i) => {
        return !this.isDateEquals(date, dateMeta);
      });

      this.updateModel(event, filteredValue);
    } else {
      if (this.shouldSelectDate(dateMeta)) {
        if (dateMeta.otherMonth) {
          if (this.selectOtherMonths) {
            this.selectDate(event, dateMeta);
          }
        } else {
          this.selectDate(event, dateMeta);
        }
      }
    }

    if (this.isSingleSelection()) {
      this.hideOverlay();
    }
    event.preventDefault();
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

  shouldSelectDate(dateMeta) {
    if (this.isMultipleSelection())
      return !this.props.maxDateCount || !this.props.value || this.props.maxDateCount > this.props.value.length;
    else
      return true;
    }

  selectDate(event, dateMeta) {
    let date;
    let time = this.getTime();

    let selectedValue;

    if (this.props.utc)
      date = new Date(Date.UTC(dateMeta.year, dateMeta.month, dateMeta.day));
    else
      date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);

    if (this.props.showTime) {
      if (this.props.hourFormat === '12' && this.pm && this.currentHour !== 12)
        date.setHours(time.hour + 12);
      else
        date.setHours(time.hour);

      date.setMinutes(time.minute);
      date.setSeconds(time.second);
    }

    if (this.isSingleSelection()) {
      selectedValue = date;
    } else if (this.isMultipleSelection()) {
      selectedValue = this.props.value
        ? [
          ...this.props.value,
          date
        ]
        : [date];
    } else if (this.isRangeSelection()) {
      if (this.props.value && this.props.value.length) {
        let startDate = this.props.value[0];
        let endDate = this.props.value[1];

        if (!endDate && date.getTime() > startDate.getTime()) {
          endDate = date;
        } else {
          startDate = date;
          endDate = null;
        }

        selectedValue = [startDate, endDate];
      } else {
        selectedValue = [date, null];
      }
    }

    this.updateModel(event, selectedValue);
    this.updateInputfield(selectedValue);

    if (this.props.onSelect) {
      this.props.onSelect({originalEvent: event, value: date});
    }
  }

  updateModel(event, val) {
    if (this.props.onChange) {
      if (this.props.dataType === 'date') {
        this.props.onChange({originalEvent: event, value: val});
      } else if (this.props.dataType === 'string') {
        this.props.onChange({originalEvent: event, value: this.formatDateTime(val)});
      }
    }

    this.setState({currentSelectedDate: val})

  }

  updateInputfield(value) {
    if (this.inputfield) {
      this.inputfield.value = this.getInputFieldValue(value);
    }
  }

  getFirstDayOfMonthIndex(month, year) {
    let day = new Date();
    day.setDate(1);
    day.setMonth(month);
    day.setFullYear(year);

    let dayIndex = day.getDay() + this.getSundayIndex();
    return dayIndex >= 7
      ? dayIndex - 7
      : dayIndex;
  }

  getDaysCountInMonth(month, year) {
    return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
  }

  getDaysCountInPrevMonth(month, year) {
    let prev = this.getPreviousMonthAndYear(month, year);
    return this.getDaysCountInMonth(prev.month, prev.year);
  }

  getPreviousMonthAndYear(month, year) {
    let m,
      y;

    if (month === 0) {
      m = 11;
      y = year - 1;
    } else {
      m = month - 1;
      y = year;
    }

    return {'month': m, 'year': y};
  }

  getNextMonthAndYear(month, year) {
    let m,
      y;

    if (month === 11) {
      m = 0;
      y = year + 1;
    } else {
      m = month + 1;
    }

    return {'month': m, 'year': y};
  }

  getSundayIndex() {
    return this.props.locale.firstDayOfWeek > 0
      ? 7 - this.props.locale.firstDayOfWeek
      : 0;
  }

  isSelected(dateMeta) {
    if (this.props.value) {
      if (this.isSingleSelection()) {
        return this.isDateEquals(this.props.value, dateMeta);
      } else if (this.isMultipleSelection()) {
        let selected = false;
        for (let date of this.props.value) {
          selected = this.isDateEquals(date, dateMeta);
          if (selected) {
            break;
          }
        }

        return selected;
      } else if (this.isRangeSelection()) {
        if (this.props.value[1])
          return this.isDateEquals(this.props.value[0], dateMeta) || this.isDateEquals(this.props.value[1], dateMeta) || this.isDateBetween(this.props.value[0], this.props.value[1], dateMeta);
        else
          return this.isDateEquals(this.props.value[0], dateMeta)
      }
    } else {
      return false;
    }
  }

  isDateEquals(value, dateMeta) {
    if (value)
      return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
    else
      return false;
    }

  isDateBetween(start, end, dateMeta) {
    if (start && end) {
      return start.getDate() < dateMeta.day && start.getMonth() <= dateMeta.month && start.getFullYear() <= dateMeta.year && end.getDate() > dateMeta.day && end.getMonth() >= dateMeta.month && end.getFullYear() >= dateMeta.year;
    } else {
      return false;
    }
  }

  isToday(today, day, month, year) {
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  }

  isSelectable(day, month, year) {
    let validMin = true;
    let validMax = true;
    let validDate = true;
    let validDay = true;

    if (this.props.minDate) {
      if (this.props.minDate.getFullYear() > year) {
        validMin = false;
      } else if (this.props.minDate.getFullYear() === year) {
        if (this.props.minDate.getMonth() > month) {
          validMin = false;
        } else if (this.props.minDate.getMonth() === month) {
          if (this.props.minDate.getDate() > day) {
            validMin = false;
          }
        }
      }
    }

    if (this.props.maxDate) {
      if (this.props.maxDate.getFullYear() < year) {
        validMax = false;
      } else if (this.props.maxDate.getFullYear() === year) {
        if (this.props.maxDate.getMonth() < month) {
          validMax = false;
        } else if (this.props.maxDate.getMonth() === month) {
          if (this.props.maxDate.getDate() < day) {
            validMax = false;
          }
        }
      }
    }

    if (this.disabledDates) {
      validDate = !this.isDateDisabled(day, month, year);
    }

    if (this.disabledDays) {
      validDay = !this.isDayDisabled(day, month, year)
    }

    return validMin && validMax && validDate && validDay;
  }

  isDateDisabled(day, month, year) {
    if (this.props.disabledDates) {
      for (let disabledDate of this.props.disabledDates) {
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

  onTodayButtonClick(event) {
    let date = new Date();
    let dateMeta = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      today: true,
      selectable: true
    };

    this.onDateSelect(event, dateMeta);

    if (this.props.onTodayClick) {
      this.onTodayClick(event);
    }
  }

  onClearButtonClick(event) {
    this.updateModel(event, null);
    this.hideOverlay();
    if (this.props.onClearButtonClick) {
      this.onClearButtonClick(event);
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

  onButtonClick(event) {
    if (!this.overlay.offsetParent || this.overlay.style.display === 'none') {
      this.inputfield.focus();
      this.showOverlay();
    } else {
      this.hideOverlay();
    }

    this.datepickerClick = true;
  }

  onInputClick(event) {
    this.datepickerClick = true;
  }

  onInputKeydown(event) {
    if (event.keyCode === 9) {
      this.overlay.style.display = 'none';
    }
  }

  onMonthDropdownChange(m) {
    let month = parseInt(m, 10);
    this.setState({
      currentMonth: month,
      dates: this.createMonth(month, this.state.currentYear)
    });
  }

  onYearDropdownChange(y) {
    let year = parseInt(y, 10);
    this.setState({
      currentYear: year,
      dates: this.createMonth(this.state.currentMonth, year)
    });
  }

  incrementHour(event) {
    let time = this.getTime();
    let hour = time.hour + this.props.stepHour;

    if (this.props.hourFormat === '24')
      hour = (hour >= 24)
        ? (hour - 24)
        : hour;
    else if (this.props.hourFormat === '12')
      hour = (hour >= 13)
        ? (hour - 12)
        : hour;

    time.hour = hour;
    this.updateTime(event, time);

    event.preventDefault();
  }

  decrementHour(event) {
    let time = this.getTime();
    let hour = time.hour - this.props.stepHour;

    if (this.props.hourFormat === '24')
      hour = (hour < 0)
        ? (24 + hour)
        : hour;
    else if (this.props.hourFormat === '12')
      hour = (hour <= 0)
        ? (12 + hour)
        : hour;

    time.hour = hour;
    this.updateTime(event, time);

    event.preventDefault();
  }

  incrementMinute(event) {
    let time = this.getTime();
    let minute = time.minute + this.props.stepMinute;
    minute = (minute > 59)
      ? minute - 60
      : minute;

    time.minute = minute;
    this.updateTime(event, time);

    event.preventDefault();
  }

  decrementMinute(event) {
    let time = this.getTime();
    let minute = time.minute - this.props.stepMinute;
    minute = (minute < 0)
      ? 60 + minute
      : minute;

    time.minute = minute;
    this.updateTime(event, time);

    event.preventDefault();
  }

  incrementSecond(event) {
    let time = this.getTime();
    let second = time.second + this.props.stepSecond;
    second = (second > 59)
      ? second - 60
      : second;

    time.second = second;
    this.updateTime(event, time);

    event.preventDefault();
  }

  decrementSecond(event) {
    let time = this.getTime();
    let second = time.second + this.props.stepSecond;
    second = (second < 0)
      ? 60 + second
      : second;

    time.second = second;
    this.updateTime(event, time);

    event.preventDefault();
  }

  updateTime(event, time) {
    let value = this.props.value
      ? new Date(this.props.value)
      : new Date();
    if (this.props.hourFormat === '12' && this.pm && time.hour !== 12)
      value.setHours(time.hour + 12);
    else
      value.setHours(time.hour);

    value.setMinutes(time.minute);
    value.setSeconds(time.second);

    this.updateModel(event, value);
    this.updateInputfield(value);

    if (this.props.onSelect) {
      this.props.onSelect({originalEvent: event, value: value})
    }
  }

  toggleAMPM(event) {
    this.pm = !this.pm;
    this.updateTime(event);
    event.preventDefault();
  }

  onUserInput(event) {
    let val = event.target.value;

    try {
      let value = this.parseValueFromString(val);
      this.updateModel(event, value);
    } catch (err) {
      //invalid date
      this.updateModel(event, null);
    }
  }

  parseValueFromString(text) {
    if (!text || text.trim().length === 0) {
      return null;
    }

    let value;

    if (this.isSingleSelection()) {
      value = this.parseDateTime(text);
    } else if (this.isMultipleSelection()) {
      let tokens = text.split(',');
      value = [];
      for (let token of tokens) {
        value.push(this.parseDateTime(token.trim()));
      }
    } else if (this.isRangeSelection()) {
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
    } else {
      if (this.props.showTime) {
        date = this.parseDate(parts[0], this.props.dateFormat);
        this.populateTime(date, parts[1], parts[2]);
      } else {
        date = this.parseDate(text, this.props.dateFormat);
      }
    }

    return date;
  }

  populateTime(value, timeString, ampm) {
    let time = this.parseTime(timeString);

    if (this.props.hourFormat === '12') {
      if (!ampm)
        throw new Error('Invalid Time');
      else if (ampm.toLowerCase() === 'PM' && time.hour !== 12)
        value.setHours(time.hour + 12);
      }
    else {
      value.setHours(time.hour);
    }

    value.setMinutes(time.minute);
    value.setSeconds(time.second);
  }

  onDatePickerClick(event) {
    this.datepickerClick = true;
  }

  showOverlay() {
    if (this.props.appendTo)
      DomHandler.absolutePosition(this.overlay, this.inputfield);
    else
      DomHandler.relativePosition(this.overlay, this.inputfield);

    this.overlay.style.zIndex = String(DomHandler.getZindex());
    this.overlay.style.display = 'block';

    this.bindDocumentClickListener();
  }

  hideOverlay() {
    if (!this.props.inline) {
      this.overlay.style.display = 'none';
    }
  }

  // Ported from jquery-ui datepicker formatDate
  formatDate(date, format) {
    if (!date) {
      return "";
    }

    let iFormat,
      lookAhead = (match) => {
        let matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
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
        return (lookAhead(match)
          ? longNames[value]
          : shortNames[value]);
      },
      output = "",
      literal = false;

    if (date) {
      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'"))
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
              output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
              break;
            case "m":
              output += formatNumber("m", date.getMonth() + 1, 2);
              break;
            case "M":
              output += formatName("M", date.getMonth(), this.props.locale.monthNamesShort, this.props.locale.monthNames);
              break;
            case "y":
              output += (lookAhead("y")
                ? date.getFullYear()
                : (date.getFullYear() % 100 < 10
                  ? "0"
                  : "") + date.getFullYear() % 100);
              break;
            case "@":
              output += date.getTime();
              break;
            case "!":
              output += date.getTime() * 10000 + this.ticksTo1970;
              break;
            case "'":
              if (lookAhead("'"))
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
    if (!date) {
      return '';
    }

    let output = '';
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (this.props.hourFormat === '12' && this.pm && hours !== 12) {
      hours -= 12;
    }

    output += (hours < 10)
      ? '0' + hours
      : hours;
    output += ':';
    output += (minutes < 10)
      ? '0' + minutes
      : minutes;

    if (this.props.showSeconds) {
      output += ':';
      output += (seconds < 10)
        ? '0' + seconds
        : seconds;
    }

    if (this.props.hourFormat === '12') {
      output += this.pm
        ? ' PM'
        : ' AM';
    }

    return output;
  }

  formatDateTime(date) {
    let formattedValue = null;
    if (date) {
      if (this.props.timeOnly) {
        formattedValue = this.formatTime(date);
      } else {
        formattedValue = this.formatDate(date, this.props.dateFormat);
        if (this.props.showTime) {
          formattedValue += ' ' + this.formatTime(date);
        }
      }
    }

    return formattedValue;
  }

  parseTime(value) {
    let tokens = value.split(':');
    let validTokentLength = this.props.showSeconds
      ? 3
      : 2;

    if (tokens.length !== validTokentLength) {
      throw new Error("Invalid time");
    }

    let h = parseInt(tokens[0], 10);
    let m = parseInt(tokens[1], 10);
    let s = this.props.showSeconds
      ? parseInt(tokens[2], 10)
      : null;

    if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || (this.props.hourFormat === '12' && h > 12) || (this.props.showSeconds && (isNaN(s) || s > 59))) {
      throw new Error("Invalid time");
    } else {
      if (this.props.hourFormat === '12' && h !== 12) {
        h += 12;
      }

      return {hour: h, minute: m, second: s};
    }
  }

  // Ported from jquery-ui datepicker parseDate
  parseDate(value, format) {
    if (format === null || value === null) {
      throw new Error("Invalid arguments");
    }

    value = (typeof value === "object"
      ? value.toString()
      : value + "");
    if (value === "") {
      return null;
    }

    let iFormat,
      dim,
      extra,
      iValue = 0,
      shortYearCutoff = (typeof this.props.shortYearCutoff !== "string"
        ? this.props.shortYearCutoff
        : new Date().getFullYear() % 100 + parseInt(this.props.shortYearCutoff, 10)),
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
          size = (match === "@"
            ? 14
            : (match === "!"
              ? 20
              : (match === "y" && isDoubled
                ? 4
                : (match === "o"
                  ? 3
                  : 2)))),
          minSize = (match === "y"
            ? size
            : 1),
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
        let arr = lookAhead(match)
          ? longNames
          : shortNames;
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
          throw new Error("Unknown name at position " + iValue);
        }
      },
      checkLiteral = () => {
        if (value.charAt(iValue) !== format.charAt(iFormat)) {
          throw new Error("Unexpected literal at position " + iValue);
        }
        iValue++;
      };

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
        throw new Error("Extra/unparsed characters found in date: " + extra);
      }
    }

    if (year === -1) {
      year = new Date().getFullYear();
    } else if (year < 100) {
      year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff
        ? 0
        : -100);
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
      throw new Error("Invalid date"); // E.g. 31/02/00
    }
    return date;
  }

  daylightSavingAdjust(date) {
    if (!date) {
      return null;
    }
    date.setHours(date.getHours() > 12
      ? date.getHours() + 2
      : 0);
    return date;
  }

  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.docClickListener.bind(this);
      document.addEventListener('click', this.documentClickListener);
    }
  }

  docClickListener() {
    if (!this.datepickerClick) {
      this.overlay.style.display = 'none';
    }

    this.datepickerClick = false;
  }

  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      document.removeEventListener('click', this.documentClickListener);
    }
  }

  getInputFieldValue(value) {
    let formattedValue = '';

    if (value) {
      if (this.isSingleSelection()) {
        formattedValue = this.formatDateTime(value);
      } else if (this.isMultipleSelection()) {
        for (let i = 0; i < value.length; i++) {
          let dateAsString = this.formatDateTime(value[i]);
          formattedValue += dateAsString;
          if (i !== (value.length - 1)) {
            formattedValue += ', ';
          }
        }
      } else if (this.isRangeSelection()) {
        if (value && value.length) {
          let startDate = value[0];
          let endDate = value[1];

          formattedValue = this.formatDateTime(startDate);
          if (endDate) {
            formattedValue += ' - ' + this.formatDateTime(endDate);
          }
        }
      }
    }

    return formattedValue;
  }

  componentWillUnmount() {
    this.unbindDocumentClickListener();

    if (!this.props.inline && this.props.appendTo) {
      this.el.nativeElement.appendChild(this.overlay);
    }
  }

  componentWillMount() {
    let date = this.getMonthYearDate(this.props.value);
    this.createWeekDays();
    let month = date.getMonth();
    let year = date.getFullYear();

    this.setState({
      currentMonth: month,
      currentYear: year,
      dates: this.createMonth(month, year)
    });

    this.ticksTo1970 = (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000);

    if (this.props.yearNavigator && this.props.yearRange) {
      this.yearOptions = [];
      let years = this.props.yearRange.split(':'),
        yearStart = parseInt(years[0], 10),
        yearEnd = parseInt(years[1], 10);

      for (let i = yearStart; i <= yearEnd; i++) {
        this.yearOptions.push(i);
      }
    }
  }

  componentDidUpdate(nextProps, nextState) {
    /*console.log({nextProps, nextState});
      console.log(this.state.currentMonth);
      console.log(this.props.value);*/

  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.value !== this.props.value) || (this.state.currentMonth !== nextState.currentMonth) || (this.state.currentYear !== nextState.currentYear);
  }

  componentWillReceiveProps(nextProps) {
    let date = this.getMonthYearDate(nextProps.value);
    let month = date.getMonth();
    let year = date.getFullYear();

    if (month !== this.state.currentMonth || year !== this.state.currentYear) {
      this.setState({
        currentMonth: month,
        currentYear: year,
        dates: this.createMonth(month, year)
      });
    }
  }

  componentDidMount() {
    if (!this.props.inline && this.props.appendTo) {
      if (this.props.appendTo === 'body')
        document.body.appendChild(this.overlay);
      else
        DomHandler.appendChild(this.overlay, this.props.appendTo);
      }
    }

  render() {
    var containerStyleClass = classNames('ui-calendar', this.props.className, {'ui-calendar-w-btn': this.props.showIcon});

    if (!this.props.inline) {
      var inputElement = <InputText ref={(el) => this.inputfield = ReactDOM.findDOMNode(el)} defaultValue={this.getInputFieldValue(this.props.value)} type="text" required={this.props.required} onFocus={this.onInputFocus} onKeyDown={this.onInputKeydown} onClick={this.onInputClick} onBlur={this.onInputBlur} readOnly={this.props.readOnlyInput} onInput={this.onUserInput} onMouseDown={this.props.onMouseDown} onKeyUp={this.props.onKeyUp} onKeyPress={this.props.onKeyPress} onContextMenu={this.props.onContextMenu} style={this.props.inputStyle} className={this.props.inputClassName} placeholder={this.props.placeholder || ''} disabled={this.props.disabled} tabIndex={this.props.tabindex}/>

      if (this.props.showIcon) {
        var buttonStyleClass = classNames('ui-datepicker-trigger ui-calendar-button', {'ui-state-disabled': this.props.disabled});

        var buttonElement = <Button type="button" icon={this.props.icon} onClick={(e) => this.onButtonClick(e)} className={buttonStyleClass} disabled={this.props.disabled}/>
      }
    }

    var datepickerStyleClass = classNames('ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all', {
      'ui-datepicker-inline': this.props.inline,
      'ui-shadow': !this.props.inline,
      'ui-state-disabled': this.props.disabled,
      'ui-datepicker-timeonly': this.props.timeOnly
    });

    if (!this.props.timeOnly) {
      var prevLink = (
          <a className="ui-datepicker-prev ui-corner-all" href="#" onClick={this.prevMonth}>
            <span className="fa fa-angle-left"></span>
          </a>
        ),
        nextLink = (
          <a className="ui-datepicker-next ui-corner-all" href="#" onClick={this.nextMonth}>
            <span className="fa fa-angle-right"></span>
          </a>
        );

      var currentMonthText = !this.props.monthNavigator && (
          <span className="ui-datepicker-month">{this.props.locale.monthNames[this.state.currentMonth]}
          </span>
        ),
        monthNav = this.props.monthNavigator && (
          <select className="ui-datepicker-month" value={this.state.currentMonth} onChange={(e) => this.onMonthDropdownChange(e.target.value)}>
            {this.props.locale.monthNames.map((month, i) => <option key={"month_" + i} value={i}>{month}</option>)}
          </select>
        ),
        yearNav = this.props.yearNavigator && (
          <select className="ui-datepicker-year" value={this.state.currentYear} onChange={(e) => this.onYearDropdownChange(e.target.value)}>
            {this.yearOptions.map((year, i) => <option key={"year_" + i} value={year}>{year}</option>)}
          </select>
        ),
        currentYearText = !this.props.yearNavigator && (
          <span className="ui-datepicker-year">{this.state.currentYear}</span>
        );

      var title = (
        <div className="ui-datepicker-title">
          {currentMonthText}
          {monthNav}
          {yearNav}
          {currentYearText}
        </div>
      );

      var datepickerHeader = (
        <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
          {prevLink}
          {nextLink}
          {title}
        </div>
      );

      /* datepicker table */
      var $this = this,
        thead = (
          <thead>
            <tr>
              {this.weekDays.map((weekDay, i) => <th key={i} scope="col">
                <span>{weekDay}</span>
              </th>)}
            </tr>
          </thead>
        ),
        tbody = (
          <tbody>
            {this.state.dates.map(function(week, rowIndex) {
              var columns = week.map(function(date, columnIndex) {
                var dateStyleClass = classNames({'ui-datepicker-other-month ui-state-disabled': date.otherMonth, 'ui-datepicker-current-day': $this.isSelected(date), 'ui-datepicker-today': date.today});

                var dayStyleClass = classNames('ui-state-default', {
                    'ui-state-active': $this.isSelected(date),
                    'ui-state-highlight': date.today,
                    'ui-state-disabled': !date.selectable
                  }),
                  dayLinks = (date.otherMonth
                    ? $this.props.showOtherMonths
                    : true) && (
                    <a href="#" className={dayStyleClass} onClick={(e) => $this.onDateSelect(e, date)}>{date.day}</a>
                  );

                return (
                  <td className={dateStyleClass} key={rowIndex + '_' + columnIndex}>
                    {dayLinks}
                  </td>
                )
              })

              return (
                <tr key={rowIndex}>
                  {columns}
                </tr>
              )
            })
}
          </tbody>
        );

      var table = (
        <table className="ui-datepicker-calendar">
          {thead}
          {tbody}
        </table>
      )

    }

    /* Timepicker */
    if (this.props.showTime || this.props.timeOnly) {
      let time = this.getTime();
      var separator = (
        <div className="ui-separator">
          <a href="#">
            <span className="fa fa-angle-up"></span>
          </a>
          <span>:</span>
          <a href="#">
            <span className="fa fa-angle-down"></span>
          </a>
        </div>
      );

      var hourPicker = (
          <div className="ui-hour-picker">
            <a href="#" onClick={this.incrementHour}>
              <span className="fa fa-angle-up"></span>
            </a>
            <span style={{
              'display': time.hour < 10
                ? 'inline'
                : 'none'
            }}>0</span>
            <span>{time.hour}</span>
            <a href="#" onClick={this.decrementHour}>
              <span className="fa fa-angle-down"></span>
            </a>
          </div>
        ),
        minutePicker = (
          <div className="ui-minute-picker">
            <a href="#" onClick={this.incrementMinute}>
              <span className="fa fa-angle-up"></span>
            </a>
            <span style={{
              'display': time.minute < 10
                ? 'inline'
                : 'none'
            }}>0</span>
            <span>{time.minute}</span>
            <a href="#" onClick={this.decrementMinute}>
              <span className="fa fa-angle-down"></span>
            </a>
          </div>
        ),
        secondPicker = this.props.showSeconds && (
          <div className="ui-second-picker">
            <a href="#" onClick={this.incrementSecond}>
              <span className="fa fa-angle-up"></span>
            </a>
            <span style={{
              'display': time.second < 10
                ? 'inline'
                : 'none'
            }}>0</span>
            <span>{time.second}</span>
            <a href="#" onClick={this.incrementSecond}>
              <span className="fa fa-angle-down"></span>
            </a>
          </div>
        ),
        ampmPicker = this.props.hourFormat === '12' && (
          <div className="ui-ampm-picker">
            <a href="#" onClick={this.toggleAMPM}>
              <span className="fa fa-angle-up"></span>
            </a>
            <span>{this.pm
                ? 'PM'
                : 'AM'}</span>
            <a href="#" onClick={this.toggleAMPM}>
              <span className="fa fa-angle-down"></span>
            </a>
          </div>
        );

      var timepicker = (
        <div className="ui-timepicker ui-widget-header ui-corner-all">
          {hourPicker}
          {separator}
          {minutePicker}
          {this.props.showSeconds && separator}
          {secondPicker}
          {ampmPicker}
        </div>
      );
    }

    //buttonbar
    if (this.props.showButtonBar) {
      var buttonBar = <div className="ui-datepicker-buttonbar ui-widget-header">
        <div className="ui-g">
          <div className="ui-g-6">
            <Button type="button" label={this.props.locale.today} onClick={this.onTodayButtonClick} className={this.props.todayButtonClassName}></Button>
          </div>
          <div className="ui-g-6">
            <Button type="button" label={this.props.locale.clear} onClick={this.onClearButtonClick} className={this.props.clearButtonClassName}></Button>
          </div>
        </div>
      </div>
    }

    return (
      <span value={this.props.value} id={this.props.id} className={containerStyleClass} style={this.props.style}>
        {inputElement}
        {buttonElement}
        <div ref={(el) => this.overlay = el} className={datepickerStyleClass} onClick={this.onDatePickerClick}>
          {datepickerHeader}
          {table}
          {timepicker}
          {buttonBar}
        </div>
      </span >
    );
  }
}

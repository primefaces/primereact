'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Calendar = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _InputText = require('../inputtext/InputText');

var _Button = require('../button/Button');

var _DomHandler = require('../utils/DomHandler');

var _DomHandler2 = _interopRequireDefault(_DomHandler);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = exports.Calendar = function (_Component) {
    _inherits(Calendar, _Component);

    function Calendar(props) {
        _classCallCheck(this, Calendar);

        var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

        _this.state = {};

        _this.weekDays = [];
        return _this;
    }

    _createClass(Calendar, [{
        key: 'createMonth',
        value: function createMonth(month, year) {
            this.dates = [];
            this.currentMonth = month;
            this.currentYear = year;
            this.currentMonthText = this.props.locale.monthNames[month];
            var firstDay = this.getFirstDayOfMonthIndex(month, year);
            var daysLength = this.getDaysCountInMonth(month, year);
            var prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
            var dayNo = 1;
            var today = new Date();

            for (var i = 0; i < 6; i++) {
                var week = [];

                if (i === 0) {
                    for (var j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
                        var prev = this.getPreviousMonthAndYear(month, year);
                        week.push({ day: j, month: prev.month, year: prev.year, otherMonth: true,
                            today: this.isToday(today, j, prev.month, prev.year), selectable: this.isSelectable(j, prev.month, prev.year) });
                    }

                    var remainingDaysLength = 7 - week.length;
                    for (var _j = 0; _j < remainingDaysLength; _j++) {
                        week.push({ day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),
                            selectable: this.isSelectable(dayNo, month, year) });
                        dayNo++;
                    }
                } else {
                    for (var _j2 = 0; _j2 < 7; _j2++) {
                        if (dayNo > daysLength) {
                            var next = this.getNextMonthAndYear(month, year);
                            week.push({ day: dayNo - daysLength, month: next.month, year: next.year, otherMonth: true,
                                today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                                selectable: this.isSelectable(dayNo - daysLength, next.month, next.year) });
                        } else {
                            week.push({ day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),
                                selectable: this.isSelectable(dayNo, month, year) });
                        }

                        dayNo++;
                    }
                }

                this.dates.push(week);
            }
            this.setState({ dates: this.dates, currentMonth: this.currentMonth, currentYear: this.currentYear, currentMonthText: this.currentMonthText });
            if (this.selectedLinkItem) {
                _DomHandler2.default.removeClass(this.selectedLinkItem, 'ui-state-active');
                _DomHandler2.default.removeClass(this.selectedLinkItem.parentElement, 'ui-datepicker-current-day');
            }
        }
    }, {
        key: 'prevMonth',
        value: function prevMonth(event) {
            if (this.props.disabled) {
                event.preventDefault();
                return;
            }

            if (this.currentMonth === 0) {
                this.currentMonth = 11;
                this.currentYear--;
            } else {
                this.currentMonth--;
            }

            this.createMonth(this.currentMonth, this.currentYear);
            event.preventDefault();
        }
    }, {
        key: 'nextMonth',
        value: function nextMonth(event) {
            if (this.props.disabled) {
                event.preventDefault();
                return;
            }

            if (this.currentMonth === 11) {
                this.currentMonth = 0;
                this.currentYear++;
            } else {
                this.currentMonth++;
            }

            this.createMonth(this.currentMonth, this.currentYear);
            event.preventDefault();
        }
    }, {
        key: 'onDateSelect',
        value: function onDateSelect(event, dateMeta) {
            if (this.props.disabled || !dateMeta.selectable) {
                event.preventDefault();
                return;
            }

            if (dateMeta.otherMonth) {
                if (this.props.selectOtherMonths) this.selectDate(event, dateMeta);
            } else {
                this.selectDate(event, dateMeta);
            }

            this.dateClick = true;
            this.updateInputfield();
            event.preventDefault();
        }
    }, {
        key: 'updateInputfield',
        value: function updateInputfield() {
            if (this.value) {
                var formattedValue = void 0;

                if (this.props.timeOnly) {
                    formattedValue = this.formatTime(this.value);
                } else {
                    formattedValue = this.formatDate(this.value, this.props.dateFormat);
                    if (this.props.showTime) {
                        formattedValue += ' ' + this.formatTime(this.value);
                    }
                }

                this.inputFieldValue = formattedValue;
            } else {
                this.inputFieldValue = '';
            }

            if (!this.props.inline) {
                this.inputfield.value = this.inputFieldValue;
            }

            this.updateFilledState();
        }
    }, {
        key: 'selectDate',
        value: function selectDate(event, dateMeta) {
            if (this.selectedLinkItem) {
                _DomHandler2.default.removeClass(this.selectedLinkItem, 'ui-state-active');
                _DomHandler2.default.removeClass(this.selectedLinkItem.parentElement, 'ui-datepicker-current-day');
            }

            this.value = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
            if (this.props.showTime) {
                if (this.props.hourFormat === '12' && this.pm && this.currentHour !== 12) this.value.setHours(this.currentHour + 12);else this.value.setHours(this.currentHour);

                this.value.setMinutes(this.currentMinute);
                this.value.setSeconds(this.currentSecond);
            }

            _DomHandler2.default.addClass(event.target, 'ui-state-active');
            _DomHandler2.default.addClass(event.target.parentElement, 'ui-datepicker-current-day');
            this.selectedLinkItem = event.target;

            this._isValid = true;
            this.updateModel(event);
            if (this.props.onSelect) {
                this.props.onSelect({
                    originalEvent: event,
                    value: this.value
                });
            }
        }
    }, {
        key: 'updateModel',
        value: function updateModel(event) {
            if (this.props.onChange) {
                if (this.props.dataType === 'date') {
                    this.props.onChange({
                        originalEvent: event,
                        value: this.value
                    });
                } else if (this.props.dataType === 'string') {
                    if (this.timeOnly) {
                        this.props.onChange({
                            originalEvent: event,
                            value: this.formatDate(this.value)
                        });
                    } else {
                        this.props.onChange({
                            originalEvent: event,
                            value: this.formatDate(this.value, this.props.dateFormat)
                        });
                    }
                }
            }
        }
    }, {
        key: 'getFirstDayOfMonthIndex',
        value: function getFirstDayOfMonthIndex(month, year) {
            var day = new Date();
            day.setDate(1);
            day.setMonth(month);
            day.setFullYear(year);

            var dayIndex = day.getDay() + this.getSundayIndex();
            return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
        }
    }, {
        key: 'getDaysCountInMonth',
        value: function getDaysCountInMonth(month, year) {
            return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
        }
    }, {
        key: 'getDaysCountInPrevMonth',
        value: function getDaysCountInPrevMonth(month, year) {
            var prev = this.getPreviousMonthAndYear(month, year);
            return this.getDaysCountInMonth(prev.month, prev.year);
        }
    }, {
        key: 'getPreviousMonthAndYear',
        value: function getPreviousMonthAndYear(month, year) {
            var m = void 0,
                y = void 0;

            if (month === 0) {
                m = 11;
                y = year - 1;
            } else {
                m = month - 1;
                y = year;
            }

            return { 'month': m, 'year': y };
        }
    }, {
        key: 'getNextMonthAndYear',
        value: function getNextMonthAndYear(month, year) {
            var m = void 0,
                y = void 0;

            if (month === 11) {
                m = 0;
                y = year + 1;
            } else {
                m = month + 1;
            }

            return { 'month': m, 'year': y };
        }
    }, {
        key: 'getSundayIndex',
        value: function getSundayIndex() {
            return this.props.locale.firstDayOfWeek > 0 ? 7 - this.props.locale.firstDayOfWeek : 0;
        }
    }, {
        key: 'isSelected',
        value: function isSelected(dateMeta) {
            if (this.value) return this.value.getDate() === dateMeta.day && this.value.getMonth() === dateMeta.month && this.value.getFullYear() === dateMeta.year;else return false;
        }
    }, {
        key: 'isToday',
        value: function isToday(today, day, month, year) {
            return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
        }
    }, {
        key: 'isSelectable',
        value: function isSelectable(day, month, year) {
            var validMin = true;
            var validMax = true;

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

            return validMin && validMax;
        }
    }, {
        key: 'onInputFocus',
        value: function onInputFocus(inputfield, event) {
            this.focus = true;
            if (this.props.showOnFocus) {
                this.showOverlay(inputfield);
            }

            if (this.props.onFocus) {
                this.props.onFocus({
                    originalEvent: event
                });
            }
        }
    }, {
        key: 'onInputBlur',
        value: function onInputBlur(event) {
            this.focus = false;
            if (this.props.onBlur) {
                this.props.onBlur({
                    originalEvent: event
                });
            }
        }
    }, {
        key: 'onButtonClick',
        value: function onButtonClick(event, inputfield) {
            this.closeOverlay = false;

            if (!this.overlay.offsetParent) {
                inputfield.focus();
                this.showOverlay(inputfield);
            } else this.closeOverlay = true;
        }
    }, {
        key: 'onInputClick',
        value: function onInputClick(event) {
            this.closeOverlay = false;
        }
    }, {
        key: 'onInputKeydown',
        value: function onInputKeydown(event) {
            if (event.keyCode === 9) {
                this.overlayVisible = false;
                this.overlay.style.display = 'none';
            }
        }
    }, {
        key: 'onMonthDropdownChange',
        value: function onMonthDropdownChange(m) {
            this.currentMonth = parseInt(m, 10);
            this.createMonth(this.currentMonth, this.currentYear);
        }
    }, {
        key: 'onYearDropdownChange',
        value: function onYearDropdownChange(y) {
            this.currentYear = parseInt(y, 10);
            this.createMonth(this.currentMonth, this.currentYear);
        }
    }, {
        key: 'incrementHour',
        value: function incrementHour(event) {
            var newHour = this.currentHour + this.props.stepHour;
            if (this.props.hourFormat === '24') this.currentHour = newHour >= 24 ? newHour - 24 : newHour;else if (this.props.hourFormat === '12') this.currentHour = newHour >= 13 ? newHour - 12 : newHour;

            this.updateTime(event);

            event.preventDefault();
        }
    }, {
        key: 'decrementHour',
        value: function decrementHour(event) {
            var newHour = this.currentHour - this.props.stepHour;
            if (this.props.hourFormat === '24') this.currentHour = newHour < 0 ? 24 + newHour : newHour;else if (this.props.hourFormat === '12') this.currentHour = newHour <= 0 ? 12 + newHour : newHour;

            this.updateTime(event);

            event.preventDefault();
        }
    }, {
        key: 'incrementMinute',
        value: function incrementMinute(event) {
            var newMinute = this.currentMinute + this.props.stepMinute;
            this.currentMinute = newMinute > 59 ? newMinute - 60 : newMinute;

            this.updateTime(event);

            event.preventDefault();
        }
    }, {
        key: 'decrementMinute',
        value: function decrementMinute(event) {
            var newMinute = this.currentMinute - this.props.stepMinute;
            this.currentMinute = newMinute < 0 ? 60 + newMinute : newMinute;

            this.updateTime(event);

            event.preventDefault();
        }
    }, {
        key: 'incrementSecond',
        value: function incrementSecond(event) {
            var newSecond = this.currentSecond + this.props.stepSecond;
            this.currentSecond = newSecond > 59 ? newSecond - 60 : newSecond;

            this.updateTime(event);

            event.preventDefault();
        }
    }, {
        key: 'decrementSecond',
        value: function decrementSecond(event) {
            var newSecond = this.currentSecond - this.props.stepSecond;
            this.currentSecond = newSecond < 0 ? 60 + newSecond : newSecond;

            this.updateTime(event);

            event.preventDefault();
        }
    }, {
        key: 'updateTime',
        value: function updateTime(event) {
            this.value = this.value || new Date();
            if (this.props.hourFormat === '12' && this.pm && this.currentHour !== 12) this.value.setHours(this.currentHour + 12);else this.value.setHours(this.currentHour);

            this.value.setMinutes(this.currentMinute);
            this.value.setSeconds(this.currentSecond);
            this.updateModel(event);
            if (this.props.onSelect) {
                this.props.onSelect({
                    originalEvent: event,
                    value: this.value
                });
            }
            this.updateInputfield();
        }
    }, {
        key: 'toggleAMPM',
        value: function toggleAMPM(event) {
            this.pm = !this.pm;
            this.updateTime(event);
            event.preventDefault();
        }
    }, {
        key: 'onInput',
        value: function onInput(event) {
            try {
                this.value = this.parseValueFromString(event.target.value);
                this.updateUI();
            } catch (err) {
                //invalid date
                this.value = null;
                this._isValid = false;
            }

            this.updateModel(event);
            this.updateFilledState();
        }
    }, {
        key: 'parseValueFromString',
        value: function parseValueFromString(text) {
            var dateValue = void 0;
            var parts = text.split(' ');

            if (this.props.timeOnly) {
                dateValue = new Date();
                this.populateTime(dateValue, parts[0], parts[1]);
            } else {
                if (this.props.showTime) {
                    dateValue = this.parseDate(parts[0], this.props.dateFormat);
                    this.populateTime(dateValue, parts[1], parts[2]);
                } else {
                    dateValue = this.parseDate(text, this.props.dateFormat);
                }
            }

            return dateValue;
        }
    }, {
        key: 'populateTime',
        value: function populateTime(value, timeString, ampm) {
            var time = this.parseTime(timeString);

            if (this.props.hourFormat === '12') {
                if (!ampm) throw new Error('Invalid Time');else if (ampm.toLowerCase() === 'PM' && time.hour !== 12) value.setHours(time.hour + 12);
            } else {
                value.setHours(time.hour);
            }

            value.setMinutes(time.minute);
            value.setSeconds(time.second);
        }
    }, {
        key: 'updateUI',
        value: function updateUI() {
            var val = this.value || this.props.defaultDate || new Date();
            this.createMonth(val.getMonth(), val.getFullYear());

            if (this.props.showTime || this.props.timeOnly) {
                var hours = val.getHours();

                if (this.props.hourFormat === '12') {
                    if (hours >= 12) {
                        this.pm = true;
                        this.currentHour = hours === 12 ? 12 : hours - 12;
                    } else {
                        this.pm = false;
                        this.currentHour = hours === 0 ? 12 : hours;
                    }
                } else {
                    this.currentHour = val.getHours();
                }

                this.currentMinute = val.getMinutes();
                this.currentSecond = val.getSeconds();
            }
        }
    }, {
        key: 'onDatePickerClick',
        value: function onDatePickerClick(event) {
            this.closeOverlay = this.dateClick;
        }
    }, {
        key: 'showOverlay',
        value: function showOverlay(inputfield) {
            if (this.props.appendTo) _DomHandler2.default.absolutePosition(this.overlay, inputfield);else _DomHandler2.default.relativePosition(this.overlay, inputfield);

            this.overlayVisible = true;
            this.overlay.style.zIndex = String(_DomHandler2.default.getZindex());
            this.overlay.style.display = 'block';

            this.bindDocumentClickListener();
        }
    }, {
        key: 'writeValue',
        value: function writeValue(value) {
            this.value = value;
            if (this.value && typeof this.value === 'string') {
                this.value = this.parseValueFromString(this.value);
            }

            this.updateInputfield();
            this.updateUI();
        }

        // Ported from jquery-ui datepicker formatDate    

    }, {
        key: 'formatDate',
        value: function formatDate(date, format) {
            if (!date) {
                return "";
            }

            var iFormat = void 0,
                lookAhead = function lookAhead(match) {
                var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                if (matches) {
                    iFormat++;
                }
                return matches;
            },
                formatNumber = function formatNumber(match, value, len) {
                var num = "" + value;
                if (lookAhead(match)) {
                    while (num.length < len) {
                        num = "0" + num;
                    }
                }
                return num;
            },
                formatName = function formatName(match, value, shortNames, longNames) {
                return lookAhead(match) ? longNames[value] : shortNames[value];
            },
                output = "",
                literal = false;

            if (date) {
                for (iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) === "'" && !lookAhead("'")) literal = false;else output += format.charAt(iFormat);
                    } else {
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
                                output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
                                break;
                            case "@":
                                output += date.getTime();
                                break;
                            case "!":
                                output += date.getTime() * 10000 + this.ticksTo1970;
                                break;
                            case "'":
                                if (lookAhead("'")) output += "'";else literal = true;

                                break;
                            default:
                                output += format.charAt(iFormat);
                        }
                    }
                }
            }
            return output;
        }
    }, {
        key: 'formatTime',
        value: function formatTime(date) {
            if (!date) {
                return '';
            }

            var output = '';
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();

            if (this.props.hourFormat === '12' && this.pm && hours !== 12) {
                hours -= 12;
            }

            output += hours < 10 ? '0' + hours : hours;
            output += ':';
            output += minutes < 10 ? '0' + minutes : minutes;

            if (this.props.showSeconds) {
                output += ':';
                output += seconds < 10 ? '0' + seconds : seconds;
            }

            if (this.props.hourFormat === '12') {
                output += this.pm ? ' PM' : ' AM';
            }

            return output;
        }
    }, {
        key: 'parseTime',
        value: function parseTime(value) {
            var tokens = value.split(':');
            var validTokentLength = this.props.showSeconds ? 3 : 2;

            if (tokens.length !== validTokentLength) {
                throw new Error("Invalid time");
            }

            var h = parseInt(tokens[0], 10);
            var m = parseInt(tokens[1], 10);
            var s = this.props.showSeconds ? parseInt(tokens[2], 10) : null;

            if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.props.hourFormat === '12' && h > 12 || this.props.showSeconds && (isNaN(s) || s > 59)) {
                throw new Error("Invalid time");
            } else {
                if (this.props.hourFormat === '12' && h !== 12) {
                    h += 12;
                }

                return { hour: h, minute: m, second: s };
            }
        }

        // Ported from jquery-ui datepicker parseDate 

    }, {
        key: 'parseDate',
        value: function parseDate(value, format) {
            if (format === null || value === null) {
                throw new Error("Invalid arguments");
            }

            value = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" ? value.toString() : value + "";
            if (value === "") {
                return null;
            }

            var iFormat = void 0,
                dim = void 0,
                extra = void 0,
                iValue = 0,
                shortYearCutoff = typeof this.props.shortYearCutoff !== "string" ? this.props.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.props.shortYearCutoff, 10),
                year = -1,
                month = -1,
                day = -1,
                doy = -1,
                literal = false,
                date = void 0,
                lookAhead = function lookAhead(match) {
                var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                if (matches) {
                    iFormat++;
                }
                return matches;
            },
                getNumber = function getNumber(match) {
                var isDoubled = lookAhead(match),
                    size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2,
                    minSize = match === "y" ? size : 1,
                    digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
                    num = value.substring(iValue).match(digits);
                if (!num) {
                    throw new Error("Missing number at position " + iValue);
                }
                iValue += num[0].length;
                return parseInt(num[0], 10);
            },
                getName = function getName(match, shortNames, longNames) {
                var index = -1;
                var arr = lookAhead(match) ? longNames : shortNames;
                var names = [];

                for (var i = 0; i < arr.length; i++) {
                    names.push([i, arr[i]]);
                }
                names.sort(function (a, b) {
                    return -(a[1].length - b[1].length);
                });

                for (var _i = 0; _i < names.length; _i++) {
                    var name = names[_i][1];
                    if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                        index = names[_i][0];
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
                checkLiteral = function checkLiteral() {
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
                year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
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
    }, {
        key: 'daylightSavingAdjust',
        value: function daylightSavingAdjust(date) {
            if (!date) {
                return null;
            }
            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
            return date;
        }
    }, {
        key: 'updateFilledState',
        value: function updateFilledState() {
            this.filled = this.inputFieldValue && this.inputFieldValue !== '';
        }
    }, {
        key: 'bindDocumentClickListener',
        value: function bindDocumentClickListener() {
            if (!this.documentClickListener) {
                this.documentClickListener = this.docClickListener.bind(this);
                document.addEventListener('click', this.documentClickListener);
            }
        }
    }, {
        key: 'docClickListener',
        value: function docClickListener() {
            if (this.closeOverlay) {
                this.overlayVisible = false;
                this.overlay.style.display = 'none';
            }

            this.closeOverlay = true;
            this.dateClick = false;
        }
    }, {
        key: 'unbindDocumentClickListener',
        value: function unbindDocumentClickListener() {
            if (this.documentClickListener) {
                document.removeEventListener('click', this.documentClickListener);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unbindDocumentClickListener();

            if (!this.props.inline && this.props.appendTo) {
                this.el.nativeElement.appendChild(this.overlay);
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var date = this.props.defaultDate || new Date();
            var dayIndex = this.props.locale.firstDayOfWeek;
            for (var i = 0; i < 7; i++) {
                this.weekDays.push(this.props.locale.dayNamesMin[dayIndex]);
                dayIndex = dayIndex === 6 ? 0 : ++dayIndex;
            }

            this.currentMonth = date.getMonth();
            this.currentYear = date.getFullYear();
            if (this.props.showTime) {
                this.currentMinute = date.getMinutes();
                this.currentSecond = date.getSeconds();
                this.pm = date.getHours() > 11;

                if (this.props.hourFormat === '12') this.currentHour = date.getHours() === 0 ? 12 : date.getHours() % 12;else this.currentHour = date.getHours();
            } else if (this.props.timeOnly) {
                this.currentMinute = 0;
                this.currentHour = 0;
                this.currentSecond = 0;
            }

            this.createMonth(this.currentMonth, this.currentYear);

            this.ticksTo1970 = ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000;

            if (this.props.yearNavigator && this.props.yearRange) {
                this.yearOptions = [];
                var years = this.props.yearRange.split(':'),
                    yearStart = parseInt(years[0], 10),
                    yearEnd = parseInt(years[1], 10);

                for (var _i2 = yearStart; _i2 <= yearEnd; _i2++) {
                    this.yearOptions.push(_i2);
                }
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.inline && this.props.appendTo) {
                if (this.props.appendTo === 'body') document.body.appendChild(this.overlay);else _DomHandler2.default.appendChild(this.overlay, this.props.appendTo);
            }

            this.writeValue(this.props.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var containerStyleClass = (0, _classnames2.default)('ui-calendar', this.props.styleClass, {
                'ui-calendar-w-btn': this.props.showIcon
            });

            if (!this.props.inline) {
                var inputElement = _react2.default.createElement(_InputText.InputText, { ref: function ref(el) {
                        return _this2.inputfield = _reactDom2.default.findDOMNode(el);
                    }, type: 'text', required: this.props.required, onFocus: function onFocus(e) {
                        return _this2.onInputFocus(_this2.inputfield, e);
                    }, onKeyDown: this.onInputKeydown.bind(this), onClick: this.onInputClick.bind(this),
                    onBlur: this.onInputBlur.bind(this), readOnly: this.props.readonlyInput, onInput: this.onInput.bind(this), style: this.props.inputStyle, className: this.props.inputStyleClass, placeholder: this.props.placeholder || '', disabled: this.props.disabled, tabIndex: this.props.tabindex });

                if (this.props.showIcon) {
                    var buttonStyleClass = (0, _classnames2.default)('ui-datepicker-trigger', {
                        'ui-state-disabled': this.props.disabled
                    });

                    var buttonElement = _react2.default.createElement(_Button.Button, { type: 'button', icon: this.props.icon, onClick: function onClick(e) {
                            return _this2.onButtonClick(e, _this2.inputfield);
                        },
                        className: buttonStyleClass, disabled: this.props.disabled });
                }
            }

            var datepickerStyleClass = (0, _classnames2.default)('ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all', {
                'ui-datepicker-inline': this.props.inline,
                'ui-shadow': !this.props.inline,
                'ui-state-disabled': this.props.disabled,
                'ui-datepicker-timeonly': this.props.timeOnly
            }),
                datepickerStyle = { 'display': this.props.inline ? 'inline-block' : this.overlayVisible ? 'block' : 'none' };

            /* Datepicker */
            if (!this.props.timeOnly) {
                /* datepicker header */
                var prevLink = _react2.default.createElement(
                    'a',
                    { className: 'ui-datepicker-prev ui-corner-all', href: '#', onClick: this.prevMonth.bind(this) },
                    _react2.default.createElement('span', { className: 'fa fa-angle-left' })
                ),
                    nextLink = _react2.default.createElement(
                    'a',
                    { className: 'ui-datepicker-next ui-corner-all', href: '#', onClick: this.nextMonth.bind(this) },
                    _react2.default.createElement('span', { className: 'fa fa-angle-right' })
                );

                var currentMonthText = !this.props.monthNavigator && _react2.default.createElement(
                    'span',
                    { className: 'ui-datepicker-month' },
                    this.state.currentMonthText,
                    ' '
                ),
                    monthNav = this.props.monthNavigator && _react2.default.createElement(
                    'select',
                    { className: 'ui-datepicker-month', value: this.state.currentMonth, onChange: function onChange(e) {
                            return _this2.onMonthDropdownChange(e.target.value);
                        } },
                    this.props.locale.monthNames.map(function (month, i) {
                        return _react2.default.createElement(
                            'option',
                            { key: "month_" + i, value: i },
                            month
                        );
                    })
                ),
                    yearNav = this.props.yearNavigator && _react2.default.createElement(
                    'select',
                    { className: 'ui-datepicker-year', value: this.state.currentYear, onChange: function onChange(e) {
                            return _this2.onYearDropdownChange(e.target.value);
                        } },
                    this.yearOptions.map(function (year, i) {
                        return _react2.default.createElement(
                            'option',
                            { key: "year_" + i, value: year },
                            year
                        );
                    })
                ),
                    currentYearText = !this.props.yearNavigator && _react2.default.createElement(
                    'span',
                    { className: 'ui-datepicker-year' },
                    this.state.currentYear
                );

                var title = _react2.default.createElement(
                    'div',
                    { className: 'ui-datepicker-title' },
                    currentMonthText,
                    monthNav,
                    yearNav,
                    currentYearText
                );

                var datepickerHeader = _react2.default.createElement(
                    'div',
                    { className: 'ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all' },
                    prevLink,
                    nextLink,
                    title
                );

                /* datepicker table */
                var $this = this,
                    thead = _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        this.weekDays.map(function (weekDay, i) {
                            return _react2.default.createElement(
                                'th',
                                { key: i, scope: 'col' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    weekDay
                                )
                            );
                        })
                    )
                ),
                    tbody = _react2.default.createElement(
                    'tbody',
                    null,
                    this.state.dates.map(function (week, rowIndex) {
                        var columns = week.map(function (date, columnIndex) {
                            var dateStyleClass = (0, _classnames2.default)({
                                'ui-datepicker-other-month ui-state-disabled': date.otherMonth,
                                'ui-datepicker-current-day': $this.isSelected(date),
                                'ui-datepicker-today': date.today
                            });

                            var dayStyleClass = (0, _classnames2.default)('ui-state-default', {
                                'ui-state-active': $this.isSelected(date),
                                'ui-state-highlight': date.today,
                                'ui-state-disabled': !date.selectable
                            }),
                                dayLinks = (date.otherMonth ? $this.props.showOtherMonths : true) && _react2.default.createElement(
                                'a',
                                { href: '#', className: dayStyleClass, onClick: function onClick(e) {
                                        return $this.onDateSelect(e, date);
                                    } },
                                date.day
                            );

                            return _react2.default.createElement(
                                'td',
                                { className: dateStyleClass, key: rowIndex + '_' + columnIndex },
                                dayLinks
                            );
                        });

                        return _react2.default.createElement(
                            'tr',
                            { key: rowIndex },
                            columns
                        );
                    })
                );

                var table = _react2.default.createElement(
                    'table',
                    { className: 'ui-datepicker-calendar' },
                    thead,
                    tbody
                );
            }

            /* Timepicker */
            if (this.props.showTime || this.props.timeOnly) {
                var separator = _react2.default.createElement(
                    'div',
                    { className: 'ui-separator' },
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        _react2.default.createElement('span', { className: 'fa fa-angle-up' })
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        ':'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        _react2.default.createElement('span', { className: 'fa fa-angle-down' })
                    )
                );

                var hourPicker = _react2.default.createElement(
                    'div',
                    { className: 'ui-hour-picker' },
                    _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.incrementHour.bind(this) },
                        _react2.default.createElement('span', { className: 'fa fa-angle-up' })
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: { 'display': this.currentHour < 10 ? 'inline' : 'none' } },
                        '0'
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        this.currentHour
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.decrementHour.bind(this) },
                        _react2.default.createElement('span', { className: 'fa fa-angle-down' })
                    )
                ),
                    minutePicker = _react2.default.createElement(
                    'div',
                    { className: 'ui-minute-picker' },
                    _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.incrementMinute.bind(this) },
                        _react2.default.createElement('span', { className: 'fa fa-angle-up' })
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: { 'display': this.currentMinute < 10 ? 'inline' : 'none' } },
                        '0'
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        this.currentMinute
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.decrementMinute.bind(this) },
                        _react2.default.createElement('span', { className: 'fa fa-angle-down' })
                    )
                ),
                    secondPicker = this.props.showSeconds && _react2.default.createElement(
                    'div',
                    { className: 'ui-second-picker' },
                    _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.incrementSecond.bind(this) },
                        _react2.default.createElement('span', { className: 'fa fa-angle-up' })
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: { 'display': this.currentSecond < 10 ? 'inline' : 'none' } },
                        '0'
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        this.currentSecond
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.incrementSecond.bind(this) },
                        _react2.default.createElement('span', { className: 'fa fa-angle-down' })
                    )
                ),
                    ampmPicker = this.props.hourFormat === '12' && _react2.default.createElement(
                    'div',
                    { className: 'ui-ampm-picker' },
                    _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.toggleAMPM.bind(this) },
                        _react2.default.createElement('span', { className: 'fa fa-angle-up' })
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        this.pm ? 'PM' : 'AM'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.toggleAMPM.bind(this) },
                        _react2.default.createElement('span', { className: 'fa fa-angle-down' })
                    )
                );

                var timepickerHeader = _react2.default.createElement(
                    'div',
                    { className: 'ui-timepicker ui-widget-header ui-corner-all' },
                    hourPicker,
                    separator,
                    minutePicker,
                    this.props.showSeconds && separator,
                    secondPicker,
                    ampmPicker
                );
            }

            return _react2.default.createElement(
                'span',
                { className: containerStyleClass, style: this.props.style },
                inputElement,
                buttonElement,
                _react2.default.createElement(
                    'div',
                    { ref: function ref(el) {
                            return _this2.overlay = _reactDom2.default.findDOMNode(el);
                        }, className: datepickerStyleClass, style: datepickerStyle, onClick: this.onDatePickerClick.bind(this) },
                    datepickerHeader,
                    table,
                    timepickerHeader
                )
            );
        }
    }, {
        key: 'minDate',
        get: function get() {
            return this._minDate;
        },
        set: function set(date) {
            this._minDate = date;
            this.createMonth(this.currentMonth, this.currentYear);
        }
    }, {
        key: 'maxDate',
        get: function get() {
            return this._maxDate;
        },
        set: function set(date) {
            this._maxDate = date;
            this.createMonth(this.currentMonth, this.currentYear);
        }
    }]);

    return Calendar;
}(_react.Component);

Calendar.defaultProps = {
    value: null,
    defaultDate: null,
    style: null,
    styleClass: null,
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
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
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
    onBlur: null
};
Calendar.propsTypes = {
    value: _propTypes2.default.any,
    defaultDate: _propTypes2.default.instanceOf(Date),
    style: _propTypes2.default.string,
    styleClass: _propTypes2.default.string,
    inputStyle: _propTypes2.default.string,
    inputStyleClass: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    dateFormat: _propTypes2.default.string,
    inline: _propTypes2.default.bool,
    showOtherMonths: _propTypes2.default.bool,
    selectOtherMonths: _propTypes2.default.bool,
    showIcon: _propTypes2.default.bool,
    icon: _propTypes2.default.string,
    appendTo: _propTypes2.default.string,
    readonlyInput: _propTypes2.default.bool,
    shortYearCutoff: _propTypes2.default.string,
    minDate: _propTypes2.default.instanceOf(Date),
    maxDate: _propTypes2.default.instanceOf(Date),
    monthNavigator: _propTypes2.default.bool,
    yearNavigator: _propTypes2.default.bool,
    yearRange: _propTypes2.default.string,
    showTime: _propTypes2.default.bool,
    hourFormat: _propTypes2.default.string,
    locale: _propTypes2.default.object,
    timeOnly: _propTypes2.default.bool,
    stepHour: _propTypes2.default.number,
    stepMinute: _propTypes2.default.number,
    stepSecond: _propTypes2.default.number,
    showSeconds: _propTypes2.default.bool,
    dataType: _propTypes2.default.string,
    required: _propTypes2.default.bool,
    showOnFocus: _propTypes2.default.bool,
    tabindex: _propTypes2.default.number,
    onFocus: _propTypes2.default.func,
    onSelect: _propTypes2.default.func,
    onBlur: _propTypes2.default.func
};
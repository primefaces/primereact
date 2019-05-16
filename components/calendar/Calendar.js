"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputText = require("../inputtext/InputText");

var _Button = require("../button/Button");

var _CalendarPanel = require("./CalendarPanel");

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Tooltip = _interopRequireDefault(require("../tooltip/Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).call(this, props));

    if (!_this.props.onViewDateChange) {
      var propValue = _this.props.value;

      if (Array.isArray(propValue)) {
        propValue = propValue[0];
      }

      _this.state = {
        viewDate: _this.props.viewDate || propValue || new Date()
      };
    }

    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.onInputFocus = _this.onInputFocus.bind(_assertThisInitialized(_this));
    _this.onInputBlur = _this.onInputBlur.bind(_assertThisInitialized(_this));
    _this.onInputKeyDown = _this.onInputKeyDown.bind(_assertThisInitialized(_this));
    _this.onButtonClick = _this.onButtonClick.bind(_assertThisInitialized(_this));
    _this.navBackward = _this.navBackward.bind(_assertThisInitialized(_this));
    _this.navForward = _this.navForward.bind(_assertThisInitialized(_this));
    _this.onMonthDropdownChange = _this.onMonthDropdownChange.bind(_assertThisInitialized(_this));
    _this.onYearDropdownChange = _this.onYearDropdownChange.bind(_assertThisInitialized(_this));
    _this.onTodayButtonClick = _this.onTodayButtonClick.bind(_assertThisInitialized(_this));
    _this.onClearButtonClick = _this.onClearButtonClick.bind(_assertThisInitialized(_this));
    _this.incrementHour = _this.incrementHour.bind(_assertThisInitialized(_this));
    _this.decrementHour = _this.decrementHour.bind(_assertThisInitialized(_this));
    _this.incrementMinute = _this.incrementMinute.bind(_assertThisInitialized(_this));
    _this.decrementMinute = _this.decrementMinute.bind(_assertThisInitialized(_this));
    _this.incrementSecond = _this.incrementSecond.bind(_assertThisInitialized(_this));
    _this.decrementSecond = _this.decrementSecond.bind(_assertThisInitialized(_this));
    _this.toggleAmPm = _this.toggleAmPm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.tooltip && prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
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
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = new _Tooltip.default({
        target: this.inputElement,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(event) {
      if (this.props.showOnFocus && !this.panel.offsetParent) {
        this.showOverlay();
      }

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }

      _DomHandler.default.addClass(this.container, 'p-inputwrapper-focus');
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur(event) {
      if (this.props.onBlur) {
        this.props.onBlur(event);
      }

      _DomHandler.default.removeClass(this.container, 'p-inputwrapper-focus');
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(event) {
      this.isKeydown = true;

      if (event.keyCode === 9) {
        this.hideOverlay();
      }
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(event) {
      // IE 11 Workaround for input placeholder
      if (!this.isKeydown) {
        return;
      }

      this.isKeydown = false;
      var rawValue = event.target.value;

      try {
        var value = this.parseValueFromString(rawValue);
        this.updateModel(event, value);
        this.updateViewDate(event, value.length ? value[0] : value);
      } catch (err) {
        this.updateModel(event, rawValue);
      }

      if (this.props.onInput) {
        this.props.onInput(event);
      }
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick(event) {
      if (!this.panel.offsetParent) {
        this.showOverlay();
      }
    }
  }, {
    key: "navBackward",
    value: function navBackward(event) {
      if (this.props.disabled) {
        event.preventDefault();
        return;
      }

      var newViewDate = new Date(this.getViewDate().getTime());

      if (this.props.view === 'date') {
        if (newViewDate.getMonth() === 0) {
          newViewDate.setMonth(11);
          newViewDate.setFullYear(newViewDate.getFullYear() - 1);
        } else {
          newViewDate.setMonth(newViewDate.getMonth() - 1);
        }
      } else if (this.props.view === 'month') {
        var currentYear = newViewDate.getFullYear();
        var newYear = currentYear - 1;

        if (this.props.yearNavigator) {
          var minYear = parseInt(this.props.yearRange.split(':')[0], 10);

          if (newYear < minYear) {
            newYear = minYear;
          }
        }

        newViewDate.setFullYear(newYear);
      }

      this.updateViewDate(event, newViewDate);
      event.preventDefault();
    }
  }, {
    key: "navForward",
    value: function navForward(event) {
      if (this.props.disabled) {
        event.preventDefault();
        return;
      }

      var newViewDate = new Date(this.getViewDate().getTime());

      if (this.props.view === 'date') {
        if (newViewDate.getMonth() === 11) {
          newViewDate.setMonth(0);
          newViewDate.setFullYear(newViewDate.getFullYear() + 1);
        } else {
          newViewDate.setMonth(newViewDate.getMonth() + 1);
        }
      } else if (this.props.view === 'month') {
        var currentYear = newViewDate.getFullYear();
        var newYear = currentYear + 1;

        if (this.props.yearNavigator) {
          var maxYear = parseInt(this.props.yearRange.split(':')[1], 10);

          if (newYear > maxYear) {
            newYear = maxYear;
          }
        }

        newViewDate.setFullYear(newYear);
      }

      this.updateViewDate(event, newViewDate);
      event.preventDefault();
    }
  }, {
    key: "onMonthDropdownChange",
    value: function onMonthDropdownChange(event) {
      var currentViewDate = this.props.onViewDateChange ? this.props.viewDate : this.state.viewDate;
      var newViewDate = new Date(currentViewDate.getTime());
      newViewDate.setMonth(parseInt(event.target.value, 10));
      this.updateViewDate(event, newViewDate);
    }
  }, {
    key: "onYearDropdownChange",
    value: function onYearDropdownChange(event) {
      var currentViewDate = this.props.onViewDateChange ? this.props.viewDate : this.state.viewDate;
      var newViewDate = new Date(currentViewDate.getTime());
      newViewDate.setFullYear(parseInt(event.target.value, 10));
      this.updateViewDate(event, newViewDate);
    }
  }, {
    key: "onTodayButtonClick",
    value: function onTodayButtonClick(event) {
      var today = new Date();
      var dateMeta = {
        day: today.getDate(),
        month: today.getMonth(),
        year: today.getFullYear(),
        today: true,
        selectable: true
      };
      this.updateViewDate(event, today);
      this.onDateSelect(event, dateMeta);

      if (this.props.onTodayButtonClick) {
        this.props.onTodayButtonClick(event);
      }
    }
  }, {
    key: "onClearButtonClick",
    value: function onClearButtonClick(event) {
      this.updateModel(event, null);

      if (this.props.onClearButtonClick) {
        this.props.onClearButtonClick(event);
      }
    }
  }, {
    key: "incrementHour",
    value: function incrementHour(event) {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var currentHour = currentTime.getHours();
      var newHour = currentHour + this.props.stepHour;
      newHour = newHour >= 24 ? newHour - 24 : newHour;

      if (this.validateHour(newHour, currentTime)) {
        this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds());
      }

      event.preventDefault();
    }
  }, {
    key: "decrementHour",
    value: function decrementHour(event) {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var currentHour = currentTime.getHours();
      var newHour = currentHour - this.props.stepHour;
      newHour = newHour < 0 ? newHour + 24 : newHour;

      if (this.validateHour(newHour, currentTime)) {
        this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds());
      }

      event.preventDefault();
    }
  }, {
    key: "incrementMinute",
    value: function incrementMinute(event) {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var currentMinute = currentTime.getMinutes();
      var newMinute = currentMinute + this.props.stepMinute;
      newMinute = newMinute > 59 ? newMinute - 60 : newMinute;

      if (this.validateMinute(newMinute, currentTime)) {
        this.updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds());
      }

      event.preventDefault();
    }
  }, {
    key: "decrementMinute",
    value: function decrementMinute(event) {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var currentMinute = currentTime.getMinutes();
      var newMinute = currentMinute - this.props.stepMinute;
      newMinute = newMinute < 0 ? newMinute + 60 : newMinute;

      if (this.validateMinute(newMinute, currentTime)) {
        this.updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds());
      }

      event.preventDefault();
    }
  }, {
    key: "incrementSecond",
    value: function incrementSecond(event) {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var currentSecond = currentTime.getSeconds();
      var newSecond = currentSecond + this.props.stepSecond;
      newSecond = newSecond > 59 ? newSecond - 60 : newSecond;

      if (this.validateSecond(newSecond, currentTime)) {
        this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond);
      }

      event.preventDefault();
    }
  }, {
    key: "decrementSecond",
    value: function decrementSecond(event) {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var currentSecond = currentTime.getSeconds();
      var newSecond = currentSecond - this.props.stepSecond;
      newSecond = newSecond < 0 ? newSecond + 60 : newSecond;

      if (this.validateSecond(newSecond, currentTime)) {
        this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond);
      }

      event.preventDefault();
    }
  }, {
    key: "toggleAmPm",
    value: function toggleAmPm(event) {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var currentHour = currentTime.getHours();
      var newHour = currentHour >= 12 ? currentHour - 12 : currentHour + 12;
      this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds());
      event.preventDefault();
    }
  }, {
    key: "getViewDate",
    value: function getViewDate() {
      return this.props.onViewDateChange ? this.props.viewDate : this.state.viewDate;
    }
  }, {
    key: "validateHour",
    value: function validateHour(hour, value) {
      var valid = true;
      var valueDateString = value ? value.toDateString() : null;

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
  }, {
    key: "validateMinute",
    value: function validateMinute(minute, value) {
      var valid = true;
      var valueDateString = value ? value.toDateString() : null;

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
  }, {
    key: "validateSecond",
    value: function validateSecond(second, value) {
      var valid = true;
      var valueDateString = value ? value.toDateString() : null;

      if (this.props.minDate && valueDateString && this.props.minDate.toDateString() === valueDateString) {
        if (value.getHours() === this.props.minDate.getHours() && value.getMinutes() === this.props.minDate.getMinutes()) {
          if (this.props.minDate.getMinutes() > second) {
            valid = false;
          }
        }
      }

      if (this.props.maxDate && valueDateString && this.props.maxDate.toDateString() === valueDateString) {
        if (value.getHours() === this.props.maxDate.getHours() && value.getMinutes() === this.props.maxDate.getMinutes()) {
          if (this.props.maxDate.getMinutes() < second) {
            valid = false;
          }
        }
      }

      return valid;
    }
  }, {
    key: "updateTime",
    value: function updateTime(event, hour, minute, second) {
      var newDateTime = this.props.value && this.props.value instanceof Date ? new Date(this.props.value) : new Date();
      newDateTime.setHours(hour);
      newDateTime.setMinutes(minute);
      newDateTime.setSeconds(second);
      this.updateModel(event, newDateTime);

      if (this.props.onSelect) {
        this.props.onSelect({
          originalEvent: event,
          value: newDateTime
        });
      }
    }
  }, {
    key: "updateViewDate",
    value: function updateViewDate(event, value) {
      if (this.props.yearNavigator) {
        var viewYear = value.getFullYear();

        if (this.props.minDate && this.props.minDate.getFullYear() > viewYear) {
          viewYear = this.props.minDate.getFullYear();
        }

        if (this.props.maxDate && this.props.maxDate.getFullYear() < viewYear) {
          viewYear = this.props.maxDate.getFullYear();
        }

        value.setFullYear(viewYear);
      }

      if (this.props.monthNavigator && this.props.view !== 'month') {
        var viewMonth = value.getMonth();
        var viewMonthWithMinMax = parseInt(this.isInMinYear(value) && Math.max(this.props.minDate.getMonth(), viewMonth).toString() || this.isInMaxYear(value) && Math.min(this.props.maxDate.getMonth(), viewMonth).toString() || viewMonth);
        value.setMonth(viewMonthWithMinMax);
      }

      if (this.props.onViewDateChange) {
        this.props.onViewDateChange({
          originalEvent: event,
          value: value
        });
      } else {
        this.setState({
          viewDate: value
        });
      }
    }
  }, {
    key: "onDateSelect",
    value: function onDateSelect(event, dateMeta) {
      var _this2 = this;

      if (this.props.disabled || !dateMeta.selectable) {
        event.preventDefault();
        return;
      }

      if (this.isMultipleSelection()) {
        if (this.isSelected(dateMeta)) {
          var value = this.props.value.filter(function (date, i) {
            return !_this2.isDateEquals(date, dateMeta);
          });
          this.updateModel(event, value);
        } else if (!this.props.maxDateCount || !this.props.value || this.props.maxDateCount > this.props.value.length) {
          this.selectDate(event, dateMeta);
        }
      } else {
        this.selectDate(event, dateMeta);
      }

      if (!this.props.inline && this.isSingleSelection() && (!this.props.showTime || this.props.hideOnDateTimeSelect)) {
        setTimeout(function () {
          _this2.hideOverlay();
        }, 100);

        if (this.mask) {
          this.disableModality();
        }
      }

      event.preventDefault();
    }
  }, {
    key: "selectDate",
    value: function selectDate(event, dateMeta) {
      var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);

      if (this.props.showTime) {
        var time = this.props.value && this.props.value instanceof Date ? this.props.value : new Date();
        date.setHours(time.getHours());
        date.setMinutes(time.getMinutes());
        date.setSeconds(time.getSeconds());
      }

      if (this.props.minDate && this.props.minDate > date) {
        date = this.minDate;
      }

      if (this.maxDate && this.maxDate < date) {
        date = this.maxDate;
      }

      if (this.isSingleSelection()) {
        this.updateModel(event, date);
      } else if (this.isMultipleSelection()) {
        this.updateModel(event, this.props.value ? [].concat(_toConsumableArray(this.props.value), [date]) : [date]);
      } else if (this.isRangeSelection()) {
        if (this.props.value && this.props.value.length) {
          var startDate = this.props.value[0];
          var endDate = this.props.value[1];

          if (!endDate && date.getTime() >= startDate.getTime()) {
            endDate = date;
          } else {
            startDate = date;
            endDate = null;
          }

          this.updateModel(event, [startDate, endDate]);
        } else {
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
  }, {
    key: "onMonthSelect",
    value: function onMonthSelect(event, month) {
      this.onDateSelect(event, {
        year: this.getViewDate().getFullYear(),
        month: month,
        day: 1,
        selectable: true
      });
      event.preventDefault();
    }
  }, {
    key: "updateModel",
    value: function updateModel(event, value) {
      if (this.props.onChange) {
        this.props.onChange({
          originalEvent: event,
          value: value,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: value
          }
        });
      }
    }
  }, {
    key: "showOverlay",
    value: function showOverlay() {
      var _this3 = this;

      if (this.props.autoZIndex) {
        this.panel.style.zIndex = String(this.props.baseZIndex + _DomHandler.default.generateZIndex());
      }

      this.panel.style.display = 'block';
      setTimeout(function () {
        _DomHandler.default.addClass(_this3.panel, 'p-input-overlay-visible');

        _DomHandler.default.removeClass(_this3.panel, 'p-input-overlay-hidden');
      }, 1);
      this.alignPanel();
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
    }
  }, {
    key: "hideOverlay",
    value: function hideOverlay() {
      var _this4 = this;

      if (this.panel) {
        _DomHandler.default.addClass(this.panel, 'p-input-overlay-hidden');

        _DomHandler.default.removeClass(this.panel, 'p-input-overlay-visible');

        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.hideTimeout = setTimeout(function () {
          _this4.panel.style.display = 'none';

          _DomHandler.default.removeClass(_this4.panel, 'p-input-overlay-hidden');
        }, 150);
      }
    }
  }, {
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      var _this5 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (_this5.isOutsideClicked(event)) {
            _this5.hideOverlay();
          }
        };

        document.addEventListener('click', this.documentClickListener);
      }
    }
  }, {
    key: "unbindDocumentClickListener",
    value: function unbindDocumentClickListener() {
      if (this.documentClickListener) {
        document.removeEventListener('click', this.documentClickListener);
        this.documentClickListener = null;
      }
    }
  }, {
    key: "bindDocumentResizeListener",
    value: function bindDocumentResizeListener() {
      if (!this.documentResizeListener && !this.props.touchUI) {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
      }
    }
  }, {
    key: "unbindDocumentResizeListener",
    value: function unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        window.removeEventListener('resize', this.documentResizeListener);
        this.documentResizeListener = null;
      }
    }
  }, {
    key: "isOutsideClicked",
    value: function isOutsideClicked(event) {
      return this.container && !(this.container.isSameNode(event.target) || this.isNavIconClicked(event) || this.container.contains(event.target) || this.panel && this.panel.contains(event.target));
    }
  }, {
    key: "isNavIconClicked",
    value: function isNavIconClicked(event) {
      return _DomHandler.default.hasClass(event.target, 'p-datepicker-prev') || _DomHandler.default.hasClass(event.target, 'p-datepicker-prev-icon') || _DomHandler.default.hasClass(event.target, 'p-datepicker-next') || _DomHandler.default.hasClass(event.target, 'p-datepicker-next-icon');
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      if (this.panel.offsetParent && !_DomHandler.default.isAndroid()) {
        this.hideOverlay();
      }
    }
  }, {
    key: "alignPanel",
    value: function alignPanel() {
      if (this.props.touchUI) {
        this.enableModality();
      } else {
        if (this.props.appendTo) {
          _DomHandler.default.absolutePosition(this.panel, this.inputElement);

          this.panel.style.minWidth = _DomHandler.default.getWidth(this.container) + 'px';
        } else {
          _DomHandler.default.relativePosition(this.panel, this.inputElement);
        }
      }
    }
  }, {
    key: "enableModality",
    value: function enableModality() {
      var _this6 = this;

      if (!this.mask) {
        this.mask = document.createElement('div');
        this.mask.style.zIndex = String(parseInt(this.panel.style.zIndex, 10) - 1);

        _DomHandler.default.addMultipleClasses(this.mask, 'p-component-overlay p-datepicker-mask p-datepicker-mask-scrollblocker');

        this.maskClickListener = function () {
          _this6.disableModality();
        };

        this.mask.addEventListener('click', this.maskClickListener);
        document.body.appendChild(this.mask);

        _DomHandler.default.addClass(document.body, 'p-overflow-hidden');
      }
    }
  }, {
    key: "disableModality",
    value: function disableModality() {
      if (this.mask) {
        this.mask.removeEventListener('click', this.maskClickListener);
        this.maskClickListener = null;
        document.body.removeChild(this.mask);
        this.mask = null;
        var bodyChildren = document.body.children;
        var hasBlockerMasks;

        for (var i = 0; i < bodyChildren.length; i++) {
          var bodyChild = bodyChildren[i];

          if (_DomHandler.default.hasClass(bodyChild, 'p-datepicker-mask-scrollblocker')) {
            hasBlockerMasks = true;
            break;
          }
        }

        if (!hasBlockerMasks) {
          _DomHandler.default.removeClass(document.body, 'p-overflow-hidden');
        }

        this.hideOverlay();
      }
    }
  }, {
    key: "getFirstDayOfMonthIndex",
    value: function getFirstDayOfMonthIndex(month, year) {
      var day = new Date();
      day.setDate(1);
      day.setMonth(month);
      day.setFullYear(year);
      var dayIndex = day.getDay() + this.getSundayIndex();
      return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
    }
  }, {
    key: "getDaysCountInMonth",
    value: function getDaysCountInMonth(month, year) {
      return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
    }
  }, {
    key: "getDaysCountInPrevMonth",
    value: function getDaysCountInPrevMonth(month, year) {
      var prev = this.getPreviousMonthAndYear(month, year);
      return this.getDaysCountInMonth(prev.month, prev.year);
    }
  }, {
    key: "daylightSavingAdjust",
    value: function daylightSavingAdjust(date) {
      if (!date) {
        return null;
      }

      date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
      return date;
    }
  }, {
    key: "getPreviousMonthAndYear",
    value: function getPreviousMonthAndYear(month, year) {
      var m, y;

      if (month === 0) {
        m = 11;
        y = year - 1;
      } else {
        m = month - 1;
        y = year;
      }

      return {
        'month': m,
        'year': y
      };
    }
  }, {
    key: "getNextMonthAndYear",
    value: function getNextMonthAndYear(month, year) {
      var m, y;

      if (month === 11) {
        m = 0;
        y = year + 1;
      } else {
        m = month + 1;
        y = year;
      }

      return {
        'month': m,
        'year': y
      };
    }
  }, {
    key: "getSundayIndex",
    value: function getSundayIndex() {
      return this.props.locale.firstDayOfWeek > 0 ? 7 - this.props.locale.firstDayOfWeek : 0;
    }
  }, {
    key: "createWeekDays",
    value: function createWeekDays() {
      var weekDays = [];
      var dayIndex = this.props.locale.firstDayOfWeek;

      for (var i = 0; i < 7; i++) {
        weekDays.push(this.props.locale.dayNamesMin[dayIndex]);
        dayIndex = dayIndex === 6 ? 0 : ++dayIndex;
      }

      return weekDays;
    }
  }, {
    key: "createMonths",
    value: function createMonths(month, year) {
      var months = [];

      for (var i = 0; i < this.props.numberOfMonths; i++) {
        var m = month + i;
        var y = year;

        if (m > 11) {
          m = m % 11 - 1;
          y = year + 1;
        }

        months.push(this.createMonth(m, y));
      }

      return months;
    }
  }, {
    key: "createMonth",
    value: function createMonth(month, year) {
      var dates = [];
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
            week.push({
              day: j,
              month: prev.month,
              year: prev.year,
              otherMonth: true,
              today: this.isToday(today, j, prev.month, prev.year),
              selectable: this.isSelectable(j, prev.month, prev.year, true)
            });
          }

          var remainingDaysLength = 7 - week.length;

          for (var _j = 0; _j < remainingDaysLength; _j++) {
            week.push({
              day: dayNo,
              month: month,
              year: year,
              today: this.isToday(today, dayNo, month, year),
              selectable: this.isSelectable(dayNo, month, year, false)
            });
            dayNo++;
          }
        } else {
          for (var _j2 = 0; _j2 < 7; _j2++) {
            if (dayNo > daysLength) {
              var next = this.getNextMonthAndYear(month, year);
              week.push({
                day: dayNo - daysLength,
                month: next.month,
                year: next.year,
                otherMonth: true,
                today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
              });
            } else {
              week.push({
                day: dayNo,
                month: month,
                year: year,
                today: this.isToday(today, dayNo, month, year),
                selectable: this.isSelectable(dayNo, month, year, false)
              });
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
  }, {
    key: "isSelectable",
    value: function isSelectable(day, month, year, otherMonth) {
      var validMin = true;
      var validMax = true;
      var validDate = true;
      var validDay = true;
      var validMonth = true;

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

      if (this.props.disabledDates) {
        validDate = !this.isDateDisabled(day, month, year);
      }

      if (this.props.disabledDays) {
        validDay = !this.isDayDisabled(day, month, year);
      }

      if (this.props.selectOtherMonths === false && otherMonth) {
        validMonth = false;
      }

      return validMin && validMax && validDate && validDay && validMonth;
    }
  }, {
    key: "isSelected",
    value: function isSelected(dateMeta) {
      if (this.props.value) {
        if (this.isSingleSelection()) {
          return this.isDateEquals(this.props.value, dateMeta);
        } else if (this.isMultipleSelection()) {
          var selected = false;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.props.value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var date = _step.value;
              selected = this.isDateEquals(date, dateMeta);

              if (selected) {
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return selected;
        } else if (this.isRangeSelection()) {
          if (this.props.value[1]) return this.isDateEquals(this.props.value[0], dateMeta) || this.isDateEquals(this.props.value[1], dateMeta) || this.isDateBetween(this.props.value[0], this.props.value[1], dateMeta);else {
            return this.isDateEquals(this.props.value[0], dateMeta);
          }
        }
      } else {
        return false;
      }
    }
  }, {
    key: "isMonthSelected",
    value: function isMonthSelected(month) {
      var viewDate = this.getViewDate();
      if (this.props.value && this.props.value instanceof Date) return this.props.value.getDate() === 1 && this.props.value.getMonth() === month && this.props.value.getFullYear() === viewDate.getFullYear();else return false;
    }
  }, {
    key: "isDateEquals",
    value: function isDateEquals(value, dateMeta) {
      if (value && value instanceof Date) return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;else return false;
    }
  }, {
    key: "isDateBetween",
    value: function isDateBetween(start, end, dateMeta) {
      var between = false;

      if (start && end) {
        var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
        return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
      }

      return between;
    }
  }, {
    key: "isSingleSelection",
    value: function isSingleSelection() {
      return this.props.selectionMode === 'single';
    }
  }, {
    key: "isRangeSelection",
    value: function isRangeSelection() {
      return this.props.selectionMode === 'range';
    }
  }, {
    key: "isMultipleSelection",
    value: function isMultipleSelection() {
      return this.props.selectionMode === 'multiple';
    }
  }, {
    key: "isToday",
    value: function isToday(today, day, month, year) {
      return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
    }
  }, {
    key: "isDateDisabled",
    value: function isDateDisabled(day, month, year) {
      if (this.props.disabledDates) {
        for (var i = 0; i < this.props.disabledDates.length; i++) {
          var disabledDate = this.props.disabledDates[i];

          if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
            return true;
          }
        }
      }

      return false;
    }
  }, {
    key: "isDayDisabled",
    value: function isDayDisabled(day, month, year) {
      if (this.props.disabledDays) {
        var weekday = new Date(year, month, day);
        var weekdayNumber = weekday.getDay();
        return this.props.disabledDays.indexOf(weekdayNumber) !== -1;
      }

      return false;
    }
  }, {
    key: "getValueToRender",
    value: function getValueToRender() {
      var formattedValue = '';

      if (this.props.value) {
        try {
          if (this.isSingleSelection()) {
            formattedValue = this.formatDateTime(this.props.value);
          } else if (this.isMultipleSelection()) {
            for (var i = 0; i < this.props.value.length; i++) {
              var dateAsString = this.formatDateTime(this.props.value[i]);
              formattedValue += dateAsString;

              if (i !== this.props.value.length - 1) {
                formattedValue += ', ';
              }
            }
          } else if (this.isRangeSelection()) {
            if (this.props.value && this.props.value.length) {
              var startDate = this.props.value[0];
              var endDate = this.props.value[1];
              formattedValue = this.formatDateTime(startDate);

              if (endDate) {
                formattedValue += ' - ' + this.formatDateTime(endDate);
              }
            }
          }
        } catch (err) {
          formattedValue = this.props.value;
        }
      }

      return formattedValue;
    }
  }, {
    key: "formatDateTime",
    value: function formatDateTime(date) {
      var formattedValue = null;

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
  }, {
    key: "formatDate",
    value: function formatDate(date, format) {
      if (!date) {
        return '';
      }

      var iFormat;

      var lookAhead = function lookAhead(match) {
        var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

        if (matches) {
          iFormat++;
        }

        return matches;
      },
          formatNumber = function formatNumber(match, value, len) {
        var num = '' + value;

        if (lookAhead(match)) {
          while (num.length < len) {
            num = '0' + num;
          }
        }

        return num;
      },
          formatName = function formatName(match, value, shortNames, longNames) {
        return lookAhead(match) ? longNames[value] : shortNames[value];
      };

      var output = '';
      var literal = false;

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
                output += formatName('D', date.getDay(), this.props.locale.dayNamesShort, this.props.locale.dayNames);
                break;

              case 'o':
                output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                break;

              case 'm':
                output += formatNumber('m', date.getMonth() + 1, 2);
                break;

              case 'M':
                output += formatName('M', date.getMonth(), this.props.locale.monthNamesShort, this.props.locale.monthNames);
                break;

              case 'y':
                output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + date.getFullYear() % 100;
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
  }, {
    key: "formatTime",
    value: function formatTime(date) {
      if (!date) {
        return '';
      }

      var output = '';
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();

      if (this.props.hourFormat === '12' && hours > 11 && hours !== 12) {
        hours -= 12;
      }

      if (this.props.hourFormat === '12') {
        output += hours === 0 ? 12 : hours < 10 ? '0' + hours : hours;
      } else {
        output += hours < 10 ? '0' + hours : hours;
      }

      output += ':';
      output += minutes < 10 ? '0' + minutes : minutes;

      if (this.props.showSeconds) {
        output += ':';
        output += seconds < 10 ? '0' + seconds : seconds;
      }

      if (this.props.hourFormat === '12') {
        output += date.getHours() > 11 ? ' PM' : ' AM';
      }

      return output;
    }
  }, {
    key: "parseValueFromString",
    value: function parseValueFromString(text) {
      if (!text || text.trim().length === 0) {
        return null;
      }

      var value;

      if (this.isSingleSelection()) {
        value = this.parseDateTime(text);
      } else if (this.isMultipleSelection()) {
        var tokens = text.split(',');
        value = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = tokens[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var token = _step2.value;
            value.push(this.parseDateTime(token.trim()));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      } else if (this.isRangeSelection()) {
        var _tokens = text.split(' - ');

        value = [];

        for (var i = 0; i < _tokens.length; i++) {
          value[i] = this.parseDateTime(_tokens[i].trim());
        }
      }

      return value;
    }
  }, {
    key: "parseDateTime",
    value: function parseDateTime(text) {
      var date;
      var parts = text.split(' ');

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
  }, {
    key: "populateTime",
    value: function populateTime(value, timeString, ampm) {
      if (this.props.hourFormat === '12' && ampm !== 'PM' && ampm !== 'AM') {
        throw new Error('Invalid Time');
      }

      var time = this.parseTime(timeString, ampm);
      value.setHours(time.hour);
      value.setMinutes(time.minute);
      value.setSeconds(time.second);
    }
  }, {
    key: "parseTime",
    value: function parseTime(value, ampm) {
      var tokens = value.split(':');
      var validTokenLength = this.props.showSeconds ? 3 : 2;

      if (tokens.length !== validTokenLength || tokens[0].length !== 2 || tokens[1].length !== 2 || tokens[2].length !== 2) {
        throw new Error('Invalid time');
      }

      var h = parseInt(tokens[0], 10);
      var m = parseInt(tokens[1], 10);
      var s = this.props.showSeconds ? parseInt(tokens[2], 10) : null;

      if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.props.hourFormat === '12' && h > 12 || this.props.showSeconds && (isNaN(s) || s > 59)) {
        throw new Error('Invalid time');
      } else {
        if (this.props.hourFormat === '12' && h !== 12 && ampm === 'PM') {
          h += 12;
        }

        return {
          hour: h,
          minute: m,
          second: s
        };
      }
    } // Ported from jquery-ui datepicker parseDate

  }, {
    key: "parseDate",
    value: function parseDate(value, format) {
      if (format == null || value == null) {
        throw new Error('Invalid arguments');
      }

      value = _typeof(value) === "object" ? value.toString() : value + "";

      if (value === "") {
        return null;
      }

      var iFormat,
          dim,
          extra,
          iValue = 0,
          shortYearCutoff = typeof this.props.shortYearCutoff !== "string" ? this.props.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.props.shortYearCutoff, 10),
          year = -1,
          month = -1,
          day = -1,
          doy = -1,
          literal = false,
          date,
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
          throw new Error('Missing number at position ' + iValue);
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
          throw new Error('Unknown name at position ' + iValue);
        }
      },
          checkLiteral = function checkLiteral() {
        if (value.charAt(iValue) !== format.charAt(iFormat)) {
          throw new Error('Unexpected literal at position ' + iValue);
        }

        iValue++;
      };

      if (this.props.view === 'month') {
        day = 1;
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
          throw new Error('Extra/unparsed characters found in date: ' + extra);
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
        throw new Error('Invalid date'); // E.g. 31/02/00
      }

      return date;
    }
  }, {
    key: "renderBackwardNavigator",
    value: function renderBackwardNavigator() {
      return _react.default.createElement("button", {
        className: "p-datepicker-prev p-link",
        onClick: this.navBackward
      }, _react.default.createElement("span", {
        className: "p-datepicker-prev-icon pi pi-chevron-left"
      }));
    }
  }, {
    key: "renderForwardNavigator",
    value: function renderForwardNavigator() {
      return _react.default.createElement("button", {
        className: "p-datepicker-next p-link",
        onClick: this.navForward
      }, _react.default.createElement("span", {
        className: "p-datepicker-next-icon pi pi-chevron-right"
      }));
    }
  }, {
    key: "isInMinYear",
    value: function isInMinYear(viewDate) {
      return this.props.minDate && this.props.minDate.getFullYear() === viewDate.getFullYear();
    }
  }, {
    key: "isInMaxYear",
    value: function isInMaxYear(viewDate) {
      return this.props.maxDate && this.props.maxDate.getFullYear() === viewDate.getFullYear();
    }
  }, {
    key: "renderTitleMonthElement",
    value: function renderTitleMonthElement(month) {
      var _this7 = this;

      if (this.props.monthNavigator && this.props.view !== 'month') {
        var viewDate = this.props.onViewDateChange ? this.props.viewDate : this.state.viewDate;
        var viewMonth = viewDate.getMonth();
        return _react.default.createElement("select", {
          className: "p-datepicker-month",
          onChange: this.onMonthDropdownChange,
          value: viewMonth
        }, this.props.locale.monthNames.map(function (month, index) {
          if ((!_this7.isInMinYear(viewDate) || index >= _this7.props.minDate.getMonth()) && (!_this7.isInMaxYear(viewDate) || index <= _this7.props.maxDate.getMonth())) {
            return _react.default.createElement("option", {
              key: month,
              value: index
            }, month);
          }

          return null;
        }));
      } else {
        return _react.default.createElement("span", {
          className: "p-datepicker-month"
        }, this.props.locale.monthNames[month]);
      }
    }
  }, {
    key: "renderTitleYearElement",
    value: function renderTitleYearElement(year) {
      var _this8 = this;

      if (this.props.yearNavigator) {
        var yearOptions = [];
        var years = this.props.yearRange.split(':');
        var yearStart = parseInt(years[0], 10);
        var yearEnd = parseInt(years[1], 10);

        for (var i = yearStart; i <= yearEnd; i++) {
          yearOptions.push(i);
        }

        var viewDate = this.props.onViewDateChange ? this.props.viewDate : this.state.viewDate;
        var viewYear = viewDate.getFullYear();
        return _react.default.createElement("select", {
          className: "p-datepicker-year",
          onChange: this.onYearDropdownChange,
          value: viewYear
        }, yearOptions.map(function (year) {
          if (!(_this8.props.minDate && _this8.props.minDate.getFullYear() > year) && !(_this8.props.maxDate && _this8.props.maxDate.getFullYear() < year)) {
            return _react.default.createElement("option", {
              key: year,
              value: year
            }, year);
          }

          return null;
        }));
      } else {
        return _react.default.createElement("span", {
          className: "p-datepicker-year"
        }, year);
      }
    }
  }, {
    key: "renderTitle",
    value: function renderTitle(monthMetaData) {
      var month = this.renderTitleMonthElement(monthMetaData.month);
      var year = this.renderTitleYearElement(monthMetaData.year);
      return _react.default.createElement("div", {
        className: "p-datepicker-title"
      }, month, year);
    }
  }, {
    key: "renderDayNames",
    value: function renderDayNames(weekDays) {
      return weekDays.map(function (weekDay) {
        return _react.default.createElement("th", {
          key: weekDay,
          scope: "col"
        }, _react.default.createElement("span", null, weekDay));
      });
    }
  }, {
    key: "renderDateCellContent",
    value: function renderDateCellContent(date, className) {
      var _this9 = this;

      var content = this.props.dateTemplate ? this.props.dateTemplate(date) : date.day;
      return _react.default.createElement("span", {
        className: className,
        onClick: function onClick(e) {
          return _this9.onDateSelect(e, date);
        }
      }, content);
    }
  }, {
    key: "renderWeek",
    value: function renderWeek(weekDates) {
      var _this10 = this;

      return weekDates.map(function (date) {
        var selected = _this10.isSelected(date);

        var cellClassName = (0, _classnames.default)({
          'p-datepicker-other-month': date.otherMonth,
          'p-datepicker-today': date.today
        });
        var dateClassName = (0, _classnames.default)({
          'p-highlight': selected,
          'p-disabled': !date.selectable
        });

        var content = _this10.renderDateCellContent(date, dateClassName);

        return _react.default.createElement("td", {
          key: date.day,
          className: cellClassName
        }, content);
      });
    }
  }, {
    key: "renderDates",
    value: function renderDates(monthMetaData) {
      var _this11 = this;

      return monthMetaData.dates.map(function (weekDates, index) {
        return _react.default.createElement("tr", {
          key: index
        }, _this11.renderWeek(weekDates));
      });
    }
  }, {
    key: "renderDateViewGrid",
    value: function renderDateViewGrid(monthMetaData, weekDays) {
      var dayNames = this.renderDayNames(weekDays);
      var dates = this.renderDates(monthMetaData);
      return _react.default.createElement("div", {
        className: "p-datepicker-calendar-container"
      }, _react.default.createElement("table", {
        className: "p-datepicker-calendar"
      }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, dayNames)), _react.default.createElement("tbody", null, dates)));
    }
  }, {
    key: "renderMonth",
    value: function renderMonth(monthMetaData, index) {
      var weekDays = this.createWeekDays();
      var backwardNavigator = index === 0 ? this.renderBackwardNavigator() : null;
      var forwardNavigator = this.props.numberOfMonths === 1 || index === this.props.numberOfMonths - 1 ? this.renderForwardNavigator() : null;
      var title = this.renderTitle(monthMetaData);
      var dateViewGrid = this.renderDateViewGrid(monthMetaData, weekDays);
      var header = this.props.headerTemplate ? this.props.headerTemplate() : null;
      return _react.default.createElement("div", {
        key: monthMetaData.month,
        className: "p-datepicker-group"
      }, _react.default.createElement("div", {
        className: "p-datepicker-header"
      }, header, backwardNavigator, forwardNavigator, title), dateViewGrid);
    }
  }, {
    key: "renderMonths",
    value: function renderMonths(monthsMetaData) {
      var _this12 = this;

      return monthsMetaData.map(function (monthMetaData, index) {
        return _this12.renderMonth(monthMetaData, index);
      });
    }
  }, {
    key: "renderDateView",
    value: function renderDateView() {
      var viewDate = this.props.onViewDateChange ? this.props.viewDate : this.state.viewDate;
      var monthsMetaData = this.createMonths(viewDate.getMonth(), viewDate.getFullYear());
      var months = this.renderMonths(monthsMetaData);
      return _react.default.createElement(_react.default.Fragment, null, months);
    }
  }, {
    key: "renderMonthViewMonth",
    value: function renderMonthViewMonth(index) {
      var _this13 = this;

      var className = (0, _classnames.default)('p-monthpicker-month', {
        'p-highlight': this.isMonthSelected(index)
      });
      var monthName = this.props.locale.monthNamesShort[index];
      return _react.default.createElement("span", {
        key: monthName,
        className: className,
        onClick: function onClick(event) {
          return _this13.onMonthSelect(event, index);
        }
      }, monthName);
    }
  }, {
    key: "renderMonthViewMonths",
    value: function renderMonthViewMonths() {
      var months = [];

      for (var i = 0; i <= 11; i++) {
        months.push(this.renderMonthViewMonth(i));
      }

      return months;
    }
  }, {
    key: "renderMonthView",
    value: function renderMonthView() {
      var backwardNavigator = this.renderBackwardNavigator();
      var forwardNavigator = this.renderForwardNavigator();
      var yearElement = this.renderTitleYearElement(this.getViewDate().getFullYear());
      var months = this.renderMonthViewMonths();
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: "p-datepicker-header"
      }, backwardNavigator, forwardNavigator, _react.default.createElement("div", {
        className: "p-datepicker-title"
      }, yearElement)), _react.default.createElement("div", {
        className: "p-monthpicker"
      }, months));
    }
  }, {
    key: "renderDatePicker",
    value: function renderDatePicker() {
      if (!this.props.timeOnly) {
        if (this.props.view === 'date') {
          return this.renderDateView();
        } else if (this.props.view === 'month') {
          return this.renderMonthView();
        } else {
          return null;
        }
      }
    }
  }, {
    key: "renderHourPicker",
    value: function renderHourPicker() {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var hour = currentTime.getHours();

      if (this.props.hourFormat === '12') {
        if (hour === 0) hour = 12;else if (hour > 11 && hour !== 12) hour = hour - 12;
      }

      var hourDisplay = hour < 10 ? '0' + hour : hour;
      return _react.default.createElement("div", {
        className: "p-hour-picker"
      }, _react.default.createElement("button", {
        className: "p-link",
        onClick: this.incrementHour
      }, _react.default.createElement("span", {
        className: "pi pi-chevron-up"
      })), _react.default.createElement("span", null, hourDisplay), _react.default.createElement("button", {
        className: "p-link",
        onClick: this.decrementHour
      }, _react.default.createElement("span", {
        className: "pi pi-chevron-down"
      })));
    }
  }, {
    key: "renderMinutePicker",
    value: function renderMinutePicker() {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var minute = currentTime.getMinutes();
      var minuteDisplay = minute < 10 ? '0' + minute : minute;
      return _react.default.createElement("div", {
        className: "p-minute-picker"
      }, _react.default.createElement("button", {
        className: "p-link",
        onClick: this.incrementMinute
      }, _react.default.createElement("span", {
        className: "pi pi-chevron-up"
      })), _react.default.createElement("span", null, minuteDisplay), _react.default.createElement("button", {
        className: "p-link",
        onClick: this.decrementMinute
      }, _react.default.createElement("span", {
        className: "pi pi-chevron-down"
      })));
    }
  }, {
    key: "renderSecondPicker",
    value: function renderSecondPicker() {
      if (this.props.showSeconds) {
        var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
        var second = currentTime.getSeconds();
        var secondDisplay = second < 10 ? '0' + second : second;
        return _react.default.createElement("div", {
          className: "p-second-picker"
        }, _react.default.createElement("button", {
          className: "p-link",
          onClick: this.incrementSecond
        }, _react.default.createElement("span", {
          className: "pi pi-chevron-up"
        })), _react.default.createElement("span", null, secondDisplay), _react.default.createElement("button", {
          className: "p-link",
          onClick: this.decrementSecond
        }, _react.default.createElement("span", {
          className: "pi pi-chevron-down"
        })));
      } else {
        return null;
      }
    }
  }, {
    key: "renderAmPmPicker",
    value: function renderAmPmPicker() {
      if (this.props.hourFormat === '12') {
        var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
        var hour = currentTime.getHours();
        var display = hour > 11 ? 'PM' : 'AM';
        return _react.default.createElement("div", {
          className: "p-ampm-picker"
        }, _react.default.createElement("button", {
          className: "p-link",
          onClick: this.toggleAmPm
        }, _react.default.createElement("span", {
          className: "pi pi-chevron-up"
        })), _react.default.createElement("span", null, display), _react.default.createElement("button", {
          className: "p-link",
          onClick: this.toggleAmPm
        }, _react.default.createElement("span", {
          className: "pi pi-chevron-down"
        })));
      } else {
        return null;
      }
    }
  }, {
    key: "renderSeparator",
    value: function renderSeparator() {
      return _react.default.createElement("div", {
        className: "p-separator"
      }, _react.default.createElement("span", {
        className: "p-separator-spacer"
      }, _react.default.createElement("span", {
        className: "pi pi-chevron-up"
      })), _react.default.createElement("span", null, ":"), _react.default.createElement("span", {
        className: "p-separator-spacer"
      }, _react.default.createElement("span", {
        className: "pi pi-chevron-down"
      })));
    }
  }, {
    key: "renderTimePicker",
    value: function renderTimePicker() {
      if (this.props.showTime || this.props.timeOnly) {
        return _react.default.createElement("div", {
          className: "p-timepicker"
        }, this.renderHourPicker(), this.renderSeparator(), this.renderMinutePicker(), this.props.showSeconds && this.renderSeparator(), this.renderSecondPicker(), this.props.hourFormat === '12' && this.renderSeparator(), this.renderAmPmPicker());
      } else {
        return null;
      }
    }
  }, {
    key: "renderInputElement",
    value: function renderInputElement() {
      var _this14 = this;

      if (!this.props.inline) {
        var className = (0, _classnames.default)('p-inputtext p-component', this.props.inputClassName);
        var value = this.getValueToRender();
        return _react.default.createElement(_InputText.InputText, {
          ref: function ref(el) {
            return _this14.inputElement = _reactDom.default.findDOMNode(el);
          },
          id: this.props.inputId,
          name: this.props.name,
          value: value,
          type: "text",
          className: className,
          style: this.props.inputStyle,
          readOnly: this.props.readOnlyInput,
          disabled: this.props.disabled,
          tabIndex: this.props.tabIndex,
          required: this.props.required,
          autoComplete: "off",
          placeholder: this.props.placeholder,
          onChange: this.onInputChange,
          onFocus: this.onInputFocus,
          onBlur: this.onInputBlur,
          onKeyDown: this.onInputKeyDown
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      if (this.props.showIcon) {
        return _react.default.createElement(_Button.Button, {
          type: "button",
          icon: this.props.icon,
          onClick: this.onButtonClick,
          tabIndex: "-1",
          disabled: this.props.disabled,
          className: "p-datepicker-trigger p-calendar-button"
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderButtonBar",
    value: function renderButtonBar() {
      if (this.props.showButtonBar) {
        return _react.default.createElement("div", {
          className: "p-datepicker-buttonbar"
        }, _react.default.createElement(_Button.Button, {
          type: "button",
          label: this.props.locale.today,
          onClick: this.onTodayButtonClick,
          className: this.props.todayButtonClassName
        }), _react.default.createElement(_Button.Button, {
          type: "button",
          label: this.props.locale.clear,
          onClick: this.onClearButtonClick,
          className: this.props.todayButtonClassName
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      if (this.props.footerTemplate) {
        var content = this.props.footerTemplate();
        return _react.default.createElement("div", {
          className: "p-datepicker-footer"
        }, content);
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this15 = this;

      var className = (0, _classnames.default)('p-calendar', this.props.className, {
        'p-calendar-w-btn': this.props.showIcon,
        'p-calendar-timeonly': this.props.timeOnly,
        'p-inputwrapper-filled': this.props.value
      });
      var panelClassName = (0, _classnames.default)('p-datepicker p-component', this.props.panelClassName, {
        'p-datepicker-inline': this.props.inline,
        'p-input-overlay': !this.props.inline,
        'p-shadow': !this.props.inline,
        'p-disabled': this.props.disabled,
        'p-datepicker-timeonly': this.props.timeOnly,
        'p-datepicker-multiple-month': this.props.numberOfMonths > 1,
        'p-datepicker-monthpicker': this.props.view === 'month',
        'p-datepicker-touch-ui': this.props.touchUI
      });
      var input = this.renderInputElement();
      var button = this.renderButton();
      var datePicker = this.renderDatePicker();
      var timePicker = this.renderTimePicker();
      var buttonBar = this.renderButtonBar();
      var footer = this.renderFooter();
      return _react.default.createElement("span", {
        ref: function ref(el) {
          return _this15.container = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, input, button, _react.default.createElement(_CalendarPanel.CalendarPanel, {
        ref: function ref(el) {
          return _this15.panel = _reactDom.default.findDOMNode(el);
        },
        className: panelClassName,
        style: this.props.panelStyle,
        appendTo: this.props.appendTo
      }, datePicker, timePicker, buttonBar, footer));
    }
  }]);

  return Calendar;
}(_react.Component);

exports.Calendar = Calendar;

_defineProperty(Calendar, "defaultProps", {
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
  showSeconds: false,
  hourFormat: '24',
  stepHour: 1,
  stepMinute: 1,
  stepSecond: 1,
  shortYearCutoff: '+10',
  hideOnDateTimeSelect: false,
  locale: {
    firstDayOfWeek: 0,
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
  showButtonBar: false,
  todayButtonClassName: 'p-button-secondary',
  clearButtonStyleClass: 'p-button-secondary',
  autoZIndex: true,
  baseZIndex: 0,
  appendTo: null,
  tooltip: null,
  tooltipOptions: null,
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
});

_defineProperty(Calendar, "propTypes", {
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  value: _propTypes.default.any,
  viewDate: _propTypes.default.any,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  inline: _propTypes.default.bool,
  selectionMode: _propTypes.default.string,
  inputId: _propTypes.default.string,
  inputStyle: _propTypes.default.object,
  inputClassName: _propTypes.default.string,
  required: _propTypes.default.bool,
  readOnlyInput: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  tabIndex: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  showIcon: _propTypes.default.bool,
  icon: _propTypes.default.string,
  showOnFocus: _propTypes.default.bool,
  numberOfMonths: _propTypes.default.number,
  view: _propTypes.default.string,
  touchUI: _propTypes.default.bool,
  showTime: _propTypes.default.bool,
  timeOnly: _propTypes.default.bool,
  showSeconds: _propTypes.default.bool,
  hourFormat: _propTypes.default.string,
  stepHour: _propTypes.default.number,
  stepMinute: _propTypes.default.number,
  stepSecond: _propTypes.default.number,
  shortYearCutoff: _propTypes.default.string,
  hideOnDateTimeSelect: _propTypes.default.bool,
  locale: _propTypes.default.object,
  dateFormat: _propTypes.default.string,
  panelStyle: _propTypes.default.object,
  panelClassName: _propTypes.default.string,
  monthNavigator: _propTypes.default.bool,
  yearNavigator: _propTypes.default.bool,
  disabledDates: _propTypes.default.array,
  disabledDays: _propTypes.default.array,
  minDate: _propTypes.default.any,
  maxDate: _propTypes.default.any,
  maxDateCount: _propTypes.default.number,
  showOtherMonths: _propTypes.default.bool,
  selectOtherMonths: _propTypes.default.bool,
  showButtonBar: _propTypes.default.bool,
  todayButtonClassName: _propTypes.default.string,
  clearButtonStyleClass: _propTypes.default.string,
  autoZIndex: _propTypes.default.bool,
  baseZIndex: _propTypes.default.number,
  appendTo: _propTypes.default.any,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  dateTemplate: _propTypes.default.func,
  headerTemplate: _propTypes.default.func,
  footerTemplate: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onInput: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onViewDateChange: _propTypes.default.func,
  onTodayButtonClick: _propTypes.default.func,
  onClearButtonClick: _propTypes.default.func
});
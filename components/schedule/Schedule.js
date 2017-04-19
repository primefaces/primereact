'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Schedule = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ObjectUtils = require('../utils/ObjectUtils');

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('fullcalendar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Schedule = exports.Schedule = function (_Component) {
    _inherits(Schedule, _Component);

    function Schedule() {
        _classCallCheck(this, Schedule);

        return _possibleConstructorReturn(this, (Schedule.__proto__ || Object.getPrototypeOf(Schedule)).apply(this, arguments));
    }

    _createClass(Schedule, [{
        key: 'gotoDate',
        value: function gotoDate(date) {
            this.schedule.fullCalendar('gotoDate', date);
        }
    }, {
        key: 'prev',
        value: function prev() {
            this.schedule.fullCalendar('prev');
        }
    }, {
        key: 'next',
        value: function next() {
            this.schedule.fullCalendar('next');
        }
    }, {
        key: 'prevYear',
        value: function prevYear() {
            this.schedule.fullCalendar('prevYear');
        }
    }, {
        key: 'nextYear',
        value: function nextYear() {
            this.schedule.fullCalendar('nextYear');
        }
    }, {
        key: 'today',
        value: function today() {
            this.schedule.fullCalendar('today');
        }
    }, {
        key: 'incrementDate',
        value: function incrementDate(duration) {
            this.schedule.fullCalendar('incrementDate', duration);
        }
    }, {
        key: 'changeView',
        value: function changeView(viewName) {
            this.schedule.fullCalendar('changeView', viewName);
        }
    }, {
        key: 'getDate',
        value: function getDate() {
            return this.schedule.fullCalendar('getDate');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.config = {
                theme: true,
                header: this.props.header,
                isRTL: this.props.rtl,
                weekends: this.props.weekends,
                hiddenDays: this.props.hiddenDays,
                fixedWeekCount: this.props.fixedWeekCount,
                weekNumbers: this.props.weekNumbers,
                businessHours: this.props.businessHours,
                height: this.props.height,
                contentHeight: this.props.contentHeight,
                aspectRatio: this.props.aspectRatio,
                eventLimit: this.props.eventLimit,
                defaultDate: this.props.defaultDate,
                timezone: this.props.timezone,
                editable: this.props.editable,
                droppable: this.props.droppable,
                eventStartEditable: this.props.eventStartEditable,
                eventDurationEditable: this.props.eventDurationEditable,
                defaultView: this.props.defaultView,
                allDaySlot: this.props.allDaySlot,
                allDayText: this.props.allDayText,
                slotDuration: this.props.slotDuration,
                slotLabelInterval: this.props.slotLabelInterval,
                snapDuration: this.props.snapDuration,
                scrollTime: this.props.scrollTime,
                minTime: this.props.minTime,
                maxTime: this.props.maxTime,
                slotEventOverlap: this.props.slotEventOverlap,
                nowIndicator: this.props.nowIndicator,
                dragRevertDuration: this.props.dragRevertDuration,
                dragOpacity: this.props.dragOpacity,
                dragScroll: this.props.dragScroll,
                eventOverlap: this.props.eventOverlap,
                eventConstraint: this.props.eventConstraint,
                eventRender: this.props.eventRender,
                dayRender: this.props.dayRender,
                dayClick: function dayClick(date, jsEvent, view) {
                    if (_this2.props.onDayClick) {
                        _this2.props.onDayClick({
                            'date': date,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                drop: function drop(date, jsEvent, ui, resourceId) {
                    if (_this2.props.onDrop) {
                        _this2.props.onDrop({
                            'date': date,
                            'jsEvent': jsEvent,
                            'resourceId': resourceId
                        });
                    }
                },
                eventClick: function eventClick(calEvent, jsEvent, view) {
                    if (_this2.props.onEventClick) {
                        _this2.props.onEventClick({
                            'calEvent': calEvent,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventMouseover: function eventMouseover(calEvent, jsEvent, view) {
                    if (_this2.props.onEventMouseover) {
                        _this2.props.onEventMouseover({
                            'calEvent': calEvent,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventMouseout: function eventMouseout(calEvent, jsEvent, view) {
                    if (_this2.props.onEventMouseout) {
                        _this2.props.onEventMouseout({
                            'calEvent': calEvent,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventDragStart: function eventDragStart(event, jsEvent, ui, view) {
                    if (_this2.props.onEventDragStart) {
                        _this2.props.onEventDragStart({
                            'event': event,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventDragStop: function eventDragStop(event, jsEvent, ui, view) {
                    if (_this2.props.onEventDragStop) {
                        _this2.props.onEventDragStop({
                            'event': event,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventDrop: function eventDrop(event, delta, revertFunc, jsEvent, ui, view) {
                    if (_this2.props.onEventDrop) {
                        _this2.props.onEventDrop({
                            'event': event,
                            'delta': delta,
                            'revertFunc': revertFunc,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventResizeStart: function eventResizeStart(event, jsEvent, ui, view) {
                    if (_this2.props.onEventResizeStart) {
                        _this2.props.onEventResizeStart({
                            'event': event,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventResizeStop: function eventResizeStop(event, jsEvent, ui, view) {
                    if (_this2.props.onEventResizeStop) {
                        _this2.props.onEventResizeStop({
                            'event': event,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventResize: function eventResize(event, delta, revertFunc, jsEvent, ui, view) {
                    if (_this2.props.onEventResize) {
                        _this2.props.onEventResize({
                            'event': event,
                            'delta': delta,
                            'revertFunc': revertFunc,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                viewRender: function viewRender(view, element) {
                    if (_this2.props.onViewRender) {
                        _this2.props.onViewRender({
                            'view': view,
                            'element': element
                        });
                    }
                }
            };

            if (this.props.locale) {
                for (var prop in this.props.locale) {
                    this.config[prop] = this.props.locale[prop];
                }
            }

            if (this.props.options) {
                for (var _prop in this.props.options) {
                    this.config[_prop] = this.props.options[_prop];
                }
            }

            this.schedule = (0, _jquery2.default)(this.scheduleEl);
            this.schedule.fullCalendar(this.config);
            this.events = [].concat(_toConsumableArray(this.props.events));
            this.schedule.fullCalendar('addEventSource', this.events);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return false;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!_ObjectUtils2.default.equals(nextProps.events, this.events)) {
                this.events = [].concat(_toConsumableArray(nextProps.events));
                this.schedule.fullCalendar('removeEventSources');
                this.schedule.fullCalendar('addEventSource', this.events);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            (0, _jquery2.default)(this.scheduleEl).fullCalendar('destroy');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', { ref: function ref(el) {
                    return _this3.scheduleEl = el;
                }, style: this.props.style, className: this.props.styleClass });
        }
    }]);

    return Schedule;
}(_react.Component);

Schedule.defaultProps = {
    events: [],
    header: null,
    style: null,
    styleClass: null,
    isRTL: false,
    weekends: true,
    hiddenDays: [],
    fixedWeekCount: true,
    weekNumbers: false,
    businessHours: false,
    height: null,
    contentHeight: null,
    aspectRatio: 1.35,
    eventLimit: false,
    defaultDate: null,
    editable: false,
    droppable: false,
    eventStartEditable: true,
    eventDurationEditable: true,
    defaultView: 'month',
    allDaySlot: true,
    allDayText: 'all-day',
    slotDuration: '00:30:00',
    slotLabelInterval: null,
    snapDuration: null,
    scrollTime: '06:00:00',
    minTime: '00:00:00',
    maxTime: '24:00:00',
    slotEventOverlap: true,
    nowIndicator: false,
    dragRevertDuration: 500,
    dragOpacity: 0.75,
    dragScroll: true,
    eventOverlap: true,
    eventConstraint: null,
    eventRender: null,
    dayRender: null,
    locale: null,
    timezone: false,
    options: null,
    onDayClick: null,
    onEventClick: null,
    onEventMouseover: null,
    onEventMouseout: null,
    onEventDragStart: null,
    onEventDragStop: null,
    onEventDrop: null,
    onEventResizeStart: null,
    onEventResizeStop: null,
    onEventResize: null,
    onViewRender: null,
    onDrop: null
};
Schedule.propsTypes = {
    events: _propTypes2.default.array,
    header: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
    style: _propTypes2.default.string,
    styleClass: _propTypes2.default.string,
    isRTL: _propTypes2.default.bool,
    weekends: _propTypes2.default.bool,
    hiddenDays: _propTypes2.default.array,
    fixedWeekCount: _propTypes2.default.bool,
    weekNumbers: _propTypes2.default.bool,
    businessHours: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
    height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func, _propTypes2.default.string]),
    contentHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func, _propTypes2.default.string]),
    aspectRatio: _propTypes2.default.number,
    eventLimit: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number]),
    defaultDate: _propTypes2.default.any,
    editable: _propTypes2.default.bool,
    droppable: _propTypes2.default.bool,
    eventStartEditable: _propTypes2.default.bool,
    eventDurationEditable: _propTypes2.default.bool,
    defaultView: _propTypes2.default.string,
    allDaySlot: _propTypes2.default.bool,
    allDayText: _propTypes2.default.string,
    slotDuration: _propTypes2.default.any,
    slotLabelInterval: _propTypes2.default.any,
    snapDuration: _propTypes2.default.any,
    scrollTime: _propTypes2.default.any,
    minTime: _propTypes2.default.any,
    maxTime: _propTypes2.default.any,
    slotEventOverlap: _propTypes2.default.bool,
    nowIndicator: _propTypes2.default.bool,
    dragRevertDuration: _propTypes2.default.number,
    dragOpacity: _propTypes2.default.number,
    dragScroll: _propTypes2.default.bool,
    eventOverlap: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    eventConstraint: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    eventRender: _propTypes2.default.func,
    dayRender: _propTypes2.default.func,
    locale: _propTypes2.default.object,
    timezone: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
    options: _propTypes2.default.object,
    onDayClick: _propTypes2.default.func,
    onEventClick: _propTypes2.default.func,
    onEventMouseover: _propTypes2.default.func,
    onEventMouseout: _propTypes2.default.func,
    onEventDragStart: _propTypes2.default.func,
    onEventDragStop: _propTypes2.default.func,
    onEventDrop: _propTypes2.default.func,
    onEventResizeStart: _propTypes2.default.func,
    onEventResizeStop: _propTypes2.default.func,
    onEventResize: _propTypes2.default.func,
    onViewRender: _propTypes2.default.func,
    onDrop: _propTypes2.default.func
};
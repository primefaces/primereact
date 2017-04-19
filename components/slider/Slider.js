'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Slider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DomHandler = require('../utils/DomHandler');

var _DomHandler2 = _interopRequireDefault(_DomHandler);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = exports.Slider = function (_Component) {
    _inherits(Slider, _Component);

    function Slider(props) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

        _this.state = {};
        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onBarClick = _this.onBarClick.bind(_this);
        _this.endDrag = _this.endDrag.bind(_this);
        _this.handleValues = [];
        return _this;
    }

    _createClass(Slider, [{
        key: 'onMouseDown',
        value: function onMouseDown(event, index) {
            if (this.props.disabled) {
                return;
            }

            this.dragging = true;
            this.updateDomData();
            this.sliderHandleClick = true;
            this.handleIndex = index;
            event.target.style.transition = "none";
        }
    }, {
        key: 'onBarClick',
        value: function onBarClick(event) {
            if (this.props.disabled) {
                return;
            }

            if (!this.sliderHandleClick) {
                this.updateDomData();
                this.handleChange(event);
            }

            this.sliderHandleClick = false;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var handleValue = this.calculateHandleValue(event);
            var newValue = this.getValueFromHandle(handleValue);

            if (this.props.range) {
                if (this.props.step) {
                    this.handleStepChange(newValue, this.values[this.handleIndex]);
                } else {
                    this.handleValues[this.handleIndex] = handleValue;
                    this.updateValue(newValue, event);
                }
            } else {
                if (this.props.step) {
                    this.handleStepChange(newValue, this.value);
                } else {
                    this.handleValue = handleValue;
                    this.updateValue(newValue, event);
                }
            }
        }
    }, {
        key: 'handleStepChange',
        value: function handleStepChange(newValue, oldValue) {
            var diff = newValue - oldValue;

            if (diff < 0 && -1 * diff >= this.props.step / 2) {
                newValue = oldValue - this.props.step;
                this.updateValue(newValue);
                this.updateHandleValue();
            } else if (diff > 0 && diff >= this.props.step / 2) {
                newValue = oldValue + this.props.step;
                this.updateValue(newValue);
                this.updateHandleValue();
            }
        }
    }, {
        key: 'updateDomData',
        value: function updateDomData() {
            var rect = this.container.getBoundingClientRect();
            this.initX = rect.left + _DomHandler2.default.getWindowScrollLeft();
            this.initY = rect.top + _DomHandler2.default.getWindowScrollTop();
            this.barWidth = this.container.offsetWidth;
            this.barHeight = this.container.offsetHeight;
        }
    }, {
        key: 'calculateHandleValue',
        value: function calculateHandleValue(event) {
            if (this.props.orientation === 'horizontal') return Math.floor((event.pageX - this.initX) * 100 / this.barWidth);else return Math.floor((this.initY + this.barHeight - event.pageY) * 100 / this.barHeight);
        }
    }, {
        key: 'updateHandleValue',
        value: function updateHandleValue() {
            if (this.props.range) {
                this.handleValues[0] = (this.values[0] < this.props.min ? 0 : this.values[0] - this.props.min) * 100 / (this.props.max - this.props.min);
                this.handleValues[1] = (this.values[1] > this.props.max ? 100 : this.values[1] - this.props.min) * 100 / (this.props.max - this.props.min);
                this.setState({ handleValues: this.handleValues });
            } else {
                if (this.value < this.props.min) this.handleValue = 0;else if (this.value > this.props.max) this.handleValue = 100;else this.handleValue = (this.value - this.props.min) * 100 / (this.props.max - this.props.min);

                this.setState({ handleValue: this.handleValue });
            }
        }
    }, {
        key: 'updateValue',
        value: function updateValue(val, event) {
            if (this.props.range) {
                var value = val;

                if (this.handleIndex === 0) {
                    if (value < this.props.min) {
                        value = this.props.min;
                        this.handleValues[0] = 0;
                    } else if (value > this.values[1]) {
                        value = this.values[1];
                        this.handleValues[0] = this.handleValues[1];
                    }
                } else {
                    if (value > this.props.max) {
                        value = this.props.max;
                        this.handleValues[1] = 100;
                    } else if (value < this.values[0]) {
                        value = this.values[0];
                        this.handleValues[1] = this.handleValues[0];
                    }
                }

                this.values[this.handleIndex] = Math.floor(value);

                if (this.props.onChange) {
                    this.props.onChange({
                        originalEvent: event,
                        value: this.values
                    });
                }
            } else {
                if (val < this.props.min) {
                    val = this.props.min;
                    this.handleValue = 0;
                } else if (val > this.props.max) {
                    val = this.props.max;
                    this.handleValue = 100;
                }

                this.value = Math.floor(val);

                if (this.props.onChange) {
                    this.props.onChange({
                        originalEvent: event,
                        value: this.value
                    });
                }
            }
        }
    }, {
        key: 'getValueFromHandle',
        value: function getValueFromHandle(handleValue) {
            return (this.props.max - this.props.min) * (handleValue / 100) + this.props.min;
        }
    }, {
        key: 'onDrag',
        value: function onDrag(event) {
            if (this.dragging) {
                this.handleChange(event);
            }
        }
    }, {
        key: 'endDrag',
        value: function endDrag(event) {
            if (this.dragging) {
                this.dragging = false;
                event.target.style.transition = null;
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.range) this.values = this.props.value || [0, 0];else this.value = this.props.value || 0;

            this.updateHandleValue();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.documentDragListener = this.onDrag.bind(this);
            document.addEventListener('mousemove', this.documentDragListener);

            this.documentEndDragListener = this.endDrag.bind(this);
            document.addEventListener('mouseup', this.documentEndDragListener);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var newValue = nextProps.value;
            if (newValue) {
                if (this.props.range) {
                    this.values = newValue;
                } else {
                    this.value = newValue;
                }
            }
            this.updateHandleValue();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.documentDragListener) {
                document.removeEventListener('mousemove', this.documentDragListener);
            }
            if (this.documentEndDragListener) {
                document.removeEventListener('mouseup', this.documentEndDragListener);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var styleClass = (0, _classnames2.default)('ui-slider ui-widget ui-widget-content ui-corner-all', this.props.className, {
                'ui-state-disabled': this.props.disabled,
                'ui-slider-horizontal': this.props.orientation === 'horizontal',
                'ui-slider-vertical': this.props.orientation === 'vertical',
                'ui-slider-animate': this.props.animate
            });

            var verticalRange = this.props.orientation === 'vertical' && _react2.default.createElement('span', { className: 'ui-slider-range ui-slider-range-min ui-widget-header ui-corner-all', style: { 'height': this.state.handleValue + '%' } });
            if (this.props.range) {
                var leftHandleClass = (0, _classnames2.default)('ui-slider-handle ui-state-default ui-corner-all', {
                    'ui-slider-handle-active': this.props.handleIndex === 0
                }),
                    rightHandleClass = (0, _classnames2.default)('ui-slider-handle ui-state-default ui-corner-all', {
                    'ui-slider-handle-active': this.props.handleIndex === 1
                });

                var middleRange = _react2.default.createElement('span', { className: 'ui-slider-range ui-widget-header ui-corner-all', style: { 'left': this.state.handleValues[0] + '%', width: this.state.handleValues[1] - this.state.handleValues[0] + '%' } });
                var leftHandle = _react2.default.createElement('span', { onMouseDown: function onMouseDown(e) {
                        return _this2.onMouseDown(e, 0);
                    }, className: leftHandleClass, style: { 'left': this.state.handleValues[0] + '%' } });
                var rightHandle = _react2.default.createElement('span', { onMouseDown: function onMouseDown(e) {
                        return _this2.onMouseDown(e, 1);
                    }, className: rightHandleClass, style: { 'left': this.state.handleValues[1] + '%' } });
            } else {
                var handle = _react2.default.createElement('span', { className: 'ui-slider-handle ui-state-default ui-corner-all', onMouseDown: this.onMouseDown,
                    style: { 'left': this.props.orientation === 'horizontal' ? this.state.handleValue + '%' : null, 'bottom': this.props.orientation === 'vertical' ? this.state.handleValue + '%' : null } });
            }

            return _react2.default.createElement(
                'div',
                { ref: function ref(el) {
                        _this2.container = el;
                    }, style: this.props.style, className: styleClass, onClick: this.onBarClick },
                handle,
                middleRange,
                verticalRange,
                leftHandle,
                rightHandle
            );
        }
    }]);

    return Slider;
}(_react.Component);

Slider.defaultProps = {
    animate: false,
    min: 0,
    max: 100,
    orientation: "horizontal",
    step: null,
    range: false,
    style: null,
    className: null
};
Slider.propsTypes = {
    animate: _propTypes2.default.bool,
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    orientation: _propTypes2.default.string,
    step: _propTypes2.default.number,
    range: _propTypes2.default.bool,
    style: _propTypes2.default.string,
    className: _propTypes2.default.string
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Spinner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _InputText = require('../inputtext/InputText');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spinner = exports.Spinner = function (_Component) {
    _inherits(Spinner, _Component);

    function Spinner(props) {
        _classCallCheck(this, Spinner);

        var _this = _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this, props));

        if (Math.floor(_this.props.step) === 0) {
            _this.precision = _this.props.step.toString().split(/[,]|[.]/)[1].length;
        }
        return _this;
    }

    _createClass(Spinner, [{
        key: 'repeat',
        value: function repeat(interval, dir) {
            var _this2 = this;

            var i = interval || 500;

            this.clearTimer();
            this.timer = setTimeout(function () {
                _this2.repeat(40, dir);
            }, i);

            this.spin(dir);
        }
    }, {
        key: 'spin',
        value: function spin(dir) {
            var step = this.props.step * dir;
            var currentValue = this.value || 0;

            if (this.precision) this.value = parseFloat(this.toFixed(currentValue + step, this.precision));else this.value = currentValue + step;

            if (this.props.maxlength !== null && this.value.toString().length > this.props.maxlength) {
                this.value = currentValue;
            }

            if (this.props.min !== null && this.value < this.props.min) {
                this.value = this.props.min;
            }

            if (this.props.max !== null && this.value > this.props.max) {
                this.value = this.props.max;
            }

            this.formatValue();

            this.inputEl.value = this.valueAsString;
            if (this.props.onChange) {
                this.props.onChange({
                    originalEvent: event,
                    value: this.value
                });
            }
        }
    }, {
        key: 'toFixed',
        value: function toFixed(value, precision) {
            var power = Math.pow(10, precision || 0);
            return String(Math.round(value * power) / power);
        }
    }, {
        key: 'onUpButtonMousedown',
        value: function onUpButtonMousedown(event, input) {
            if (!this.props.disabled) {
                input.focus();
                this.repeat(null, 1);
                this.updateFilledState();
                event.preventDefault();
            }
        }
    }, {
        key: 'onUpButtonMouseup',
        value: function onUpButtonMouseup(event) {
            if (!this.props.disabled) {
                this.clearTimer();
            }
        }
    }, {
        key: 'onUpButtonMouseleave',
        value: function onUpButtonMouseleave(event) {
            if (!this.props.disabled) {
                this.clearTimer();
            }
        }
    }, {
        key: 'onDownButtonMousedown',
        value: function onDownButtonMousedown(event, input) {
            if (!this.props.disabled) {
                input.focus();
                this.repeat(null, -1);
                this.updateFilledState();

                event.preventDefault();
            }
        }
    }, {
        key: 'onDownButtonMouseup',
        value: function onDownButtonMouseup(event) {
            if (!this.props.disabled) {
                this.clearTimer();
            }
        }
    }, {
        key: 'onDownButtonMouseleave',
        value: function onDownButtonMouseleave(event) {
            if (!this.props.disabled) {
                this.clearTimer();
            }
        }
    }, {
        key: 'onInputKeydown',
        value: function onInputKeydown(event) {
            if (event.which === 38) {
                this.spin(1);
                event.preventDefault();
            } else if (event.which === 40) {
                this.spin(-1);
                event.preventDefault();
            }
        }
    }, {
        key: 'onInputKeyPress',
        value: function onInputKeyPress(event) {
            var inputChar = String.fromCharCode(event.charCode);
            var keyPattern = /[0-9+-]/;
            if (!keyPattern.test(inputChar) && inputChar !== this.props.decimalSeparator) {
                event.preventDefault();
            }
        }
    }, {
        key: 'onInput',
        value: function onInput(event, inputValue) {
            this.value = this.parseValue(inputValue);
            this.formatValue();
            this.inputEl.value = this.valueAsString;
            if (this.props.onChange) {
                this.props.onChange({
                    originalEvent: event,
                    value: this.value
                });
            }
            this.updateFilledState();
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            this.focus = false;
        }
    }, {
        key: 'onFocus',
        value: function onFocus() {
            this.focus = true;
        }
    }, {
        key: 'parseValue',
        value: function parseValue(val) {
            var value = void 0;
            val = val.split(this.props.thousandSeparator).join('');
            if (val.trim() === '') {
                value = this.props.min !== null ? this.props.min : null;
            } else {
                if (this.precision) {
                    value = parseFloat(val.replace(',', '.'));
                } else {
                    value = parseInt(val, 10);
                }

                if (!isNaN(value)) {
                    if (this.props.max !== null && value > this.props.max) {
                        value = this.props.max;
                    }

                    if (this.props.min !== null && value < this.props.min) {
                        value = this.props.min;
                    }
                } else {
                    value = null;
                }
            }

            return value;
        }
    }, {
        key: 'formatValue',
        value: function formatValue() {
            if (this.value !== null && this.value !== undefined) {
                var textValue = String(this.value).replace('.', this.props.decimalSeparator);
                textValue = textValue.replace(/\B(?=(\d{3})+(?!\d))/g, this.props.thousandSeparator);
                this.valueAsString = textValue;
            } else {
                this.valueAsString = '';
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            if (this.props.onChange) {
                this.props.onChange({
                    originalEvent: event,
                    value: this.value
                });
            }
        }
    }, {
        key: 'clearTimer',
        value: function clearTimer() {
            if (this.timer) {
                clearInterval(this.timer);
            }
        }
    }, {
        key: 'updateFilledState',
        value: function updateFilledState() {
            this.filled = this.value !== undefined && this.value != null;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.value = this.props.value;
            this.formatValue();
            this.updateFilledState();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.inputEl.value = this.valueAsString;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var styleClass = (0, _classnames2.default)("ui-spinner ui-widget ui-corner-all"),
                upButtonClass = (0, _classnames2.default)("ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default", {
                'ui-state-disabled': this.props.disabled
            }),
                downButtonClass = (0, _classnames2.default)("ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default", {
                'ui-state-disabled': this.props.disabled
            });

            var inputElement = _react2.default.createElement(_InputText.InputText, { ref: function ref(el) {
                    return _this3.inputEl = _reactDom2.default.findDOMNode(el);
                }, type: 'text', className: 'ui-spinner-input',
                size: this.props.size, maxLength: this.props.maxlength, disabled: this.props.disabled, readOnly: this.props.readonly,
                onKeyDown: this.onInputKeydown.bind(this), onKeyUp: function onKeyUp(e) {
                    return _this3.onInput(e, _this3.inputEl.value);
                }, onKeyPress: this.onInputKeyPress.bind(this), onBlur: this.onBlur.bind(this), onChange: this.handleChange.bind(this), onFocus: this.onFocus.bind(this) });

            var upButton = _react2.default.createElement(
                'button',
                { className: upButtonClass, onMouseLeave: this.onUpButtonMouseleave.bind(this), onMouseDown: function onMouseDown(e) {
                        return _this3.onUpButtonMousedown(e, _this3.inputEl);
                    }, onMouseUp: this.onUpButtonMouseup.bind(this), disabled: this.props.disabled },
                _react2.default.createElement('span', { className: 'fa fa-caret-up' })
            );

            var downButton = _react2.default.createElement(
                'button',
                { className: downButtonClass, onMouseLeave: this.onDownButtonMouseleave.bind(this), onMouseDown: function onMouseDown(e) {
                        return _this3.onDownButtonMousedown(e, _this3.inputEl);
                    }, onMouseUp: this.onDownButtonMouseup.bind(this), disabled: this.props.disabled },
                _react2.default.createElement('span', { className: 'fa fa-caret-down' })
            );

            return _react2.default.createElement(
                'span',
                { className: styleClass, style: this.props.style },
                inputElement,
                upButton,
                downButton
            );
        }
    }]);

    return Spinner;
}(_react.Component);

Spinner.defaultProps = {
    step: 1,
    min: null,
    max: null,
    disabled: false,
    readonly: false,
    maxlength: null,
    size: null,
    decimalSeparator: '.',
    thousandSeparator: ',',
    style: null,
    className: null
};
Spinner.propsTypes = {
    step: _propTypes2.default.number,
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    disabled: _propTypes2.default.bool,
    readonly: _propTypes2.default.bool,
    maxlength: _propTypes2.default.number,
    size: _propTypes2.default.number,
    decimalSeparator: _propTypes2.default.string,
    thousandSeparator: _propTypes2.default.string,
    style: _propTypes2.default.string,
    className: _propTypes2.default.string
};
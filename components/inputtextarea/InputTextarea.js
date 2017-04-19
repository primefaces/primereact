'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputTextarea = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputTextarea = exports.InputTextarea = function (_Component) {
    _inherits(InputTextarea, _Component);

    function InputTextarea() {
        _classCallCheck(this, InputTextarea);

        var _this = _possibleConstructorReturn(this, (InputTextarea.__proto__ || Object.getPrototypeOf(InputTextarea)).call(this));

        _this.onFocus = _this.onFocus.bind(_this);
        _this.onBlur = _this.onBlur.bind(_this);
        _this.onKeyUp = _this.onKeyUp.bind(_this);
        return _this;
    }

    _createClass(InputTextarea, [{
        key: 'onFocus',
        value: function onFocus(e) {
            if (this.props.autoResize) {
                this.resize();
            }
        }
    }, {
        key: 'onBlur',
        value: function onBlur(e) {
            if (this.props.autoResize) {
                this.resize();
            }
        }
    }, {
        key: 'onKeyUp',
        value: function onKeyUp(e) {
            if (this.props.autoResize) {
                this.resize();
            }
        }
    }, {
        key: 'resize',
        value: function resize() {
            var linesCount = 0,
                lines = this.textareaElement.value.split('\n');

            for (var i = lines.length - 1; i >= 0; --i) {
                linesCount += Math.floor(lines[i].length / parseInt(this.props.cols, 10) + 1);
            }

            this.textareaElement.rows = linesCount >= parseInt(this.props.rows, 10) ? linesCount + 1 : parseInt(this.props.rows, 10);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var styleClass = (0, _classnames2.default)('ui-inputtext ui-corner-all ui-state-default ui-widget', this.props.className, {
                'ui-state-disabled': this.props.disabled
            });

            var textareaProps = Object.assign({}, this.props);
            delete textareaProps.autoResize;

            return _react2.default.createElement('textarea', _extends({}, textareaProps, { className: styleClass, ref: function ref(input) {
                    _this2.textareaElement = input;
                }, onFocus: this.onFocus, onBlur: this.onBlur, onKeyUp: this.onKeyUp }));
        }
    }]);

    return InputTextarea;
}(_react.Component);

InputTextarea.defaultProps = {
    autoResize: false
};
InputTextarea.propTypes = {
    autoResize: _propTypes2.default.bool
};
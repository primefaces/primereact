'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ToggleButton = undefined;

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

var ToggleButton = exports.ToggleButton = function (_Component) {
    _inherits(ToggleButton, _Component);

    function ToggleButton(props) {
        _classCallCheck(this, ToggleButton);

        var _this = _possibleConstructorReturn(this, (ToggleButton.__proto__ || Object.getPrototypeOf(ToggleButton)).call(this, props));

        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(ToggleButton, [{
        key: 'toggle',
        value: function toggle(e) {
            if (this.props.onChange) {
                this.props.onChange({
                    originalEvent: e,
                    value: !this.props.checked
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var styleClass = (0, _classnames2.default)('ui-button ui-togglebutton ui-widget ui-state-default ui-corner-all', this.props.className, {
                'ui-button-text-icon-left': this.props.onIcon && this.props.offIcon,
                'ui-button-text-only': !this.props.onIcon && !this.props.offIcon && (this.props.onLabel || this.props.offLabel),
                'ui-state-active': this.props.checked,
                'ui-state-disabled': this.props.disabled
            }),
                iconStyleClass = null;

            if (this.props.onIcon || this.props.offIcon) {
                iconStyleClass = (0, _classnames2.default)('ui-c fa fa-fw', this.props.checked ? this.props.onIcon : this.props.offIcon, {
                    'ui-button-icon-only': this.props.onIcon && this.props.offIcon && (!this.props.onLabel || !this.props.offLabel),
                    'ui-button-icon-left': this.props.onIcon && this.props.offIcon
                });
            }

            return _react2.default.createElement(
                'div',
                { className: styleClass, style: this.props.style, onClick: this.toggle },
                _react2.default.createElement(
                    'div',
                    { className: 'ui-helper-hidden-accessible' },
                    _react2.default.createElement('input', { type: 'checkbox' })
                ),
                this.props.onIcon && this.props.offIcon && _react2.default.createElement('span', { className: iconStyleClass }),
                _react2.default.createElement(
                    'span',
                    { className: 'ui-button-text ui-unselectable-text' },
                    this.props.checked ? this.props.onLabel : this.props.offLabel
                )
            );
        }
    }]);

    return ToggleButton;
}(_react.Component);

ToggleButton.defaultProps = {
    onIcon: null,
    offIcon: null,
    onLabel: 'Yes',
    offLabel: 'No',
    style: null,
    className: null,
    checked: false,
    onChange: null
};
ToggleButton.propTypes = {
    onIcon: _propTypes2.default.string,
    offIcon: _propTypes2.default.string,
    onLabel: _propTypes2.default.string,
    offLabel: _propTypes2.default.string,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    checked: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Checkbox = undefined;

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

var Checkbox = exports.Checkbox = function (_Component) {
    _inherits(Checkbox, _Component);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this));

        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    _createClass(Checkbox, [{
        key: 'onClick',
        value: function onClick(e) {
            if (this.props.onChange) {
                this.props.onChange({
                    originalEvent: e,
                    value: this.props.value,
                    checked: !this.props.checked
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var boxClass = (0, _classnames2.default)('ui-chkbox-box ui-widget ui-corner-all ui-state-default', { 'ui-state-active': this.props.checked }),
                iconClass = (0, _classnames2.default)('ui-chkbox-icon ui-c', { 'fa fa-check': this.props.checked });

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('ui-chkbox-container', this.props.className) },
                _react2.default.createElement(
                    'div',
                    { className: 'ui-chkbox ui-widget' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ui-helper-hidden-accessible' },
                        _react2.default.createElement('input', { type: 'checkbox' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: boxClass,
                            onClick: this.onClick },
                        _react2.default.createElement('span', { className: iconClass })
                    )
                ),
                this.props.label && _react2.default.createElement(
                    'label',
                    { className: 'ui-chkbox-label', onClick: this.onClick },
                    this.props.label
                )
            );
        }
    }]);

    return Checkbox;
}(_react.Component);

Checkbox.defaultProps = {
    label: null,
    value: null,
    onChange: null,
    checked: false
};
Checkbox.propTypes = {
    label: _propTypes2.default.string,
    value: _propTypes2.default.any,
    onChange: _propTypes2.default.func,
    checked: _propTypes2.default.bool
};
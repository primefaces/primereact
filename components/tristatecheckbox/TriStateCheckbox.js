'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TriStateCheckbox = undefined;

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

var TriStateCheckbox = exports.TriStateCheckbox = function (_Component) {
    _inherits(TriStateCheckbox, _Component);

    function TriStateCheckbox(props) {
        _classCallCheck(this, TriStateCheckbox);

        var _this = _possibleConstructorReturn(this, (TriStateCheckbox.__proto__ || Object.getPrototypeOf(TriStateCheckbox)).call(this, props));

        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    _createClass(TriStateCheckbox, [{
        key: 'onClick',
        value: function onClick(event) {
            this.toggle(event);
            this.inputEL.focus();
        }
    }, {
        key: 'toggle',
        value: function toggle(event) {
            var newValue;
            if (this.props.value === null || this.props.value === undefined) newValue = true;else if (this.props.value === true) newValue = false;else if (this.props.value === false) newValue = null;

            if (this.props.onChange) {
                this.props.onChange({
                    originalEvent: event,
                    value: newValue
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var boxClass = (0, _classnames2.default)('ui-chkbox-box ui-widget ui-corner-all ui-state-default', { 'ui-state-active': (this.props.value || !this.props.value) && this.props.value !== null }),
                iconClass = (0, _classnames2.default)('ui-chkbox-icon ui-c', { 'fa fa-check': this.props.value === true, 'fa fa-close': this.props.value === false });

            return _react2.default.createElement(
                'div',
                { className: 'ui-chkbox ui-tristatechkbox ui-widget' },
                _react2.default.createElement(
                    'div',
                    { className: 'ui-helper-hidden-accessible' },
                    _react2.default.createElement('input', { ref: function ref(el) {
                            return _this2.inputEL = el;
                        }, type: 'checkbox', readOnly: true })
                ),
                _react2.default.createElement(
                    'div',
                    { className: boxClass,
                        onClick: this.onClick },
                    _react2.default.createElement('span', { className: iconClass })
                )
            );
        }
    }]);

    return TriStateCheckbox;
}(_react.Component);

TriStateCheckbox.defaultProps = {
    value: null,
    onChange: null
};
TriStateCheckbox.propTypes = {
    value: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};
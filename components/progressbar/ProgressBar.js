'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProgressBar = undefined;

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

var ProgressBar = exports.ProgressBar = function (_Component) {
    _inherits(ProgressBar, _Component);

    function ProgressBar() {
        _classCallCheck(this, ProgressBar);

        return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
    }

    _createClass(ProgressBar, [{
        key: 'render',
        value: function render() {
            var className = (0, _classnames2.default)('ui-progressbar ui-widget ui-widget-content ui-corner-all', this.props.className);
            if (this.props.showValue) {
                var label = _react2.default.createElement(
                    'div',
                    { className: 'ui-progressbar-label', style: { display: this.props.value ? 'block' : 'none' } },
                    this.props.value + this.props.unit
                );
            }

            return _react2.default.createElement(
                'div',
                { className: className, role: 'progressbar', 'aria-valuemin': '0', 'aria-valuenow': this.props.value, 'aria-valuemax': '100', style: this.props.style },
                _react2.default.createElement('div', { className: 'ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all', style: { width: this.props.value + '%' } }),
                label
            );
        }
    }]);

    return ProgressBar;
}(_react.Component);

ProgressBar.defaultProps = {
    value: null,
    showValue: true,
    unit: '%',
    style: null,
    className: null
};
ProgressBar.propTypes = {
    value: _propTypes2.default.number,
    showValue: _propTypes2.default.bool,
    unit: _propTypes2.default.string,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string
};
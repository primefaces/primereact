'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Chart = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _chart = require('chart.js/src/chart.js');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chart = exports.Chart = function (_Component) {
    _inherits(Chart, _Component);

    function Chart() {
        _classCallCheck(this, Chart);

        return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).apply(this, arguments));
    }

    _createClass(Chart, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.chart = new _chart2.default(this.canvas, {
                type: this.props.type,
                data: this.props.data,
                options: this.props.options
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { style: this.props.style, className: this.props.className },
                _react2.default.createElement('canvas', { width: this.props.width, height: this.props.height, ref: function ref(el) {
                        _this2.canvas = el;
                    } })
            );
        }
    }]);

    return Chart;
}(_react.Component);

Chart.defaultProps = {
    type: null,
    data: null,
    options: null,
    width: null,
    height: null,
    style: null,
    className: null
};
Chart.propTypes = {
    type: _propTypes2.default.string,
    data: _propTypes2.default.object,
    options: _propTypes2.default.object,
    width: _propTypes2.default.string,
    height: _propTypes2.default.string,
    style: _propTypes2.default.string,
    className: _propTypes2.default.string
};
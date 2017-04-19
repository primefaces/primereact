'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CodeHighlight = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeHighlight = exports.CodeHighlight = function (_Component) {
    _inherits(CodeHighlight, _Component);

    function CodeHighlight() {
        _classCallCheck(this, CodeHighlight);

        return _possibleConstructorReturn(this, (CodeHighlight.__proto__ || Object.getPrototypeOf(CodeHighlight)).apply(this, arguments));
    }

    _createClass(CodeHighlight, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.Prism.highlightElement(this.code);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'pre',
                null,
                _react2.default.createElement(
                    'code',
                    { ref: function ref(el) {
                            return _this2.code = el;
                        }, className: this.props.className },
                    this.props.children
                )
            );
        }
    }]);

    return CodeHighlight;
}(_react.Component);

CodeHighlight.defaultProps = {
    className: null
};
CodeHighlight.propTypes = {
    className: _propTypes2.default.string
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Messages = undefined;

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

var Messages = exports.Messages = function (_Component) {
    _inherits(Messages, _Component);

    function Messages(props) {
        _classCallCheck(this, Messages);

        var _this = _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).call(this, props));

        _this.state = { messages: _this.props.value };
        _this.clear = _this.clear.bind(_this);
        return _this;
    }

    _createClass(Messages, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ messages: nextProps.value });
        }
    }, {
        key: 'clear',
        value: function clear(event) {
            this.setState({ messages: [] });
            if (this.props.onClear) {
                this.props.onClear();
            }
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.state.messages && this.state.messages.length) {
                var firstMessage = this.state.messages[0];
                var severity = firstMessage.severity || 'info';

                var className = (0, _classnames2.default)('ui-messages ui-widget ui-corner-all', {
                    'ui-messages-info': severity === 'info',
                    'ui-messages-warn': severity === 'warn',
                    'ui-messages-error': severity === 'error',
                    'ui-messages-success': severity === 'success'
                });

                var icon = (0, _classnames2.default)('ui-messages-icon fa fa-fw fa-2x', {
                    'fa-info': severity === 'info',
                    'fa-warning': severity === 'warn',
                    'fa-close': severity === 'error',
                    'fa-check': severity === 'success'
                });

                if (this.props.closable) {
                    var closeIcon = _react2.default.createElement(
                        'a',
                        { href: '#', className: 'ui-messages-close', onClick: this.clear },
                        _react2.default.createElement('i', { className: 'fa fa-close' })
                    );
                }

                return _react2.default.createElement(
                    'div',
                    { className: className, style: this.props.style, ref: function ref(el) {
                            _this2.container = el;
                        } },
                    closeIcon,
                    _react2.default.createElement('span', { className: icon }),
                    _react2.default.createElement(
                        'ul',
                        null,
                        this.state.messages.map(function (msg) {
                            return _react2.default.createElement(
                                'li',
                                { key: msg.summary + msg.detail },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'ui-messages-summary' },
                                    msg.summary
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'ui-messages-detail' },
                                    msg.detail
                                )
                            );
                        })
                    )
                );
            } else {
                return null;
            }
        }
    }]);

    return Messages;
}(_react.Component);

Messages.defaultProps = {
    closable: true,
    className: null,
    style: null,
    onClear: null
};
Messages.propTypes = {
    closable: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    onClear: _propTypes2.default.func
};
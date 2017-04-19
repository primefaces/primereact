'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Growl = undefined;

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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Growl = exports.Growl = function (_Component) {
    _inherits(Growl, _Component);

    function Growl(props) {
        _classCallCheck(this, Growl);

        var _this = _possibleConstructorReturn(this, (Growl.__proto__ || Object.getPrototypeOf(Growl)).call(this, props));

        _this.state = { messages: _this.props.value };
        _this.clear = _this.clear.bind(_this);
        return _this;
    }

    _createClass(Growl, [{
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
            this.removed = true;
            event.preventDefault();
        }
    }, {
        key: 'remove',
        value: function remove(event, msg, index) {
            var _this2 = this;

            var element = event.target.parentElement.parentElement;
            _DomHandler2.default.fadeOut(element, 250);
            setTimeout(function () {
                _this2.removed = true;
                var msgs = [].concat(_toConsumableArray(_this2.state.messages));
                msgs.splice(index, 1);
                _this2.setState({ messages: msgs });
            }, 250);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _DomHandler2.default.fadeIn(this.container, 250);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (!this.removed) {
                _DomHandler2.default.fadeIn(this.container, 250);
            }
            this.removed = false;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var className = (0, _classnames2.default)('ui-growl ui-widget', this.props.className);

            if (this.state.messages) {
                var messageItems = this.state.messages.map(function (msg, index) {
                    var severity = msg.severity;
                    var messageClassName = (0, _classnames2.default)('ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow', {
                        'ui-growl-message-info': severity === 'info',
                        'ui-growl-message-warn': severity === 'warn',
                        'ui-growl-message-error': severity === 'error',
                        'ui-growl-message-success': severity === 'success'
                    });

                    var iconClassName = (0, _classnames2.default)('ui-growl-image fa fa-2x', {
                        'fa-info': severity === 'info',
                        'fa-warning': severity === 'warn',
                        'fa-close': severity === 'error',
                        'fa-check': severity === 'success'
                    });

                    return _react2.default.createElement(
                        'div',
                        { className: messageClassName, 'aria-live': 'polite', key: msg.summary + msg.detail },
                        _react2.default.createElement(
                            'div',
                            { className: 'ui-growl-item ui-helper-clearfix' },
                            _react2.default.createElement('div', { className: 'ui-growl-icon-close fa fa-close', onClick: function onClick(event) {
                                    return _this3.remove(event, msg, index);
                                } }),
                            _react2.default.createElement('span', { className: iconClassName }),
                            _react2.default.createElement(
                                'div',
                                { className: 'ui-growl-message' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'ui-growl-title' },
                                    msg.summary
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    msg.detail
                                )
                            )
                        )
                    );
                });
            }

            return _react2.default.createElement(
                'div',
                { className: className, ref: function ref(el) {
                        _this3.container = el;
                    }, style: this.props.style },
                messageItems
            );
        }
    }]);

    return Growl;
}(_react.Component);

Growl.defaultProps = {
    closable: true,
    className: null,
    style: null,
    onClear: null
};
Growl.propTypes = {
    closable: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    onClear: _propTypes2.default.func
};
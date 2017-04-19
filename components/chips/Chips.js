'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Chips = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _InputText = require('../inputtext/InputText');

var _ObjectUtils = require('../utils/ObjectUtils');

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chips = exports.Chips = function (_Component) {
    _inherits(Chips, _Component);

    function Chips(props) {
        _classCallCheck(this, Chips);

        var _this = _possibleConstructorReturn(this, (Chips.__proto__ || Object.getPrototypeOf(Chips)).call(this, props));

        _this.state = { values: props.value, focus: false };
        _this.inputFocus = _this.inputFocus.bind(_this);
        return _this;
    }

    _createClass(Chips, [{
        key: 'onKeydown',
        value: function onKeydown(event) {
            var stateValues;

            switch (event.which) {
                //backspace
                case 8:
                    if (this.inputEL.value.length === 0 && this.state.values && this.state.values.length > 0) {
                        stateValues = [].concat(_toConsumableArray(this.state.values));
                        var removedItem = stateValues.pop();
                        this.setState({ values: stateValues });

                        if (this.props.onRemove) {
                            this.props.onRemove({
                                originalEvent: event,
                                value: removedItem
                            });
                        }
                    }
                    break;

                //enter
                case 13:
                    if (this.inputEL.value && this.inputEL.value.trim().length && (!this.props.max || this.props.max > this.state.values.length)) {
                        stateValues = [].concat(_toConsumableArray(this.state.values));
                        stateValues.push(this.inputEL.value);
                        this.setState({ values: stateValues });

                        if (this.props.onAdd) {
                            this.props.onAdd({
                                originalEvent: event,
                                value: this.inputEL.value
                            });
                        }
                    }
                    this.inputEL.value = '';
                    event.preventDefault();
                    break;

                default:
                    if (this.props.max && this.state.values && this.props.max === this.state.values.length) {
                        event.preventDefault();
                    }
                    break;
            }
        }
    }, {
        key: 'removeItem',
        value: function removeItem(event, index) {
            if (this.props.disabled) {
                return;
            }

            var stateValues = [].concat(_toConsumableArray(this.state.values));
            var removedItem = stateValues.splice(index, 1);
            this.setState({ values: stateValues });

            if (this.props.onRemove) {
                this.props.onRemove({
                    originalEvent: event,
                    value: removedItem
                });
            }
        }
    }, {
        key: 'maxedOut',
        value: function maxedOut() {
            return this.props.max && this.state.values && this.props.max === this.state.values.length;
        }
    }, {
        key: 'inputFocus',
        value: function inputFocus() {
            this.inputEL.focus();
        }
    }, {
        key: 'onFocus',
        value: function onFocus() {
            this.setState({ focus: true });
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            this.setState({ focus: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var listClassName = (0, _classnames2.default)('ui-inputtext ui-state-default ui-corner-all', {
                'ui-state-disabled': this.props.disabled,
                'ui-state-focus': this.state.focus
            });

            if (this.state.values) {
                var items = this.state.values.map(function (value, index) {
                    var customContent = _this2.props.itemTemplate ? _this2.props.itemTemplate(value) : value;
                    var item = _react2.default.createElement(
                        'li',
                        { className: 'ui-chips-token ui-state-highlight ui-corner-all', key: index },
                        _react2.default.createElement('span', { className: 'ui-chips-token-icon fa fa-fw fa-close', onClick: function onClick(event) {
                                return _this2.removeItem(event, index);
                            } }),
                        _react2.default.createElement(
                            'span',
                            { className: 'ui-chips-token-label' },
                            _this2.props.field ? _ObjectUtils2.default.resolveFieldData(value, _this2.props.field) : customContent
                        )
                    );
                    return item;
                });
            }

            var inputToken = _react2.default.createElement(
                'li',
                { className: 'ui-chips-input-token' },
                _react2.default.createElement(_InputText.InputText, { ref: function ref(el) {
                        return _this2.inputEL = _reactDom2.default.findDOMNode(el);
                    }, type: 'text', disabled: this.props.disabled || this.maxedOut(),
                    onKeyDown: function onKeyDown(event) {
                        return _this2.onKeydown(event);
                    }, onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this) })
            );

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('ui-chips ui-widget', this.props.className), style: this.props.style },
                    _react2.default.createElement(
                        'ul',
                        { className: listClassName, onClick: this.inputFocus },
                        items,
                        inputToken
                    )
                )
            );
        }
    }]);

    return Chips;
}(_react.Component);

Chips.defaultProps = {
    placeholder: null,
    value: [],
    field: null,
    max: null,
    disabled: null,
    style: null,
    className: null,
    onAdd: null,
    onRemove: null,
    itemTemplate: null
};
Chips.propTypes = {
    placeholder: _propTypes2.default.string,
    value: _propTypes2.default.array,
    field: _propTypes2.default.string,
    max: _propTypes2.default.number,
    disabled: _propTypes2.default.bool,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    onAdd: _propTypes2.default.func,
    onRemove: _propTypes2.default.func,
    itemTemplate: _propTypes2.default.func
};
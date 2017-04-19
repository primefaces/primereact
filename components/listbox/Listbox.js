'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Listbox = undefined;

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

var Listbox = exports.Listbox = function (_Component) {
    _inherits(Listbox, _Component);

    function Listbox() {
        _classCallCheck(this, Listbox);

        return _possibleConstructorReturn(this, (Listbox.__proto__ || Object.getPrototypeOf(Listbox)).apply(this, arguments));
    }

    _createClass(Listbox, [{
        key: 'onOptionClick',
        value: function onOptionClick(event, option, index) {
            this.props.onChange({
                originalEvent: event,
                value: option.value,
                index: index
            });
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var styleClass = (0, _classnames2.default)('ui-listbox ui-inputtext ui-widget ui-widget-content ui-corner-all', this.props.className, {
                'ui-state-disabled': this.props.disabled
            });

            return _react2.default.createElement(
                'div',
                { className: styleClass, style: this.props.style },
                _react2.default.createElement(
                    'ul',
                    { className: 'ui-listbox-list' },
                    this.props.options && this.props.options.map(function (option, index) {
                        var listItemContent = _this2.props.itemTemplate ? _this2.props.itemTemplate(option) : option.label,
                            selected = _this2.props.value != null && _this2.props.value === option.value,
                            listItemStyleClass = (0, _classnames2.default)('ui-listbox-item ui-corner-all', { 'ui-state-highlight': selected }),
                            listItem = _react2.default.createElement(
                            'li',
                            { className: listItemStyleClass, key: option.value,
                                onClick: function onClick(event) {
                                    return _this2.onOptionClick(event, option, index);
                                } },
                            listItemContent
                        );
                        return listItem;
                    })
                )
            );
        }
    }]);

    return Listbox;
}(_react.Component);

Listbox.defaultProps = {
    value: null,
    options: null,
    onChange: null,
    itemTemplate: null,
    style: null,
    className: null
};
Listbox.propTypes = {
    value: _propTypes2.default.any,
    options: _propTypes2.default.array,
    onChange: _propTypes2.default.func,
    itemTemplate: _propTypes2.default.func,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string
};
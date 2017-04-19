'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SelectButton = undefined;

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

var SelectButton = exports.SelectButton = function (_Component) {
    _inherits(SelectButton, _Component);

    function SelectButton(props) {
        _classCallCheck(this, SelectButton);

        var _this = _possibleConstructorReturn(this, (SelectButton.__proto__ || Object.getPrototypeOf(SelectButton)).call(this, props));

        _this.state = {};
        _this.onItemClick = _this.onItemClick.bind(_this);
        return _this;
    }

    _createClass(SelectButton, [{
        key: 'onItemClick',
        value: function onItemClick(e, option, i) {
            var selected = this.isSelected(i);

            if (this.props.multiple) {
                var indexes = this.state.activeIndex || [];
                if (selected) indexes = indexes.filter(function (index) {
                    return index !== i;
                });else indexes.push(i);

                this.setState({ activeIndex: indexes });
            } else {
                if (selected) this.setState({ activeIndex: null });else this.setState({ activeIndex: i });
            }

            if (this.props.onChange) {
                this.props.onChange({
                    originalEvent: event,
                    value: option.value,
                    index: i
                });
                event.preventDefault();
            }
        }
    }, {
        key: 'isSelected',
        value: function isSelected(i) {
            return this.props.multiple ? this.state.activeIndex && this.state.activeIndex.includes(i) : this.state.activeIndex === i;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var styleClass = (0, _classnames2.default)('ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-3', this.props.className);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: styleClass, style: this.props.style },
                    this.props.options.map(function (option, index) {
                        var selected = _this2.isSelected(index);
                        var innerStyleClass = (0, _classnames2.default)('ui-button ui-widget ui-state-default ui-button-text-only', {
                            'ui-state-active': selected,
                            'ui-state-disabled': _this2.props.disabled
                        });
                        var buttonset = _react2.default.createElement(
                            'div',
                            { className: innerStyleClass, key: option.label, onClick: function onClick() {
                                    return _this2.onItemClick(event, option, index);
                                } },
                            _react2.default.createElement(
                                'span',
                                { className: 'ui-button-text ui-c' },
                                option.label
                            )
                        );
                        return buttonset;
                    })
                )
            );
        }
    }]);

    return SelectButton;
}(_react.Component);

SelectButton.defaultProps = {
    activeIndex: null,
    options: null,
    tabindex: null,
    multiple: null,
    disabled: null,
    style: null,
    className: null,
    onChange: null
};
SelectButton.propTypes = {
    activeIndex: _propTypes2.default.any,
    options: _propTypes2.default.array,
    tabindex: _propTypes2.default.number,
    multiple: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    onChange: _propTypes2.default.func
};
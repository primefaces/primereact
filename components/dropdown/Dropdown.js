'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dropdown = undefined;

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = exports.Dropdown = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

        _this.state = { focus: false };
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    _createClass(Dropdown, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.documentClickListener = this.onDocumentClick.bind(this);
            document.addEventListener('click', this.documentClickListener);

            if (this.props.autoWidth) {
                if (!this.props.style || !this.props.style['width'] && !this.props.style['min-width']) {
                    this.container.style.width = this.selectElement.offsetWidth + 32 + 'px';
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.documentClickListener) {
                document.removeEventListener('click', this.documentClickListener);
            }
        }
    }, {
        key: 'onDocumentClick',
        value: function onDocumentClick() {
            if (!this.selfClick && !this.itemClick) {
                this.hide();
            }

            this.selfClick = false;
            this.optionClick = false;
        }
    }, {
        key: 'onOptionClick',
        value: function onOptionClick(event, option, index) {
            this.optionClick = true;
            this.selectItem(event, option, index);
            this.hide();
            event.preventDefault();
        }
    }, {
        key: 'selectItem',
        value: function selectItem(event, option, index) {
            this.props.onChange({
                originalEvent: event,
                value: option.value,
                index: index
            });
        }
    }, {
        key: 'onClick',
        value: function onClick() {
            if (this.props.disabled) {
                return;
            }

            this.selfClick = true;

            if (!this.optionClick) {
                if (this.panel.offsetParent) this.hide();else this.show();
            }
        }
    }, {
        key: 'findSelectedOption',
        value: function findSelectedOption() {
            var selectedOption;
            if (this.props.options) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.props.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var option = _step.value;

                        if (option.value === this.props.value) {
                            selectedOption = option;
                            break;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }

            return selectedOption;
        }
    }, {
        key: 'show',
        value: function show() {
            if (this.props.options && this.props.options.length) {
                this.panel.style.zIndex = _DomHandler2.default.getZindex();
                _DomHandler2.default.relativePosition(this.panel, this.container);
                _DomHandler2.default.fadeIn(this.panel, 250);
                this.panel.style.display = 'block';
            }
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.panel.style.display = 'none';
        }
    }, {
        key: 'onInputFocus',
        value: function onInputFocus(event) {
            this.setState({ focus: true });
        }
    }, {
        key: 'onInputBlur',
        value: function onInputBlur(event) {
            this.setState({ focus: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var styleClass = (0, _classnames2.default)('ui-dropdown ui-widget ui-state-default ui-corner-all', this.props.className, {
                'ui-state-disabled': this.props.disabled,
                'ui-state-focus': this.state.focus
            });

            var selectedOption = this.findSelectedOption();
            var label = selectedOption ? selectedOption.label : this.props.options ? this.props.options[0].label : null;
            var listItems, optionElements;

            if (this.props.options) {
                listItems = this.props.options.map(function (option, index) {
                    var listItemContent = _this2.props.itemTemplate ? _this2.props.itemTemplate(option) : option.label;
                    var selected = _this2.props.value != null && _this2.props.value === option.value || _this2.props.value == null && index === 0;
                    var listItemStyleClass = (0, _classnames2.default)('ui-dropdown-item ui-corner-all', { 'ui-state-highlight': selected });
                    var listItem = _react2.default.createElement(
                        'li',
                        { className: listItemStyleClass, key: option.value,
                            onClick: function onClick(event) {
                                return _this2.onOptionClick(event, option);
                            } },
                        listItemContent
                    );

                    return listItem;
                });

                optionElements = this.props.options.map(function (option, index) {
                    return _react2.default.createElement(
                        'option',
                        { value: option.value, key: option.value },
                        option.label
                    );
                });
            }

            return _react2.default.createElement(
                'div',
                { className: styleClass, onClick: this.onClick, ref: function ref(el) {
                        _this2.container = el;
                    }, style: this.props.style },
                _react2.default.createElement(
                    'div',
                    { className: 'ui-helper-hidden-accessible' },
                    _react2.default.createElement(
                        'select',
                        { tabIndex: '-1', ref: function ref(el) {
                                _this2.selectElement = el;
                            } },
                        optionElements
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ui-helper-hidden-accessible' },
                    _react2.default.createElement('input', { readOnly: true, type: 'text', onFocus: this.onInputFocus.bind(this), onBlur: this.onInputBlur.bind(this) })
                ),
                _react2.default.createElement(
                    'label',
                    { className: 'ui-dropdown-label ui-inputtext ui-corner-all' },
                    label
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ui-dropdown-trigger ui-state-default ui-corner-right' },
                    _react2.default.createElement('span', { className: 'fa fa-fw fa-caret-down ui-c' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ui-dropdown-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow', ref: function ref(el) {
                            _this2.panel = el;
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'ui-dropdown-items-wrapper', style: { maxHeight: this.props.scrollHeight } },
                        _react2.default.createElement(
                            'ul',
                            { className: 'ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset' },
                            listItems
                        )
                    )
                )
            );
        }
    }]);

    return Dropdown;
}(_react.Component);

Dropdown.defaultProps = {
    value: null,
    options: null,
    onChange: null,
    itemTemplate: null,
    style: null,
    className: null,
    autoWidth: true,
    scrollHeight: '200px'
};
Dropdown.propTypes = {
    value: _propTypes2.default.any,
    options: _propTypes2.default.array,
    onChange: _propTypes2.default.func,
    itemTemplate: _propTypes2.default.func,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    autoWidth: _propTypes2.default.bool,
    scrollHeight: _propTypes2.default.string
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AutoComplete = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _InputText = require('../inputtext/InputText');

var _Button = require('../button/Button');

var _DomHandler = require('../utils/DomHandler');

var _DomHandler2 = _interopRequireDefault(_DomHandler);

var _ObjectUtils = require('../utils/ObjectUtils');

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoComplete = exports.AutoComplete = function (_Component) {
    _inherits(AutoComplete, _Component);

    function AutoComplete(props) {
        _classCallCheck(this, AutoComplete);

        var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props));

        _this.state = { panelVisible: false, focus: false };
        return _this;
    }

    _createClass(AutoComplete, [{
        key: 'onInput',
        value: function onInput(event) {
            var _this2 = this;

            var value = event.target.value;
            if (!this.props.multiple) {
                this.value = value;
            }

            if (value.length === 0) {
                this.hide();
            }

            if (value.length >= this.props.minLength) {
                //Cancel the search request if user types within the timeout
                if (this.timeout) {
                    clearTimeout(this.timeout);
                }

                this.timeout = setTimeout(function () {
                    _this2.search(event, value);
                }, this.props.delay);
            } else {
                this.suggestions = null;
                clearTimeout(this.timeout);
            }
        }
    }, {
        key: 'search',
        value: function search(event, query) {
            //allow empty string but not undefined or null
            if (query === undefined || query === null) {
                return;
            }

            if (this.props.completeMethod) {
                this.props.completeMethod({
                    originalEvent: event,
                    query: query
                });
            }
        }
    }, {
        key: 'selectItem',
        value: function selectItem(e, option) {
            if (this.props.multiple) {
                this.inputEl.value = '';
                this.value = this.value || [];
                if (!this.isSelected(option)) {
                    this.value.push(option);
                }
            } else {
                this.inputEl.value = this.props.field ? _ObjectUtils2.default.resolveFieldData(option, this.props.field) : option;
                this.value = option;
            }

            this.props.onChange({
                originalEvent: e,
                value: this.value
            });

            if (this.props.onSelect) {
                this.props.onSelect({
                    originalEvent: e,
                    value: option
                });
            }

            this.inputEl.focus();
        }
    }, {
        key: 'show',
        value: function show() {
            if (!this.state.panelVisible && (this.state.focus || this.dropdownFocus)) {

                this.setState({ panelVisible: true });
                this.panel.style.zIndex = _DomHandler2.default.getZindex();
                this.panel.style.display = "block";
                _DomHandler2.default.fadeIn(this.panel, 200);
            }
        }
    }, {
        key: 'align',
        value: function align() {
            if (this.props.appendTo) _DomHandler2.default.absolutePosition(this.panel, this.props.multiple ? this.multipleContainerEl : this.inputEl);else _DomHandler2.default.relativePosition(this.panel, this.props.multiple ? this.multipleContainerEl : this.inputEl);
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.setState({ panelVisible: false });
            this.panel.style.display = 'none';
        }
    }, {
        key: 'handleDropdownClick',
        value: function handleDropdownClick(event) {
            if (this.props.onDropdownClick) {
                this.props.onDropdownClick({
                    originalEvent: event,
                    query: this.inputEl.value
                });
            }
        }
    }, {
        key: 'removeItem',
        value: function removeItem(e, itemIndex) {
            var removedValue = this.value.splice(itemIndex, 1)[0];
            if (this.props.onUnselect) {
                this.props.onUnselect({
                    originalEvent: e,
                    value: removedValue
                });
            }

            this.props.onChange({
                originalEvent: e,
                value: this.value
            });
        }
    }, {
        key: 'onKeydown',
        value: function onKeydown(event) {
            if (this.state.panelVisible) {
                var highlightItemIndex = this.findOptionIndex(this.state.highlightOption);

                switch (event.which) {
                    //down
                    case 40:
                        if (highlightItemIndex !== -1) {
                            var nextItemIndex = highlightItemIndex + 1;
                            if (nextItemIndex !== this.suggestions.length) {
                                this.highlightOption = this.suggestions[nextItemIndex];
                                this.highlightOptionChanged = true;
                            }
                        } else {
                            this.highlightOption = this.suggestions[0];
                        }
                        event.preventDefault();
                        break;

                    //up
                    case 38:
                        if (highlightItemIndex > 0) {
                            var prevItemIndex = highlightItemIndex - 1;
                            this.highlightOption = this.suggestions[prevItemIndex];
                            this.highlightOptionChanged = true;
                        }

                        event.preventDefault();
                        break;

                    //enter
                    case 13:
                        if (this.highlightOption) {
                            this.selectItem(event, this.highlightOption);
                            this.hide();
                        }
                        event.preventDefault();
                        break;

                    //escape
                    case 27:
                        this.hide();
                        event.preventDefault();
                        break;

                    //tab
                    case 9:
                        if (this.highlightOption) {
                            this.selectItem(event, this.highlightOption);
                        }
                        this.hide();
                        break;

                    default:
                        break;

                }
            } else {
                if (event.which === 40 && this.suggestions) {
                    this.search(event, event.target.value);
                }
            }

            this.setState({ highlightOption: this.highlightOption });

            if (this.props.multiple) {
                switch (event.which) {
                    //backspace
                    case 8:
                        if (this.value && this.value.length && !this.inputEl.value) {
                            var removedValue = this.value.pop();
                            if (this.props.onUnselect) {
                                this.props.onUnselect({
                                    originalEvent: event,
                                    value: removedValue
                                });
                            }
                            this.props.onChange({
                                originalEvent: event,
                                value: this.value
                            });
                        }
                        break;

                    default:
                        break;
                }
            }
        }
    }, {
        key: 'onInputFocus',
        value: function onInputFocus(event) {
            this.setState({ focus: true });
            if (this.props.onFocus) {
                this.props.onFocus({
                    originalEvent: event
                });
            }
        }
    }, {
        key: 'onInputChange',
        value: function onInputChange(event) {
            this.props.onChange({
                originalEvent: event,
                value: event.target.value
            });

            if (this.props.completeMethod) {
                this.props.completeMethod({
                    originalEvent: event,
                    query: event.target.value
                });
            }
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            this.setState({ focus: false });
        }
    }, {
        key: 'onDropdownFocus',
        value: function onDropdownFocus() {
            this.dropdownFocus = true;
            this.inputEl.focus();
        }
    }, {
        key: 'onDropdownBlur',
        value: function onDropdownBlur() {
            this.dropdownFocus = false;
        }
    }, {
        key: 'isSelected',
        value: function isSelected(val) {
            var selected = false;
            if (this.value && this.value.length) {
                for (var i = 0; i < this.value.length; i++) {
                    if (_ObjectUtils2.default.equals(this.value[i], val)) {
                        selected = true;
                        break;
                    }
                }
            }
            return selected;
        }
    }, {
        key: 'findOptionIndex',
        value: function findOptionIndex(option) {
            var index = -1;
            if (this.suggestions) {
                for (var i = 0; i < this.suggestions.length; i++) {
                    if (_ObjectUtils2.default.equals(option, this.suggestions[i])) {
                        index = i;
                        break;
                    }
                }
            }

            return index;
        }
    }, {
        key: 'onMouseEnterForItem',
        value: function onMouseEnterForItem(suggestion) {
            this.setState({ highlightOption: suggestion });
        }
    }, {
        key: 'onMouseLeaveForItem',
        value: function onMouseLeaveForItem() {
            this.setState({ highlightOption: null });
        }
    }, {
        key: 'writeValue',
        value: function writeValue(value) {
            if (this.props.multiple) {
                this.value = value;
            } else {
                this.value = value ? this.props.field ? _ObjectUtils2.default.resolveFieldData(value, this.props.field) : value : '';
                this.inputEl.value = this.value;
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            this.panel = this.autoComplete.querySelector('div.ui-autocomplete-panel');

            this.documentClickListener = function () {
                _this3.hide();
            };

            document.addEventListener('click', this.documentClickListener);

            if (this.props.appendTo) {
                if (this.props.appendTo === 'body') document.body.appendChild(this.panel);else _DomHandler2.default.appendChild(this.panel, this.props.appendTo);
            }
            this.writeValue(this.props.value);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var newSuggestions = nextProps.suggestions;
            if (newSuggestions && this.state.focus) {
                this.suggestions = newSuggestions;
                if (this.suggestions && this.suggestions.length) {
                    this.show();
                    this.align();
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
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.highlightOption !== this.state.highlightOption) {
                var listItem = this.panel.querySelector('li.ui-state-highlight');
                if (listItem) {
                    _DomHandler2.default.scrollInView(this.panel, listItem);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var styleClass = (0, _classnames2.default)('ui-autocomplete ui-widget', this.props.styleClass, {
                'ui-autocomplete-dd': this.props.dropdown,
                'ui-autocomplete-multiple': this.props.multiple
            });

            if (this.props.multiple) {
                var multipleContainerClass = (0, _classnames2.default)("ui-autocomplete-multiple-container ui-widget ui-inputtext ui-state-default ui-corner-all", {
                    'ui-state-disabled': this.props.disabled,
                    'ui-state-focus': this.state.focus
                }),
                    multipleContainer = _react2.default.createElement(
                    'ul',
                    { ref: function ref(el) {
                            _this4.multipleContainerEl = el;
                        }, className: multipleContainerClass },
                    this.value && this.value.map(function (val, index) {
                        var itemContainer = _this4.props.selectedItemTemplate ? _this4.props.selectedItemTemplate(val) : _react2.default.createElement(
                            'span',
                            { className: 'ui-autocomplete-token-label' },
                            _this4.props.field ? _ObjectUtils2.default.resolveFieldData(val, _this4.props.field) : val
                        );
                        return _react2.default.createElement(
                            'li',
                            { className: 'ui-autocomplete-token ui-state-highlight ui-corner-all', key: index + 'multipleItem' },
                            _react2.default.createElement('span', { className: 'ui-autocomplete-token-icon fa fa-fw fa-close', onClick: function onClick(e) {
                                    return _this4.removeItem(e, index);
                                } }),
                            itemContainer
                        );
                    }),
                    _react2.default.createElement(
                        'li',
                        { className: 'ui-autocomplete-input-token' },
                        _react2.default.createElement(_InputText.InputText, { ref: function ref(el) {
                                _this4.inputEl = _reactDom2.default.findDOMNode(el);
                            }, type: 'text', disabled: this.props.disabled, placeholder: this.props.placeholder, tabIndex: this.props.tabindex, onInput: this.onInput.bind(this),
                            onKeyDown: this.onKeydown.bind(this), onFocus: this.onInputFocus.bind(this), onBlur: this.onBlur.bind(this), autoComplete: 'off' })
                    )
                );
            } else {
                var inputClass = (0, _classnames2.default)('ui-autocomplete-input', this.props.inputClassName, {
                    'ui-autocomplete-dd-input': this.props.dropdown
                }),
                    input = _react2.default.createElement(_InputText.InputText, { ref: function ref(el) {
                        _this4.inputEl = _reactDom2.default.findDOMNode(el);
                    }, type: 'text', className: inputClass, style: this.props.inputStyle, autoComplete: 'off',
                    onInput: this.onInput.bind(this), onKeyDown: this.onKeydown.bind(this), onFocus: this.onInputFocus.bind(this), onChange: this.onInputChange.bind(this),
                    onBlur: this.onBlur.bind(this), placeholder: this.props.placeholder, size: this.props.size, maxLength: this.props.maxlength, tabIndex: this.props.tabindex,
                    readOnly: this.props.readonly, disabled: this.props.disabled });
            }

            var dropdownButton = this.props.dropdown && _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-fw fa-caret-down', className: 'ui-autocomplete-dropdown', disabled: this.props.disabled,
                onClick: this.handleDropdownClick.bind(this), onFocus: this.onDropdownFocus.bind(this), onBlur: this.onDropdownBlur.bind(this) });

            if (this.suggestions) {
                var suggestions = this.suggestions.map(function (suggestion, index) {
                    var itemClass = (0, _classnames2.default)('ui-autocomplete-list-item ui-corner-all', {
                        'ui-state-highlight': _this4.state.highlightOption === suggestion
                    }),
                        itemContent = _this4.props.itemTemplate ? _this4.props.itemTemplate(suggestion) : _this4.props.field ? _ObjectUtils2.default.resolveFieldData(suggestion, _this4.props.field) : suggestion;
                    return _react2.default.createElement(
                        'li',
                        { className: itemClass, onClick: function onClick(event) {
                                return _this4.selectItem(event, suggestion);
                            }, key: index + '_item', onMouseEnter: function onMouseEnter(e) {
                                return _this4.onMouseEnterForItem(suggestion);
                            }, onMouseLeave: _this4.onMouseLeaveForItem.bind(_this4) },
                        itemContent
                    );
                });
            }

            var hasSuggestions = this.suggestions && this.suggestions.length;

            return _react2.default.createElement(
                'span',
                { className: styleClass, style: this.props.style, ref: function ref(el) {
                        _this4.autoComplete = _reactDom2.default.findDOMNode(el);
                    } },
                input,
                multipleContainer,
                dropdownButton,
                _react2.default.createElement(
                    'div',
                    { className: 'ui-autocomplete-panel ui-widget-content ui-corner-all ui-shadow', style: { display: hasSuggestions ? 'block' : 'none', width: this.props.appendTo ? 'auto' : '100%', maxHeight: this.props.scrollHeight } },
                    this.state.panelVisible && _react2.default.createElement(
                        'ul',
                        { className: 'ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset' },
                        suggestions
                    )
                )
            );
        }
    }]);

    return AutoComplete;
}(_react.Component);

AutoComplete.defaultProps = {
    value: null,
    suggestions: null,
    field: null,
    scrollHeight: '200px',
    dropdown: false,
    multiple: false,
    minLength: 1,
    delay: 300,
    style: null,
    styleClass: null,
    inputStyle: null,
    inputStyleClass: null,
    placeholder: null,
    readonly: false,
    disabled: false,
    maxlength: null,
    size: null,
    appendTo: null,
    tabindex: null,
    itemTemplate: null,
    selectedItemTemplate: null,
    onChange: null,
    completeMethod: null,
    onFocus: null,
    onSelect: null,
    onUnselect: null,
    onDropdownClick: null
};
AutoComplete.propTypes = {
    value: _propTypes2.default.any,
    suggestions: _propTypes2.default.array,
    field: _propTypes2.default.string,
    scrollHeight: _propTypes2.default.string,
    dropdown: _propTypes2.default.bool,
    multiple: _propTypes2.default.bool,
    minLength: _propTypes2.default.number,
    delay: _propTypes2.default.number,
    style: _propTypes2.default.object,
    styleClass: _propTypes2.default.string,
    inputStyle: _propTypes2.default.object,
    inputStyleClass: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    readonly: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    maxlength: _propTypes2.default.number,
    size: _propTypes2.default.number,
    appendTo: _propTypes2.default.any,
    tabindex: _propTypes2.default.number,
    itemTemplate: _propTypes2.default.func,
    selectedItemTemplate: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    completeMethod: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onSelect: _propTypes2.default.func,
    onUnselect: _propTypes2.default.func,
    onDropdownClick: _propTypes2.default.func
};
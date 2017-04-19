'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MultiSelect = undefined;

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

var MultiSelect = exports.MultiSelect = function (_Component) {
    _inherits(MultiSelect, _Component);

    function MultiSelect(props) {
        _classCallCheck(this, MultiSelect);

        var _this = _possibleConstructorReturn(this, (MultiSelect.__proto__ || Object.getPrototypeOf(MultiSelect)).call(this, props));

        _this.state = { focus: false };
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    _createClass(MultiSelect, [{
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
            var model = this.props.value ? this.props.value.slice() : [];
            var indexInValue = this.findIndexInValue(option);

            if (this.isSelected(option)) model.splice(indexInValue, 1);else model.push(option.value);

            this.props.onChange({
                originalEvent: event,
                value: model,
                index: index
            });

            event.preventDefault();
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
        key: 'findIndexInValue',
        value: function findIndexInValue(option) {
            return this.props.value ? this.props.value.findIndex(function (val) {
                return val === option.value;
            }) : -1;
        }
    }, {
        key: 'isSelected',
        value: function isSelected(option) {
            return this.props.value ? this.props.value.includes(option.value) : false;
        }
    }, {
        key: 'getLabel',
        value: function getLabel() {
            var label;
            if (this.props.value && this.props.value.length) {
                label = '';
                for (var i = 0; i < this.props.value.length; i++) {
                    if (i !== 0) {
                        label += ',';
                    }
                    label += this.findLabelByValue(this.props.value[i]);
                }
            } else {
                label = this.props.defaultLabel;
            }

            return label;
        }
    }, {
        key: 'findLabelByValue',
        value: function findLabelByValue(val) {
            var label = null;
            for (var i = 0; i < this.props.options.length; i++) {
                var option = this.props.options[i];
                if (option.value === val) {
                    label = option.label;
                    break;
                }
            }
            return label;
        }
    }, {
        key: 'onFocus',
        value: function onFocus(event) {
            this.setState({ focus: true });
        }
    }, {
        key: 'onBlur',
        value: function onBlur(event) {
            this.setState({ focus: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var styleClass = (0, _classnames2.default)('ui-multiselect ui-widget ui-state-default ui-corner-all', this.props.className, {
                'ui-state-disabled': this.props.disabled,
                'ui-state-focus': this.state.focus
            });

            var label = this.getLabel();
            var listItems;;

            if (this.props.options) {
                listItems = this.props.options.map(function (option, index) {
                    var selected = _this2.isSelected(option);
                    var listItemStyleClass = (0, _classnames2.default)('ui-multiselect-item ui-corner-all', { 'ui-state-highlight': selected });
                    var checkboxStyleClass = (0, _classnames2.default)('ui-chkbox-box ui-widget ui-corner-all ui-state-default', { 'ui-state-active': selected });
                    var checkboxIcon = (0, _classnames2.default)('ui-chkbox-icon ui-c', { 'fa fa-check': selected });
                    var listItem = _react2.default.createElement(
                        'li',
                        { className: listItemStyleClass, key: option.value, onClick: function onClick(event) {
                                return _this2.onOptionClick(event, option, index);
                            } },
                        _react2.default.createElement(
                            'div',
                            { className: 'ui-chkbox ui-widget' },
                            _react2.default.createElement(
                                'div',
                                { className: 'ui-helper-hidden-accessible' },
                                _react2.default.createElement('input', { readOnly: 'readonly', type: 'checkbox' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: checkboxStyleClass },
                                _react2.default.createElement('span', { className: checkboxIcon })
                            )
                        ),
                        _react2.default.createElement(
                            'label',
                            null,
                            option.label
                        )
                    );

                    return listItem;
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
                    _react2.default.createElement('input', { readOnly: true, type: 'text', onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this) })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ui-multiselect-label-container', title: 'Choose' },
                    _react2.default.createElement(
                        'label',
                        { className: 'ui-multiselect-label ui-corner-all' },
                        label
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ui-multiselect-trigger ui-state-default ui-corner-right' },
                    _react2.default.createElement('span', { className: 'fa fa-fw fa-caret-down ui-c' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ui-multiselect-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow', ref: function ref(el) {
                            _this2.panel = el;
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'ui-multiselect-items-wrapper', style: { maxHeight: this.props.scrollHeight } },
                        _react2.default.createElement(
                            'ul',
                            { className: 'ui-multiselect-items ui-multiselect-list ui-widget-content ui-widget ui-corner-all ui-helper-reset' },
                            listItems
                        )
                    )
                )
            );
        }
    }]);

    return MultiSelect;
}(_react.Component);

MultiSelect.defaultProps = {
    value: null,
    options: null,
    onChange: null,
    style: null,
    className: null,
    scrollHeight: '200px',
    defaultLabel: 'Choose'
};
MultiSelect.propTypes = {
    value: _propTypes2.default.any,
    options: _propTypes2.default.array,
    onChange: _propTypes2.default.func,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    scrollHeight: _propTypes2.default.string,
    defaultLabel: _propTypes2.default.string
};
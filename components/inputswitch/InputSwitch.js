'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputSwitch = undefined;

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

var InputSwitch = exports.InputSwitch = function (_Component) {
    _inherits(InputSwitch, _Component);

    function InputSwitch(props) {
        _classCallCheck(this, InputSwitch);

        var _this = _possibleConstructorReturn(this, (InputSwitch.__proto__ || Object.getPrototypeOf(InputSwitch)).call(this, props));

        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(InputSwitch, [{
        key: 'toggle',
        value: function toggle(e) {
            if (!this.props.disabled) {
                if (this.props.checked) {
                    this.uncheckUI();
                } else {
                    this.checkUI();
                }

                if (this.props.onChange) {
                    this.props.onChange({
                        originalEvent: e,
                        value: !this.props.checked
                    });
                }
            }
        }
    }, {
        key: 'checkUI',
        value: function checkUI() {
            this.onContainer.style.width = this.offset + 'px';
            this.onLabelChild.style.marginLeft = 0 + 'px';
            this.offLabelChild.style.marginRight = -this.offset + 'px';
            this.handle.style.left = this.offset + 'px';
        }
    }, {
        key: 'uncheckUI',
        value: function uncheckUI() {
            this.onContainer.style.width = 0 + 'px';
            this.onLabelChild.style.marginLeft = -this.offset + 'px';
            this.offLabelChild.style.marginRight = 0 + 'px';
            this.handle.style.left = 0 + 'px';
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handle = this.container.children[2];
            this.onContainer = this.container.children[1];
            this.offContainer = this.container.children[0];
            this.onLabelChild = this.onContainer.children[0];
            this.offLabelChild = this.offContainer.children[0];

            var onContainerWidth = _DomHandler2.default.width(this.onContainer),
                offContainerWidth = _DomHandler2.default.width(this.offContainer),
                spanPadding = _DomHandler2.default.innerWidth(this.offLabelChild) - _DomHandler2.default.width(this.offLabelChild),
                handleMargins = _DomHandler2.default.getOuterWidth(this.handle) - _DomHandler2.default.innerWidth(this.handle);

            var containerWidth = onContainerWidth > offContainerWidth ? onContainerWidth : offContainerWidth,
                handleWidth = containerWidth;

            this.handle.style.width = handleWidth + 'px';
            handleWidth = _DomHandler2.default.width(this.handle);
            containerWidth = containerWidth + handleWidth + 6;

            var labelWidth = containerWidth - handleWidth - spanPadding - handleMargins;

            this.container.style.width = containerWidth + 'px';
            this.onLabelChild.style.width = labelWidth + 'px';
            this.offLabelChild.style.width = labelWidth + 'px';

            //position
            this.offContainer.style.width = _DomHandler2.default.width(this.container) - 5 + 'px';
            this.offset = _DomHandler2.default.width(this.container) - _DomHandler2.default.getOuterWidth(this.handle);

            //default value
            if (this.props.checked) {
                this.handle.style.left = this.offset + 'px';
                this.onContainer.style.width = this.offset + 'px';
                this.offLabelChild.style.marginRight = -this.offset + 'px';
            } else {
                this.onContainer.style.width = 0 + 'px';
                this.onLabelChild.style.marginLeft = -this.offset + 'px';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var styleClass = (0, _classnames2.default)('ui-inputswitch ui-widget ui-widget-content ui-corner-all', this.props.className, {
                'ui-inputswitch-checked': this.props.checked,
                'ui-state-disabled': this.props.disabled
            });

            return _react2.default.createElement(
                'div',
                { ref: function ref(el) {
                        _this2.container = el;
                    }, className: styleClass, style: this.props.style, onClick: this.toggle },
                _react2.default.createElement(
                    'div',
                    { className: 'ui-inputswitch-off' },
                    _react2.default.createElement(
                        'span',
                        { className: 'ui-inputswitch-offlabel' },
                        this.props.offLabel
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ui-inputswitch-on' },
                    _react2.default.createElement(
                        'span',
                        { className: 'ui-inputswitch-onlabel' },
                        this.props.onLabel
                    )
                ),
                _react2.default.createElement('div', { className: 'ui-inputswitch-handle ui-state-default' }),
                _react2.default.createElement(
                    'div',
                    { className: 'ui-helper-hidden-accessible' },
                    _react2.default.createElement('input', { type: 'checkbox', readOnly: 'readOnly' })
                )
            );
        }
    }]);

    return InputSwitch;
}(_react.Component);

InputSwitch.defaultProps = {
    offLabel: "Off",
    onLabel: "On",
    style: null,
    className: null,
    checked: false,
    onChange: null
};
InputSwitch.propsTypes = {
    offLabel: _propTypes2.default.string,
    onLabel: _propTypes2.default.string,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    checked: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};
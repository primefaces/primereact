'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OverlayPanel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DomHandler = require('../utils/DomHandler');

var _DomHandler2 = _interopRequireDefault(_DomHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OverlayPanel = exports.OverlayPanel = function (_Component) {
    _inherits(OverlayPanel, _Component);

    function OverlayPanel(props) {
        _classCallCheck(this, OverlayPanel);

        var _this = _possibleConstructorReturn(this, (OverlayPanel.__proto__ || Object.getPrototypeOf(OverlayPanel)).call(this, props));

        _this.onPanelClick = _this.onPanelClick.bind(_this);
        _this.onCloseClick = _this.onCloseClick.bind(_this);
        return _this;
    }

    _createClass(OverlayPanel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.dismissable) {
                this.documentClickListener = this.onDocumentClick.bind(this);
                document.addEventListener('click', this.documentClickListener);
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
            if (!this.selfClick && !this.targetEvent) {
                this.hide();
            }
            this.selfClick = false;
            this.targetEvent = false;
        }
    }, {
        key: 'onPanelClick',
        value: function onPanelClick() {
            if (this.props.dismissable) {
                this.selfClick = true;
            }
        }
    }, {
        key: 'onCloseClick',
        value: function onCloseClick(event) {
            this.hide();

            if (this.dismissable) {
                this.selfClick = true;
            }

            event.preventDefault();
        }
    }, {
        key: 'toggle',
        value: function toggle(event, target) {
            var currentTarget = target || event.currentTarget || event.target;

            if (this.isVisible()) this.hide();else this.show(event, currentTarget);

            if (this.props.dismissable) {
                this.targetEvent = true;
            }
        }
    }, {
        key: 'show',
        value: function show(event, target) {
            if (this.props.dismissable) {
                this.targetEvent = true;
            }

            this.container.style.zIndex = _DomHandler2.default.getZindex();

            if (this.isVisible()) {
                _DomHandler2.default.absolutePosition(this.container, target);
            } else {
                this.container.style.display = 'block';
                _DomHandler2.default.absolutePosition(this.container, target);
                _DomHandler2.default.fadeIn(this.container, 250);
            }
        }
    }, {
        key: 'hide',
        value: function hide() {
            if (this.isVisible()) {
                this.container.style.display = 'none';
            }
        }
    }, {
        key: 'isVisible',
        value: function isVisible() {
            return this.container.offsetParent;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var className = (0, _classnames2.default)('ui-overlaypanel ui-widget ui-widget-content ui-corner-all ui-shadow', this.props.className);
            if (this.props.showCloseIcon) {
                var closeIcon = _react2.default.createElement(
                    'a',
                    { href: '#', className: 'ui-overlaypanel-close ui-state-default', onClick: this.onCloseClick },
                    _react2.default.createElement('span', { className: 'fa fa-fw fa-close' })
                );
            }

            return _react2.default.createElement(
                'div',
                { className: className, style: this.props.style, onClick: this.onPanelClick, ref: function ref(el) {
                        _this2.container = el;
                    } },
                _react2.default.createElement(
                    'div',
                    { className: 'ui-overlaypanel-content' },
                    this.props.children
                ),
                closeIcon
            );
        }
    }]);

    return OverlayPanel;
}(_react.Component);

OverlayPanel.defaultProps = {
    dismissable: true,
    showCloseIcon: false,
    style: null,
    className: null,
    appendTo: null
};
OverlayPanel.propTypes = {
    dismissable: _propTypes2.default.bool,
    showCloseIcon: _propTypes2.default.bool,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    appendTo: _propTypes2.default.any
};
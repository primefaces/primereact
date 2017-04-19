'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dialog = exports.Footer = undefined;

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

var Footer = exports.Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.children
            );
        }
    }]);

    return Footer;
}(_react.Component);

var Dialog = exports.Dialog = function (_Component2) {
    _inherits(Dialog, _Component2);

    function Dialog(props) {
        _classCallCheck(this, Dialog);

        var _this2 = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

        _this2.state = { visible: props.visible };
        _this2.positionInitialized = false;
        _this2.onCloseClick = _this2.onCloseClick.bind(_this2);
        _this2.initDrag = _this2.initDrag.bind(_this2);
        _this2.endDrag = _this2.endDrag.bind(_this2);
        _this2.moveOnTop = _this2.moveOnTop.bind(_this2);
        return _this2;
    }

    _createClass(Dialog, [{
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
            if (this.state.visible !== nextProps.visible) {
                if (nextProps.visible) this.onShow();else this.onHide();

                this.setState({ visible: nextProps.visible });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.state.visible) {
                this.onShow();
            }

            if (this.props.draggable) {
                this.documentDragListener = this.onDrag.bind(this);
                document.addEventListener('mousemove', this.documentDragListener);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.documentDragListener) {
                document.removeEventListener('mousemove', this.documentDragListener);
            }
        }
    }, {
        key: 'onDocumentClick',
        value: function onDocumentClick() {
            console.log(this);
        }
    }, {
        key: 'initializePosition',
        value: function initializePosition() {
            this.center();
            this.positionInitialized = true;
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            if (!this.positionInitialized) {
                this.initializePosition();
            }

            if (this.props.modal) {
                this.enableModality();
            }

            if (this.props.onShow) {
                this.props.onShow();
            }
        }
    }, {
        key: 'onCloseClick',
        value: function onCloseClick(event) {
            this.hide();
            event.preventDefault();
        }
    }, {
        key: 'onHide',
        value: function onHide() {
            if (this.props.modal) {
                this.disableModality();
            }
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.setState({ visible: false });

            if (this.props.onHide) {
                this.props.onHide();
            }

            if (this.props.modal) {
                this.disableModality();
            }
        }
    }, {
        key: 'center',
        value: function center() {
            var elementWidth = _DomHandler2.default.getOuterWidth(this.container);
            var elementHeight = _DomHandler2.default.getOuterHeight(this.container);
            if (elementWidth === 0 && elementHeight === 0) {
                this.container.style.visibility = 'hidden';
                this.container.style.display = 'block';
                elementWidth = _DomHandler2.default.getOuterWidth(this.container);
                elementHeight = _DomHandler2.default.getOuterHeight(this.container);
                this.container.style.display = 'none';
                this.container.style.visibility = 'visible';
            }
            var viewport = _DomHandler2.default.getViewport();
            var x = (viewport.width - elementWidth) / 2;
            var y = (viewport.height - elementHeight) / 2;

            this.container.style.left = x + 'px';
            this.container.style.top = y + 'px';
        }
    }, {
        key: 'enableModality',
        value: function enableModality() {
            if (!this.mask) {
                this.mask = document.createElement('div');
                this.mask.style.zIndex = _DomHandler2.default.getZindex();
                _DomHandler2.default.addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask');
                document.body.appendChild(this.mask);
            }
        }
    }, {
        key: 'disableModality',
        value: function disableModality() {
            if (this.mask) {
                document.body.removeChild(this.mask);
                this.mask = null;
            }
        }
    }, {
        key: 'initDrag',
        value: function initDrag(event) {
            if (this.props.draggable) {
                this.dragging = true;
                this.lastPageX = event.pageX;
                this.lastPageY = event.pageY;
            }
        }
    }, {
        key: 'onDrag',
        value: function onDrag(event) {
            if (this.dragging) {
                var deltaX = event.pageX - this.lastPageX;
                var deltaY = event.pageY - this.lastPageY;
                var leftPos = parseFloat(this.container.style.left);
                var topPos = parseFloat(this.container.style.top);

                this.container.style.left = leftPos + deltaX + 'px';
                this.container.style.top = topPos + deltaY + 'px';

                this.lastPageX = event.pageX;
                this.lastPageY = event.pageY;
            }
        }
    }, {
        key: 'endDrag',
        value: function endDrag(event) {
            if (this.props.draggable) {
                this.dragging = false;
            }
        }
    }, {
        key: 'moveOnTop',
        value: function moveOnTop() {
            this.container.style.zIndex = _DomHandler2.default.getZindex();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var styleClass = (0, _classnames2.default)('ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow', this.props.className);
            var style = {
                display: this.state.visible ? 'block' : 'none',
                width: this.props.width,
                auto: this.props.auto,
                zIndex: _DomHandler2.default.getZindex()
            };

            var content = _react2.default.Children.map(this.props.children, function (element, i) {
                return element && element.type !== Footer && _react2.default.createElement(
                    'div',
                    { className: 'ui-dialog-content ui-widget-content' },
                    element
                );
            }),
                footer = _react2.default.Children.map(this.props.children, function (element, i) {
                return element && element.type === Footer && _react2.default.createElement(
                    Footer,
                    null,
                    ' ',
                    element.props.children
                );
            });

            return _react2.default.createElement(
                'div',
                { className: styleClass, style: style, ref: function ref(el) {
                        _this3.container = el;
                    }, onMouseDown: this.moveOnTop },
                _react2.default.createElement(
                    'div',
                    { className: 'ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top', onMouseDown: this.initDrag, onMouseUp: this.endDrag },
                    _react2.default.createElement(
                        'span',
                        { className: 'ui-dialog-title' },
                        this.props.header
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#', role: 'button', className: 'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all', onClick: this.onCloseClick },
                        _react2.default.createElement('span', { className: 'fa fa-fw fa-close' })
                    )
                ),
                content,
                footer
            );
        }
    }]);

    return Dialog;
}(_react.Component);

Dialog.defaultProps = {
    header: null,
    visible: false,
    width: 'auto',
    height: 'auto',
    modal: false,
    onHide: null,
    onShow: null,
    draggable: true
};
Dialog.propTypes = {
    header: _propTypes2.default.any,
    visible: _propTypes2.default.bool,
    width: _propTypes2.default.string,
    height: _propTypes2.default.string,
    modal: _propTypes2.default.bool,
    onHide: _propTypes2.default.func,
    onShow: _propTypes2.default.func,
    draggable: _propTypes2.default.bool
};
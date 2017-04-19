'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Panel = undefined;

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

var Panel = exports.Panel = function (_Component) {
    _inherits(Panel, _Component);

    function Panel(props) {
        _classCallCheck(this, Panel);

        var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

        _this.state = { collapsed: _this.props.collapsed };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Panel, [{
        key: 'toggle',
        value: function toggle(e) {
            if (this.props.toggleable) {
                var collapsed = this.state.collapsed;
                if (collapsed && this.onExpand) this.onExpand(e);else if (!collapsed && this.onCollapse) this.onCollapse(e);

                this.setState({ collapsed: !collapsed });
            }
            e.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var toggleIcon = null;
            var styleClass = (0, _classnames2.default)('ui-panel ui-widget ui-widget-content ui-corner-all', this.props.className);

            if (this.props.toggleable) {
                toggleIcon = _react2.default.createElement(
                    'a',
                    { className: 'ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default', href: '#', onClick: this.toggle },
                    _react2.default.createElement('span', { className: (0, _classnames2.default)('fa fa-fw', { 'fa-plus': this.state.collapsed, 'fa-minus': !this.state.collapsed }) })
                );
            }

            return _react2.default.createElement(
                'div',
                { className: styleClass, style: this.props.style },
                this.props.header != null && _react2.default.createElement(
                    'div',
                    { className: 'ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all' },
                    _react2.default.createElement(
                        'span',
                        { className: 'ui-panel-title' },
                        this.props.header
                    ),
                    toggleIcon
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ui-panel-content-wrapper', style: { display: this.state.collapsed ? 'none' : 'block' } },
                    _react2.default.createElement(
                        'div',
                        { className: 'ui-panel-content ui-widget-content' },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return Panel;
}(_react.Component);

Panel.defaultProps = {
    header: null,
    toggleable: false,
    style: null,
    className: null,
    collapsed: false,
    onExpand: null,
    onCollapse: null
};
Panel.propTypes = {
    header: _propTypes2.default.any,
    toggleable: _propTypes2.default.bool,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    collapsed: _propTypes2.default.bool,
    onExpand: _propTypes2.default.func,
    onCollapse: _propTypes2.default.func
};
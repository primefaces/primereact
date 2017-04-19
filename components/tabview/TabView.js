'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabView = exports.TabPanel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPanel = exports.TabPanel = function (_Component) {
    _inherits(TabPanel, _Component);

    function TabPanel() {
        _classCallCheck(this, TabPanel);

        return _possibleConstructorReturn(this, (TabPanel.__proto__ || Object.getPrototypeOf(TabPanel)).apply(this, arguments));
    }

    _createClass(TabPanel, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.children
            );
        }
    }]);

    return TabPanel;
}(_react.Component);

TabPanel.defaultProps = {
    header: null
};

TabPanel.propTypes = {
    header: _propTypes2.default.string
};

var TabView = exports.TabView = function (_Component2) {
    _inherits(TabView, _Component2);

    function TabView() {
        _classCallCheck(this, TabView);

        var _this2 = _possibleConstructorReturn(this, (TabView.__proto__ || Object.getPrototypeOf(TabView)).call(this));

        _this2.state = { activeIndex: 0 };
        _this2.getTabHeaderClass = _this2.getTabHeaderClass.bind(_this2);
        return _this2;
    }

    _createClass(TabView, [{
        key: 'onTabClick',
        value: function onTabClick(e, i) {
            this.setState({ activeIndex: i });
            if (this.props.onTabChange) {
                this.props.onTabChange({ originalEvent: e, index: i });
            }
            e.preventDefault();
        }
    }, {
        key: 'getTabHeaderClass',
        value: function getTabHeaderClass(index) {
            var styleClass = 'ui-state-default ui-corner-top';
            if (index === this.state.activeIndex) {
                styleClass += ' ui-tabview-selected ui-state-active';
            }
            return styleClass;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-top' },
                _react2.default.createElement(
                    'ul',
                    { className: 'ui-tabview-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all', role: 'tablist' },
                    _react2.default.Children.map(this.props.children, function (tab, i) {
                        return _react2.default.createElement(
                            'li',
                            { className: _this3.getTabHeaderClass(i), role: 'tab' },
                            _react2.default.createElement(
                                'a',
                                { href: '#', onClick: function onClick(e) {
                                        return _this3.onTabClick(e, i);
                                    } },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'ui-tabview-title' },
                                    tab.props.header
                                )
                            )
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ui-tabview-panels' },
                    _react2.default.Children.map(this.props.children, function (tab, i) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'ui-tabview-panel ui-widget-content', style: _this3.state.activeIndex === i ? { display: 'block' } : { display: 'none' } },
                            tab
                        );
                    })
                )
            );
        }
    }]);

    return TabView;
}(_react.Component);

TabView.defaultProps = {
    activeIndex: null
};
TabView.propTypes = {
    activeIndex: _propTypes2.default.number
};
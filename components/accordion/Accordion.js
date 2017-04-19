'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Accordion = exports.AccordionTab = undefined;

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

var AccordionTab = exports.AccordionTab = function (_Component) {
    _inherits(AccordionTab, _Component);

    function AccordionTab() {
        _classCallCheck(this, AccordionTab);

        return _possibleConstructorReturn(this, (AccordionTab.__proto__ || Object.getPrototypeOf(AccordionTab)).apply(this, arguments));
    }

    return AccordionTab;
}(_react.Component);

AccordionTab.defaultProps = {
    header: null
};

AccordionTab.propTypes = {
    header: _propTypes2.default.string
};

var Accordion = exports.Accordion = function (_Component2) {
    _inherits(Accordion, _Component2);

    function Accordion() {
        _classCallCheck(this, Accordion);

        var _this2 = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this));

        _this2.state = {};
        return _this2;
    }

    _createClass(Accordion, [{
        key: 'onTabClick',
        value: function onTabClick(e, i) {
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

            var callback = selected ? this.props.onTabOpen : this.props.onTabClose;
            if (callback) {
                callback({ originalEvent: e, index: i });
            }

            e.preventDefault();
        }
    }, {
        key: 'isSelected',
        value: function isSelected(i) {
            return this.props.multiple ? this.state.activeIndex && this.state.activeIndex.includes(i) : this.state.activeIndex === i;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('ui-accordion ui-widget ui-helper-reset', this.props.className), style: this.props.style },
                this.props.children && this.props.children.map(function (tab, i) {
                    var selected = _this3.isSelected(i);

                    return _react2.default.createElement(
                        'div',
                        { key: tab.props.header, className: 'ui-accordion-tab' },
                        _react2.default.createElement(
                            'div',
                            { className: 'ui-accordion-header ui-state-default ui-corner-all', key: tab.props.header, onClick: function onClick(e) {
                                    return _this3.onTabClick(e, i);
                                } },
                            _react2.default.createElement('span', { className: (0, _classnames2.default)('fa fa-fw', { 'fa-caret-right': !selected, 'fa-caret-down': selected }) }),
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                tab.props.header
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'ui-accordion-content-wrapper', style: { display: selected ? 'block' : 'none' } },
                            _react2.default.createElement(
                                'div',
                                { className: 'ui-accordion-content ui-widget-content' },
                                tab.props.children
                            )
                        )
                    );
                })
            );
        }
    }]);

    return Accordion;
}(_react.Component);

Accordion.defaultProps = {
    activeIndex: null,
    className: null,
    style: null,
    multiple: false,
    onTabOpen: null,
    onTabClose: null
};
Accordion.propTypes = {
    activeIndex: _propTypes2.default.any,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    multiple: _propTypes2.default.bool,
    onTabOpen: _propTypes2.default.func,
    onTabClose: _propTypes2.default.func
};
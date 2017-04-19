'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OrderList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../button/Button');

var _DomHandler = require('../utils/DomHandler');

var _DomHandler2 = _interopRequireDefault(_DomHandler);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderList = exports.OrderList = function (_Component) {
    _inherits(OrderList, _Component);

    function OrderList(props) {
        _classCallCheck(this, OrderList);

        var _this = _possibleConstructorReturn(this, (OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call(this, props));

        _this.state = { values: _this.props.value, selectedItems: [] };
        return _this;
    }

    _createClass(OrderList, [{
        key: 'onItemClick',
        value: function onItemClick(event, item) {
            var metaKey = event.metaKey || event.ctrlKey;
            var index = this.findIndexInList(item, this.selectedItems);
            var selected = index !== -1;

            if (selected && metaKey) {
                this.selectedItems.splice(index, 1);
            } else {
                this.selectedItems = metaKey ? this.selectedItems || [] : [];
                this.selectedItems.push(item);
            }

            this.setState({ selectedItems: this.selectedItems });
        }
    }, {
        key: 'isSelected',
        value: function isSelected(item) {
            return this.findIndexInList(item, this.state.selectedItems) !== -1;
        }
    }, {
        key: 'findIndexInList',
        value: function findIndexInList(item, list) {
            var index = -1;

            if (list) {
                for (var i = 0; i < list.length; i++) {
                    if (list[i] === item) {
                        index = i;
                        break;
                    }
                }
            }

            return index;
        }
    }, {
        key: 'moveUp',
        value: function moveUp(event, listElement) {
            if (this.selectedItems) {
                this.value = [].concat(_toConsumableArray(this.state.values));
                for (var i = 0; i < this.selectedItems.length; i++) {
                    var selectedItem = this.selectedItems[i];
                    var selectedItemIndex = this.findIndexInList(selectedItem, this.value);

                    if (selectedItemIndex !== 0) {
                        var movedItem = this.value[selectedItemIndex];
                        var temp = this.value[selectedItemIndex - 1];
                        this.value[selectedItemIndex - 1] = movedItem;
                        this.value[selectedItemIndex] = temp;
                    } else {
                        break;
                    }
                }

                this.setState({ values: this.value });
                this.movedUp = true;
                if (this.props.onReorder) {
                    this.props.onReorder({
                        originalEvent: event,
                        value: this.value
                    });
                }
            }
        }
    }, {
        key: 'moveTop',
        value: function moveTop(event, listElement) {
            if (this.selectedItems) {
                this.value = [].concat(_toConsumableArray(this.state.values));
                for (var i = 0; i < this.selectedItems.length; i++) {
                    var selectedItem = this.selectedItems[i];
                    var selectedItemIndex = this.findIndexInList(selectedItem, this.value);

                    if (selectedItemIndex !== 0) {
                        var movedItem = this.value.splice(selectedItemIndex, 1)[0];
                        this.value.unshift(movedItem);
                        listElement.scrollTop = 0;
                    } else {
                        break;
                    }
                }
                this.setState({ values: this.value });
                if (this.props.onReorder) {
                    this.props.onReorder({
                        originalEvent: event,
                        value: this.value
                    });
                }
                listElement.scrollTop = 0;
            }
        }
    }, {
        key: 'moveDown',
        value: function moveDown(event, listElement) {
            if (this.selectedItems) {
                this.value = [].concat(_toConsumableArray(this.state.values));
                for (var i = this.selectedItems.length - 1; i >= 0; i--) {
                    var selectedItem = this.selectedItems[i];
                    var selectedItemIndex = this.findIndexInList(selectedItem, this.value);

                    if (selectedItemIndex !== this.value.length - 1) {
                        var movedItem = this.value[selectedItemIndex];
                        var temp = this.value[selectedItemIndex + 1];
                        this.value[selectedItemIndex + 1] = movedItem;
                        this.value[selectedItemIndex] = temp;
                    } else {
                        break;
                    }
                }

                this.setState({ values: this.value });
                this.movedDown = true;
                if (this.props.onReorder) {
                    this.props.onReorder({
                        originalEvent: event,
                        value: this.value
                    });
                }
            }
        }
    }, {
        key: 'moveBottom',
        value: function moveBottom(event, listElement) {
            if (this.selectedItems) {
                this.value = [].concat(_toConsumableArray(this.state.values));
                for (var i = this.selectedItems.length - 1; i >= 0; i--) {
                    var selectedItem = this.selectedItems[i];
                    var selectedItemIndex = this.findIndexInList(selectedItem, this.value);

                    if (selectedItemIndex !== this.value.length - 1) {
                        var movedItem = this.value.splice(selectedItemIndex, 1)[0];
                        this.value.push(movedItem);
                    } else {
                        break;
                    }
                }

                this.setState({ values: this.value });
                if (this.props.onReorder) {
                    this.props.onReorder({
                        originalEvent: event,
                        value: this.value
                    });
                }
                listElement.scrollTop = listElement.scrollHeight;
            }
        }
    }, {
        key: 'updateScrollView',
        value: function updateScrollView() {
            if (this.movedUp || this.movedDown) {
                var listItems = this.listContainer.getElementsByClassName('ui-state-highlight');
                var listItem = void 0;

                if (this.movedUp) listItem = listItems[0];else listItem = listItems[listItems.length - 1];

                _DomHandler2.default.scrollInView(this.listContainer, listItem);
                this.movedUp = false;
                this.movedDown = false;
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var newValue = nextProps.value;
            if (newValue !== this.state.values) {
                this.setState({ values: newValue });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.values !== this.state.value) {
                this.updateScrollView();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var styleClass = (0, _classnames2.default)('ui-orderlist ui-grid ui-widget', this.props.styleClass, {
                'ui-grid-responsive': this.props.responsive
            });

            var upButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-up', onClick: function onClick(e) {
                    return _this2.moveUp(e, _this2.listContainer);
                } }),
                topButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-double-up', onClick: function onClick(e) {
                    return _this2.moveTop(e, _this2.listContainer);
                } }),
                downButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-down', onClick: function onClick(e) {
                    return _this2.moveDown(e, _this2.listContainer);
                } }),
                bottomButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-double-down', onClick: function onClick(e) {
                    return _this2.moveBottom(e, _this2.listContainer);
                } });

            var controls = _react2.default.createElement(
                'div',
                { className: 'ui-orderlist-controls ui-grid-col-2' },
                upButton,
                topButton,
                downButton,
                bottomButton
            );

            var content = _react2.default.createElement(
                'div',
                { className: 'ui-grid-col-10' },
                this.props.header && _react2.default.createElement(
                    'div',
                    { className: 'ui-orderlist-caption ui-widget-header ui-corner-top' },
                    this.props.header
                ),
                _react2.default.createElement(
                    'ul',
                    { ref: function ref(el) {
                            return _this2.listContainer = el;
                        }, className: 'ui-widget-content ui-orderlist-list ui-corner-bottom', style: this.props.listStyle },
                    this.state.values && this.state.values.map(function (item, i) {

                        var listItemContent = _this2.props.itemTemplate ? _this2.props.itemTemplate(item) : item,
                            listStyleClass = (0, _classnames2.default)('ui-orderlist-item', {
                            'ui-state-highlight': _this2.isSelected(item)
                        });

                        return _react2.default.createElement(
                            'li',
                            { key: i + '_orderlistitem', className: listStyleClass, onClick: function onClick(e) {
                                    return _this2.onItemClick(e, item);
                                } },
                            listItemContent
                        );
                    })
                )
            );

            return _react2.default.createElement(
                'div',
                { className: styleClass, style: this.props.style },
                _react2.default.createElement(
                    'div',
                    { className: 'ui-grid-row' },
                    controls,
                    content
                )
            );
        }
    }]);

    return OrderList;
}(_react.Component);

OrderList.defaultProps = {
    value: null,
    header: null,
    style: null,
    styleClass: null,
    listStyle: null,
    responsive: false,
    onReorder: null,
    itemTemplate: null
};
OrderList.propsTypes = {
    value: _propTypes2.default.array,
    header: _propTypes2.default.string,
    style: _propTypes2.default.string,
    styleClass: _propTypes2.default.string,
    listStyle: _propTypes2.default.string,
    responsive: _propTypes2.default.bool,
    onReorder: _propTypes2.default.func,
    itemTemplate: _propTypes2.default.func
};
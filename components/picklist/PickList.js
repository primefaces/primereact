'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PickList = undefined;

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

var PickList = exports.PickList = function (_Component) {
    _inherits(PickList, _Component);

    function PickList(props) {
        _classCallCheck(this, PickList);

        var _this = _possibleConstructorReturn(this, (PickList.__proto__ || Object.getPrototypeOf(PickList)).call(this, props));

        _this.state = { source: _this.props.source, target: _this.props.target, selectedItemsSource: [], selectedItemsTarget: [] };
        return _this;
    }

    _createClass(PickList, [{
        key: 'onItemClick',
        value: function onItemClick(event, item, selectedItems, listElement) {
            var _selectedItems = [].concat(_toConsumableArray(selectedItems));
            var metaKey = event.metaKey || event.ctrlKey;
            var index = this.findIndexInSelection(item, _selectedItems);
            var selected = index !== -1;

            if (selected && metaKey) {
                _selectedItems.splice(index, 1);
            } else {
                if (!metaKey) {
                    _selectedItems.length = 0;
                }
                _selectedItems.push(item);
            }

            this.saveSelectedItemsState(listElement, _selectedItems);
        }
    }, {
        key: 'moveUp',
        value: function moveUp(listElement, list, selectedItems) {
            if (selectedItems && selectedItems.length) {
                list = [].concat(_toConsumableArray(list));

                for (var i = 0; i < selectedItems.length; i++) {
                    var selectedItem = selectedItems[i];
                    var selectedItemIndex = this.findIndexInList(selectedItem, list);

                    if (selectedItemIndex !== 0) {
                        var movedItem = list[selectedItemIndex];
                        var temp = list[selectedItemIndex - 1];
                        list[selectedItemIndex - 1] = movedItem;
                        list[selectedItemIndex] = temp;
                    } else {
                        break;
                    }
                }

                this.saveListState(listElement, list);
                this.movedUp = true;
                this.reorderedListElement = listElement;
            }
        }
    }, {
        key: 'moveTop',
        value: function moveTop(listElement, list, selectedItems) {
            if (selectedItems && selectedItems.length) {
                list = [].concat(_toConsumableArray(list));

                for (var i = 0; i < selectedItems.length; i++) {
                    var selectedItem = selectedItems[i];
                    var selectedItemIndex = this.findIndexInList(selectedItem, list);

                    if (selectedItemIndex !== 0) {
                        var movedItem = list.splice(selectedItemIndex, 1)[0];
                        list.unshift(movedItem);
                    } else {
                        break;
                    }
                }

                this.saveListState(listElement, list);
                listElement.scrollTop = 0;
            }
        }
    }, {
        key: 'moveDown',
        value: function moveDown(listElement, list, selectedItems) {
            if (selectedItems && selectedItems.length) {
                list = [].concat(_toConsumableArray(list));

                for (var i = selectedItems.length - 1; i >= 0; i--) {
                    var selectedItem = selectedItems[i];
                    var selectedItemIndex = this.findIndexInList(selectedItem, list);

                    if (selectedItemIndex !== list.length - 1) {
                        var movedItem = list[selectedItemIndex];
                        var temp = list[selectedItemIndex + 1];
                        list[selectedItemIndex + 1] = movedItem;
                        list[selectedItemIndex] = temp;
                    } else {
                        break;
                    }
                }

                this.saveListState(listElement, list);
                this.movedDown = true;
                this.reorderedListElement = listElement;
            }
        }
    }, {
        key: 'moveBottom',
        value: function moveBottom(listElement, list, selectedItems) {
            if (selectedItems && selectedItems.length) {
                list = [].concat(_toConsumableArray(list));

                for (var i = selectedItems.length - 1; i >= 0; i--) {
                    var selectedItem = selectedItems[i];
                    var selectedItemIndex = this.findIndexInList(selectedItem, list);

                    if (selectedItemIndex !== list.length - 1) {
                        var movedItem = list.splice(selectedItemIndex, 1)[0];
                        list.push(movedItem);
                    } else {
                        break;
                    }
                }

                this.saveListState(listElement, list);
                listElement.scrollTop = listElement.scrollHeight;
            }
        }
    }, {
        key: 'moveRight',
        value: function moveRight(targetListElement) {
            if (this.state.selectedItemsSource && this.state.selectedItemsSource.length) {
                var _target = [].concat(_toConsumableArray(this.state.target)),
                    _source = [].concat(_toConsumableArray(this.state.source));

                for (var i = 0; i < this.state.selectedItemsSource.length; i++) {
                    var selectedItem = this.state.selectedItemsSource[i];
                    if (this.findIndexInList(selectedItem, this.state.target) === -1) {
                        _target.push(_source.splice(this.findIndexInList(selectedItem, _source), 1)[0]);
                    }
                }

                if (this.props.onMoveToTarget) {
                    this.props.onMoveToTarget({
                        originalEvent: event,
                        items: this.state.selectedItemsSource
                    });
                }

                this.setState({ source: _source, target: _target, selectedItemsSource: [] });
            }
        }
    }, {
        key: 'moveAllRight',
        value: function moveAllRight() {
            if (this.state.source) {
                var _target = [].concat(_toConsumableArray(this.state.target)),
                    _source = [].concat(_toConsumableArray(this.state.source));

                for (var i = 0; i < _source.length; i++) {
                    _target.push(_source[i]);
                }

                if (this.props.onMoveToTarget) {
                    this.props.onMoveToTarget({
                        originalEvent: event,
                        items: _source
                    });
                }
                _source.splice(0, _source.length);

                this.setState({ source: _source, target: _target, selectedItemsSource: [] });
            }
        }
    }, {
        key: 'moveLeft',
        value: function moveLeft(sourceListElement) {
            if (this.state.selectedItemsTarget && this.state.selectedItemsTarget.length) {
                var _target = [].concat(_toConsumableArray(this.state.target)),
                    _source = [].concat(_toConsumableArray(this.state.source));

                for (var i = 0; i < this.state.selectedItemsTarget.length; i++) {
                    var selectedItem = this.state.selectedItemsTarget[i];
                    if (this.findIndexInList(selectedItem, _source) === -1) {
                        _source.push(_target.splice(this.findIndexInList(selectedItem, _target), 1)[0]);
                    }
                }

                if (this.props.onMoveToSource) {
                    this.props.onMoveToSource({
                        originalEvent: event,
                        items: this.state.selectedItemsTarget
                    });
                }

                this.setState({ source: _source, target: _target, selectedItemsTarget: [] });
            }
        }
    }, {
        key: 'moveAllLeft',
        value: function moveAllLeft() {
            if (this.state.target) {
                var _target = [].concat(_toConsumableArray(this.state.target)),
                    _source = [].concat(_toConsumableArray(this.state.source));

                for (var i = 0; i < _target.length; i++) {
                    _source.push(_target[i]);
                }

                if (this.props.onMoveToSource) {
                    this.props.onMoveToSource({
                        originalEvent: event,
                        items: _target
                    });
                }
                _target.splice(0, _target.length);

                this.setState({ source: _source, target: _target, selectedItemsTarget: [] });
            }
        }
    }, {
        key: 'isSourceElement',
        value: function isSourceElement(el) {
            return _DomHandler2.default.hasClass(el, 'ui-picklist-source');
        }
    }, {
        key: 'isSelected',
        value: function isSelected(item, selectedItems) {
            return this.findIndexInSelection(item, selectedItems) !== -1;
        }
    }, {
        key: 'findIndexInSelection',
        value: function findIndexInSelection(item, selectedItems) {
            return this.findIndexInList(item, selectedItems);
        }
    }, {
        key: 'saveListState',
        value: function saveListState(listElement, list) {
            if (this.isSourceElement(listElement)) {
                this.setState({ source: list });
            } else {
                this.setState({ target: list });
            }
        }
    }, {
        key: 'saveSelectedItemsState',
        value: function saveSelectedItemsState(listElement, selectedItems) {
            if (this.isSourceElement(listElement)) {
                this.setState({ selectedItemsSource: selectedItems });
            } else {
                this.setState({ selectedItemsTarget: selectedItems });
            }
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
        key: 'updateScrollView',
        value: function updateScrollView() {
            if (this.movedUp || this.movedDown) {
                var listItems = this.reorderedListElement.getElementsByClassName('ui-state-highlight');
                var listItem = void 0;

                if (this.movedUp) listItem = listItems[0];else listItem = listItems[listItems.length - 1];

                _DomHandler2.default.scrollInView(this.reorderedListElement, listItem);
                this.movedUp = false;
                this.movedDown = false;
                this.reorderedListElement = null;
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var newSourceValue = nextProps.source,
                newTargetValue = nextProps.target;
            if (newSourceValue !== this.state.source) {
                this.setState({ source: newSourceValue });
            }

            if (newTargetValue !== this.state.target) {
                this.setState({ target: newTargetValue });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.source !== this.state.source || prevState.target !== this.state.target) {
                this.updateScrollView();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var styleClass = (0, _classnames2.default)('ui-picklist ui-widget ui-helper-clearfix', this.props.styleClass, {
                'ui-picklist-responsive': this.props.responsive
            });

            if (this.props.showSourceControls) {
                var sourceUpButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-up', onClick: function onClick(e) {
                        return _this2.moveUp(_this2.sourcelist, _this2.state.source, _this2.state.selectedItemsSource);
                    } }),
                    sourceTopButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-double-up', onClick: function onClick(e) {
                        return _this2.moveTop(_this2.sourcelist, _this2.state.source, _this2.state.selectedItemsSource);
                    } }),
                    sourceDownButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-down', onClick: function onClick(e) {
                        return _this2.moveDown(_this2.sourcelist, _this2.state.source, _this2.state.selectedItemsSource);
                    } }),
                    sourceBottomButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-double-down', onClick: function onClick(e) {
                        return _this2.moveBottom(_this2.sourcelist, _this2.state.source, _this2.state.selectedItemsSource);
                    } });

                var sourceControls = _react2.default.createElement(
                    'div',
                    { className: 'ui-picklist-source-controls ui-picklist-buttons' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ui-picklist-buttons-cell' },
                        sourceUpButton,
                        sourceTopButton,
                        sourceDownButton,
                        sourceBottomButton
                    )
                );
            }

            var sourceWrapperStyleClass = (0, _classnames2.default)('ui-picklist-listwrapper ui-picklist-source-wrapper', {
                'ui-picklist-listwrapper-nocontrols': !this.props.showSourceControls
            }),
                sourceWrapper = _react2.default.createElement(
                'div',
                { className: sourceWrapperStyleClass },
                this.props.sourceHeader && _react2.default.createElement(
                    'div',
                    { className: 'ui-picklist-caption ui-widget-header ui-corner-tl ui-corner-tr' },
                    this.props.sourceHeader
                ),
                _react2.default.createElement(
                    'ul',
                    { ref: function ref(el) {
                            return _this2.sourcelist = el;
                        }, className: 'ui-widget-content ui-picklist-list ui-picklist-source ui-corner-bottom', style: this.props.sourceStyle },
                    this.state.source && this.state.source.map(function (item, i) {

                        var sourceItemContent = _this2.props.itemTemplate ? _this2.props.itemTemplate(item) : item,
                            sourceStyleClass = (0, _classnames2.default)('ui-picklist-item', {
                            'ui-state-highlight': _this2.isSelected(item, _this2.state.selectedItemsSource)
                        });

                        return _react2.default.createElement(
                            'li',
                            { key: i + '_sourcelistitem', className: sourceStyleClass, onClick: function onClick(e) {
                                    return _this2.onItemClick(e, item, _this2.state.selectedItemsSource, _this2.sourcelist);
                                } },
                            sourceItemContent
                        );
                    })
                )
            );

            var moveRightButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-right', onClick: function onClick(e) {
                    return _this2.moveRight(_this2.targetlist);
                } }),
                moveAllRightButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-double-right', onClick: function onClick(e) {
                    return _this2.moveAllRight();
                } }),
                moveLeftButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-left', onClick: function onClick(e) {
                    return _this2.moveLeft(_this2.sourcelist);
                } }),
                moveAllLeftButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-double-left', onClick: function onClick(e) {
                    return _this2.moveAllLeft();
                } }),
                moveButtonsContent = _react2.default.createElement(
                'div',
                { className: 'ui-picklist-buttons' },
                _react2.default.createElement(
                    'div',
                    { className: 'ui-picklist-buttons-cell' },
                    moveRightButton,
                    moveAllRightButton,
                    moveLeftButton,
                    moveAllLeftButton
                )
            );

            var targetWrapperStyleClass = (0, _classnames2.default)('ui-picklist-listwrapper ui-picklist-target-wrapper', {
                'ui-picklist-listwrapper-nocontrols': !this.props.showTargetControls
            }),
                targetWrapper = _react2.default.createElement(
                'div',
                { className: targetWrapperStyleClass },
                this.props.targetHeader && _react2.default.createElement(
                    'div',
                    { className: 'ui-picklist-caption ui-widget-header ui-corner-tl ui-corner-tr' },
                    this.props.targetHeader
                ),
                _react2.default.createElement(
                    'ul',
                    { ref: function ref(el) {
                            return _this2.targetlist = el;
                        }, className: 'ui-widget-content ui-picklist-list ui-picklist-target ui-corner-bottom', style: this.props.targetStyle },
                    this.state.target && this.state.target.map(function (item, i) {

                        var targetItemContent = _this2.props.itemTemplate ? _this2.props.itemTemplate(item) : item,
                            targetStyleClass = (0, _classnames2.default)('ui-picklist-item', {
                            'ui-state-highlight': _this2.isSelected(item, _this2.state.selectedItemsTarget)
                        });

                        return _react2.default.createElement(
                            'li',
                            { key: i + '_targetlistitem', className: targetStyleClass, onClick: function onClick(e) {
                                    return _this2.onItemClick(e, item, _this2.state.selectedItemsTarget, _this2.targetlist);
                                } },
                            targetItemContent
                        );
                    })
                )
            );

            if (this.props.showTargetControls) {
                var targetUpButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-up', onClick: function onClick(e) {
                        return _this2.moveUp(_this2.targetlist, _this2.state.target, _this2.state.selectedItemsTarget);
                    } }),
                    targetTopButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-double-up', onClick: function onClick(e) {
                        return _this2.moveTop(_this2.targetlist, _this2.state.target, _this2.state.selectedItemsTarget);
                    } }),
                    targetDownButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-down', onClick: function onClick(e) {
                        return _this2.moveDown(_this2.targetlist, _this2.state.target, _this2.state.selectedItemsTarget);
                    } }),
                    targetBottomButton = _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-angle-double-down', onClick: function onClick(e) {
                        return _this2.moveBottom(_this2.targetlist, _this2.state.target, _this2.state.selectedItemsTarget);
                    } });

                var targetControls = _react2.default.createElement(
                    'div',
                    { className: 'ui-picklist-target-controls ui-picklist-buttons' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ui-picklist-buttons-cell' },
                        targetUpButton,
                        targetTopButton,
                        targetDownButton,
                        targetBottomButton
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                { className: styleClass, style: this.props.style },
                sourceControls,
                sourceWrapper,
                moveButtonsContent,
                targetWrapper,
                targetControls
            );
        }
    }]);

    return PickList;
}(_react.Component);

PickList.defaultProps = {
    source: null,
    target: null,
    sourceHeader: null,
    targetHeader: null,
    style: null,
    styleClass: null,
    sourceStyle: null,
    targetStyle: null,
    responsive: false,
    showSourceControls: true,
    showTargetControls: true,
    onMoveToTarget: null,
    onMoveToSource: null,
    itemTemplate: null
};
PickList.propsTypes = {
    source: _propTypes2.default.array,
    target: _propTypes2.default.array,
    sourceHeader: _propTypes2.default.string,
    targetHeader: _propTypes2.default.string,
    style: _propTypes2.default.string,
    styleClass: _propTypes2.default.string,
    sourceStyle: _propTypes2.default.string,
    targetStyle: _propTypes2.default.string,
    responsive: _propTypes2.default.bool,
    showSourceControls: _propTypes2.default.bool,
    showTargetControls: _propTypes2.default.bool,
    onMoveToTarget: _propTypes2.default.func,
    onMoveToSource: _propTypes2.default.func,
    itemTemplate: _propTypes2.default.func
};
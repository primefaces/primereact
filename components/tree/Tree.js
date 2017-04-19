'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tree = exports.TreeNode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ObjectUtils = require('../utils/ObjectUtils');

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeNode = exports.TreeNode = function (_Component) {
    _inherits(TreeNode, _Component);

    function TreeNode(props) {
        _classCallCheck(this, TreeNode);

        var _this = _possibleConstructorReturn(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));

        _this.node = _this.props.node;
        _this.node.parent = _this.props.parentNode;
        _this.tree = _this.props.tree;
        _this.state = { expanded: _this.node.expanded };
        return _this;
    }

    _createClass(TreeNode, [{
        key: 'getIcon',
        value: function getIcon() {
            var icon;

            if (this.node.icon) icon = this.node.icon;else icon = this.state.expanded && this.node.children && this.node.children.length ? this.node.expandedIcon : this.node.collapsedIcon;

            return 'ui-treenode-icon fa fa-fw ' + icon;
        }
    }, {
        key: 'isLeaf',
        value: function isLeaf(node) {
            return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
        }
    }, {
        key: 'toggle',
        value: function toggle(event) {
            this.setState({ expanded: !this.state.expanded });
        }
    }, {
        key: 'onNodeClick',
        value: function onNodeClick(event) {
            this.tree.onNodeClick(event, this.node);
        }
    }, {
        key: 'onNodeTouchEnd',
        value: function onNodeTouchEnd() {
            this.tree.onNodeTouchEnd();
        }
    }, {
        key: 'isSelected',
        value: function isSelected() {
            return this.tree.isSelected(this.node);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var nodeClass = (0, _classnames2.default)('ui-treenode', this.node.styleClass, {
                'ui-treenode-leaf': this.isLeaf(this.node)
            });

            var labelClass = (0, _classnames2.default)('ui-treenode-label ui-corner-all', { 'ui-state-highlight': this.isSelected() }),
                label = _react2.default.createElement(
                'span',
                { className: labelClass },
                _react2.default.createElement(
                    'span',
                    null,
                    this.node.label
                )
            );

            var togglerClass = (0, _classnames2.default)('ui-tree-toggler fa fa-fw', {
                'fa-caret-right': !this.state.expanded,
                'fa-caret-down': this.state.expanded
            });

            var hasIcon = this.node.icon || this.node.expandedIcon || this.node.collapsedIcon,
                iconClass = this.getIcon();

            if (this.tree.props.selectionMode === 'checkbox') {
                var checkboxIconClass = (0, _classnames2.default)('ui-chkbox-icon ui-c fa', {
                    'fa-check': this.isSelected(),
                    'fa-minus': this.node.partialSelected
                }),
                    checkbox = _react2.default.createElement(
                    'div',
                    { className: 'ui-chkbox' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ui-chkbox-box ui-widget ui-corner-all ui-state-default' },
                        _react2.default.createElement('span', { className: checkboxIconClass })
                    )
                );
            }

            var nodeContentClass = (0, _classnames2.default)('ui-treenode-content', {
                'ui-treenode-selectable': this.tree.props.selectionMode && this.node.selectable !== false
            }),
                nodeContent = _react2.default.createElement(
                'div',
                { className: nodeContentClass, onClick: this.onNodeClick.bind(this), onTouchEnd: this.onNodeTouchEnd.bind(this) },
                !this.isLeaf() && _react2.default.createElement('span', { className: togglerClass, onClick: this.toggle.bind(this) }),
                checkbox,
                hasIcon && _react2.default.createElement('span', { className: iconClass }),
                label
            );

            var nodeChildren = this.node.children && this.state.expanded && _react2.default.createElement(
                'ul',
                { style: { 'display': this.state.expanded ? 'block' : 'none' } },
                this.node.children && this.node.children.map(function (child, i) {
                    return _react2.default.createElement(TreeNode, { key: _this2.props.index + '_' + i, node: child, index: _this2.props.index + '_' + i, tree: _this2.tree, parentNode: _this2.node });
                })
            );

            return _react2.default.createElement(
                'li',
                { className: nodeClass, key: this.props.index },
                nodeContent,
                nodeChildren
            );
        }
    }]);

    return TreeNode;
}(_react.Component);

TreeNode.defaultProps = {
    node: null,
    index: null,
    tree: null,
    parentNode: null
};
TreeNode.propsTypes = {
    node: _propTypes2.default.any,
    index: _propTypes2.default.string,
    tree: _propTypes2.default.any,
    parentNode: _propTypes2.default.any
};

var Tree = exports.Tree = function (_Component2) {
    _inherits(Tree, _Component2);

    function Tree() {
        _classCallCheck(this, Tree);

        return _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).apply(this, arguments));
    }

    _createClass(Tree, [{
        key: 'isSelected',
        value: function isSelected(node) {
            return this.findIndexInSelection(node) !== -1;
        }
    }, {
        key: 'findIndexInSelection',
        value: function findIndexInSelection(node) {
            var index = -1;

            if (this.props.selectionMode && this.selection) {
                if (this.isSingleSelectionMode()) {
                    index = _ObjectUtils2.default.equals(this.selection, node) ? 0 : -1;
                } else {
                    for (var i = 0; i < this.selection.length; i++) {
                        if (_ObjectUtils2.default.equals(this.selection[i], node)) {
                            index = i;
                            break;
                        }
                    }
                }
            }

            return index;
        }
    }, {
        key: 'propagateUp',
        value: function propagateUp(node, select) {
            if (node.children && node.children.length) {
                var selectedCount = 0;
                var childPartialSelected = false;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = node.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var child = _step.value;

                        if (this.isSelected(child)) {
                            selectedCount++;
                        } else if (child.partialSelected) {
                            childPartialSelected = true;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                if (select && selectedCount === node.children.length) {
                    this.selection = [].concat(_toConsumableArray(this.selection || []), [node]);
                    node.partialSelected = false;
                } else {
                    if (!select) {
                        var index = this.findIndexInSelection(node);
                        if (index >= 0) {
                            this.selection = this.selection.filter(function (val, i) {
                                return i !== index;
                            });
                        }
                    }

                    if (childPartialSelected || selectedCount > 0 && selectedCount !== node.children.length) node.partialSelected = true;else node.partialSelected = false;
                }
            }

            var parent = node.parent;
            if (parent) {
                this.propagateUp(parent, select);
            }
        }
    }, {
        key: 'propagateDown',
        value: function propagateDown(node, select) {
            var index = this.findIndexInSelection(node);

            if (select && index === -1) {
                this.selection = [].concat(_toConsumableArray(this.selection || []), [node]);
            } else if (!select && index > -1) {
                this.selection = this.selection.filter(function (val, i) {
                    return i !== index;
                });
            }

            node.partialSelected = false;

            if (node.children && node.children.length) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = node.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var child = _step2.value;

                        this.propagateDown(child, select);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }
    }, {
        key: 'isSingleSelectionMode',
        value: function isSingleSelectionMode() {
            return this.props.selectionMode && this.props.selectionMode === 'single';
        }
    }, {
        key: 'isMultipleSelectionMode',
        value: function isMultipleSelectionMode() {
            return this.props.selectionMode && this.props.selectionMode === 'multiple';
        }
    }, {
        key: 'isCheckboxSelectionMode',
        value: function isCheckboxSelectionMode() {
            return this.props.selectionMode && this.props.selectionMode === 'checkbox';
        }
    }, {
        key: 'onNodeClick',
        value: function onNodeClick(event, node) {
            var eventTarget = event.target;

            if (eventTarget.className && eventTarget.className.indexOf('ui-tree-toggler') === 0) {
                return;
            } else if (this.props.selectionMode) {
                if (node.selectable === false) {
                    return;
                }

                var index = this.findIndexInSelection(node);
                var selected = index >= 0;

                if (this.isCheckboxSelectionMode()) {
                    if (selected) {
                        if (this.props.propagateSelectionDown) this.propagateDown(node, false);else this.selection = this.selection.filter(function (val, i) {
                            return i !== index;
                        });

                        if (this.props.propagateSelectionUp && node.parent) {
                            this.propagateUp(node.parent, false);
                        }

                        this.props.selectionChange({
                            originalEvent: event,
                            selection: this.selection
                        });

                        if (this.props.onNodeUnselect) {
                            this.props.onNodeUnselect({
                                originalEvent: event,
                                node: node
                            });
                        }
                    } else {
                        if (this.props.propagateSelectionDown) this.propagateDown(node, true);else this.selection = [].concat(_toConsumableArray(this.selection || []), [node]);

                        if (this.props.propagateSelectionUp && node.parent) {
                            this.propagateUp(node.parent, true);
                        }

                        this.props.selectionChange({
                            originalEvent: event,
                            selection: this.selection
                        });

                        if (this.props.onNodeSelect) {
                            this.props.onNodeSelect({
                                originalEvent: event,
                                node: node
                            });
                        }
                    }
                } else {
                    var metaSelection = this.nodeTouched ? false : this.props.metaKeySelection;

                    if (metaSelection) {
                        var metaKey = event.metaKey || event.ctrlKey;

                        if (selected && metaKey) {
                            if (this.isSingleSelectionMode()) {
                                this.selection = null;
                                this.props.selectionChange({
                                    originalEvent: event,
                                    selection: null
                                });
                            } else {
                                this.selection = this.selection.filter(function (val, i) {
                                    return i !== index;
                                });
                                this.props.selectionChange({
                                    originalEvent: event,
                                    selection: this.selection
                                });
                            }

                            if (this.props.onNodeUnselect) {
                                this.props.onNodeUnselect({
                                    originalEvent: event,
                                    node: node
                                });
                            }
                        } else {
                            if (this.isSingleSelectionMode()) {
                                this.selection = node;
                                this.props.selectionChange({
                                    originalEvent: event,
                                    selection: node
                                });
                            } else if (this.isMultipleSelectionMode()) {
                                this.selection = !metaKey ? [] : this.selection || [];
                                this.selection = [].concat(_toConsumableArray(this.selection), [node]);
                                this.props.selectionChange({
                                    originalEvent: event,
                                    selection: this.selection
                                });
                            }

                            if (this.props.onNodeSelect) {
                                this.props.onNodeSelect({
                                    originalEvent: event,
                                    node: node
                                });
                            }
                        }
                    } else {
                        if (this.isSingleSelectionMode()) {
                            if (selected) {
                                this.selection = null;
                                if (this.props.onNodeUnselect) {
                                    this.props.onNodeUnselect({
                                        originalEvent: event,
                                        node: node
                                    });
                                }
                            } else {
                                this.selection = node;
                                if (this.props.onNodeSelect) {
                                    this.props.onNodeSelect({
                                        originalEvent: event,
                                        node: node
                                    });
                                }
                            }
                        } else {
                            if (selected) {
                                this.selection = this.selection.filter(function (val, i) {
                                    return i !== index;
                                });
                                if (this.props.onNodeUnselect) {
                                    this.props.onNodeUnselect({
                                        originalEvent: event,
                                        node: node
                                    });
                                }
                            } else {
                                this.selection = [].concat(_toConsumableArray(this.selection || []), [node]);
                                if (this.props.onNodeSelect) {
                                    this.props.onNodeSelect({
                                        originalEvent: event,
                                        node: node
                                    });
                                }
                            }
                        }

                        this.props.selectionChange({
                            originalEvent: event,
                            selection: this.selection
                        });
                    }
                }
            }

            this.nodeTouched = false;
        }
    }, {
        key: 'onNodeTouchEnd',
        value: function onNodeTouchEnd() {
            this.nodeTouched = true;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var treeClass = (0, _classnames2.default)('ui-tree ui-widget ui-widget-content ui-corner-all', this.props.styleClass, {
                'ui-tree-selectable': this.props.selectionMode
            });

            return _react2.default.createElement(
                'div',
                { className: treeClass, style: this.props.style },
                _react2.default.createElement(
                    'ul',
                    { className: 'ui-tree-container' },
                    this.props.value && this.props.value.map(function (node, index) {
                        return _react2.default.createElement(TreeNode, { key: index, node: node, index: index, tree: _this4, parentNode: _this4.props.value });
                    })
                )
            );
        }
    }]);

    return Tree;
}(_react.Component);

Tree.defaultProps = {
    value: null,
    selectionMode: null,
    selection: null,
    selectionChange: null,
    onNodeSelect: null,
    onNodeUnselect: null,
    onNodeExpand: null,
    onNodeCollapse: null,
    style: null,
    styleClass: null,
    metaKeySelection: true,
    propagateSelectionUp: true,
    propagateSelectionDown: true
};
Tree.propsTypes = {
    value: _propTypes2.default.any.isRequired,
    selectionMode: _propTypes2.default.string,
    selection: _propTypes2.default.any,
    selectionChange: _propTypes2.default.func.isRequired,
    onNodeSelect: _propTypes2.default.func,
    onNodeUnselect: _propTypes2.default.func,
    onNodeExpand: _propTypes2.default.func,
    onNodeCollapse: _propTypes2.default.func,
    style: _propTypes2.default.string,
    styleClass: _propTypes2.default.string,
    metaKeySelection: _propTypes2.default.bool,
    propagateSelectionUp: _propTypes2.default.bool,
    propagateSelectionDown: _propTypes2.default.bool
};
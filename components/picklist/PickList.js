"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PickList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _classnames = _interopRequireDefault(require("classnames"));

var _PickListSubList = require("./PickListSubList");

var _PickListControls = require("./PickListControls");

var _PickListTransferControls = require("./PickListTransferControls");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PickList =
/*#__PURE__*/
function (_Component) {
  _inherits(PickList, _Component);

  function PickList(props) {
    var _this;

    _classCallCheck(this, PickList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PickList).call(this, props));
    _this.state = {
      selectedItemsSource: [],
      selectedItemsTarget: []
    };
    _this.onSourceReorder = _this.onSourceReorder.bind(_assertThisInitialized(_this));
    _this.onTargetReorder = _this.onTargetReorder.bind(_assertThisInitialized(_this));
    _this.onTransfer = _this.onTransfer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PickList, [{
    key: "onSourceReorder",
    value: function onSourceReorder(event) {
      this.handleChange(event, event.value, this.props.target);
      this.reorderedListElement = this.sourceListElement;
      this.reorderDirection = event.direction;
    }
  }, {
    key: "onTargetReorder",
    value: function onTargetReorder(event) {
      this.handleChange(event, this.props.source, event.value);
      this.reorderedListElement = this.targetListElement;
      this.reorderDirection = event.direction;
    }
  }, {
    key: "handleScrollPosition",
    value: function handleScrollPosition(listElement, direction) {
      switch (direction) {
        case 'up':
          this.scrollInView(listElement, -1);
          break;

        case 'top':
          listElement.scrollTop = 0;
          break;

        case 'down':
          this.scrollInView(listElement, 1);
          break;

        case 'bottom':
          listElement.scrollTop = listElement.scrollHeight;
          break;

        default:
          break;
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event, source, target) {
      if (this.props.onChange) {
        this.props.onChange({
          event: event.originalEvent,
          source: source,
          target: target
        });
      }
    }
  }, {
    key: "onTransfer",
    value: function onTransfer(event) {
      switch (event.direction) {
        case 'toTarget':
          if (this.props.onMoveToTarget) {
            this.props.onMoveToTarget({
              originalEvent: event.originalEvent,
              value: this.state.selectedItemsSource
            });
          }

          break;

        case 'allToTarget':
          if (this.props.onMoveAllToTarget) {
            this.props.onMoveAllToTarget({
              originalEvent: event.originalEvent,
              value: this.props.source
            });
          }

          break;

        case 'toSource':
          if (this.props.onMoveToSource) {
            this.props.onMoveToSource({
              originalEvent: event.originalEvent,
              value: this.state.selectedItemsTarget
            });
          }

          break;

        case 'allToSource':
          if (this.props.onMoveAllToSource) {
            this.props.onMoveAllToSource({
              originalEvent: event.originalEvent,
              value: this.props.target
            });
          }

          break;

        default:
          break;
      }

      this.setState({
        selectedItemsSource: [],
        selectedItemsTarget: []
      });
      this.handleChange(event, event.source, event.target);
    }
  }, {
    key: "scrollInView",
    value: function scrollInView(listElement, direction) {
      var listContainer = _DomHandler.default.findSingle(listElement, '.p-picklist-list');

      var listItems = listContainer.getElementsByClassName('p-highlight');
      var listItem;
      if (direction === -1) listItem = listItems[0];else if (direction === 1) listItem = listItems[listItems.length - 1];

      _DomHandler.default.scrollInView(listContainer, listItem);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.reorderedListElement) {
        this.handleScrollPosition(this.reorderedListElement, this.reorderDirection);
        this.reorderedListElement = null;
        this.reorderDirection = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = (0, _classnames.default)('p-picklist p-component', this.props.className, {
        'p-picklist-responsive': this.props.responsive
      });
      return _react.default.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style
      }, this.props.showSourceControls && _react.default.createElement(_PickListControls.PickListControls, {
        list: this.props.source,
        selection: this.state.selectedItemsSource,
        onReorder: this.onSourceReorder,
        className: "p-picklist-source-controls"
      }), _react.default.createElement(_PickListSubList.PickListSubList, {
        ref: function ref(el) {
          return _this2.sourceListElement = _reactDom.default.findDOMNode(el);
        },
        list: this.props.source,
        selection: this.state.selectedItemsSource,
        onSelectionChange: function onSelectionChange(e) {
          return _this2.setState({
            selectedItemsSource: e.value
          });
        },
        itemTemplate: this.props.itemTemplate,
        header: this.props.sourceHeader,
        style: this.props.sourceStyle,
        className: "p-picklist-source-wrapper",
        listClassName: "p-picklist-source",
        metaKeySelection: this.props.metaKeySelection,
        tabIndex: this.props.tabIndex
      }), _react.default.createElement(_PickListTransferControls.PickListTransferControls, {
        onTransfer: this.onTransfer,
        source: this.props.source,
        target: this.props.target,
        sourceSelection: this.state.selectedItemsSource,
        targetSelection: this.state.selectedItemsTarget
      }), _react.default.createElement(_PickListSubList.PickListSubList, {
        ref: function ref(el) {
          return _this2.targetListElement = _reactDom.default.findDOMNode(el);
        },
        list: this.props.target,
        selection: this.state.selectedItemsTarget,
        onSelectionChange: function onSelectionChange(e) {
          return _this2.setState({
            selectedItemsTarget: e.value
          });
        },
        itemTemplate: this.props.itemTemplate,
        header: this.props.targetHeader,
        style: this.props.targetStyle,
        className: "p-picklist-target-wrapper",
        listClassName: "p-picklist-targe",
        metaKeySelection: this.props.metaKeySelection,
        tabIndex: this.props.tabIndex
      }), this.props.showTargetControls && _react.default.createElement(_PickListControls.PickListControls, {
        list: this.props.target,
        selection: this.state.selectedItemsTarget,
        onReorder: this.onTargetReorder,
        className: "p-picklist-target-controls"
      }));
    }
  }]);

  return PickList;
}(_react.Component);

exports.PickList = PickList;

_defineProperty(PickList, "defaultProps", {
  id: null,
  source: null,
  target: null,
  sourceHeader: null,
  targetHeader: null,
  style: null,
  className: null,
  sourceStyle: null,
  targetStyle: null,
  responsive: false,
  showSourceControls: true,
  showTargetControls: true,
  metaKeySelection: true,
  tabIndex: '0',
  itemTemplate: null,
  onChange: null,
  onMoveToSource: null,
  onMoveAllToSource: null,
  onMoveToTarget: null,
  onMoveAllToTarget: null
});

_defineProperty(PickList, "propTypes", {
  id: _propTypes.default.string,
  source: _propTypes.default.array,
  target: _propTypes.default.array,
  sourceHeader: _propTypes.default.string,
  targetHeader: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  sourcestyle: _propTypes.default.object,
  targetstyle: _propTypes.default.object,
  responsive: _propTypes.default.bool,
  showSourceControls: _propTypes.default.bool,
  showTargetControls: _propTypes.default.bool,
  metaKeySelection: _propTypes.default.bool,
  tabIndex: _propTypes.default.string,
  itemTemplate: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onMoveToSource: _propTypes.default.func,
  onMoveAllToSource: _propTypes.default.func,
  onMoveToTarget: _propTypes.default.func,
  onMoveAllToTarget: _propTypes.default.func
});
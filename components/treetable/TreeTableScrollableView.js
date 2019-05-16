"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeTableScrollableView = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

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

var TreeTableScrollableView =
/*#__PURE__*/
function (_Component) {
  _inherits(TreeTableScrollableView, _Component);

  function TreeTableScrollableView(props) {
    var _this;

    _classCallCheck(this, TreeTableScrollableView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TreeTableScrollableView).call(this, props));
    _this.onHeaderScroll = _this.onHeaderScroll.bind(_assertThisInitialized(_this));
    _this.onBodyScroll = _this.onBodyScroll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TreeTableScrollableView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setScrollHeight();

      if (!this.props.frozen) {
        this.alignScrollBar();
      } else {
        this.scrollBody.style.paddingBottom = _DomHandler.default.calculateScrollbarWidth() + 'px';
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.props.frozen) {
        this.alignScrollBar();
      }
    }
  }, {
    key: "setScrollHeight",
    value: function setScrollHeight() {
      if (this.props.scrollHeight) {
        if (this.props.scrollHeight.indexOf('%') !== -1) {
          var datatableContainer = this.findDataTableContainer(this.container);
          this.scrollBody.style.visibility = 'hidden';
          this.scrollBody.style.height = '100px'; //temporary height to calculate static height

          var containerHeight = _DomHandler.default.getOuterHeight(datatableContainer);

          var relativeHeight = _DomHandler.default.getOuterHeight(datatableContainer.parentElement) * parseInt(this.props.scrollHeight, 10) / 100;
          var staticHeight = containerHeight - 100; //total height of headers, footers, paginators

          var scrollBodyHeight = relativeHeight - staticHeight;
          this.scrollBody.style.height = 'auto';
          this.scrollBody.style.maxHeight = scrollBodyHeight + 'px';
          this.scrollBody.style.visibility = 'visible';
        } else {
          this.scrollBody.style.maxHeight = this.props.scrollHeight;
        }
      }
    }
  }, {
    key: "findDataTableContainer",
    value: function findDataTableContainer(element) {
      if (element) {
        var el = element;

        while (el && !_DomHandler.default.hasClass(el, 'p-treetable')) {
          el = el.parentElement;
        }

        return el;
      } else {
        return null;
      }
    }
  }, {
    key: "onHeaderScroll",
    value: function onHeaderScroll() {
      this.scrollHeader.scrollLeft = 0;
    }
  }, {
    key: "onBodyScroll",
    value: function onBodyScroll() {
      var frozenView = this.container.previousElementSibling;
      var frozenScrollBody;

      if (frozenView) {
        frozenScrollBody = _DomHandler.default.findSingle(frozenView, '.p-treetable-scrollable-body');
      }

      this.scrollHeaderBox.style.marginLeft = -1 * this.scrollBody.scrollLeft + 'px';

      if (this.scrollFooterBox) {
        this.scrollFooterBox.style.marginLeft = -1 * this.scrollBody.scrollLeft + 'px';
      }

      if (frozenScrollBody) {
        frozenScrollBody.scrollTop = this.scrollBody.scrollTop;
      }
    }
  }, {
    key: "hasVerticalOverflow",
    value: function hasVerticalOverflow() {
      return _DomHandler.default.getOuterHeight(this.scrollTable) > _DomHandler.default.getOuterHeight(this.scrollBody);
    }
  }, {
    key: "alignScrollBar",
    value: function alignScrollBar() {
      var scrollBarWidth = this.hasVerticalOverflow() ? _DomHandler.default.calculateScrollbarWidth() : 0;
      this.scrollHeaderBox.style.marginRight = scrollBarWidth + 'px';

      if (this.scrollFooterBox) {
        this.scrollFooterBox.style.marginRight = scrollBarWidth + 'px';
      }
    }
  }, {
    key: "calculateRowHeight",
    value: function calculateRowHeight() {
      var row = _DomHandler.default.findSingle(this.scrollTable, 'tr:not(.p-treetable-emptymessage-row)');

      if (row) {
        this.rowHeight = _DomHandler.default.getOuterHeight(row);
      }
    }
  }, {
    key: "renderColGroup",
    value: function renderColGroup() {
      if (this.props.columns && this.props.columns.length) {
        return _react.default.createElement("colgroup", {
          className: "p-treetable-scrollable-colgroup"
        }, this.props.columns.map(function (col, i) {
          return _react.default.createElement("col", {
            key: col.field + '_' + i
          });
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = (0, _classnames.default)('p-treetable-scrollable-view', {
        'p-treetable-frozen-view': this.props.frozen,
        'p-treetable-unfrozen-view': !this.props.frozen && this.props.frozenWidth
      });
      var width = this.props.frozen ? this.props.frozenWidth : 'calc(100% - ' + this.props.frozenWidth + ')';
      var left = this.props.frozen ? null : this.props.frozenWidth;
      var colGroup = this.renderColGroup();
      return _react.default.createElement("div", {
        className: className,
        style: {
          width: width,
          left: left
        },
        ref: function ref(el) {
          _this2.container = el;
        }
      }, _react.default.createElement("div", {
        className: "p-treetable-scrollable-header",
        ref: function ref(el) {
          _this2.scrollHeader = el;
        },
        onScroll: this.onHeaderScroll
      }, _react.default.createElement("div", {
        className: "p-treetable-scrollable-header-box",
        ref: function ref(el) {
          _this2.scrollHeaderBox = el;
        }
      }, _react.default.createElement("table", {
        className: "p-treetable-scrollable-header-table"
      }, colGroup, this.props.header))), _react.default.createElement("div", {
        className: "p-treetable-scrollable-body",
        ref: function ref(el) {
          _this2.scrollBody = el;
        },
        onScroll: this.onBodyScroll
      }, _react.default.createElement("table", {
        ref: function ref(el) {
          _this2.scrollTable = el;
        },
        style: {
          top: '0'
        },
        className: "p-treetable-scrollable-body-table"
      }, colGroup, this.props.body)), _react.default.createElement("div", {
        className: "p-treetable-scrollable-footer",
        ref: function ref(el) {
          _this2.scrollFooter = el;
        }
      }, _react.default.createElement("div", {
        className: "p-treetable-scrollable-footer-box",
        ref: function ref(el) {
          _this2.scrollFooterBox = el;
        }
      }, _react.default.createElement("table", {
        className: "p-treetable-scrollable-footer-table"
      }, colGroup, this.props.footer))));
    }
  }]);

  return TreeTableScrollableView;
}(_react.Component);

exports.TreeTableScrollableView = TreeTableScrollableView;

_defineProperty(TreeTableScrollableView, "defaultProps", {
  header: null,
  body: null,
  footer: null,
  columns: null,
  frozen: null,
  frozenWidth: null,
  frozenBody: null
});

_defineProperty(TreeTableScrollableView, "propTypes", {
  header: _propTypes.default.any,
  body: _propTypes.default.any,
  footer: _propTypes.default.any,
  columns: _propTypes.default.array,
  frozen: _propTypes.default.bool,
  frozenWidth: _propTypes.default.string,
  frozenBody: _propTypes.default.any
});
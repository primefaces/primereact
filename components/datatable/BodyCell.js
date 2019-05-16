"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BodyCell = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _RowRadioButton = require("./RowRadioButton");

var _RowCheckbox = require("./RowCheckbox");

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

var BodyCell =
/*#__PURE__*/
function (_Component) {
  _inherits(BodyCell, _Component);

  function BodyCell(props) {
    var _this;

    _classCallCheck(this, BodyCell);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BodyCell).call(this, props));
    _this.state = {};
    _this.onExpanderClick = _this.onExpanderClick.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onEditorFocus = _this.onEditorFocus.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BodyCell, [{
    key: "onExpanderClick",
    value: function onExpanderClick(event) {
      if (this.props.onRowToggle) {
        this.props.onRowToggle({
          originalEvent: event,
          data: this.props.rowData
        });
      }

      event.preventDefault();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.which === 13 || event.which === 9) {
        this.switchCellToViewMode();
      }
    }
  }, {
    key: "onClick",
    value: function onClick() {
      this.editingCellClick = true;

      if (this.props.editor && !this.state.editing) {
        this.setState({
          editing: true
        });

        if (this.props.editorValidatorEvent === 'click') {
          this.bindDocumentEditListener();
        }
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      if (this.state.editing && this.props.editorValidatorEvent === 'blur') {
        this.switchCellToViewMode();
      }
    }
  }, {
    key: "onEditorFocus",
    value: function onEditorFocus(event) {
      this.onClick(event);
    }
  }, {
    key: "bindDocumentEditListener",
    value: function bindDocumentEditListener() {
      var _this2 = this;

      if (!this.documentEditListener) {
        this.documentEditListener = function (event) {
          if (!_this2.editingCellClick) {
            _this2.switchCellToViewMode();
          }

          _this2.editingCellClick = false;
        };

        this.editingCellClick = false;
        document.addEventListener('click', this.documentEditListener);
      }
    }
  }, {
    key: "closeCell",
    value: function closeCell() {
      this.setState({
        editing: false
      });
      this.unbindDocumentEditListener();
    }
  }, {
    key: "switchCellToViewMode",
    value: function switchCellToViewMode() {
      if (this.props.editorValidator) {
        var valid = this.props.editorValidator(this.props);

        if (valid) {
          this.closeCell();
        }
      } else {
        this.closeCell();
      }
    }
  }, {
    key: "unbindDocumentEditListener",
    value: function unbindDocumentEditListener() {
      if (this.documentEditListener) {
        document.removeEventListener('click', this.documentEditListener);
        this.documentEditListener = null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      if (this.container && this.props.editor) {
        clearTimeout(this.tabindexTimeout);

        if (this.state.editing) {
          var focusable = _DomHandler.default.findSingle(this.container, 'input');

          if (focusable) {
            focusable.setAttribute('data-isCellEditing', true);
            focusable.focus();
          }

          this.keyHelper.tabIndex = -1;
        } else {
          this.tabindexTimeout = setTimeout(function () {
            if (_this3.keyHelper) {
              _this3.keyHelper.setAttribute('tabindex', 0);
            }
          }, 50);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindDocumentEditListener();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var content, header;
      var cellClassName = (0, _classnames.default)(this.props.bodyClassName || this.props.className, {
        'p-selection-column': this.props.selectionMode,
        'p-editable-column': this.props.editor,
        'p-cell-editing': this.state.editing
      });

      if (this.props.expander) {
        var iconClassName = (0, _classnames.default)('p-row-toggler-icon pi pi-fw p-clickable', {
          'pi-chevron-down': this.props.expanded,
          'pi-chevron-right': !this.props.expanded
        });
        content = _react.default.createElement("button", {
          onClick: this.onExpanderClick,
          className: "p-row-toggler p-link"
        }, _react.default.createElement("span", {
          className: iconClassName
        }));
      } else if (this.props.selectionMode) {
        if (this.props.selectionMode === 'single') content = _react.default.createElement(_RowRadioButton.RowRadioButton, {
          onClick: this.props.onRadioClick,
          rowData: this.props.rowData,
          selected: this.props.selected
        });else content = _react.default.createElement(_RowCheckbox.RowCheckbox, {
          onClick: this.props.onCheckboxClick,
          rowData: this.props.rowData,
          selected: this.props.selected
        });
      } else if (this.props.rowReorder) {
        var reorderIcon = (0, _classnames.default)('p-table-reorderablerow-handle', this.props.rowReorderIcon);
        content = _react.default.createElement("i", {
          className: reorderIcon
        });
      } else {
        if (this.state.editing) {
          if (this.props.editor) content = this.props.editor(this.props);else throw new Error("Editor is not found on column.");
        } else {
          if (this.props.body) content = this.props.body(this.props.rowData, this.props);else content = _ObjectUtils.default.resolveFieldData(this.props.rowData, this.props.field);
        }
      }

      if (this.props.responsive) {
        header = _react.default.createElement("span", {
          className: "p-column-title"
        }, this.props.header);
      }
      /* eslint-disable */


      var editorKeyHelper = this.props.editor && _react.default.createElement("a", {
        tabIndex: "0",
        ref: function ref(el) {
          _this4.keyHelper = el;
        },
        className: "p-cell-editor-key-helper p-hidden-accessible",
        onFocus: this.onEditorFocus
      }, _react.default.createElement("span", null));
      /* eslint-enable */


      return _react.default.createElement("td", {
        ref: function ref(el) {
          _this4.container = el;
        },
        className: cellClassName,
        style: this.props.bodyStyle || this.props.style,
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        rowSpan: this.props.rowSpan,
        onBlur: this.onBlur
      }, header, editorKeyHelper, content);
    }
  }]);

  return BodyCell;
}(_react.Component);

exports.BodyCell = BodyCell;
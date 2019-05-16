"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Editor = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _quill = _interopRequireDefault(require("quill"));

require("quill/dist/quill.snow.css");

require("quill/dist/quill.bubble.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Editor =
/*#__PURE__*/
function (_Component) {
  _inherits(Editor, _Component);

  function Editor() {
    _classCallCheck(this, Editor);

    return _possibleConstructorReturn(this, _getPrototypeOf(Editor).apply(this, arguments));
  }

  _createClass(Editor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.quill = new _quill.default(this.editorElement, {
        modules: {
          toolbar: this.toolbarElement
        },
        placeholder: this.props.placeholder,
        readOnly: this.props.readOnly,
        theme: 'snow',
        formats: this.props.formats
      });

      if (this.props.value) {
        this.quill.pasteHTML(this.props.value);
      }

      this.quill.on('text-change', function (delta, source) {
        var html = _this.editorElement.children[0].innerHTML;

        var text = _this.quill.getText();

        if (html === '<p><br></p>') {
          html = null;
        }

        if (_this.props.onTextChange) {
          _this.props.onTextChange({
            htmlValue: html,
            textValue: text,
            delta: delta,
            source: source
          });
        }
      });
      this.quill.on('selection-change', function (range, oldRange, source) {
        if (_this.props.onSelectionChange) {
          _this.props.onSelectionChange({
            range: range,
            oldRange: oldRange,
            source: source
          });
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.value !== prevProps.value && this.quill && !this.quill.hasFocus()) {
        if (this.props.value) this.quill.pasteHTML(this.props.value);else this.quill.setText('');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var containerClass = (0, _classnames.default)('p-component p-editor-container', this.props.className);
      var toolbarHeader = null;

      if (this.props.headerTemplate) {
        toolbarHeader = _react.default.createElement("div", {
          ref: function ref(el) {
            return _this2.toolbarElement = el;
          },
          className: "p-editor-toolbar"
        }, this.props.headerTemplate);
      } else {
        toolbarHeader = _react.default.createElement("div", {
          ref: function ref(el) {
            return _this2.toolbarElement = el;
          },
          className: "p-editor-toolbar"
        }, _react.default.createElement("span", {
          className: "ql-formats"
        }, _react.default.createElement("select", {
          className: "ql-header",
          defaultValue: "0"
        }, _react.default.createElement("option", {
          value: "1"
        }, "Heading"), _react.default.createElement("option", {
          value: "2"
        }, "Subheading"), _react.default.createElement("option", {
          value: "0"
        }, "Normal")), _react.default.createElement("select", {
          className: "ql-font"
        }, _react.default.createElement("option", null), _react.default.createElement("option", {
          value: "serif"
        }), _react.default.createElement("option", {
          value: "monospace"
        }))), _react.default.createElement("span", {
          className: "ql-formats"
        }, _react.default.createElement("button", {
          className: "ql-bold",
          "aria-label": "Bold"
        }), _react.default.createElement("button", {
          className: "ql-italic",
          "aria-label": "Italic"
        }), _react.default.createElement("button", {
          className: "ql-underline",
          "aria-label": "Underline"
        })), _react.default.createElement("span", {
          className: "ql-formats"
        }, _react.default.createElement("select", {
          className: "ql-color"
        }), _react.default.createElement("select", {
          className: "ql-background"
        })), _react.default.createElement("span", {
          className: "ql-formats"
        }, _react.default.createElement("button", {
          className: "ql-list",
          value: "ordered",
          "aria-label": "Ordered List"
        }), _react.default.createElement("button", {
          className: "ql-list",
          value: "bullet",
          "aria-label": "Unordered List"
        }), _react.default.createElement("select", {
          className: "ql-align"
        }, _react.default.createElement("option", {
          defaultValue: true
        }), _react.default.createElement("option", {
          value: "center"
        }), _react.default.createElement("option", {
          value: "right"
        }), _react.default.createElement("option", {
          value: "justify"
        }))), _react.default.createElement("span", {
          className: "ql-formats"
        }, _react.default.createElement("button", {
          className: "ql-link",
          "aria-label": "Insert Link"
        }), _react.default.createElement("button", {
          className: "ql-image",
          "aria-label": "Insert Image"
        }), _react.default.createElement("button", {
          className: "ql-code-block",
          "aria-label": "Insert Code Block"
        })), _react.default.createElement("span", {
          className: "ql-formats"
        }, _react.default.createElement("button", {
          className: "ql-clean",
          "aria-label": "Remove Styles"
        })));
      }

      var content = _react.default.createElement("div", {
        ref: function ref(el) {
          return _this2.editorElement = el;
        },
        className: "p-editor-content",
        style: this.props.style
      });

      return _react.default.createElement("div", {
        id: this.props.id,
        className: containerClass
      }, toolbarHeader, content);
    }
  }]);

  return Editor;
}(_react.Component);

exports.Editor = Editor;

_defineProperty(Editor, "defaultProps", {
  id: null,
  value: null,
  style: null,
  className: null,
  placeholder: null,
  readOnly: false,
  formats: null,
  headerTemplate: null,
  onTextChange: null,
  onSelectionChange: null
});

_defineProperty(Editor, "propTypes", {
  id: _propTypes.default.string,
  value: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  formats: _propTypes.default.array,
  headerTemplate: _propTypes.default.any,
  onTextChange: _propTypes.default.func,
  onSelectionChange: _propTypes.default.func
});
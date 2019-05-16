"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUpload = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../button/Button");

var _Messages = require("../messages/Messages");

var _ProgressBar = require("../progressbar/ProgressBar");

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FileUpload =
/*#__PURE__*/
function (_Component) {
  _inherits(FileUpload, _Component);

  function FileUpload(props) {
    var _this;

    _classCallCheck(this, FileUpload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FileUpload).call(this, props));
    _this.state = {
      files: [],
      msgs: []
    };
    _this.upload = _this.upload.bind(_assertThisInitialized(_this));
    _this.clear = _this.clear.bind(_assertThisInitialized(_this));
    _this.onFileSelect = _this.onFileSelect.bind(_assertThisInitialized(_this));
    _this.onDragEnter = _this.onDragEnter.bind(_assertThisInitialized(_this));
    _this.onDragOver = _this.onDragOver.bind(_assertThisInitialized(_this));
    _this.onDragLeave = _this.onDragLeave.bind(_assertThisInitialized(_this));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onSimpleUploaderClick = _this.onSimpleUploaderClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FileUpload, [{
    key: "hasFiles",
    value: function hasFiles() {
      return this.state.files && this.state.files.length > 0;
    }
  }, {
    key: "isImage",
    value: function isImage(file) {
      return /^image\//.test(file.type);
    }
  }, {
    key: "remove",
    value: function remove(index) {
      this.clearInputElement();

      var currentFiles = _toConsumableArray(this.state.files);

      currentFiles.splice(index, 1);
      this.setState({
        files: currentFiles
      });
    }
  }, {
    key: "clearInputElement",
    value: function clearInputElement() {
      this.fileInput.value = '';

      if (this.props.mode === 'basic') {
        this.fileInput.style.display = 'inline';
      }
    }
  }, {
    key: "formatSize",
    value: function formatSize(bytes) {
      if (bytes === 0) {
        return '0 B';
      }

      var k = 1000,
          dm = 3,
          sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  }, {
    key: "onFileSelect",
    value: function onFileSelect(event) {
      var _this2 = this;

      this.setState({
        msgs: []
      });
      this.files = this.state.files || [];
      var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;

      for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (!this.isFileSelected(file)) {
          if (this.validate(file)) {
            if (this.isImage(file)) {
              file.objectURL = window.URL.createObjectURL(file);
            }

            this.files.push(file);
          }
        }
      }

      this.setState({
        files: this.files
      }, function () {
        if (_this2.hasFiles() && _this2.props.auto) {
          _this2.upload();
        }
      });

      if (this.props.onSelect) {
        this.props.onSelect({
          originalEvent: event,
          files: files
        });
      }

      this.clearInputElement();

      if (this.props.mode === 'basic') {
        this.fileInput.style.display = 'none';
      }
    }
  }, {
    key: "isFileSelected",
    value: function isFileSelected(file) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.state.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var sFile = _step.value;
          if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size) return true;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return false;
    }
  }, {
    key: "validate",
    value: function validate(file) {
      if (this.props.maxFileSize && file.size > this.props.maxFileSize) {
        this.messagesUI.show({
          severity: 'error',
          summary: this.props.invalidFileSizeMessageSummary.replace('{0}', file.name),
          detail: this.props.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.props.maxFileSize))
        });
        return false;
      }

      return true;
    }
  }, {
    key: "upload",
    value: function upload() {
      var _this3 = this;

      this.setState({
        msgs: []
      });
      var xhr = new XMLHttpRequest();
      var formData = new FormData();

      if (this.props.onBeforeUpload) {
        this.props.onBeforeUpload({
          'xhr': xhr,
          'formData': formData
        });
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.state.files[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var file = _step2.value;
          formData.append(this.props.name, file, file.name);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      xhr.upload.addEventListener('progress', function (event) {
        if (event.lengthComputable) {
          _this3.setState({
            progress: Math.round(event.loaded * 100 / event.total)
          });
        }

        if (_this3.props.onProgress) {
          _this3.props.onProgress({
            originalEvent: event,
            progress: _this3.progress
          });
        }

        ;
      });

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          _this3.setState({
            progress: 0
          });

          if (xhr.status >= 200 && xhr.status < 300) {
            if (_this3.props.onUpload) {
              _this3.props.onUpload({
                xhr: xhr,
                files: _this3.files
              });
            }
          } else {
            if (_this3.props.onError) {
              _this3.props.onError({
                xhr: xhr,
                files: _this3.files
              });
            }
          }

          _this3.clear();
        }
      };

      xhr.open('POST', this.props.url, true);

      if (this.props.onBeforeSend) {
        this.props.onBeforeSend({
          'xhr': xhr,
          'formData': formData
        });
      }

      xhr.withCredentials = this.props.withCredentials;
      xhr.send(formData);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.setState({
        files: []
      });

      if (this.props.onClear) {
        this.props.onClear();
      }

      this.clearInputElement();
    }
  }, {
    key: "onFocus",
    value: function onFocus(event) {
      _DomHandler.default.addClass(event.currentTarget.parentElement, 'p-focus');
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      _DomHandler.default.removeClass(event.currentTarget.parentElement, 'p-focus');
    }
  }, {
    key: "onDragEnter",
    value: function onDragEnter(event) {
      if (!this.props.disabled) {
        event.stopPropagation();
        event.preventDefault();
      }
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      if (!this.props.disabled) {
        _DomHandler.default.addClass(this.content, 'p-fileupload-highlight');

        event.stopPropagation();
        event.preventDefault();
      }
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(event) {
      if (!this.props.disabled) {
        _DomHandler.default.removeClass(this.content, 'p-fileupload-highlight');
      }
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      if (!this.props.disabled) {
        _DomHandler.default.removeClass(this.content, 'p-fileupload-highlight');

        event.stopPropagation();
        event.preventDefault();
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        var allowDrop = this.props.multiple || files && files.length === 1;

        if (allowDrop) {
          this.onFileSelect(event);
        }
      }
    }
  }, {
    key: "onSimpleUploaderClick",
    value: function onSimpleUploaderClick() {
      if (this.hasFiles()) {
        this.upload();
      }
    }
  }, {
    key: "renderChooseButton",
    value: function renderChooseButton() {
      var _this4 = this;

      var className = (0, _classnames.default)('p-button p-fileupload-choose p-component p-button-text-icon-left');
      return _react.default.createElement("span", {
        icon: "pi pi-plus",
        className: className
      }, _react.default.createElement("input", {
        ref: function ref(el) {
          return _this4.fileInput = el;
        },
        type: "file",
        onChange: this.onFileSelect,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        multiple: this.props.multiple,
        accept: this.props.accept,
        disabled: this.props.disabled
      }), _react.default.createElement("span", {
        className: "p-button-icon p-button-icon-left p-clickable pi pi-fw pi-plus"
      }), _react.default.createElement("span", {
        className: "p-button-text p-clickable"
      }, this.props.chooseLabel));
    }
  }, {
    key: "renderFiles",
    value: function renderFiles() {
      var _this5 = this;

      return _react.default.createElement("div", {
        className: "p-fileupload-files"
      }, this.state.files.map(function (file, index) {
        var preview = _this5.isImage(file) ? _react.default.createElement("div", null, _react.default.createElement("img", {
          alt: file.name,
          role: "presentation",
          src: file.objectURL,
          width: _this5.props.previewWidth
        })) : null;

        var fileName = _react.default.createElement("div", null, file.name);

        var size = _react.default.createElement("div", null, _this5.formatSize(file.size));

        var removeButton = _react.default.createElement("div", null, _react.default.createElement(_Button.Button, {
          type: "button",
          icon: "pi pi-times",
          onClick: function onClick() {
            return _this5.remove(index);
          }
        }));

        return _react.default.createElement("div", {
          className: "p-fileupload-row",
          key: file.name + file.type + file.size
        }, preview, fileName, size, removeButton);
      }));
    }
  }, {
    key: "renderAdvanced",
    value: function renderAdvanced() {
      var _this6 = this;

      var className = (0, _classnames.default)('p-fileupload p-component', this.props.className);
      var uploadButton, cancelButton, filesList, progressBar;
      var chooseButton = this.renderChooseButton();

      if (!this.props.auto) {
        uploadButton = _react.default.createElement(_Button.Button, {
          label: this.props.uploadLabel,
          icon: "pi pi-upload",
          onClick: this.upload,
          disabled: this.props.disabled || !this.hasFiles()
        });
        cancelButton = _react.default.createElement(_Button.Button, {
          label: this.props.cancelLabel,
          icon: "pi pi-times",
          onClick: this.clear,
          disabled: this.props.disabled || !this.hasFiles()
        });
      }

      if (this.hasFiles()) {
        filesList = this.renderFiles();
        progressBar = _react.default.createElement(_ProgressBar.ProgressBar, {
          value: this.state.progress,
          showValue: false
        });
      }

      return _react.default.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style
      }, _react.default.createElement("div", {
        className: "p-fileupload-buttonbar"
      }, chooseButton, uploadButton, cancelButton), _react.default.createElement("div", {
        ref: function ref(el) {
          _this6.content = el;
        },
        className: "p-fileupload-content",
        onDragEnter: this.onDragEnter,
        onDragOver: this.onDragOver,
        onDragLeave: this.onDragLeave,
        onDrop: this.onDrop
      }, progressBar, _react.default.createElement(_Messages.Messages, {
        ref: function ref(el) {
          return _this6.messagesUI = el;
        }
      }), filesList));
    }
  }, {
    key: "renderBasic",
    value: function renderBasic() {
      var _this7 = this;

      var buttonClassName = (0, _classnames.default)('p-button p-fileupload-choose p-component p-button-text-icon-left', {
        'p-fileupload-choose-selected': this.hasFiles()
      });
      var iconClassName = (0, _classnames.default)('p-button-icon-left pi', {
        'pi-plus': !this.hasFiles() || this.props.auto,
        'pi-upload': this.hasFiles() && !this.props.auto
      });
      return _react.default.createElement("span", {
        className: buttonClassName,
        onMouseUp: this.onSimpleUploaderClick
      }, _react.default.createElement("span", {
        className: iconClassName
      }), _react.default.createElement("span", {
        className: "p-button-text p-clickable"
      }, this.props.auto ? this.props.chooseLabel : this.hasFiles() ? this.state.files[0].name : this.props.chooseLabel), _react.default.createElement("input", {
        ref: function ref(el) {
          return _this7.fileInput = el;
        },
        type: "file",
        multiple: this.props.multiple,
        accept: this.props.accept,
        disabled: this.props.disabled,
        onChange: this.onFileSelect,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.mode === 'advanced') return this.renderAdvanced();else if (this.props.mode === 'basic') return this.renderBasic();
    }
  }]);

  return FileUpload;
}(_react.Component);

exports.FileUpload = FileUpload;

_defineProperty(FileUpload, "defaultProps", {
  id: null,
  name: null,
  url: null,
  mode: 'advanced',
  multiple: false,
  accept: null,
  disabled: false,
  auto: false,
  maxFileSize: null,
  invalidFileSizeMessageSummary: '{0}: Invalid file size, ',
  invalidFileSizeMessageDetail: 'maximum upload size is {0}.',
  style: null,
  className: null,
  widthCredentials: false,
  previewWidth: 50,
  chooseLabel: 'Choose',
  uploadLabel: 'Upload',
  cancelLabel: 'Cancel',
  onBeforeUpload: null,
  onBeforeSend: null,
  onUpload: null,
  onError: null,
  onClear: null,
  onSelect: null,
  onProgress: null
});

_defineProperty(FileUpload, "propTypes", {
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  url: _propTypes.default.string,
  mode: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  accept: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  auto: _propTypes.default.bool,
  maxFileSize: _propTypes.default.number,
  invalidFileSizeMessageSummary: _propTypes.default.string,
  invalidFileSizeMessageDetail: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  widthCredentials: _propTypes.default.bool,
  previewWidth: _propTypes.default.number,
  chooseLabel: _propTypes.default.string,
  uploadLabel: _propTypes.default.string,
  cancelLabel: _propTypes.default.string,
  onBeforeUpload: _propTypes.default.func,
  onBeforeSend: _propTypes.default.func,
  onUpload: _propTypes.default.func,
  onError: _propTypes.default.func,
  onClear: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onProgress: _propTypes.default.func
});
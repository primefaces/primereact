"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lightbox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var Lightbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Lightbox, _Component);

  function Lightbox(props) {
    var _this;

    _classCallCheck(this, Lightbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Lightbox).call(this, props));
    _this.state = {
      visible: false,
      currentImage: null
    };
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.prev = _this.prev.bind(_assertThisInitialized(_this));
    _this.onImageLoad = _this.onImageLoad.bind(_assertThisInitialized(_this));
    _this.onTargetClick = _this.onTargetClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Lightbox, [{
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      var _this2 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (_this2.panel && !_this2.panel.contains(event.target)) {
            _this2.hide();
          }
        };

        document.addEventListener('click', this.documentClickListener);
      }
    }
  }, {
    key: "unbindDocumentClickListener",
    value: function unbindDocumentClickListener() {
      if (this.documentClickListener) {
        document.removeEventListener('click', this.documentClickListener);
        this.documentClickListener = null;
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.unbindDocumentClickListener();
    }
  }, {
    key: "onImageClick",
    value: function onImageClick(event, image, i) {
      this.index = i;
      this.setState({
        loading: true
      });
      this.content.style.width = 32 + 'px';
      this.content.style.height = 32 + 'px';
      this.show();
      this.displayImage(image);
      this.preventDocumentClickListener = true;
      event.preventDefault();
    }
  }, {
    key: "onTargetClick",
    value: function onTargetClick(event) {
      this.show();
      event.preventDefault();
    }
  }, {
    key: "show",
    value: function show() {
      this.mask = document.createElement('div');
      this.mask.style.zIndex = String(_DomHandler.default.generateZIndex());

      _DomHandler.default.addMultipleClasses(this.mask, 'p-component-overlay p-dialog-mask');

      document.body.appendChild(this.mask);
      this.panel.style.zIndex = String(_DomHandler.default.generateZIndex());
      this.setState({
        visible: true
      });
      this.bindDocumentClickListener();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.index = null;
      this.setState({
        currentImage: null
      });

      if (this.mask) {
        document.body.removeChild(this.mask);
        this.mask = null;
      }

      this.setState({
        visible: false
      });
      this.unbindDocumentClickListener();
    }
  }, {
    key: "displayImage",
    value: function displayImage(image) {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          currentImage: image
        });
      }, 1000);
    }
  }, {
    key: "prev",
    value: function prev() {
      this.setState({
        loading: true
      });

      if (this.index > 0) {
        this.displayImage(this.props.images[--this.index]);
      }
    }
  }, {
    key: "next",
    value: function next() {
      this.setState({
        loading: true
      });

      if (this.index <= this.props.images.length - 1) {
        this.displayImage(this.props.images[++this.index]);
      }
    }
  }, {
    key: "onImageLoad",
    value: function onImageLoad(event) {
      var _this4 = this;

      var image = event.target;
      image.style.visibility = 'hidden';
      image.style.display = 'block';

      var imageWidth = _DomHandler.default.getOuterWidth(image);

      var imageHeight = _DomHandler.default.getOuterHeight(image);

      image.style.display = 'none';
      image.style.visibility = 'visible';
      this.content.style.width = imageWidth + 'px';
      this.content.style.height = imageHeight + 'px';
      this.panel.style.left = parseInt(this.panel.style.left, 10) + (_DomHandler.default.getOuterWidth(this.panel) - imageWidth) / 2 + 'px';
      this.panel.style.top = parseInt(this.panel.style.top, 10) + (_DomHandler.default.getOuterHeight(this.panel) - imageHeight) / 2 + 'px';
      setTimeout(function () {
        _DomHandler.default.fadeIn(image, 500);

        image.style.display = 'block';

        _this4.setState({
          loading: false
        });
      }, parseInt(this.props.effectDuration, 10));
    }
  }, {
    key: "renderLeftNav",
    value: function renderLeftNav() {
      var className = (0, _classnames.default)('p-lightbox-nav-left p-link', {
        'p-hidden': !(this.props.images && this.props.images.length && this.index !== 0 && this.state.currentImage)
      });
      return _react.default.createElement("button", {
        className: className,
        onClick: this.prev
      }, _react.default.createElement("span", {
        className: "p-lightbox-nav-icon pi pi-chevron-left"
      }));
    }
  }, {
    key: "renderRightNav",
    value: function renderRightNav() {
      var className = (0, _classnames.default)('p-lightbox-nav-right p-link', {
        'p-hidden': !(this.props.images && this.props.images.length && this.index < this.props.images.length - 1 && this.state.currentImage)
      });
      return _react.default.createElement("button", {
        className: className,
        onClick: this.next
      }, _react.default.createElement("span", {
        className: "p-lightbox-nav-icon pi pi-chevron-right"
      }));
    }
  }, {
    key: "renderImages",
    value: function renderImages() {
      var _this5 = this;

      return _react.default.createElement("div", {
        style: this.props.style,
        className: this.props.className
      }, this.props.images && this.props.images.map(function (image, index) {
        var imageItem = _react.default.createElement("a", {
          href: image.source,
          onClick: function onClick(event) {
            return _this5.onImageClick(event, image, index);
          },
          key: index,
          className: "p-lightbox-image-target"
        }, _react.default.createElement("img", {
          src: image.thumbnail,
          title: image.title,
          alt: image.alt
        }));

        return imageItem;
      }));
    }
  }, {
    key: "renderTarget",
    value: function renderTarget() {
      if (this.props.target) {
        return _react.default.createElement("span", {
          onClick: this.onTargetClick
        }, this.props.target);
      } else {
        return this.renderImages();
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this6 = this;

      var content;

      if (this.state.visible) {
        if (this.props.target) content = this.props.children;else content = _react.default.createElement("img", {
          src: this.state.currentImage ? this.state.currentImage.source : null,
          onLoad: this.onImageLoad,
          alt: "",
          style: {
            display: this.state.loading ? 'none' : 'inline'
          }
        });
      }

      return _react.default.createElement("div", {
        className: "p-lightbox-content",
        ref: function ref(el) {
          return _this6.content = el;
        },
        style: {
          transitionDuration: this.props.effectDuration,
          transitionTimingFunction: this.props.easing
        }
      }, content);
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var leftButton = this.renderLeftNav();
      var rightButton = this.renderRightNav();
      var target = this.renderTarget();
      var content = this.renderContent();
      var containerClassName = (0, _classnames.default)('p-lightbox p-component p-hidden', {
        'p-lightbox-loading': this.state.loading
      });
      return _react.default.createElement("div", {
        id: this.props.id
      }, target, _react.default.createElement("div", {
        className: containerClassName,
        style: {
          transitionProperty: 'all',
          transitionDuration: this.props.effectDuration,
          transitionTimingFunction: this.props.easing,
          display: this.state.visible ? 'block' : 'none'
        },
        ref: function ref(el) {
          return _this7.panel = el;
        }
      }, _react.default.createElement("div", {
        className: "p-lightbox-content-wrapper"
      }, leftButton, content, rightButton)));
    }
  }]);

  return Lightbox;
}(_react.Component);

exports.Lightbox = Lightbox;

_defineProperty(Lightbox, "defaultProps", {
  id: null,
  images: null,
  target: null,
  style: null,
  className: null,
  easing: 'ease-out',
  effectDuration: '500ms'
});

_defineProperty(Lightbox, "propTypes", {
  id: _propTypes.default.string,
  images: _propTypes.default.array,
  target: _propTypes.default.any,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  easing: _propTypes.default.string,
  effectDuration: _propTypes.default.string
});
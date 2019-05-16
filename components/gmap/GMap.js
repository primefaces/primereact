"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GMap = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var GMap =
/*#__PURE__*/
function (_Component) {
  _inherits(GMap, _Component);

  function GMap() {
    _classCallCheck(this, GMap);

    return _possibleConstructorReturn(this, _getPrototypeOf(GMap).apply(this, arguments));
  }

  _createClass(GMap, [{
    key: "initMap",
    value: function initMap() {
      this.map = new google.maps.Map(this.container, this.props.options);

      if (this.props.onMapReady) {
        this.props.onMapReady({
          map: this.map
        });
      }

      this.initOverlays(this.props.overlays);
      this.bindMapEvent('click', this.props.onMapClick);
      this.bindMapEvent('dragend', this.props.onMapDragEnd);
      this.bindMapEvent('zoom_changed', this.props.onZoomChanged);
    }
  }, {
    key: "initOverlays",
    value: function initOverlays(overlays) {
      if (overlays) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = overlays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var overlay = _step.value;
            overlay.setMap(this.map);
            this.bindOverlayEvents(overlay);
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
      }
    }
  }, {
    key: "bindOverlayEvents",
    value: function bindOverlayEvents(overlay) {
      var _this = this;

      overlay.addListener('click', function (event) {
        if (_this.props.onOverlayClick) {
          _this.props.onOverlayClick({
            originalEvent: event,
            overlay: overlay,
            map: _this.map
          });
        }
      });

      if (overlay.getDraggable()) {
        this.bindDragEvents(overlay);
      }
    }
  }, {
    key: "bindDragEvents",
    value: function bindDragEvents(overlay) {
      this.bindDragEvent(overlay, 'dragstart', this.props.onOverlayDragStart);
      this.bindDragEvent(overlay, 'drag', this.props.onOverlayDrag);
      this.bindDragEvent(overlay, 'dragend', this.props.onOverlayDragEnd);
    }
  }, {
    key: "bindMapEvent",
    value: function bindMapEvent(eventName, callback) {
      this.map.addListener(eventName, function (event) {
        if (callback) {
          callback(event);
        }
      });
    }
  }, {
    key: "bindDragEvent",
    value: function bindDragEvent(overlay, eventName, callback) {
      var _this2 = this;

      overlay.addListener(eventName, function (event) {
        if (callback) {
          callback({
            originalEvent: event,
            overlay: overlay,
            map: _this2.map
          });
        }
      });
    }
  }, {
    key: "getMap",
    value: function getMap() {
      return this.map;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.overlays !== this.props.overlays) {
        if (prevProps.overlays) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = prevProps.overlays[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var overlay = _step2.value;
              google.maps.event.clearInstanceListeners(overlay);
              overlay.setMap(null);
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
        }

        this.initOverlays(this.props.overlays);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initMap();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this3.container = el;
        },
        style: this.props.style,
        className: this.props.className
      });
    }
  }]);

  return GMap;
}(_react.Component);

exports.GMap = GMap;

_defineProperty(GMap, "defaultProps", {
  options: null,
  overlays: null,
  style: null,
  className: null,
  onMapReady: null,
  onMapClick: null,
  onMapDragEnd: null,
  onZoomChanged: null,
  onOverlayDragStart: null,
  onOverlayDrag: null,
  onOverlayDragEnd: null,
  onOverlayClick: null
});

_defineProperty(GMap, "propTypes", {
  options: _propTypes.default.object,
  overlays: _propTypes.default.array,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  onMapReady: _propTypes.default.func,
  onMapClick: _propTypes.default.func,
  onMapDragEnd: _propTypes.default.func,
  onZoomChanged: _propTypes.default.func,
  onOverlayDragStart: _propTypes.default.func,
  onOverlayDrag: _propTypes.default.func,
  onOverlayDragEnd: _propTypes.default.func,
  onOverlayClick: _propTypes.default.func
});
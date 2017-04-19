'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DomHandler = function () {
    function DomHandler() {
        _classCallCheck(this, DomHandler);
    }

    _createClass(DomHandler, null, [{
        key: 'innerWidth',
        value: function innerWidth(el) {
            var width = el.offsetWidth;
            var style = getComputedStyle(el);

            width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
            return width;
        }
    }, {
        key: 'width',
        value: function width(el) {
            var width = el.offsetWidth;
            var style = getComputedStyle(el);

            width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
            return width;
        }
    }, {
        key: 'getWindowScrollTop',
        value: function getWindowScrollTop() {
            var doc = document.documentElement;
            return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        }
    }, {
        key: 'getWindowScrollLeft',
        value: function getWindowScrollLeft() {
            var doc = document.documentElement;
            return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        }
    }, {
        key: 'getOuterWidth',
        value: function getOuterWidth(el, margin) {
            var width = el.offsetWidth;

            if (margin) {
                var style = getComputedStyle(el);
                width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
            }

            return width;
        }
    }, {
        key: 'getOuterHeight',
        value: function getOuterHeight(el, margin) {
            var height = el.offsetHeight;

            if (margin) {
                var style = getComputedStyle(el);
                height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
            }

            return height;
        }
    }, {
        key: 'getViewport',
        value: function getViewport() {
            var win = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName('body')[0],
                w = win.innerWidth || e.clientWidth || g.clientWidth,
                h = win.innerHeight || e.clientHeight || g.clientHeight;

            return { width: w, height: h };
        }
    }, {
        key: 'getZindex',
        value: function getZindex() {
            this.zindex = this.zindex || 1000;
            return this.zindex++;
        }
    }, {
        key: 'addMultipleClasses',
        value: function addMultipleClasses(element, className) {
            if (element.classList) {
                var styles = className.split(' ');
                for (var i = 0; i < styles.length; i++) {
                    element.classList.add(styles[i]);
                }
            } else {
                var _styles = className.split(' ');
                for (var _i = 0; _i < _styles.length; _i++) {
                    element.className += ' ' + _styles[_i];
                }
            }
        }
    }, {
        key: 'addClass',
        value: function addClass(element, className) {
            if (element.classList) element.classList.add(className);else element.className += ' ' + className;
        }
    }, {
        key: 'removeClass',
        value: function removeClass(element, className) {
            if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }, {
        key: 'hasClass',
        value: function hasClass(element, className) {
            if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    }, {
        key: 'absolutePosition',
        value: function absolutePosition(element, target) {
            var elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
            var elementOuterHeight = elementDimensions.height;
            var elementOuterWidth = elementDimensions.width;
            var targetOuterHeight = target.offsetHeight;
            var targetOuterWidth = target.offsetWidth;
            var targetOffset = target.getBoundingClientRect();
            var windowScrollTop = this.getWindowScrollTop();
            var windowScrollLeft = this.getWindowScrollLeft();
            var viewport = this.getViewport();
            var top = void 0,
                left = void 0;

            if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) top = targetOffset.top + windowScrollTop - elementOuterHeight;else top = targetOuterHeight + targetOffset.top + windowScrollTop;

            if (targetOffset.left + targetOuterWidth + elementOuterWidth > viewport.width) left = targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth;else left = targetOffset.left + windowScrollLeft;

            element.style.top = top + 'px';
            element.style.left = left + 'px';
        }
    }, {
        key: 'relativePosition',
        value: function relativePosition(element, target) {
            var elementDimensions = element.offsetParent ? { width: element.outerWidth, height: element.outerHeight } : this.getHiddenElementDimensions(element);
            var targetHeight = target.offsetHeight;
            var targetWidth = target.offsetWidth;
            var targetOffset = target.getBoundingClientRect();
            var viewport = this.getViewport();
            var top, left;

            if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) top = -1 * elementDimensions.height;else top = targetHeight;

            if (targetOffset.left + elementDimensions.width > viewport.width) left = targetWidth - elementDimensions.width;else left = 0;

            element.style.top = top + 'px';
            element.style.left = left + 'px';
        }
    }, {
        key: 'getHiddenElementDimensions',
        value: function getHiddenElementDimensions(element) {
            var dimensions = {};
            element.style.visibility = 'hidden';
            element.style.display = 'block';
            dimensions.width = element.offsetWidth;
            dimensions.height = element.offsetHeight;
            element.style.display = 'none';
            element.style.visibility = 'visible';

            return dimensions;
        }
    }, {
        key: 'fadeIn',
        value: function fadeIn(element, duration) {
            element.style.opacity = 0;

            var last = +new Date();
            var opacity = 0;
            var tick = function tick() {
                opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
                element.style.opacity = opacity;
                last = +new Date();

                if (+opacity < 1) {
                    window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
                }
            };

            tick();
        }
    }, {
        key: 'fadeOut',
        value: function fadeOut(element, ms) {
            var opacity = 1,
                interval = 50,
                duration = ms,
                gap = interval / duration;

            var fading = setInterval(function () {
                opacity -= gap;

                if (opacity <= 0) {
                    opacity = 0;
                    clearInterval(fading);
                }

                element.style.opacity = opacity;
            }, interval);
        }
    }, {
        key: 'getUserAgent',
        value: function getUserAgent() {
            return navigator.userAgent;
        }
    }, {
        key: 'appendChild',
        value: function appendChild(element, target) {
            if (this.isElement(target)) target.appendChild(element);else if (target.el && target.el.nativeElement) target.el.nativeElement.appendChild(element);else throw new Error('Cannot append ' + target + ' to ' + element);
        }
    }, {
        key: 'scrollInView',
        value: function scrollInView(container, item) {
            var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
            var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
            var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
            var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
            var containerRect = container.getBoundingClientRect();
            var itemRect = item.getBoundingClientRect();
            var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
            var scroll = container.scrollTop;
            var elementHeight = container.clientHeight;
            var itemHeight = this.getOuterHeight(item);

            if (offset < 0) {
                container.scrollTop = scroll + offset;
            } else if (offset + itemHeight > elementHeight) {
                container.scrollTop = scroll + offset - elementHeight + itemHeight;
            }
        }
    }]);

    return DomHandler;
}();

exports.default = DomHandler;
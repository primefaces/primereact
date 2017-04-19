'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputMask = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DomHandler = require('../utils/DomHandler');

var _DomHandler2 = _interopRequireDefault(_DomHandler);

var _InputText = require('../inputtext/InputText');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputMask = exports.InputMask = function (_Component) {
    _inherits(InputMask, _Component);

    function InputMask() {
        _classCallCheck(this, InputMask);

        return _possibleConstructorReturn(this, (InputMask.__proto__ || Object.getPrototypeOf(InputMask)).apply(this, arguments));
    }

    _createClass(InputMask, [{
        key: 'caret',
        value: function caret(first, last) {
            var range = void 0,
                begin = void 0,
                end = void 0;

            if (!this.input.offsetParent || this.input !== document.activeElement) {
                return;
            }

            if (typeof first === 'number') {
                begin = first;
                end = typeof last === 'number' ? last : begin;
                if (this.input.setSelectionRange) {
                    this.input.setSelectionRange(begin, end);
                } else if (this.input['createTextRange']) {
                    range = this.input['createTextRange']();
                    range.collapse(true);
                    range.moveEnd('character', end);
                    range.moveStart('character', begin);
                    range.select();
                }
            } else {
                if (this.input.setSelectionRange) {
                    begin = this.input.selectionStart;
                    end = this.input.selectionEnd;
                } else if (document['selection'] && document['selection'].createRange) {
                    range = document['selection'].createRange();
                    begin = 0 - range.duplicate().moveStart('character', -100000);
                    end = begin + range.text.length;
                }

                return { begin: begin, end: end };
            }
        }
    }, {
        key: 'isCompleted',
        value: function isCompleted() {
            for (var i = this.firstNonMaskPos; i <= this.lastRequiredNonMaskPos; i++) {
                if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
                    return false;
                }
            }

            return true;
        }
    }, {
        key: 'getPlaceholder',
        value: function getPlaceholder(i) {
            if (i < this.props.slotChar.length) {
                return this.props.slotChar.charAt(i);
            }
            return this.props.slotChar.charAt(0);
        }
    }, {
        key: 'seekNext',
        value: function seekNext(pos) {
            while (++pos < this.len && !this.tests[pos]) {}
            return pos;
        }
    }, {
        key: 'seekPrev',
        value: function seekPrev(pos) {
            while (--pos >= 0 && !this.tests[pos]) {}
            return pos;
        }
    }, {
        key: 'shiftL',
        value: function shiftL(begin, end) {
            var i = void 0,
                j = void 0;

            if (begin < 0) {
                return;
            }

            for (i = begin, j = this.seekNext(end); i < this.len; i++) {
                if (this.tests[i]) {
                    if (j < this.len && this.tests[i].test(this.buffer[j])) {
                        this.buffer[i] = this.buffer[j];
                        this.buffer[j] = this.getPlaceholder(j);
                    } else {
                        break;
                    }

                    j = this.seekNext(j);
                }
            }
            this.writeBuffer();
            this.caret(Math.max(this.firstNonMaskPos, begin));
        }
    }, {
        key: 'shiftR',
        value: function shiftR(pos) {
            var i = void 0,
                c = void 0,
                j = void 0,
                t = void 0;

            for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
                if (this.tests[i]) {
                    j = this.seekNext(i);
                    t = this.buffer[i];
                    this.buffer[i] = c;
                    if (j < this.len && this.tests[j].test(t)) {
                        c = t;
                    } else {
                        break;
                    }
                }
            }
        }
    }, {
        key: 'handleAndroidInput',
        value: function handleAndroidInput(e) {
            var curVal = this.input.value;
            var pos = this.caret();
            if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
                // a deletion or backspace happened
                this.checkVal(true);
                while (pos.begin > 0 && !this.tests[pos.begin - 1]) {
                    pos.begin--;
                }if (pos.begin === 0) {
                    while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin]) {
                        pos.begin++;
                    }
                }
                this.caret(pos.begin, pos.begin);
            } else {
                this.checkVal(true);
                while (pos.begin < this.len && !this.tests[pos.begin]) {
                    pos.begin++;
                }this.caret(pos.begin, pos.begin);
            }

            if (this.props.onComplete && this.isCompleted()) {
                this.props.onComplete({
                    originalEvent: e
                });
            }
        }
    }, {
        key: 'onBlur',
        value: function onBlur(e) {
            this.focus = false;
            this.checkVal();
            this.updateModel(e);
            this.updateFilledState();

            if (this.input.value !== this.focusText) {
                var event = document.createEvent('HTMLEvents');
                event.initEvent('change', true, false);
                this.input.dispatchEvent(event);
            }
        }
    }, {
        key: 'onKeyDown',
        value: function onKeyDown(e) {
            if (this.props.readonly) {
                return;
            }

            var k = e.which || e.keyCode,
                pos = void 0,
                begin = void 0,
                end = void 0;
            var iPhone = /iphone/i.test(_DomHandler2.default.getUserAgent());
            this.oldVal = this.input.value;

            //backspace, delete, and escape get special treatment
            if (k === 8 || k === 46 || iPhone && k === 127) {
                pos = this.caret();
                begin = pos.begin;
                end = pos.end;

                if (end - begin === 0) {
                    begin = k !== 46 ? this.seekPrev(begin) : end = this.seekNext(begin - 1);
                    end = k === 46 ? this.seekNext(end) : end;
                }

                this.clearBuffer(begin, end);
                this.shiftL(begin, end - 1);
                this.updateModel(e);

                e.preventDefault();
            } else if (k === 13) {
                // enter
                this.onBlur(e);
                this.updateModel(e);
            } else if (k === 27) {
                // escape
                this.input.value = this.focusText;
                this.caret(0, this.checkVal());
                this.updateModel(e);
                e.preventDefault();
            }
        }
    }, {
        key: 'onKeyPress',
        value: function onKeyPress(e) {
            if (this.props.readonly) {
                return;
            }

            var k = e.which || e.keyCode,
                pos = this.caret(),
                p,
                c,
                next,
                completed;

            if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {
                //Ignore
                return;
            } else if (k && k !== 13) {
                if (pos.end - pos.begin !== 0) {
                    this.clearBuffer(pos.begin, pos.end);
                    this.shiftL(pos.begin, pos.end - 1);
                }

                p = this.seekNext(pos.begin - 1);
                if (p < this.len) {
                    c = String.fromCharCode(k);
                    if (this.tests[p].test(c)) {
                        this.shiftR(p);

                        this.buffer[p] = c;
                        this.writeBuffer();
                        next = this.seekNext(p);

                        if (/android/i.test(_DomHandler2.default.getUserAgent())) {
                            //Path for CSP Violation on FireFox OS 1.1
                            var proxy = function proxy() {
                                this.caret.bind(this, next)();
                            };

                            setTimeout(proxy, 0);
                        } else {
                            this.caret(next);
                        }
                        if (pos.begin <= this.lastRequiredNonMaskPos) {
                            completed = this.isCompleted();
                        }
                    }
                }
                e.preventDefault();
            }

            this.updateModel(e);

            if (this.props.onComplete && completed) {
                this.props.onComplete({
                    originalEvent: e
                });
            }
        }
    }, {
        key: 'clearBuffer',
        value: function clearBuffer(start, end) {
            var i = void 0;
            for (i = start; i < end && i < this.len; i++) {
                if (this.tests[i]) {
                    this.buffer[i] = this.getPlaceholder(i);
                }
            }
        }
    }, {
        key: 'writeBuffer',
        value: function writeBuffer() {
            this.input.value = this.buffer.join('');
        }
    }, {
        key: 'checkVal',
        value: function checkVal(allow) {
            //try to place characters where they belong
            var test = this.input.value,
                lastMatch = -1,
                i = void 0,
                c = void 0,
                pos = void 0;

            for (i = 0, pos = 0; i < this.len; i++) {
                if (this.tests[i]) {
                    this.buffer[i] = this.getPlaceholder(i);
                    while (pos++ < test.length) {
                        c = test.charAt(pos - 1);
                        if (this.tests[i].test(c)) {
                            this.buffer[i] = c;
                            lastMatch = i;
                            break;
                        }
                    }
                    if (pos > test.length) {
                        this.clearBuffer(i + 1, this.len);
                        break;
                    }
                } else {
                    if (this.buffer[i] === test.charAt(pos)) {
                        pos++;
                    }
                    if (i < this.partialPosition) {
                        lastMatch = i;
                    }
                }
            }
            if (allow) {
                this.writeBuffer();
            } else if (lastMatch + 1 < this.partialPosition) {
                if (this.props.autoClear || this.buffer.join('') === this.defaultBuffer) {
                    // Invalid value. Remove it and replace it with the
                    // mask, which is the default behavior.
                    if (this.input.value) this.input.value = '';
                    this.clearBuffer(0, this.len);
                } else {
                    // Invalid value, but we opt to show the value to the
                    // user and allow them to correct their mistake.
                    this.writeBuffer();
                }
            } else {
                this.writeBuffer();
                this.input.value = this.input.value.substring(0, lastMatch + 1);
            }
            return this.partialPosition ? i : this.firstNonMaskPos;
        }
    }, {
        key: 'onFocus',
        value: function onFocus(event) {
            var _this3 = this;

            if (this.props.readonly) {
                return;
            }

            this.focus = true;

            clearTimeout(this.caretTimeoutId);
            var pos = void 0;

            this.focusText = this.input.value;

            pos = this.checkVal();

            this.caretTimeoutId = setTimeout(function () {
                if (_this3.input !== document.activeElement) {
                    return;
                }
                _this3.writeBuffer();
                if (pos === _this3.props.mask.replace("?", "").length) {
                    _this3.caret(0, pos);
                } else {
                    _this3.caret(pos);
                }
                _this3.updateFilledState();
            }, 10);
        }
    }, {
        key: 'onInput',
        value: function onInput(event) {
            if (this.androidChrome) this.handleAndroidInput(event);else this.handleInputChange(event);
        }
    }, {
        key: 'handleInputChange',
        value: function handleInputChange(event) {
            var _this4 = this;

            if (this.props.readonly) {
                return;
            }

            setTimeout(function () {
                var pos = _this4.checkVal(true);
                _this4.caret(pos);
                _this4.updateModel(event);
                if (_this4.props.onComplete && _this4.isCompleted()) {
                    _this4.props.onComplete({
                        originalEvent: event
                    });
                }
            }, 0);
        }
    }, {
        key: 'getUnmaskedValue',
        value: function getUnmaskedValue() {
            var unmaskedBuffer = [];
            for (var i = 0; i < this.buffer.length; i++) {
                var c = this.buffer[i];
                if (this.tests[i] && c !== this.getPlaceholder(i)) {
                    unmaskedBuffer.push(c);
                }
            }

            return unmaskedBuffer.join('');
        }
    }, {
        key: 'updateModel',
        value: function updateModel(e) {
            if (this.props.onChange) {
                var val = this.props.unmask ? this.getUnmaskedValue() : e.target.value;
                this.props.onChange({
                    originalEvent: e,
                    value: this.defaultBuffer !== val ? val : ''
                });
            }
        }
    }, {
        key: 'updateFilledState',
        value: function updateFilledState() {
            this.filled = this.input && this.input.value !== '';
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.tests = [];
            this.partialPosition = this.props.mask.length;
            this.len = this.props.mask.length;
            this.firstNonMaskPos = null;
            this.defs = {
                '9': '[0-9]',
                'a': '[A-Za-z]',
                '*': '[A-Za-z0-9]'
            };

            var ua = _DomHandler2.default.getUserAgent();
            this.androidChrome = /chrome/i.test(ua) && /android/i.test(ua);

            var maskTokens = this.props.mask.split('');
            for (var i = 0; i < maskTokens.length; i++) {
                var c = maskTokens[i];
                if (c === '?') {
                    this.len--;
                    this.partialPosition = i;
                } else if (this.defs[c]) {
                    this.tests.push(new RegExp(this.defs[c]));
                    if (this.firstNonMaskPos === null) {
                        this.firstNonMaskPos = this.tests.length - 1;
                    }
                    if (i < this.partialPosition) {
                        this.lastRequiredNonMaskPos = this.tests.length - 1;
                    }
                } else {
                    this.tests.push(null);
                }
            }

            this.buffer = [];
            for (var _i = 0; _i < maskTokens.length; _i++) {
                var _c = maskTokens[_i];
                if (_c !== '?') {
                    if (this.defs[_c]) this.buffer.push(this.getPlaceholder(_i));else this.buffer.push(_c);
                }
            }
            this.defaultBuffer = this.buffer.join('');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;
            this.value = this.props.value;

            if (this.input) {
                if (this.value === undefined || this.value === null) {
                    this.input.value = '';
                } else {
                    this.input.value = this.value;
                    this.checkVal();
                }

                setTimeout(function () {
                    _this.writeBuffer();
                    _this.checkVal();
                }, 10);

                this.focusText = this.input.value;
            }

            this.updateFilledState();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return _react2.default.createElement(_InputText.InputText, { ref: function ref(el) {
                    return _this5.input = _reactDom2.default.findDOMNode(el);
                }, type: this.props.type, name: this.props.name, style: this.props.style, className: this.props.styleClass, placeholder: this.props.placeholder,
                size: this.props.size, maxLength: this.props.maxlength, tabIndex: this.props.tabindex, disabled: this.props.disabled, readOnly: this.props.readonly,
                onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyDown: this.onKeyDown.bind(this), onKeyPress: this.onKeyPress.bind(this),
                onInput: this.onInput.bind(this), onPaste: this.handleInputChange.bind(this) });
        }
    }]);

    return InputMask;
}(_react.Component);

InputMask.defaultProps = {
    type: 'text',
    mask: null,
    slotChar: '_',
    autoClear: true,
    unmask: false,
    style: null,
    styleClass: null,
    placeholder: null,
    size: null,
    maxlength: null,
    tabindex: null,
    disabled: false,
    readonly: false,
    name: null,
    onComplete: null
};
InputMask.propsTypes = {
    type: _propTypes2.default.string,
    mask: _propTypes2.default.string,
    slotChar: _propTypes2.default.string,
    autoClear: _propTypes2.default.bool,
    unmask: _propTypes2.default.bool,
    style: _propTypes2.default.string,
    styleClass: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    size: _propTypes2.default.number,
    maxlength: _propTypes2.default.number,
    tabindex: _propTypes2.default.number,
    disabled: _propTypes2.default.bool,
    readonly: _propTypes2.default.bool,
    name: _propTypes2.default.string,
    onComplete: _propTypes2.default.func
};
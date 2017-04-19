'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FileUpload = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../button/Button');

var _Messages = require('../messages/Messages');

var _ProgressBar = require('../progressbar/ProgressBar');

var _DomHandler = require('../utils/DomHandler');

var _DomHandler2 = _interopRequireDefault(_DomHandler);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileUpload = exports.FileUpload = function (_Component) {
    _inherits(FileUpload, _Component);

    function FileUpload(props) {
        _classCallCheck(this, FileUpload);

        var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this, props));

        _this.state = { files: [], msgs: [] };
        _this.upload = _this.upload.bind(_this);
        _this.clear = _this.clear.bind(_this);
        _this.onChooseClick = _this.onChooseClick.bind(_this);
        _this.onFileSelect = _this.onFileSelect.bind(_this);
        _this.onDragEnter = _this.onDragEnter.bind(_this);
        _this.onDragOver = _this.onDragOver.bind(_this);
        _this.onDragLeave = _this.onDragLeave.bind(_this);
        _this.onDrop = _this.onDrop.bind(_this);
        return _this;
    }

    _createClass(FileUpload, [{
        key: 'hasFiles',
        value: function hasFiles() {
            return this.state.files && this.state.files.length > 0;
        }
    }, {
        key: 'isImage',
        value: function isImage(file) {
            return (/^image\//.test(file.type)
            );
        }
    }, {
        key: 'remove',
        value: function remove(index) {
            var currentFiles = [].concat(_toConsumableArray(this.state.files));
            currentFiles.splice(index, 1);
            this.setState({ files: currentFiles });
        }
    }, {
        key: 'formatSize',
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
        key: 'onChooseClick',
        value: function onChooseClick(event) {
            this.fileInput.value = null;
            this.fileInput.click();
        }
    }, {
        key: 'onFileSelect',
        value: function onFileSelect(event) {
            this.setState({ msgs: [] });
            var selectedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            for (var i = 0; i < selectedFiles.length; i++) {
                var file = selectedFiles[i];
                if (this.validate(file)) {
                    if (this.isImage(file)) {
                        file.objectURL = window.URL.createObjectURL(file);
                    }

                    this.setState({ files: [].concat(_toConsumableArray(this.state.files), [file]) });
                }
            }

            if (this.props.onSelect) {
                this.props.onSelect({ originalEvent: event, files: this.state.files });
            }

            if (this.hasFiles() && this.props.auto) {
                this.upload();
            }
        }
    }, {
        key: 'validate',
        value: function validate(file) {
            if (this.props.maxFileSize && file.size > this.props.maxFileSize) {
                var messages = this.state.msgs.slice();
                messages.push({
                    severity: 'error',
                    summary: this.props.invalidFileSizeMessageSummary.replace('{0}', file.name),
                    detail: this.props.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.props.maxFileSize))
                });
                this.setState({ msgs: messages });
                return false;
            }

            return true;
        }
    }, {
        key: 'upload',
        value: function upload() {
            var _this2 = this;

            this.setState({ msgs: [] });
            var xhr = new XMLHttpRequest();
            var formData = new FormData();

            if (this.props.onBeforeUpload) {
                this.props.onBeforeUpload({
                    'xhr': xhr,
                    'formData': formData
                });
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.state.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var file = _step.value;

                    formData.append(this.props.name, file, file.name);
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

            xhr.upload.addEventListener('progress', function (event) {
                if (event.lengthComputable) {
                    _this2.setState({ progress: Math.round(event.loaded * 100 / event.total) });
                }
            }, false);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    _this2.setState({ progress: 0 });

                    if (xhr.status >= 200 && xhr.status < 300) {
                        if (_this2.props.onUpload) _this2.props.onUpload({ xhr: xhr, files: _this2.files });
                    } else {
                        if (_this2.props.onError) _this2.props.onError.emit({ xhr: xhr, files: _this2.files });
                    }

                    _this2.clear();
                }
            };

            xhr.open('POST', this.props.url, true);

            if (this.props.onBeforeSend) {
                this.props.onBeforeSend({
                    'xhr': xhr,
                    'formData': formData
                });
            }

            xhr.send(formData);
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.setState({ files: [] });

            if (this.props.onClear) {
                this.props.onClear();
            }
        }
    }, {
        key: 'onDragEnter',
        value: function onDragEnter(event) {
            if (!this.props.disabled) {
                event.stopPropagation();
                event.preventDefault();
            }
        }
    }, {
        key: 'onDragOver',
        value: function onDragOver(event) {
            if (!this.props.disabled) {
                _DomHandler2.default.addClass(this.content, 'ui-fileupload-highlight');
                event.stopPropagation();
                event.preventDefault();
            }
        }
    }, {
        key: 'onDragLeave',
        value: function onDragLeave(event) {
            if (!this.props.disabled) {
                _DomHandler2.default.removeClass(this.content, 'ui-fileupload-highlight');
            }
        }
    }, {
        key: 'onDrop',
        value: function onDrop(event) {
            if (!this.props.disabled) {
                _DomHandler2.default.removeClass(this.content, 'ui-fileupload-highlight');
                event.stopPropagation();
                event.preventDefault();

                this.onFileSelect(event);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var className = (0, _classnames2.default)('ui-fileupload ui-widget', this.props.className);
            var chooseButton = _react2.default.createElement(
                _Button.Button,
                { label: this.props.chooseLabel, icon: 'fa-plus', className: 'ui-fileupload-choose', onClick: this.onChooseClick, disabled: this.props.disabled },
                _react2.default.createElement('input', { type: 'file', onChange: this.onFileSelect, multiple: this.props.multiple, accept: this.props.accept, disabled: this.props.disabled, ref: function ref(el) {
                        _this3.fileInput = el;
                    } })
            );

            if (!this.props.auto) {
                var uploadButton = _react2.default.createElement(_Button.Button, { label: this.props.uploadLabel, icon: 'fa-upload', onClick: this.upload, disabled: this.props.disabled });
                var cancelButton = _react2.default.createElement(_Button.Button, { label: this.props.cancelLabel, icon: 'fa-close', onClick: this.clear, disabled: this.props.disabled });
            }

            if (this.hasFiles()) {
                var filesList = _react2.default.createElement(
                    'div',
                    { className: 'ui-fileupload-files' },
                    this.state.files.map(function (file, index) {
                        var preview = _this3.isImage(file) ? _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement('img', { alt: file.name, role: 'presentation', src: file.objectURL, width: _this3.props.previewWidth })
                        ) : null;
                        var fileName = _react2.default.createElement(
                            'div',
                            null,
                            file.name
                        );
                        var size = _react2.default.createElement(
                            'div',
                            null,
                            _this3.formatSize(file.size)
                        );
                        var removeButton = _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_Button.Button, { type: 'button', icon: 'fa-close', onClick: function onClick(event) {
                                    return _this3.remove(index);
                                } })
                        );

                        return _react2.default.createElement(
                            'div',
                            { className: 'ui-fileupload-row', key: file.name + file.type },
                            preview,
                            fileName,
                            size,
                            removeButton
                        );
                    })
                );

                var progressBar = _react2.default.createElement(_ProgressBar.ProgressBar, { value: this.state.progress, showValue: false });
            }

            return _react2.default.createElement(
                'div',
                { className: className, style: this.props.style },
                _react2.default.createElement(
                    'div',
                    { className: 'ui-fileupload-buttonbar ui-widget-header ui-corner-top' },
                    chooseButton,
                    uploadButton,
                    cancelButton
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ui-fileupload-content ui-widget-content ui-corner-bottom', onDragEnter: this.onDragEnter, onDragOver: this.onDragOver, onDragLeave: this.onDragLeave, onDrop: this.onDrop,
                        ref: function ref(el) {
                            _this3.content = el;
                        } },
                    progressBar,
                    _react2.default.createElement(_Messages.Messages, { value: this.state.msgs }),
                    filesList
                )
            );
        }
    }]);

    return FileUpload;
}(_react.Component);

FileUpload.defaultProps = {
    name: null,
    url: null,
    multiple: false,
    accept: null,
    disabled: false,
    auto: false,
    maxFileSize: null,
    invalidFileSizeMessageSummary: '{0}: Invalid file size, ',
    invalidFileSizeMessageDetail: 'maximum upload size is {0}.',
    style: null,
    className: null,
    previewWidth: 50,
    chooseLabel: 'Choose',
    uploadLabel: 'Upload',
    cancelLabel: 'Cancel',
    onBeforeUpload: null,
    onBeforeSend: null,
    onUpload: null,
    onError: null,
    onClear: null,
    onSelect: null
};
FileUpload.propTypes = {
    name: _propTypes2.default.string,
    url: _propTypes2.default.string,
    multiple: _propTypes2.default.bool,
    accept: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    auto: _propTypes2.default.bool,
    maxFileSize: _propTypes2.default.number,
    invalidFileSizeMessageSummary: _propTypes2.default.string,
    invalidFileSizeMessageDetail: _propTypes2.default.string,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    previewWidth: _propTypes2.default.number,
    chooseLabel: _propTypes2.default.string,
    uploadLabel: _propTypes2.default.string,
    cancelLabel: _propTypes2.default.string,
    onBeforeUpload: _propTypes2.default.func,
    onBeforeSend: _propTypes2.default.func,
    onUpload: _propTypes2.default.func,
    onError: _propTypes2.default.func,
    onClear: _propTypes2.default.func,
    onSelect: _propTypes2.default.func
};
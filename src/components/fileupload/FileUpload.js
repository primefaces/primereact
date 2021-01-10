import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from '../button/Button';
import {Messages} from '../messages/Messages';
import {ProgressBar} from '../progressbar/ProgressBar';
import DomHandler from '../utils/DomHandler';
import { classNames } from '../utils/ClassNames';
import { Ripple } from '../ripple/Ripple';
import ObjectUtils from '../utils/ObjectUtils';
import { localeOption } from '../api/Locale';

export class FileUpload extends Component {

    static defaultProps = {
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
        chooseLabel: null,
        uploadLabel: null,
        cancelLabel: null,
        customUpload: false,
        emptyTemplate: null,
        onBeforeUpload: null,
        onBeforeSend: null,
        onUpload: null,
        onError: null,
        onClear: null,
        onSelect: null,
        onProgress: null,
        onValidationFail: null,
        uploadHandler: null,
        onRemove: null
    }

    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
        mode: PropTypes.string,
        multiple: PropTypes.bool,
        accept: PropTypes.string,
        disabled: PropTypes.bool,
        auto: PropTypes.bool,
        maxFileSize: PropTypes.number,
        invalidFileSizeMessageSummary: PropTypes.string,
        invalidFileSizeMessageDetail: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        widthCredentials: PropTypes.bool,
        previewWidth: PropTypes.number,
        chooseLabel: PropTypes.string,
        uploadLabel: PropTypes.string,
        cancelLabel: PropTypes.string,
        customUpload: PropTypes.bool,
        emptyTemplate: PropTypes.any,
        onBeforeUpload: PropTypes.func,
        onBeforeSend: PropTypes.func,
        onUpload: PropTypes.func,
        onError: PropTypes.func,
        onClear: PropTypes.func,
        onSelect: PropTypes.func,
        onProgress: PropTypes.func,
        onValidationFail: PropTypes.func,
        uploadHandler: PropTypes.func,
        onRemove: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            files: [],
            msgs: [],
            focused: false
        };

        this.choose = this.choose.bind(this);
        this.upload = this.upload.bind(this);
        this.clear = this.clear.bind(this);
        this.onFileSelect = this.onFileSelect.bind(this);
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onSimpleUploaderClick = this.onSimpleUploaderClick.bind(this);

        this.duplicateIEEvent = false;
    }

    hasFiles() {
        return this.state.files && this.state.files.length > 0;
    }

    isImage(file) {
        return /^image\//.test(file.type);
    }

    chooseDisabled() {
        return this.props.disabled || (this.props.fileLimit && this.props.fileLimit <= this.state.files.length + this.uploadedFileCount);
    }

    uploadDisabled() {
        return this.props.disabled || !this.hasFiles();
    }

    cancelDisabled() {
        return this.props.disabled || !this.hasFiles();
    }

    chooseButtonLabel() {
        return this.props.chooseLabel || localeOption('choose');
    }

    uploadButtonLabel() {
        return this.props.uploadLabel || localeOption('upload');
    }

    cancelButtonLabel() {
        return this.props.cancelLabel || localeOption('cancel');
    }

    remove(event, index) {
        this.clearInputElement();
        let currentFiles = [...this.state.files];
        let removedFile = this.state.files[index];

        currentFiles.splice(index, 1);
        this.setState({ files: currentFiles });

        if (this.props.onRemove) {
            this.props.onRemove({
                originalEvent: event,
                file: removedFile
            })
        }
    }

    clearInputElement() {
        this.fileInput.value = '';
    }

    clearIEInput() {
        if (this.fileInput) {
            this.duplicateIEEvent = true; //IE11 fix to prevent onFileChange trigger again
            this.fileInput.value = '';
        }
    }

    formatSize(bytes) {
        if(bytes === 0) {
            return '0 B';
        }
        let k = 1000,
        dm = 3,
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    onFileSelect(event) {
        if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {
            this.duplicateIEEvent = false;
            return;
        }

        this.setState({msgs:[]});
        this.files = this.state.files || [];
        let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        for (let i = 0; i < files.length; i++) {
            let file = files[i];

            if (!this.isFileSelected(file)) {
                if (this.validate(file)) {
                    if (this.isImage(file)) {
                        file.objectURL = window.URL.createObjectURL(file);
                    }
                    this.files.push(file);
                }
            }
        }

        this.setState({files: this.files}, () => {
            if (this.hasFiles() && this.props.auto) {
                this.upload();
            }
        });

        if(this.props.onSelect) {
            this.props.onSelect({originalEvent: event, files: files});
        }

        if (event.type !== 'drop' && this.isIE11()) {
            this.clearIEInput();
        }
        else {
            this.clearInputElement();
        }

        if(this.props.mode === 'basic' && this.files.length > 0) {
            this.fileInput.style.display = 'none';
        }
    }

    isFileSelected(file){
        for (let sFile of this.state.files){
            if ((sFile.name + sFile.type + sFile.size) === (file.name + file.type+file.size))
                return true;
        }
        return false;
    }

    isIE11() {
        return !!window['MSInputMethodContext'] && !!document['documentMode'];
    }

    validate(file) {
        if (this.props.maxFileSize && file.size > this.props.maxFileSize) {
            const message = {
                severity: 'error',
                summary: this.props.invalidFileSizeMessageSummary.replace('{0}', file.name),
                detail: this.props.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.props.maxFileSize))
            };

            if (this.props.mode === 'advanced') {
                this.messagesUI.show(message);
            }

            if (this.props.onValidationFail) {
                this.props.onValidationFail(file);
            }

            return false;
        }

        return true;
    }

    upload() {
        if (this.props.customUpload) {
            if (this.props.fileLimit) {
                this.uploadedFileCount += this.state.files.length;
            }

            if (this.props.uploadHandler) {
                this.props.uploadHandler({
                    files: this.state.files
                })
            }
        }
        else {
            this.setState({msgs:[]});
            let xhr = new XMLHttpRequest();
            let formData = new FormData();

            if (this.props.onBeforeUpload) {
                this.props.onBeforeUpload({
                    'xhr': xhr,
                    'formData': formData
                });
            }

            for (let file of this.state.files) {
                formData.append(this.props.name, file, file.name);
            }

            xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                    this.setState({progress: Math.round((event.loaded * 100) / event.total)});
                }

                if (this.props.onProgress) {
                    this.props.onProgress({
                        originalEvent: event,
                        progress: this.progress
                    });
                };
            });

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    this.setState({ progress: 0 });

                    if (xhr.status >= 200 && xhr.status < 300) {
                        if (this.props.fileLimit) {
                            this.uploadedFileCount += this.state.files.length;
                        }

                        if (this.props.onUpload) {
                            this.props.onUpload({xhr: xhr, files: this.state.files});
                        }
                    }
                    else {
                        if (this.props.onError) {
                            this.props.onError({xhr: xhr, files: this.state.files});
                        }
                    }

                    this.clear();
                }
            };

            xhr.open('POST', this.props.url, true);

            if(this.props.onBeforeSend) {
                this.props.onBeforeSend({
                    'xhr': xhr,
                    'formData': formData
                });
            }

            xhr.withCredentials = this.props.withCredentials;

            xhr.send(formData);
        }
    }

    clear() {
        this.setState({ files:[] });
        if (this.props.onClear) {
            this.props.onClear();
        }
        this.clearInputElement();
    }

    choose() {
        this.fileInput.click();
    }

    onFocus() {
        this.setState({ focused: true });
    }

    onBlur() {
        this.setState({ focused: false });
    }

    onKeyDown(event) {
        if (event.which === 13) { // enter
            this.choose();
        }
    }

    onDragEnter(event) {
        if(!this.props.disabled) {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    onDragOver(event) {
        if (!this.props.disabled) {
            DomHandler.addClass(this.content, 'p-fileupload-highlight');
            event.stopPropagation();
            event.preventDefault();
        }
    }

    onDragLeave(event) {
        if (!this.props.disabled) {
            DomHandler.removeClass(this.content, 'p-fileupload-highlight');
        }
    }

    onDrop(event) {
        if (!this.props.disabled) {
            DomHandler.removeClass(this.content, 'p-fileupload-highlight');
            event.stopPropagation();
            event.preventDefault();

            let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            let allowDrop = this.props.multiple||(files && files.length === 1);

            if(allowDrop) {
                this.onFileSelect(event);
            }
        }
    }

    onSimpleUploaderClick() {
        if (this.hasFiles()) {
            this.upload();
        }
        else {
            this.fileInput.click();
        }
    }

    renderChooseButton() {
        let className = classNames('p-button p-fileupload-choose p-component', {
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused
        });

        return (
            <span className={className} onClick={this.choose} onKeyDown={this.onKeyDown} onFocus={this.onFocus} onBlur={this.onBlur} tabIndex={0}>
                <input ref={(el) => this.fileInput = el} type="file" onChange={this.onFileSelect}
                    multiple={this.props.multiple} accept={this.props.accept} disabled={this.chooseDisabled()} />
                <span className="p-button-icon p-button-icon-left p-clickable pi pi-fw pi-plus"></span>
                <span className="p-button-label p-clickable">{this.chooseButtonLabel()}</span>
                <Ripple />
            </span>
        );
    }

    renderFiles() {
        return (
            <div className="p-fileupload-files">
                {
                    this.state.files.map((file, index) => {
                        let preview = this.isImage(file) ? <div><img alt={file.name} role="presentation" src={file.objectURL} width={this.props.previewWidth} /></div> : null;
                        let fileName = <div>{file.name}</div>;
                        let size = <div>{this.formatSize(file.size)}</div>;
                        let removeButton = <div><Button type="button" icon="pi pi-times" onClick={(e) => this.remove(e, index)} /></div>

                        return <div className="p-fileupload-row" key={file.name + file.type + file.size}>
                                 {preview}
                                 {fileName}
                                 {size}
                                 {removeButton}
                            </div>
                    })
                }
            </div>
        );
    }

    renderEmptyContent() {
        if (this.props.emptyTemplate && !this.hasFiles()) {
            return ObjectUtils.getJSXElement(this.props.emptyTemplate, this.props);
        }

        return null;
    }

    renderAdvanced() {
        const className = classNames('p-fileupload p-fileupload-advanced p-component', this.props.className);
        let uploadButton, cancelButton, filesList, progressBar;
        const chooseButton = this.renderChooseButton();
        const emptyContent = this.renderEmptyContent();

        if (!this.props.auto) {
            uploadButton = <Button type="button" label={this.uploadButtonLabel()} icon="pi pi-upload" onClick={this.upload} disabled={this.uploadDisabled()} />;
            cancelButton = <Button type="button" label={this.cancelButtonLabel()} icon="pi pi-times" onClick={this.clear} disabled={this.cancelDisabled()} />;
        }

        if (this.hasFiles()) {
            filesList = this.renderFiles();
            progressBar = <ProgressBar value={this.state.progress} showValue={false} />;
        }

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                <div className="p-fileupload-buttonbar">
                    {chooseButton}
                    {uploadButton}
                    {cancelButton}
                </div>
                <div ref={(el) => {this.content = el;}} className="p-fileupload-content"
                    onDragEnter={this.onDragEnter} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDrop={this.onDrop}>
                    {progressBar}
                    <Messages ref={(el) => this.messagesUI = el } />
                    {filesList}
                    {emptyContent}
                </div>
            </div>
        );
    }

    renderBasic() {
        const className = classNames('p-fileupload p-fileupload-basic p-component', this.props.className);
        const buttonClassName = classNames('p-button p-component p-fileupload-choose', { 'p-fileupload-choose-selected': this.hasFiles(), 'p-disabled': this.props.disabled, 'p-focus': this.state.focused });
        const iconClassName = classNames('p-button-icon p-button-icon-left pi', { 'pi-plus': !this.hasFiles() || this.props.auto, 'pi-upload': this.hasFiles() && !this.props.auto });
        const chooseLabel = this.chooseButtonLabel();
        const label = this.props.auto ? chooseLabel : this.hasFiles() ? this.state.files[0].name : chooseLabel;

        return (
            <div className={className}>
                <Messages ref={(el) => this.messagesUI = el } />
                <span className={buttonClassName} onMouseUp={this.onSimpleUploaderClick} onKeyDown={this.onKeyDown} onFocus={this.onFocus} onBlur={this.onBlur} tabIndex={0}>
                    <span className={iconClassName}></span>
                    <span className="p-button-label p-clickable">{label}</span>
                    { !this.hasFiles() && <input ref={(el) => this.fileInput = el} type="file" accept={this.props.accept} disabled={this.props.disabled} onChange={this.onFileSelect} /> }
                    <Ripple />
                </span>
            </div>
        );
    }

    render() {
        if (this.props.mode === 'advanced')
            return this.renderAdvanced();
        else if (this.props.mode === 'basic')
            return this.renderBasic();
    }
}

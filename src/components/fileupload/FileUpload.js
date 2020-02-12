import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from '../button/Button';
import {Messages} from '../messages/Messages';
import {ProgressBar} from '../progressbar/ProgressBar';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

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
        chooseLabel: 'Choose',
        uploadLabel: 'Upload',
        cancelLabel: 'Cancel',
        customUpload: false,
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
            files:[],
            msgs: []
        };

        this.upload = this.upload.bind(this);
        this.clear = this.clear.bind(this);
        this.onFileSelect = this.onFileSelect.bind(this);
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onSimpleUploaderClick = this.onSimpleUploaderClick.bind(this);
    }

    hasFiles() {
        return this.state.files && this.state.files.length > 0;
    }

    isImage(file) {
        return /^image\//.test(file.type);
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
        if(this.props.mode === 'basic') {
            this.fileInput.style.display = 'inline';
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

        this.clearInputElement();

        if(this.props.mode === 'basic') {
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
                this.setState({progress: 0});

                    if (xhr.status >= 200 && xhr.status < 300) {
                        if (this.props.onUpload) {
                            this.props.onUpload({xhr: xhr, files: this.files});
                        }
                    }
                    else {
                        if (this.props.onError) {
                            this.props.onError({xhr: xhr, files: this.files});
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
        this.setState({files:[]});
        if (this.props.onClear) {
            this.props.onClear();
        }
        this.clearInputElement();
    }

    onFocus(event) {
        DomHandler.addClass(event.currentTarget.parentElement, 'p-focus');
    }

    onBlur(event) {
        DomHandler.removeClass(event.currentTarget.parentElement, 'p-focus');
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
    }

    renderChooseButton() {
        let className = classNames('p-button p-fileupload-choose p-component p-button-text-icon-left');

        return (
            <span icon="pi pi-plus" className={className}>
                <input ref={(el) => this.fileInput = el} type="file" onChange={this.onFileSelect} onFocus={this.onFocus} onBlur={this.onBlur}
                    multiple={this.props.multiple} accept={this.props.accept} disabled={this.props.disabled} />
                <span className="p-button-icon p-button-icon-left p-clickable pi pi-fw pi-plus"></span>
                <span className="p-button-text p-clickable">{this.props.chooseLabel}</span>
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

    renderAdvanced() {
        let className = classNames('p-fileupload p-component', this.props.className);
        let uploadButton, cancelButton, filesList, progressBar;
        let chooseButton = this.renderChooseButton();

        if (!this.props.auto) {
            uploadButton = <Button type="button" label={this.props.uploadLabel} icon="pi pi-upload" onClick={this.upload} disabled={this.props.disabled || !this.hasFiles()} />;
            cancelButton = <Button type="button" label={this.props.cancelLabel} icon="pi pi-times" onClick={this.clear} disabled={this.props.disabled || !this.hasFiles()} />;
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
                </div>
            </div>
        );
    }

    renderBasic() {
        let buttonClassName = classNames('p-button p-fileupload-choose p-component p-button-text-icon-left', {'p-fileupload-choose-selected': this.hasFiles()});
        let iconClassName = classNames('p-button-icon-left pi', {'pi-plus': !this.hasFiles() || this.props.auto, 'pi-upload': this.hasFiles() && !this.props.auto});

        return (
            <span className={buttonClassName} onMouseUp={this.onSimpleUploaderClick}>
                <span className={iconClassName}></span>
                <span className="p-button-text p-clickable">{this.props.auto ? this.props.chooseLabel : this.hasFiles() ? this.state.files[0].name : this.props.chooseLabel}</span>
                <input ref={(el) => this.fileInput = el} type="file" multiple={this.props.multiple} accept={this.props.accept} disabled={this.props.disabled}
                    onChange={this.onFileSelect} onFocus={this.onFocus} onBlur={this.onBlur} />
             </span>
        );
    }

    render() {
        if (this.props.mode === 'advanced')
            return this.renderAdvanced();
        else if (this.props.mode === 'basic')
            return this.renderBasic();
    }
}

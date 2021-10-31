import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button/Button';
import { Messages } from '../messages/Messages';
import { ProgressBar } from '../progressbar/ProgressBar';
import { DomHandler, ObjectUtils, classNames } from '../utils/Utils';
import { Ripple } from '../ripple/Ripple';
import { localeOption } from '../api/Api';

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
        chooseOptions: {
            label: null,
            icon: null,
            iconOnly: false,
            className: null,
            style: null
        },
        uploadOptions: {
            label: null,
            icon: null,
            iconOnly: false,
            className: null,
            style: null
        },
        cancelOptions: {
            label: null,
            icon: null,
            iconOnly: false,
            className: null,
            style: null
        },
        customUpload: false,
        headerClassName: null,
        headerStyle: null,
        contentClassName: null,
        contentStyle: null,
        headerTemplate: null,
        itemTemplate: null,
        emptyTemplate: null,
        progressBarTemplate: null,
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
        chooseOptions: PropTypes.object,
        uploadOptions: PropTypes.object,
        cancelOptions: PropTypes.object,
        customUpload: PropTypes.bool,
        headerClassName: PropTypes.string,
        headerStyle: PropTypes.object,
        contentClassName: PropTypes.string,
        contentStyle: PropTypes.object,
        headerTemplate: PropTypes.any,
        itemTemplate: PropTypes.any,
        emptyTemplate: PropTypes.any,
        progressBarTemplate: PropTypes.any,
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

    constructor(props) {
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
        return this.props.chooseLabel || this.props.chooseOptions.label || localeOption('choose');
    }

    uploadButtonLabel() {
        return this.props.uploadLabel || this.props.uploadOptions.label || localeOption('upload');
    }

    cancelButtonLabel() {
        return this.props.cancelLabel || this.props.cancelOptions.label || localeOption('cancel');
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
        if (this.fileInput) {
            this.fileInput.value = '';
        }
    }

    clearIEInput() {
        if (this.fileInput) {
            this.duplicateIEEvent = true; //IE11 fix to prevent onFileChange trigger again
            this.fileInput.value = '';
        }
    }

    formatSize(bytes) {
        if (bytes === 0) {
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

        this.setState({ msgs: [] });
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

        this.setState({ files: this.files }, () => {
            if (this.hasFiles() && this.props.auto) {
                this.upload();
            }
        });

        if (this.props.onSelect) {
            this.props.onSelect({ originalEvent: event, files: files });
        }

        if (event.type !== 'drop' && this.isIE11()) {
            this.clearIEInput();
        }
        else {
            this.clearInputElement();
        }

        if (this.props.mode === 'basic' && this.files.length > 0) {
            this.fileInput.style.display = 'none';
        }
    }

    isFileSelected(file) {
        for (let sFile of this.state.files) {
            if ((sFile.name + sFile.type + sFile.size) === (file.name + file.type + file.size))
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
                    files: this.state.files,
                    options: {
                        clear: this.clear,
                        props: this.props
                    }
                })
            }
        }
        else {
            this.setState({ msgs: [] });
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
                    this.setState({ progress: Math.round((event.loaded * 100) / event.total) }, () => {
                        if (this.props.onProgress) {
                            this.props.onProgress({
                                originalEvent: event,
                                progress: this.state.progress
                            });
                        };
                    });
                }
            });

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    this.setState({ progress: 0 });

                    if (xhr.status >= 200 && xhr.status < 300) {
                        if (this.props.fileLimit) {
                            this.uploadedFileCount += this.state.files.length;
                        }

                        if (this.props.onUpload) {
                            this.props.onUpload({ xhr: xhr, files: this.state.files });
                        }
                    }
                    else {
                        if (this.props.onError) {
                            this.props.onError({ xhr: xhr, files: this.state.files });
                        }
                    }

                    this.clear();
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
    }

    clear() {
        this.setState({ files: [] });
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
        if (!this.props.disabled) {
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
            let allowDrop = this.props.multiple || (files && files.length === 1);

            if (allowDrop) {
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

    renderChooseButton() {
        const { className, style, icon, iconOnly } = this.props.chooseOptions;
        const chooseClassName = classNames('p-button p-fileupload-choose p-component', {
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused,
            'p-button-icon-only': iconOnly
        }, className);
        const chooseIconClassName = classNames('p-button-icon p-button-icon-left p-clickable', {
            'pi pi-fw pi-plus': !icon
        }, icon);
        const labelClassName = 'p-button-label p-clickable';
        const label = iconOnly ? <span className={labelClassName} dangerouslySetInnerHTML={{ __html: "&nbsp;" }} /> : <span className={labelClassName}>{this.chooseButtonLabel()}</span>;

        return (
            <span className={chooseClassName} style={style} onClick={this.choose} onKeyDown={this.onKeyDown} onFocus={this.onFocus} onBlur={this.onBlur} tabIndex={0}>
                <input ref={(el) => this.fileInput = el} type="file" onChange={this.onFileSelect}
                    multiple={this.props.multiple} accept={this.props.accept} disabled={this.chooseDisabled()} />
                <span className={chooseIconClassName}></span>
                {label}
                <Ripple />
            </span>
        );
    }

    renderFile(file, index) {
        let preview = this.isImage(file) ? <div><img alt={file.name} role="presentation" src={file.objectURL} width={this.props.previewWidth} /></div> : null;
        let fileName = <div className="p-fileupload-filename">{file.name}</div>;
        let size = <div>{this.formatSize(file.size)}</div>;
        let removeButton = <div><Button type="button" icon="pi pi-times" onClick={(e) => this.remove(e, index)} /></div>
        let content = (
            <>
                {preview}
                {fileName}
                {size}
                {removeButton}
            </>
        );

        if (this.props.itemTemplate) {
            const defaultContentOptions = {
                onRemove: (event) => this.remove(event, index),
                previewElement: preview,
                fileNameElement: fileName,
                sizeElement: size,
                removeElement: removeButton,
                formatSize: this.formatSize(file.size),
                element: content,
                props: this.props
            };

            content = ObjectUtils.getJSXElement(this.props.itemTemplate, file, defaultContentOptions);
        }

        return (
            <div className="p-fileupload-row" key={file.name + file.type + file.size}>
                {content}
            </div>
        )
    }

    renderFiles() {
        return (
            <div className="p-fileupload-files">
                {this.state.files.map((file, index) => this.renderFile(file, index))}
            </div>
        );
    }

    renderEmptyContent() {
        if (this.props.emptyTemplate && !this.hasFiles()) {
            return ObjectUtils.getJSXElement(this.props.emptyTemplate, this.props);
        }

        return null;
    }

    renderProgressBarContent() {
        if (this.props.progressBarTemplate) {
            return ObjectUtils.getJSXElement(this.props.progressBarTemplate, this.props);
        }

        return <ProgressBar value={this.state.progress} showValue={false} />;
    }

    renderAdvanced() {
        const className = classNames('p-fileupload p-fileupload-advanced p-component', this.props.className);
        const headerClassName = classNames('p-fileupload-buttonbar', this.props.headerClassName);
        const contentClassName = classNames('p-fileupload-content', this.props.contentClassName);
        let uploadButton, cancelButton, filesList, progressBar;
        const chooseButton = this.renderChooseButton();
        const emptyContent = this.renderEmptyContent();

        if (!this.props.auto) {
            const uploadOptions = this.props.uploadOptions;
            const cancelOptions = this.props.cancelOptions;
            const uploadLabel = !uploadOptions.iconOnly ? this.uploadButtonLabel() : '';
            const cancelLabel = !cancelOptions.iconOnly ? this.cancelButtonLabel() : '';

            uploadButton = <Button type="button" label={uploadLabel} icon={uploadOptions.icon || 'pi pi-upload'} onClick={this.upload} disabled={this.uploadDisabled()} style={uploadOptions.style} className={uploadOptions.className} />;
            cancelButton = <Button type="button" label={cancelLabel} icon={cancelOptions.icon || 'pi pi-times'} onClick={this.clear} disabled={this.cancelDisabled()} style={cancelOptions.style} className={cancelOptions.className} />;
        }

        if (this.hasFiles()) {
            filesList = this.renderFiles();
            progressBar = this.renderProgressBarContent();
        }

        let header = (
            <div className={headerClassName} style={this.props.headerStyle}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
            </div>
        );

        if (this.props.headerTemplate) {
            const defaultContentOptions = {
                className: headerClassName,
                chooseButton,
                uploadButton,
                cancelButton,
                element: header,
                props: this.props
            };

            header = ObjectUtils.getJSXElement(this.props.headerTemplate, defaultContentOptions);
        }

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {header}
                <div ref={(el) => { this.content = el; }} className={contentClassName} style={this.props.contentStyle}
                    onDragEnter={this.onDragEnter} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDrop={this.onDrop}>
                    {progressBar}
                    <Messages ref={(el) => this.messagesUI = el} />
                    {filesList}
                    {emptyContent}
                </div>
            </div>
        );
    }

    renderBasic() {
        const chooseOptions = this.props.chooseOptions;
        const className = classNames('p-fileupload p-fileupload-basic p-component', this.props.className);
        const buttonClassName = classNames('p-button p-component p-fileupload-choose', { 'p-fileupload-choose-selected': this.hasFiles(), 'p-disabled': this.props.disabled, 'p-focus': this.state.focused }, chooseOptions.className);
        const iconClassName = classNames('p-button-icon p-button-icon-left pi', { 'pi-plus': !chooseOptions.icon && (!this.hasFiles() || this.props.auto), 'pi-upload': !chooseOptions.icon && this.hasFiles() && !this.props.auto }, chooseOptions.icon);
        const labelClassName = 'p-button-label p-clickable';
        const chooseLabel = chooseOptions.iconOnly ? <span className={labelClassName} dangerouslySetInnerHTML={{ __html: "&nbsp;" }} /> : <span className={labelClassName}>{this.chooseButtonLabel()}</span>;
        const label = this.props.auto ? chooseLabel : (
            <span className={labelClassName}>
                {this.hasFiles() ? this.state.files[0].name : chooseLabel}
            </span>
        );
        const icon = <span className={iconClassName}></span>;

        return (
            <div className={className} style={this.props.style}>
                <Messages ref={(el) => this.messagesUI = el} />
                <span className={buttonClassName} style={chooseOptions.style} onMouseUp={this.onSimpleUploaderClick} onKeyDown={this.onKeyDown} onFocus={this.onFocus} onBlur={this.onBlur} tabIndex={0}>
                    {icon}
                    {label}
                    {!this.hasFiles() && <input ref={(el) => this.fileInput = el} type="file" accept={this.props.accept} multiple={this.props.multiple} disabled={this.props.disabled} onChange={this.onFileSelect} />}
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

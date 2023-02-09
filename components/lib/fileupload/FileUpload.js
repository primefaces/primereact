import * as React from 'react';
import { localeOption } from '../api/Api';
import { Button } from '../button/Button';
import { Messages } from '../messages/Messages';
import { ProgressBar } from '../progressbar/ProgressBar';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, ObjectUtils } from '../utils/Utils';
import { FileUploadBase } from './FileUploadBase';

export const FileUpload = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = FileUploadBase.getProps(inProps);

        const [filesState, setFilesState] = React.useState([]);
        const [progressState, setProgressState] = React.useState(0);
        const [focusedState, setFocusedState] = React.useState(false);
        const [uploadingState, setUploadingState] = React.useState(false);
        const fileInputRef = React.useRef(null);
        const messagesRef = React.useRef(null);
        const contentRef = React.useRef(null);
        const duplicateIEEvent = React.useRef(false);
        const uploadedFileCount = React.useRef(0);
        const hasFiles = ObjectUtils.isNotEmpty(filesState);
        const disabled = props.disabled || uploadingState;
        const chooseButtonLabel = props.chooseLabel || props.chooseOptions.label || localeOption('choose');
        const uploadButtonLabel = props.uploadLabel || props.uploadOptions.label || localeOption('upload');
        const cancelButtonLabel = props.cancelLabel || props.cancelOptions.label || localeOption('cancel');
        const chooseDisabled = disabled || (props.fileLimit && props.fileLimit <= filesState.length + uploadedFileCount);
        const uploadDisabled = disabled || !hasFiles;
        const cancelDisabled = disabled || !hasFiles;

        const isImage = (file) => {
            return /^image\//.test(file.type);
        };

        const remove = (event, index) => {
            clearInput();
            let currentFiles = [...filesState];
            let removedFile = filesState[index];

            currentFiles.splice(index, 1);
            setFilesState(currentFiles);

            if (props.onRemove) {
                props.onRemove({
                    originalEvent: event,
                    file: removedFile
                });
            }
        };

        const clearInput = () => {
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        };

        const clearIEInput = () => {
            if (fileInputRef.current) {
                duplicateIEEvent.current = true; //IE11 fix to prevent onFileChange trigger again
                fileInputRef.current.value = '';
            }
        };

        const formatSize = (bytes) => {
            if (bytes === 0) {
                return '0 B';
            }

            let k = 1000,
                dm = 3,
                sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                i = Math.floor(Math.log(bytes) / Math.log(k));

            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        };

        const onFileSelect = (event) => {
            // give caller a chance to stop the selection
            if (props.onBeforeSelect && props.onBeforeSelect({ originalEvent: event, files: filesState }) === false) {
                return;
            }

            if (event.type !== 'drop' && isIE11() && duplicateIEEvent.current) {
                duplicateIEEvent.current = false;

                return;
            }

            let currentFiles = [];

            if (props.multiple) {
                currentFiles = filesState ? [...filesState] : [];
            }

            let selectedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;

            for (let i = 0; i < selectedFiles.length; i++) {
                let file = selectedFiles[i];

                if (!isFileSelected(file) && validate(file)) {
                    if (isImage(file)) {
                        file.objectURL = window.URL.createObjectURL(file);
                    }

                    currentFiles.push(file);
                }
            }

            setFilesState(currentFiles);

            if (ObjectUtils.isNotEmpty(currentFiles) && props.auto) {
                upload(currentFiles);
            }

            if (props.onSelect) {
                props.onSelect({ originalEvent: event, files: selectedFiles });
            }

            if (event.type !== 'drop' && isIE11()) {
                clearIEInput();
            } else {
                clearInput();
            }

            if (props.mode === 'basic' && currentFiles.length > 0) {
                fileInputRef.current.style.display = 'none';
            }
        };

        const isFileSelected = (file) => {
            return filesState.some((f) => f.name + f.type + f.size === file.name + file.type + file.size);
        };

        const isIE11 = () => {
            return !!window['MSInputMethodContext'] && !!document['documentMode'];
        };

        const validate = (file) => {
            if (props.maxFileSize && file.size > props.maxFileSize) {
                const message = {
                    severity: 'error',
                    summary: props.invalidFileSizeMessageSummary.replace('{0}', file.name),
                    detail: props.invalidFileSizeMessageDetail.replace('{0}', formatSize(props.maxFileSize)),
                    sticky: true
                };

                if (props.mode === 'advanced') {
                    messagesRef.current.show(message);
                }

                props.onValidationFail && props.onValidationFail(file);

                return false;
            }

            return true;
        };

        const upload = (files) => {
            files = files || filesState;

            if (files && files.nativeEvent) {
                files = filesState;
            }

            if (props.customUpload) {
                if (props.fileLimit) {
                    uploadedFileCount += files.length;
                }

                if (props.uploadHandler) {
                    props.uploadHandler({
                        files,
                        options: {
                            clear,
                            props
                        }
                    });
                }
            } else {
                setUploadingState(true);
                let xhr = new XMLHttpRequest();
                let formData = new FormData();

                if (props.onBeforeUpload) {
                    props.onBeforeUpload({
                        xhr: xhr,
                        formData: formData
                    });
                }

                for (let file of files) {
                    formData.append(props.name, file, file.name);
                }

                xhr.upload.addEventListener('progress', (event) => {
                    if (event.lengthComputable) {
                        const progress = Math.round((event.loaded * 100) / event.total);

                        setProgressState(progress);

                        if (props.onProgress) {
                            props.onProgress({
                                originalEvent: event,
                                progress
                            });
                        }
                    }
                });

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        setProgressState(0);
                        setUploadingState(false);

                        if (xhr.status >= 200 && xhr.status < 300) {
                            if (props.fileLimit) {
                                uploadedFileCount += files.length;
                            }

                            if (props.onUpload) {
                                props.onUpload({
                                    xhr,
                                    files
                                });
                            }
                        } else {
                            if (props.onError) {
                                props.onError({
                                    xhr,
                                    files
                                });
                            }
                        }

                        clear();
                    }
                };

                xhr.open('POST', props.url, true);

                if (props.onBeforeSend) {
                    props.onBeforeSend({
                        xhr: xhr,
                        formData: formData
                    });
                }

                xhr.withCredentials = props.withCredentials;
                xhr.send(formData);
            }
        };

        const clear = () => {
            setFilesState([]);
            setUploadingState(false);
            props.onClear && props.onClear();
            clearInput();
        };

        const choose = () => {
            fileInputRef.current.click();
        };

        const onFocus = () => {
            setFocusedState(true);
        };

        const onBlur = () => {
            setFocusedState(false);
        };

        const onKeyDown = (event) => {
            if (event.which === 13) {
                // enter
                choose();
            }
        };

        const onDragEnter = (event) => {
            if (!disabled) {
                event.dataTransfer.dropEffect = 'copy';
                event.stopPropagation();
                event.preventDefault();
            }
        };

        const onDragOver = (event) => {
            if (!disabled) {
                event.dataTransfer.dropEffect = 'copy';
                DomHandler.addClass(contentRef.current, 'p-fileupload-highlight');
                event.stopPropagation();
                event.preventDefault();
            }
        };

        const onDragLeave = (event) => {
            if (!disabled) {
                event.dataTransfer.dropEffect = 'copy';
                DomHandler.removeClass(contentRef.current, 'p-fileupload-highlight');
            }
        };

        const onDrop = (event) => {
            if (props.disabled) {
                return;
            }

            DomHandler.removeClass(contentRef.current, 'p-fileupload-highlight');
            event.stopPropagation();
            event.preventDefault();

            // give caller a chance to stop the drop
            if (props.onBeforeDrop && props.onBeforeDrop(event) === false) {
                return;
            }

            const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            const allowDrop = props.multiple || (ObjectUtils.isEmpty(filesState) && files && files.length === 1);

            allowDrop && onFileSelect(event);
        };

        const onSimpleUploaderClick = () => {
            !disabled && hasFiles ? upload() : fileInputRef.current.click();
        };

        React.useImperativeHandle(ref, () => ({
            props,
            upload,
            clear,
            formatSize,
            onFileSelect,
            getInput: () => fileInputRef.current,
            getContent: () => contentRef.current,
            getFiles: () => filesState,
            setFiles: (files) => setFilesState(files || [])
        }));

        const createChooseButton = () => {
            const { className, style, icon: _icon, iconOnly } = props.chooseOptions;
            const chooseClassName = classNames(
                'p-button p-fileupload-choose p-component',
                {
                    'p-disabled': disabled,
                    'p-focus': focusedState,
                    'p-button-icon-only': iconOnly
                },
                className
            );
            const labelClassName = 'p-button-label p-clickable';
            const label = iconOnly ? <span className={labelClassName} dangerouslySetInnerHTML={{ __html: '&nbsp;' }} /> : <span className={labelClassName}>{chooseButtonLabel}</span>;
            const input = <input ref={fileInputRef} type="file" onChange={onFileSelect} multiple={props.multiple} accept={props.accept} disabled={chooseDisabled} />;
            const icon = IconUtils.getJSXIcon(_icon || 'pi pi-fw pi-plus', { className: 'p-button-icon p-button-icon-left p-clickable' }, { props });

            return (
                <span className={chooseClassName} style={style} onClick={choose} onKeyDown={onKeyDown} onFocus={onFocus} onBlur={onBlur} tabIndex={0}>
                    {input}
                    {icon}
                    {label}
                    <Ripple />
                </span>
            );
        };

        const createFile = (file, index) => {
            const key = file.name + file.type + file.size;
            const preview = isImage(file) ? (
                <div>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={props.previewWidth} />
                </div>
            ) : null;
            const fileName = <div className="p-fileupload-filename">{file.name}</div>;
            const size = <div>{formatSize(file.size)}</div>;
            const removeButton = (
                <div>
                    <Button type="button" icon="pi pi-times" onClick={(e) => remove(e, index)} disabled={disabled} />
                </div>
            );
            let content = (
                <>
                    {preview}
                    {fileName}
                    {size}
                    {removeButton}
                </>
            );

            if (props.itemTemplate) {
                const defaultContentOptions = {
                    onRemove: (event) => remove(event, index),
                    previewElement: preview,
                    fileNameElement: fileName,
                    sizeElement: size,
                    removeElement: removeButton,
                    formatSize: formatSize(file.size),
                    element: content,
                    index: index,
                    props
                };

                content = ObjectUtils.getJSXElement(props.itemTemplate, file, defaultContentOptions);
            }

            return (
                <div className="p-fileupload-row" key={key}>
                    {content}
                </div>
            );
        };

        const createFiles = () => {
            const content = filesState.map(createFile);

            return <div className="p-fileupload-files">{content}</div>;
        };

        const createEmptyContent = () => {
            return props.emptyTemplate && !hasFiles ? ObjectUtils.getJSXElement(props.emptyTemplate, props) : null;
        };

        const createProgressBarContent = () => {
            if (props.progressBarTemplate) {
                return ObjectUtils.getJSXElement(props.progressBarTemplate, props);
            }

            return <ProgressBar value={progressState} showValue={false} />;
        };

        const createAdvanced = () => {
            const otherProps = FileUploadBase.getOtherProps(props);
            const className = classNames('p-fileupload p-fileupload-advanced p-component', props.className);
            const headerClassName = classNames('p-fileupload-buttonbar', props.headerClassName);
            const contentClassName = classNames('p-fileupload-content', props.contentClassName);
            const chooseButton = createChooseButton();
            const emptyContent = createEmptyContent();
            let uploadButton, cancelButton, filesList, progressBar;

            if (!props.auto) {
                const uploadOptions = props.uploadOptions;
                const cancelOptions = props.cancelOptions;
                const uploadLabel = !uploadOptions.iconOnly ? uploadButtonLabel : '';
                const cancelLabel = !cancelOptions.iconOnly ? cancelButtonLabel : '';

                uploadButton = <Button type="button" label={uploadLabel} icon={uploadOptions.icon || 'pi pi-upload'} onClick={upload} disabled={uploadDisabled} style={uploadOptions.style} className={uploadOptions.className} />;
                cancelButton = <Button type="button" label={cancelLabel} icon={cancelOptions.icon || 'pi pi-times'} onClick={clear} disabled={cancelDisabled} style={cancelOptions.style} className={cancelOptions.className} />;
            }

            if (hasFiles) {
                filesList = createFiles();
                progressBar = createProgressBarContent();
            }

            let header = (
                <div className={headerClassName} style={props.headerStyle}>
                    {chooseButton}
                    {uploadButton}
                    {cancelButton}
                </div>
            );

            if (props.headerTemplate) {
                const defaultContentOptions = {
                    className: headerClassName,
                    chooseButton,
                    uploadButton,
                    cancelButton,
                    element: header,
                    props
                };

                header = ObjectUtils.getJSXElement(props.headerTemplate, defaultContentOptions);
            }

            return (
                <div id={props.id} className={className} style={props.style} {...otherProps}>
                    {header}
                    <div ref={contentRef} className={contentClassName} style={props.contentStyle} onDragEnter={onDragEnter} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                        {progressBar}
                        <Messages ref={messagesRef} />
                        {filesList}
                        {emptyContent}
                    </div>
                </div>
            );
        };

        const createBasic = () => {
            const chooseOptions = props.chooseOptions;
            const otherProps = FileUploadBase.getOtherProps(props);
            const className = classNames('p-fileupload p-fileupload-basic p-component', props.className);
            const buttonClassName = classNames('p-button p-component p-fileupload-choose', { 'p-fileupload-choose-selected': hasFiles, 'p-disabled': disabled, 'p-focus': focusedState }, chooseOptions.className);
            const chooseIcon = chooseOptions.icon || classNames({ 'pi pi-plus': !chooseOptions.icon && (!hasFiles || props.auto), 'pi pi-upload': !chooseOptions.icon && hasFiles && !props.auto });
            const labelClassName = 'p-button-label p-clickable';
            const chooseLabel = chooseOptions.iconOnly ? <span className={labelClassName} dangerouslySetInnerHTML={{ __html: '&nbsp;' }} /> : <span className={labelClassName}>{chooseButtonLabel}</span>;
            const label = props.auto ? chooseLabel : <span className={labelClassName}>{hasFiles ? filesState[0].name : chooseLabel}</span>;
            const icon = IconUtils.getJSXIcon(chooseIcon, { className: 'p-button-icon p-button-icon-left' }, { props, hasFiles });
            const input = !hasFiles && <input ref={fileInputRef} type="file" accept={props.accept} multiple={props.multiple} disabled={disabled} onChange={onFileSelect} />;

            return (
                <div className={className} style={props.style} {...otherProps}>
                    <Messages ref={messagesRef} />
                    <span className={buttonClassName} style={chooseOptions.style} onMouseUp={onSimpleUploaderClick} onKeyDown={onKeyDown} onFocus={onFocus} onBlur={onBlur} tabIndex={0}>
                        {icon}
                        {label}
                        {input}
                        <Ripple />
                    </span>
                </div>
            );
        };

        if (props.mode === 'advanced') return createAdvanced();
        else if (props.mode === 'basic') return createBasic();
    })
);

FileUpload.displayName = 'FileUpload';

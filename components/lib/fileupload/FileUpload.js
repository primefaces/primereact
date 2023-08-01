import * as React from 'react';
import { localeOption } from '../api/Api';
import { PrimeReactContext } from '../api/Api';
import { Badge } from '../badge/Badge';
import { Button } from '../button/Button';
import { PlusIcon } from '../icons/plus';
import { TimesIcon } from '../icons/times';
import { UploadIcon } from '../icons/upload';
import { Messages } from '../messages/Messages';
import { ProgressBar } from '../progressbar/ProgressBar';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { FileUploadBase } from './FileUploadBase';

export const FileUpload = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = FileUploadBase.getProps(inProps, context);
        const [uploadedFilesState, setUploadedFilesState] = React.useState([]);
        const [filesState, setFilesState] = React.useState([]);
        const [progressState, setProgressState] = React.useState(0);
        const [focusedState, setFocusedState] = React.useState(false);
        const [uploadingState, setUploadingState] = React.useState(false);
        const { ptm } = FileUploadBase.setMetaData({
            props,
            state: {
                progress: progressState,
                uploading: uploadingState,
                uploadedFiles: uploadedFilesState,
                files: filesState,
                focused: focusedState
            }
        });
        const fileInputRef = React.useRef(null);
        const messagesRef = React.useRef(null);
        const contentRef = React.useRef(null);
        const duplicateIEEvent = React.useRef(false);
        const uploadedFileCount = React.useRef(0);
        const hasFiles = ObjectUtils.isNotEmpty(filesState);
        const hasUploadedFiles = ObjectUtils.isNotEmpty(uploadedFilesState);
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

        const removeUploadedFiles = (event, index) => {
            clearInput();
            let currentUploadedFiles = [...uploadedFilesState];
            let removedFile = filesState[index];

            currentUploadedFiles.splice(index, 1);
            setUploadedFilesState(currentUploadedFiles);

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

            let currentFiles = filesState && props.multiple ? [...filesState] : [];

            let selectedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;

            for (let i = 0; i < selectedFiles.length; i++) {
                let file = selectedFiles[i];

                if ((!props.multiple || !isFileSelected(file)) && validate(file)) {
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
                props.onSelect({ originalEvent: event, files: currentFiles });
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

                        setUploadedFilesState((prevUploadedFiles) => [...prevUploadedFiles, ...files]);
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
            setUploadedFilesState([]);
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
            setFiles: (files) => setFilesState(files || []),
            getUploadedFiles: () => uploadedFilesState,
            setUploadedFiles: (files) => setUploadedFilesState(files || [])
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
            const iconClassName = classNames('p-button-icon p-clickable', { 'p-button-icon-left': !iconOnly });
            const chooseButtonLabelProps = mergeProps(
                {
                    className: labelClassName
                },
                ptm('chooseButtonLabel')
            );
            const label = iconOnly ? <span {...chooseButtonLabelProps} dangerouslySetInnerHTML={{ __html: '&nbsp;' }} /> : <span {...chooseButtonLabelProps}>{chooseButtonLabel}</span>;
            const inputProps = mergeProps(
                {
                    ref: fileInputRef,
                    type: 'file',
                    onChange: (e) => onFileSelect(e),
                    multiple: props.multiple,
                    accept: props.accept,
                    disabled: chooseDisabled
                },
                ptm('input')
            );
            const input = <input {...inputProps} />;
            const chooseIconProps = mergeProps(
                {
                    className: iconClassName
                },
                ptm('chooseIcon')
            );
            const icon = _icon || <PlusIcon {...chooseIconProps} />;
            const chooseIcon = IconUtils.getJSXIcon(icon, { ...chooseIconProps }, { props });
            const chooseButtonProps = mergeProps(
                {
                    className: chooseClassName,
                    style,
                    onClick: choose,
                    onKeyDown: (e) => onKeyDown(e),
                    onFocus,
                    onBlur,
                    tabIndex: 0
                },
                ptm('chooseButton')
            );

            return (
                <span {...chooseButtonProps}>
                    {input}
                    {chooseIcon}
                    {label}
                    <Ripple />
                </span>
            );
        };

        const onRemoveClick = (e, badgeOptions, index) => {
            if (badgeOptions.severity === 'warning') remove(e, index);
            else removeUploadedFiles(e, index);
        };

        const createFile = (file, index, badgeOptions) => {
            const key = file.name + file.type + file.size;
            const thumbnailProps = mergeProps(
                {
                    role: 'presentation',
                    className: 'p-fileupload-file-thumbnail',
                    src: file.objectURL,
                    width: props.previewWidth
                },
                ptm('thumbnail')
            );
            const preview = isImage(file) ? <img {...thumbnailProps} alt={file.name} /> : null;
            const detailsProps = mergeProps(ptm('details'));
            const fileSizeProps = mergeProps(ptm('fileSize'));
            const fileNameProps = mergeProps(
                {
                    className: 'p-fileupload-filename'
                },
                ptm('fileName')
            );
            const actionsProps = mergeProps(ptm('actions'));
            const fileName = <div {...fileNameProps}>{file.name}</div>;
            const size = <div {...fileSizeProps}>{formatSize(file.size)}</div>;

            const contentBody = (
                <div {...detailsProps}>
                    <div {...fileNameProps}> {file.name}</div>
                    <span {...fileSizeProps}>{formatSize(file.size)}</span>
                    <Badge className="p-fileupload-file-badge" value={badgeOptions.value} severity={badgeOptions.severity} pt={ptm('badge')} />
                </div>
            );
            const removeButton = (
                <div {...actionsProps}>
                    <Button type="button" icon={props.removeIcon || <TimesIcon />} text rounded severity="danger" onClick={(e) => onRemoveClick(e, badgeOptions, index)} disabled={disabled} pt={ptm('removeButton')} />
                </div>
            );
            let content = (
                <>
                    {preview}
                    {contentBody}
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

            const fileProps = mergeProps(
                {
                    key,
                    className: 'p-fileupload-row'
                },
                ptm('file')
            );

            return <div {...fileProps}>{content}</div>;
        };

        const createFiles = () => {
            const badgeOptions = {
                severity: 'warning',
                value: 'Pending'
            };
            const content = filesState.map((file, index) => createFile(file, index, badgeOptions));

            return <div>{content}</div>;
        };

        const createUploadedFiles = () => {
            const badgeOptions = {
                severity: 'success',
                value: 'Completed'
            };
            const content = uploadedFilesState && uploadedFilesState.map((file, index) => createFile(file, index, badgeOptions));

            return <div>{content}</div>;
        };

        const createEmptyContent = () => {
            return props.emptyTemplate && !hasFiles && !hasUploadedFiles ? ObjectUtils.getJSXElement(props.emptyTemplate, props) : null;
        };

        const createProgressBarContent = () => {
            if (props.progressBarTemplate) {
                return ObjectUtils.getJSXElement(props.progressBarTemplate, props);
            }

            return <ProgressBar value={progressState} showValue={false} pt={ptm('progressbar')} />;
        };

        const createAdvanced = () => {
            const className = classNames('p-fileupload p-fileupload-advanced p-component', props.className);
            const headerClassName = classNames('p-fileupload-buttonbar', props.headerClassName);
            const contentClassName = classNames('p-fileupload-content', props.contentClassName);
            const chooseButton = createChooseButton();
            const emptyContent = createEmptyContent();
            let uploadButton, cancelButton, filesList, uplaodedFilesList, progressBar;

            if (!props.auto) {
                const uploadOptions = props.uploadOptions;
                const cancelOptions = props.cancelOptions;
                const uploadLabel = !uploadOptions.iconOnly ? uploadButtonLabel : '';
                const cancelLabel = !cancelOptions.iconOnly ? cancelButtonLabel : '';
                const uploadIconClassName = classNames('p-button-icon p-c', { 'p-button-icon-left': !uploadOptions.iconOnly });
                const uploadIconProps = mergeProps(
                    {
                        className: uploadIconClassName
                    },
                    ptm('uploadIcon')
                );
                const uploadIcon = IconUtils.getJSXIcon(uploadOptions.icon || <UploadIcon {...uploadIconProps} />, { ...uploadIconProps }, { props });
                const cancelIconClassName = classNames('p-button-icon p-c', { 'p-button-icon-left': !cancelOptions.iconOnly });
                const cancelIconProps = mergeProps(
                    {
                        className: cancelIconClassName
                    },
                    ptm('cancelIcon')
                );
                const cancelIcon = IconUtils.getJSXIcon(cancelOptions.icon || <TimesIcon {...cancelIconProps} />, { ...cancelIconProps }, { props });

                uploadButton = <Button type="button" label={uploadLabel} icon={uploadIcon} onClick={upload} disabled={uploadDisabled} style={uploadOptions.style} className={uploadOptions.className} pt={ptm('uploadButton')} />;
                cancelButton = <Button type="button" label={cancelLabel} icon={cancelIcon} onClick={clear} disabled={cancelDisabled} style={cancelOptions.style} className={cancelOptions.className} pt={ptm('cancelButton')} />;
            }

            if (hasFiles) {
                filesList = createFiles();
                progressBar = createProgressBarContent();
            }

            if (hasUploadedFiles) {
                uplaodedFilesList = createUploadedFiles();
            }

            const buttonbarProps = mergeProps(
                {
                    className: headerClassName,
                    style: props.headerStyle
                },
                ptm('buttonbar')
            );

            let header = (
                <div {...buttonbarProps}>
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

            const rootProps = mergeProps(
                {
                    id: props.id,
                    className,
                    style: props.style
                },
                FileUploadBase.getOtherProps(props),
                ptm('root')
            );

            const contentProps = mergeProps(
                {
                    ref: contentRef,
                    className: contentClassName,
                    style: props.contentStyle,
                    onDragEnter: (e) => onDragEnter(e),
                    onDragOver: (e) => onDragOver(e),
                    onDragLeave: (e) => onDragLeave(e),
                    onDrop: (e) => onDrop(e)
                },
                ptm('content')
            );

            return (
                <div {...rootProps}>
                    {header}
                    <div {...contentProps}>
                        {progressBar}
                        <Messages ref={messagesRef} />
                        {hasFiles ? filesList : null}
                        {hasUploadedFiles ? uplaodedFilesList : null}
                        {emptyContent}
                    </div>
                </div>
            );
        };

        const createBasic = () => {
            const chooseOptions = props.chooseOptions;
            const className = classNames('p-fileupload p-fileupload-basic p-component', props.className);
            const buttonClassName = classNames('p-button p-component p-fileupload-choose', { 'p-fileupload-choose-selected': hasFiles, 'p-disabled': disabled, 'p-focus': focusedState }, chooseOptions.className);
            const labelClassName = 'p-button-label p-clickable';
            const labelProps = mergeProps(
                {
                    className: labelClassName
                },
                ptm('label')
            );
            const chooseLabel = chooseOptions.iconOnly ? <span {...labelProps} dangerouslySetInnerHTML={{ __html: '&nbsp;' }} /> : <span {...labelProps}>{chooseButtonLabel}</span>;
            const label = props.auto ? chooseLabel : <span {...labelProps}>{hasFiles ? filesState[0].name : chooseLabel}</span>;
            const iconClassName = classNames('p-button-icon', { 'p-button-icon-left': !chooseOptions.iconOnly });
            const chooseIconProps = mergeProps(
                {
                    className: iconClassName
                },
                ptm('chooseIcon')
            );
            const icon = chooseOptions.icon ? chooseOptions.icon : !chooseOptions.icon && (!hasFiles || props.auto) ? <PlusIcon {...chooseIconProps} /> : !chooseOptions.icon && hasFiles && !props.auto && <UploadIcon {...chooseIconProps} />;
            const chooseIcon = IconUtils.getJSXIcon(icon, { ...chooseIconProps }, { props, hasFiles });
            const inputProps = mergeProps(
                {
                    ref: fileInputRef,
                    type: 'file',
                    onChange: (e) => onFileSelect(e),
                    multiple: props.multiple,
                    accept: props.accept,
                    disabled: disabled
                },
                ptm('input')
            );
            const input = !hasFiles && <input {...inputProps} />;
            const rootProps = mergeProps(
                {
                    className,
                    style: props.style
                },
                FileUploadBase.getOtherProps(props),
                ptm('root')
            );

            const basicButtonProps = mergeProps(
                {
                    className: buttonClassName,
                    style: chooseOptions.style,
                    tabIndex: 0,
                    onMouseUp: onSimpleUploaderClick,
                    onKeyDown: (e) => onKeyDown(e),
                    onFocus,
                    onBlur
                },
                FileUploadBase.getOtherProps(props),
                ptm('basicButton')
            );

            return (
                <div {...rootProps}>
                    <Messages ref={messagesRef} pt={ptm('message')} />
                    <span {...basicButtonProps}>
                        {chooseIcon}
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

import * as React from 'react';
import { localeOption, PrimeReactContext } from '../api/Api';
import { Badge } from '../badge/Badge';
import { Button } from '../button/Button';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { PlusIcon } from '../icons/plus';
import { TimesIcon } from '../icons/times';
import { UploadIcon } from '../icons/upload';
import { Messages } from '../messages/Messages';
import { ProgressBar } from '../progressbar/ProgressBar';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, ObjectUtils } from '../utils/Utils';
import { FileUploadBase } from './FileUploadBase';

export const FileUpload = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = FileUploadBase.getProps(inProps, context);
        const [uploadedFilesState, setUploadedFilesState] = React.useState([]);
        const [filesState, setFilesState] = React.useState([]);
        const [progressState, setProgressState] = React.useState(0);
        const [focusedState, setFocusedState] = React.useState(false);
        const [uploadingState, setUploadingState] = React.useState(false);

        const metaData = {
            props,
            state: {
                progress: progressState,
                uploading: uploadingState,
                uploadedFiles: uploadedFilesState,
                files: filesState,
                focused: focusedState
            }
        };

        const { ptm, cx, isUnstyled } = FileUploadBase.setMetaData(metaData);

        useHandleStyle(FileUploadBase.css.styles, isUnstyled, { name: 'fileupload' });
        const fileInputRef = React.useRef(null);
        const messagesRef = React.useRef(null);
        const contentRef = React.useRef(null);
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

        const formatSize = (bytes) => {
            const k = 1024;
            const dm = 3;
            const sizes = localeOption('fileSizeTypes');

            if (bytes === 0) {
                return `0 ${sizes[0]}`;
            }

            const i = Math.floor(Math.log(bytes) / Math.log(k));
            const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

            return `${formattedSize} ${sizes[i]}`;
        };

        const onFileSelect = (event) => {
            // give caller a chance to stop the selection
            if (props.onBeforeSelect && props.onBeforeSelect({ originalEvent: event, files: filesState }) === false) {
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
                    file.objectURL = window.URL.createObjectURL(file);

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

            clearInput();

            if (props.mode === 'basic' && currentFiles.length > 0) {
                fileInputRef.current.style.display = 'none';
            }
        };

        const isFileSelected = (file) => {
            return filesState.some((f) => f.name + f.type + f.size === file.name + file.type + file.size);
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
                        setUploadedFilesState((prevUploadedFiles) => [...prevUploadedFiles, ...files]);
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
            if (event.code === 'Enter') {
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
                !isUnstyled() && DomHandler.addClass(contentRef.current, 'p-fileupload-highlight');
                contentRef.current.setAttribute('data-p-highlight', true);
                event.stopPropagation();
                event.preventDefault();
            }
        };

        const onDragLeave = (event) => {
            if (!disabled) {
                event.dataTransfer.dropEffect = 'copy';
                !isUnstyled() && DomHandler.removeClass(contentRef.current, 'p-fileupload-highlight');
                contentRef.current.setAttribute('data-p-highlight', false);
            }
        };

        const onDrop = (event) => {
            if (props.disabled) {
                return;
            }

            !isUnstyled() && DomHandler.removeClass(contentRef.current, 'p-fileupload-highlight');
            contentRef.current.setAttribute('data-p-highlight', false);
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
            const chooseButtonLabelProps = mergeProps(
                {
                    className: cx('chooseButtonLabel')
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
                    className: cx('chooseIcon', { iconOnly }),
                    'aria-hidden': 'true'
                },
                ptm('chooseIcon')
            );
            const icon = _icon || <PlusIcon {...chooseIconProps} />;
            const chooseIcon = IconUtils.getJSXIcon(icon, { ...chooseIconProps }, { props });
            const chooseButtonProps = mergeProps(
                {
                    className: classNames(className, cx('chooseButton', { iconOnly, disabled, className, focusedState })),
                    style,
                    onClick: choose,
                    onKeyDown: (e) => onKeyDown(e),
                    onFocus,
                    onBlur,
                    tabIndex: 0,
                    'data-p-disabled': disabled,
                    'data-p-focus': focusedState
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
                    className: cx('thumbnail'),
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
                    className: cx('fileName')
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
                    <Badge className="p-fileupload-file-badge" value={badgeOptions.value} severity={badgeOptions.severity} pt={ptm('badge')} __parentMetadata={{ parent: metaData }} />
                </div>
            );
            const removeButton = (
                <div {...actionsProps}>
                    <Button
                        type="button"
                        icon={props.removeIcon || <TimesIcon />}
                        text
                        rounded
                        severity="danger"
                        onClick={(e) => onRemoveClick(e, badgeOptions, index)}
                        disabled={disabled}
                        pt={ptm('removeButton')}
                        __parentMetadata={{ parent: metaData }}
                    />
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
                    className: cx('file')
                },
                ptm('file')
            );

            return <div {...fileProps}>{content}</div>;
        };

        const createFiles = () => {
            const badgeOptions = {
                severity: 'warning',
                value: localeOption('pending') || 'Pending'
            };
            const content = filesState.map((file, index) => createFile(file, index, badgeOptions));

            return <div>{content}</div>;
        };

        const createUploadedFiles = () => {
            const badgeOptions = {
                severity: 'success',
                value: localeOption('completed') || 'Completed'
            };
            const content = uploadedFilesState && uploadedFilesState.map((file, index) => createFile(file, index, badgeOptions));

            return <div>{content}</div>;
        };

        const createEmptyContent = () => {
            return props.emptyTemplate && !hasFiles && !hasUploadedFiles ? ObjectUtils.getJSXElement(props.emptyTemplate, props) : null;
        };

        const createProgressBarContent = () => {
            if (props.progressBarTemplate) {
                const defaultProgressBarTemplateOptions = {
                    progress: progressState,
                    props
                };

                return ObjectUtils.getJSXElement(props.progressBarTemplate, defaultProgressBarTemplateOptions);
            }

            return <ProgressBar value={progressState} showValue={false} pt={ptm('progressbar')} __parentMetadata={{ parent: metaData }} />;
        };

        const createAdvanced = () => {
            const chooseButton = createChooseButton();
            const emptyContent = createEmptyContent();
            let uploadButton, cancelButton, filesList, uplaodedFilesList, progressBar;

            if (!props.auto) {
                const uploadOptions = props.uploadOptions;
                const cancelOptions = props.cancelOptions;
                const uploadLabel = !uploadOptions.iconOnly ? uploadButtonLabel : '';
                const cancelLabel = !cancelOptions.iconOnly ? cancelButtonLabel : '';
                const uploadIconProps = mergeProps(
                    {
                        className: cx('uploadIcon', { iconOnly: uploadOptions.iconOnly }),
                        'aria-hidden': 'true'
                    },
                    ptm('uploadIcon')
                );
                const uploadIcon = IconUtils.getJSXIcon(uploadOptions.icon || <UploadIcon {...uploadIconProps} />, { ...uploadIconProps }, { props });
                const cancelIconProps = mergeProps(
                    {
                        className: cx('cancelIcon', { iconOnly: cancelOptions.iconOnly }),
                        'aria-hidden': 'true'
                    },
                    ptm('cancelIcon')
                );
                const cancelIcon = IconUtils.getJSXIcon(cancelOptions.icon || <TimesIcon {...cancelIconProps} />, { ...cancelIconProps }, { props });

                uploadButton = (
                    <Button
                        type="button"
                        label={uploadLabel}
                        aria-hidden="true"
                        icon={uploadIcon}
                        onClick={upload}
                        disabled={uploadDisabled}
                        style={uploadOptions.style}
                        className={uploadOptions.className}
                        pt={ptm('uploadButton')}
                        __parentMetadata={{ parent: metaData }}
                    />
                );
                cancelButton = (
                    <Button
                        type="button"
                        label={cancelLabel}
                        aria-hidden="true"
                        icon={cancelIcon}
                        onClick={clear}
                        disabled={cancelDisabled}
                        style={cancelOptions.style}
                        className={cancelOptions.className}
                        pt={ptm('cancelButton')}
                        __parentMetadata={{ parent: metaData }}
                    />
                );
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
                    className: classNames(props.headerClassName, cx('buttonbar')),
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
                    className: classNames('p-fileupload-buttonbar', props.headerClassName),
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
                    className: cx('root'),
                    style: props.style
                },
                FileUploadBase.getOtherProps(props),
                ptm('root')
            );

            const contentProps = mergeProps(
                {
                    ref: contentRef,
                    className: classNames(props.contentClassName, cx('content')),
                    style: props.contentStyle,
                    onDragEnter: (e) => onDragEnter(e),
                    onDragOver: (e) => onDragOver(e),
                    onDragLeave: (e) => onDragLeave(e),
                    onDrop: (e) => onDrop(e),
                    'data-p-highlight': false
                },
                ptm('content')
            );

            return (
                <div {...rootProps}>
                    {header}
                    <div {...contentProps}>
                        {progressBar}
                        <Messages ref={messagesRef} __parentMetadata={{ parent: metaData }} />
                        {hasFiles ? filesList : null}
                        {hasUploadedFiles ? uplaodedFilesList : null}
                        {emptyContent}
                    </div>
                </div>
            );
        };

        const createBasic = () => {
            const chooseOptions = props.chooseOptions;
            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                ptm('label')
            );
            const chooseLabel = chooseOptions.iconOnly ? <span {...labelProps} dangerouslySetInnerHTML={{ __html: '&nbsp;' }} /> : <span {...labelProps}>{chooseButtonLabel}</span>;
            const label = props.auto ? chooseLabel : <span {...labelProps}>{hasFiles ? filesState[0].name : chooseLabel}</span>;
            const chooseIconProps = mergeProps(
                {
                    className: cx('chooseIcon', { iconOnly: chooseOptions.iconOnly })
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
                    className: classNames(props.className, cx('root')),
                    style: props.style
                },
                FileUploadBase.getOtherProps(props),
                ptm('root')
            );

            const basicButtonProps = mergeProps(
                {
                    className: classNames(chooseOptions.className, cx('basicButton', { hasFiles, disabled, focusedState })),
                    style: chooseOptions.style,
                    tabIndex: 0,
                    onClick: onSimpleUploaderClick,
                    onKeyDown: (e) => onKeyDown(e),
                    onFocus,
                    onBlur
                },
                FileUploadBase.getOtherProps(props),
                ptm('basicButton')
            );

            return (
                <div {...rootProps}>
                    <Messages ref={messagesRef} pt={ptm('message')} __parentMetadata={{ parent: metaData }} />
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

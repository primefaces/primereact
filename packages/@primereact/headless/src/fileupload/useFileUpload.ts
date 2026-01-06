import { withHeadless } from '@primereact/core/headless';
import { addClass, isNotEmpty, removeClass } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useFileUpload.props';

export const useFileUpload = withHeadless({
    name: 'useFileUpload',
    defaultProps,
    setup({ props, $primereact }) {
        const inputRef = React.useRef<HTMLInputElement | null>(null);
        const contentRef = React.useRef<HTMLDivElement | null>(null);
        const uploadedFileCount = React.useRef(0);

        const [filesState, setFilesState] = React.useState<File[]>([]);
        const [uploadedFilesState, setUploadedFilesState] = React.useState<File[]>([]);
        const [messagesState, setMessagesState] = React.useState<string[]>([]);
        const [progressState, setProgressState] = React.useState(0);

        const hasFiles = React.useMemo(() => isNotEmpty(filesState), [filesState]);
        const hasUploadedFiles = React.useMemo(() => isNotEmpty(uploadedFilesState), [uploadedFilesState]);

        const state = {
            files: filesState,
            messages: messagesState,
            progress: progressState,
            uploadedFiles: uploadedFilesState
        };

        const upload = () => {
            if (hasFiles) {
                uploader(filesState);
            }
        };

        const onFileSelect = (event: React.ChangeEvent<HTMLInputElement> | DragEvent) => {
            const isDragEvent = (e: React.ChangeEvent<HTMLInputElement> | DragEvent): e is DragEvent => 'dataTransfer' in e && !!(e as DragEvent).dataTransfer;

            if (hasFiles) {
                setFilesState([]);
            }

            let currentFiles: File[] = [];

            if (props.multiple) {
                currentFiles = filesState ? [...filesState] : [];
            }

            const filesList = isDragEvent(event) ? event.dataTransfer?.files : (event.target as HTMLInputElement | null)?.files;

            if (!filesList) {
                return;
            }

            for (const file of Array.from(filesList)) {
                if (!isFileSelected(file) && !isFileLimitExceeded()) {
                    if (validate(file)) {
                        if (isImage(file)) {
                            const fileWithUrl = file as File & { objectURL?: string };

                            fileWithUrl.objectURL = window.URL.createObjectURL(file);
                        }

                        currentFiles.push(file);
                    }
                }
            }

            setFilesState(currentFiles);

            if (props.fileLimit) {
                checkFileLimit();
            }

            if (props.auto && isNotEmpty(currentFiles) && !isFileLimitExceeded()) {
                uploader(currentFiles);
            }

            if (props.onSelect) {
                props.onSelect({ originalEvent: event, files: currentFiles });
            }

            clearInput();
        };

        const choose = () => {
            if (inputRef.current) {
                inputRef.current.click();
            }
        };

        const uploader = (uploadFiles = filesState) => {
            const filesToUpload = uploadFiles ?? filesState ?? [];

            if (props.customUpload) {
                if (props.fileLimit) {
                    uploadedFileCount.current += filesToUpload.length;
                }

                if (props.uploadHandler) {
                    props.uploadHandler({
                        files: filesToUpload,
                        options: {
                            clear,
                            props
                        }
                    });
                }
            } else {
                const xhr = new XMLHttpRequest();
                const formData = new FormData();

                if (props.onBeforeUpload) {
                    props.onBeforeUpload({
                        xhr,
                        files: filesToUpload
                    });
                }

                for (const file of filesToUpload) {
                    formData.append(props.name as string, file, file.name);
                }

                xhr.upload.addEventListener('progress', (event) => {
                    if (event.lengthComputable) {
                        const progress = Math.round((event.loaded * 100) / event.total);

                        setProgressState(progress);
                    }

                    if (props.onProgress) {
                        props.onProgress({
                            originalEvent: event,
                            progress: progressState
                        });
                    }
                });

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        setProgressState(0);

                        if (xhr.status >= 200 && xhr.status < 300) {
                            if (props.fileLimit) {
                                uploadedFileCount.current += filesToUpload.length;
                            }

                            if (props.onUpload) {
                                props.onUpload({
                                    xhr,
                                    files: filesToUpload
                                });
                            }

                            setUploadedFilesState((prevUploadedFiles) => [...prevUploadedFiles, ...filesToUpload]);
                        } else {
                            if (props.onError) {
                                props.onError({
                                    xhr,
                                    files: filesToUpload
                                });
                            }
                        }

                        clear();
                    }
                };

                if (props.url) {
                    xhr.open('POST', props.url, true);

                    if (props.onBeforeSend) {
                        props.onBeforeSend({
                            xhr,
                            formData
                        });
                    }

                    xhr.withCredentials = !!props.withCredentials;

                    xhr.send(formData);
                }
            }
        };

        const clear = () => {
            setFilesState([]);
            setMessagesState([]);

            if (props.onClear) {
                props.onClear();
            }

            clearInput();
        };

        const isFileSelected = (file: File) => {
            if (filesState && filesState.length) {
                for (const sFile of filesState) {
                    if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size) return true;
                }
            }

            return false;
        };

        const validate = (file: File) => {
            if (props.accept && !isFileTypeValid(file)) {
                setMessagesState((prevMessages) => [...prevMessages, (props.invalidFileTypeMessage as string).replace('{0}', file.name).replace('{1}', props.accept as string)]);

                return false;
            }

            if (props.maxFileSize && file.size > props.maxFileSize) {
                setMessagesState((prevMessages) => [...prevMessages, (props.invalidFileSizeMessage as string).replace('{0}', file.name).replace('{1}', formatSize(props.maxFileSize as number))]);

                return false;
            }

            return true;
        };

        const isFileTypeValid = (file: File) => {
            const acceptableTypes = (props.accept as string).split(',').map((type) => type.trim());

            for (const type of acceptableTypes) {
                const acceptable = isWildcard(type) ? getTypeClass(file.type) === getTypeClass(type) : file.type == type || getFileExtension(file).toLowerCase() === type.toLowerCase();

                if (acceptable) {
                    return true;
                }
            }

            return false;
        };

        const getTypeClass = (fileType: string) => {
            return fileType.substring(0, fileType.indexOf('/'));
        };

        const isWildcard = (fileType: string) => {
            return fileType.indexOf('*') !== -1;
        };

        const getFileExtension = (file: File) => {
            return '.' + file.name.split('.').pop();
        };

        const isImage = (file: File) => {
            return /^image\//.test(file.type);
        };

        const onDragEnter = (event: DragEvent) => {
            if (!props.disabled && (!hasFiles || props.multiple)) {
                event.stopPropagation();
                event.preventDefault();
            }
        };

        const onDragOver = (event: DragEvent) => {
            if (!props.disabled && (!hasFiles || props.multiple)) {
                // !isUnstyled &&
                addClass(contentRef.current as HTMLDivElement, 'p-fileupload-highlight');
                (contentRef.current as HTMLDivElement).setAttribute('data-p-highlight', 'true');
                event.stopPropagation();
                event.preventDefault();
            }
        };

        const onDragLeave = () => {
            if (!props.disabled) {
                // !isUnstyled &&
                removeClass(contentRef.current as HTMLDivElement, 'p-fileupload-highlight');
                (contentRef.current as HTMLDivElement).setAttribute('data-p-highlight', 'false');
            }
        };

        const onDrop = (event: DragEvent) => {
            if (!props.disabled) {
                // !isUnstyled &&
                removeClass(contentRef.current as HTMLDivElement, 'p-fileupload-highlight');
                (contentRef.current as HTMLDivElement).setAttribute('data-p-highlight', 'false');
                event.stopPropagation();
                event.preventDefault();

                const files = event.dataTransfer?.files;
                const allowDrop = props.multiple || (files && files.length === 1);

                if (allowDrop) {
                    onFileSelect(event);
                }
            }
        };

        const remove = (index: number) => {
            clearInput();
            const currentFiles = [...filesState];
            const removedFile = filesState[index];

            currentFiles.splice(index, 1);
            setFilesState(currentFiles);

            if (props.onRemove) {
                props.onRemove({
                    file: removedFile
                });
            }
        };

        const removeUploadedFile = (index: number) => {
            const currentUploadedFiles = [...uploadedFilesState];

            currentUploadedFiles.splice(index, 1);
            setUploadedFilesState(currentUploadedFiles);

            if (props.onRemove) {
                props.onRemove({
                    file: filesState[index]
                });
            }
        };

        const clearInput = () => {
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        };

        const formatSize = (bytes: number) => {
            const k = 1024;
            const dm = 3;
            // @ts-expect-error TODO:
            const sizes = $primereact?.config?.locale?.fileSizeTypes || ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

            if (bytes === 0) {
                return `0 ${sizes[0]}`;
            }

            const i = Math.floor(Math.log(bytes) / Math.log(k));
            const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

            return `${formattedSize} ${sizes[i]}`;
        };

        const isFileLimitExceeded = () => {
            return props.fileLimit && props.fileLimit < filesState.length + uploadedFileCount.current;
        };

        const checkFileLimit = () => {
            if (isFileLimitExceeded()) {
                setMessagesState((prevMessages) => [...prevMessages, (props.invalidFileLimitMessage as string).replace('{0}', (props.fileLimit as number).toString())]);
            }
        };

        return {
            state,
            uploadedFileCount,
            hasFiles,
            hasUploadedFiles,
            // refs
            inputRef,
            contentRef,
            // methods
            upload,
            onFileSelect,
            choose,
            uploader,
            clear,
            remove,
            removeUploadedFile,
            formatSize,
            onDragEnter,
            onDragOver,
            onDragLeave,
            onDrop
        };
    }
});

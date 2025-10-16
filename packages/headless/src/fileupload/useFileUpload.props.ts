import type { useFileUploadProps } from '@primereact/types/shared/fileupload';

export const defaultProps: useFileUploadProps = {
    name: undefined,
    url: undefined,
    multiple: false,
    accept: undefined,
    disabled: false,
    auto: false,
    maxFileSize: undefined,
    fileLimit: undefined,
    withCredentials: false,
    customUpload: false,
    invalidFileLimitMessage: 'Maximum number of files exceeded, limit is {0} at most.',
    invalidFileSizeMessage: '{0}: Invalid file size, file size should be smaller than {1}.',
    invalidFileTypeMessage: '{0}: Invalid file type, allowed file types: {1}.',
    uploadHandler: undefined,
    onSelect: undefined,
    onBeforeUpload: undefined,
    onUpload: undefined,
    onError: undefined,
    onProgress: undefined,
    onBeforeSend: undefined,
    onClear: undefined,
    onRemove: undefined
};

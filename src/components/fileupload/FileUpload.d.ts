import React = require("react");

interface FileUploadProps {
    id?: string;
    name?: string;
    url?: string;
    mode?: string;
    multiple?: boolean;
    accept?: string;
    disabled?: boolean;
    auto?: boolean;
    maxFileSize?: number;
    invalidFileSizeMessageSummary?: string;
    invalidFileSizeMessageDetail?: string;
    style?: object;
    className?: string;
    widthCredentials?: boolean;
    previewWidth?: number;
    chooseLabel?: string;
    uploadLabel?: string;
    cancelLabel?: string;
    onBeforeUpload?(): void;
    onBeforeSend?(): void;
    onUpload?(e: {xhr: XMLHttpRequest, files: any}): void;
    onError?(e: {xhr: XMLHttpRequest, files: any}): void;
    onClear?(): void;
    onSelect?(e: {originalEvent: Event, files: any}): void;
    onProgress?(e: {originalEvent: Event, progress: any}): void;
}

export class FileUpload extends React.Component<FileUploadProps,any> {}
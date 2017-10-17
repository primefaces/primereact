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
    onUpload?(xhr: XMLHttpRequest, files: Array<any>): void;
    onError?(xhr: XMLHttpRequest, files: Array<any>): void;
    onClear?(): void;
    onSelect?(originalEvent: Event, files: Array<any>): void;
    onProgress?(originalEvent: Event, progress: any): void;
}

export class FileUpload extends React.Component<FileUploadProps,any> {}
import * as React from 'react';

type OptionsType = {
    label?: string;
    icon?: string;
    iconOnly?: boolean;
    className?: string;
    style?: object
};

type ItemTemplateType = (file?: object, props?: FileUploadProps) => any | any;

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
    withCredentials?: boolean;
    previewWidth?: number;
    chooseLabel?: string;
    uploadLabel?: string;
    cancelLabel?: string;
    chooseOptions?: OptionsType;
    uploadOptions?: OptionsType;
    cancelOptions?: OptionsType;
    customUpload?: boolean;
    headerClassName?: string;
    headerStyle?: object;
    contentClassName?: string;
    contentStyle?: object;
    headerTemplate?: ((props: object) => any | any);
    itemTemplate?: ItemTemplateType;
    emptyTemplate?: ((props: object) => any | any);
    onBeforeUpload?(e: { xhr: XMLHttpRequest, formData: any }): void;
    onBeforeSend?(e: { xhr: XMLHttpRequest, formData: any }): void;
    onUpload?(e: {xhr: XMLHttpRequest, files: any}): void;
    onError?(e: {xhr: XMLHttpRequest, files: any}): void;
    onClear?(): void;
    onSelect?(e: {originalEvent: Event, files: any}): void;
    onProgress?(e: {originalEvent: Event, progress: any}): void;
    onValidationFail?(file: File): void;
    uploadHandler?(e: {files: any}): void;
    onRemove?(e: {originalEvent: Event, file: any}): void;
}

export class FileUpload extends React.Component<FileUploadProps,any> {
    public upload():void;
    public clear():void;
}

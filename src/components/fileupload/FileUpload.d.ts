import * as React from 'react';

type ModeType = 'single' | 'advanced';

interface OptionsType {
    label?: string;
    icon?: string;
    iconOnly?: boolean;
    className?: string;
    style?: object
};

interface HeaderTemplateOptions {
    className: string;
    chooseButton: JSX.Element;
    uploadButton: JSX.Element;
    cancelButton: JSX.Element;
    element: JSX.Element;
    props: FileUploadProps;
}

type HeaderTemplateType = React.ReactNode | ((options: HeaderTemplateOptions) => React.ReactNode);

interface ItemTemplateOptions {
    onRemove(event: Event): void;
    previewElement: JSX.Element;
    fileNameElement: JSX.Element;
    sizeElement: JSX.Element;
    removeElement: JSX.Element;
    formatSize: string;
    element: JSX.Element;
    props: FileUploadProps;
}

type ItemTemplateType = React.ReactNode | ((file: object, options: ItemTemplateOptions) => React.ReactNode);

type EmptyTemplateType = React.ReactNode | ((props: FileUploadProps) => React.ReactNode);

interface OnBeforeUploadParams {
    xhr: XMLHttpRequest;
    formData: FormData;
}

interface OnBeforeSendParams extends OnBeforeUploadParams { }

interface FilesParam {
    files: File[];
}

interface OnUploadParams extends FilesParam {
    xhr: XMLHttpRequest;
}

interface OnErrorParams extends OnUploadParams { }

interface OnSelectParams extends FilesParam {
    originalEvent: Event;
}

interface OnProgressParams {
    originalEvent: Event;
    progress: number;
}

interface OnRemoveParams extends OnSelectParams { }

interface FileUploadProps {
    id?: string;
    name?: string;
    url?: string;
    mode?: ModeType;
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
    headerTemplate?: HeaderTemplateType;
    itemTemplate?: ItemTemplateType;
    emptyTemplate?: EmptyTemplateType;
    onBeforeUpload?(e: OnBeforeUploadParams): void;
    onBeforeSend?(e: OnBeforeSendParams): void;
    onUpload?(e: OnUploadParams): void;
    onError?(e: OnErrorParams): void;
    onClear?(): void;
    onSelect?(e: OnSelectParams): void;
    onProgress?(e: OnProgressParams): void;
    onValidationFail?(file: File): void;
    uploadHandler?(e: FilesParam): void;
    onRemove?(e: OnRemoveParams): void;
}

export class FileUpload extends React.Component<FileUploadProps, any> {
    public upload(): void;
    public clear(): void;
}

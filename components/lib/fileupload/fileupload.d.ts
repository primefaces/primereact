/**
 *
 * FileUpload represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primefaces.org/primereact/fileupload)
 *
 * @module fileupload
 *
 */
import * as React from 'react';
import { IconType } from '../utils';

/**
 * @todo Write the documantation
 */
interface FileUploadOptions {
    /**
     * @todo Write the documantation
     */
    label?: string;
    /**
     * @todo Write the documantation
     */
    icon?: IconType<FileUploadProps>;
    /**
     * @todo Write the documantation
     */
    iconOnly?: boolean;
    /**
     * @todo Write the documantation
     */
    className?: string;
    /**
     * @todo Write the documantation
     */
    style?: React.CSSProperties;
}

/**
 * @todo Write the documantation
 */
interface FileUploadHeaderTemplateOptions {
    /**
     * @todo Write the documantation
     */
    className: string;
    /**
     * @todo Write the documantation
     */
    chooseButton: JSX.Element;
    /**
     * @todo Write the documantation
     */
    uploadButton: JSX.Element;
    /**
     * @todo Write the documantation
     */
    cancelButton: JSX.Element;
    /**
     * @todo Write the documantation
     */
    element: JSX.Element;
    /**
     * @todo Write the documantation
     */
    props: FileUploadProps;
}

/**
 * @todo Write the documantation
 */
interface ItemTemplateOptions {
    /**
     * @todo Write the documantation
     */
    onRemove(event: React.SyntheticEvent): void;
    /**
     * @todo Write the documantation
     */
    previewElement: JSX.Element;
    /**
     * @todo Write the documantation
     */
    fileNameElement: JSX.Element;
    /**
     * @todo Write the documantation
     */
    sizeElement: JSX.Element;
    /**
     * @todo Write the documantation
     */
    removeElement: JSX.Element;
    /**
     * @todo Write the documantation
     */
    formatSize: string;
    /**
     * @todo Write the documantation
     */
    files: File[];
    /**
     * @todo Write the documantation
     */
    index: number;
    /**
     * @todo Write the documantation
     */
    element: JSX.Element;
    /**
     * @todo Write the documantation
     */
    props: FileUploadProps;
}

/**
 * Custom before upload event.
 * @see {@link FileUploadProps.onBeforeUpload}
 * @event
 */
interface FileUploadBeforeUploadEvent {
    /**
     * XmlHttpRequest instance.
     */
    xhr: XMLHttpRequest;
    /**
     * FormData object.
     */
    formData: FormData;
}

/**
 * Custom before send event.
 * @see {@link FileUploadProps.onBeforeSend}
 * @event
 */
interface FileUploadBeforeSendEvent extends FileUploadBeforeUploadEvent {}

/**
 * @todo Write the documantation
 */
interface FileUploadFilesEvent {
    /**
     * Uploaded files.
     */
    files: File[];
}

/**
 * Custom upload event.
 * @see {@link FileUploadProps.onUpload}
 * @event
 */
interface FileUploadUploadEvent extends FileUploadFilesEvent {
    /**
     * XmlHttpRequest instance.
     */
    xhr: XMLHttpRequest;
}

/**
 * Custom error event.
 * @see {@link FileUploadProps.onError}
 * @event
 */
interface FileUploadErrorEvent extends FileUploadUploadEvent {}

/**
 * Custom select event.
 * @see {@link FileUploadProps.onSelect}, {@link FileUploadProps.onBeforeSelect}
 * @event
 */
interface FileUploadSelectEvent extends FileUploadFilesEvent {
    /**
     * Browser event.
     */
    originalEvent: React.ChangeEvent<HTMLInputElement> | DragEvent;
}

/**
 * Custom progress event.
 * @see {@link FileUploadProps.onProgress}
 * @event
 */
interface FileUploadProgressEvent {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Calculated progress value.
     */
    progress: number;
}

/**
 * @todo Write the documantation
 */
interface FileUploadHandlerOptions {
    /**
     * @todo Write the documantation
     */
    clear(): void;
    /**
     * @todo Write the documantation
     */
    props: FileUploadProps;
}

/**
 * Custom uploadHandler event.
 * @see {@link FileUploadProps.uploadHandler}
 * @event
 */
interface FileUploadHandlerEvent extends FileUploadFilesEvent {
    /**
     * Handler options.
     */
    options: FileUploadHandlerOptions;
}

/**
 * Custom remove event.
 * @see {@link FileUploadProps.onRemove}
 * @event
 */
interface FileUploadRemoveEvent {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Selected file.
     */
    file: File;
}

/**
 * Defines valid properties in FileUpload component.
 * @group Properties
 */
interface FileUploadProps {
    /**
     * Unique identifier of the element.
     */
    id?: string | undefined;
    /**
     * Name of the request parameter to identify the files at backend.
     */
    name?: string | undefined;
    /**
     * Remote url to upload the files.
     */
    url?: string | undefined;
    /**
     * Defines the UI of the component, possible values are "advanced" and "basic".
     * @defaultValue advanced
     */
    mode?: 'basic' | 'advanced' | undefined;
    /**
     * Used to select multiple files at once from file dialog.
     * @defaultValue false
     */
    multiple?: boolean | undefined;
    /**
     * Pattern to restrict the allowed file types such as "image/*".
     * @defaultValue false
     */
    accept?: string | undefined;
    /**
     * Disables the upload functionality.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * When enabled, upload begins automatically after selection is completed.
     * @defaultValue false
     */
    auto?: boolean | undefined;
    /**
     * Maximum file size allowed in bytes.
     */
    maxFileSize?: number | undefined;
    /**
     * Summary message of the invalid fize size.
     * @defaultValue Invalid file size
     */
    invalidFileSizeMessageSummary?: string | undefined;
    /**
     * Detail message of the invalid fize size.
     * @defaultValue "Maximum upload size is."
     */
    invalidFileSizeMessageDetail?: string | undefined;
    /**
     * Inline style of the component.
     */
    style?: React.CSSProperties | undefined;
    /**
     * Style class of the component.
     */
    className?: string | undefined;
    /**
     * Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.
     * @defaultValue false
     */
    withCredentials?: boolean | undefined;
    /**
     * Width of the image thumbnail in pixels.
     * @defaultValue 50
     */
    previewWidth?: number | undefined;
    /**
     * Label of the choose button. Defaults to global value in Locale configuration.
     */
    chooseLabel?: string | undefined;
    /**
     * Label of the upload button. Defaults to global value in Locale configuration.
     */
    uploadLabel?: string | undefined;
    /**
     * Label of the cancel button. Defaults to global value in Locale configuration.
     */
    cancelLabel?: string | undefined;
    /**
     * Options used to customize the choose button. These options have "label", "icon", "className" and "style" properties.
     */
    chooseOptions?: FileUploadOptions | undefined;
    /**
     * Options used to customize the upload button. These options have "label", "icon", "className" and "style" properties.
     */
    uploadOptions?: FileUploadOptions | undefined;
    /**
     * Options used to customize the cancel button. These options have "label", "icon", "className" and "style" properties.
     */
    cancelOptions?: FileUploadOptions | undefined;
    /**
     * Whether to use the default upload or a manual implementation defined in uploadHandler callback.
     * @defaultValue false
     */
    customUpload?: boolean | undefined;
    /**
     * Custom template of the header.
     */
    headerClassName?: string | undefined;
    /**
     * Inline style of the header.
     */
    headerStyle?: React.CSSProperties | undefined;
    /**
     * Style class of the content.
     */
    contentClassName?: string | undefined;
    /**
     * Inline style of the content.
     */
    contentStyle?: React.CSSProperties | undefined;
    /**
     * Custom template of the header.
     */
    headerTemplate?: React.ReactNode | ((options: FileUploadHeaderTemplateOptions) => React.ReactNode);
    /**
     * Custom template of each item content in the container.
     */
    itemTemplate?: React.ReactNode | ((file: object, options: ItemTemplateOptions) => React.ReactNode);
    /**
     * Custom template of empty content in the container.
     */
    emptyTemplate?: React.ReactNode | ((props: FileUploadProps) => React.ReactNode);
    /**
     * Custom template of progressBar content in the container.
     */
    progressBarTemplate?: React.ReactNode | ((props: FileUploadProps) => React.ReactNode);
    /**
     * Callback to invoke before file upload begins to customize the request such as post parameters before the files.
     * @param {FileUploadBeforeUploadEvent} event - Custom beforeUpload.
     */
    onBeforeUpload?(event: FileUploadBeforeUploadEvent): void;
    /**
     * Callback to invoke before file send begins to customize the request such as adding headers.
     * @param {FileUploadBeforeSendEvent} event - @todo Add description
     */
    onBeforeSend?(event: FileUploadBeforeSendEvent): void;
    /**
     * Callback to invoke before files dropped. Return false from callback to prevent drop.
     * @param {DragEvent} event - DragEvent instance.
     */
    onBeforeDrop?(event: DragEvent): void;
    /**
     * Callback to invoke before files are selected. Return false from callback to prevent selection.
     * @param {FileUploadSelectEvent} event - Custom select event.
     */
    onBeforeSelect?(event: FileUploadSelectEvent): void;
    /**
     * Callback to invoke when file upload is complete.
     * @param {FileUploadUploadEvent} event - Custom upload event.
     */
    onUpload?(event: FileUploadUploadEvent): void;
    /**
     * Callback to invoke if file upload fails.
     * @param {FileUploadErrorEvent} event - Custom error event.
     */
    onError?(event: FileUploadErrorEvent): void;
    /**
     * Callback to invoke when files in queue are removed without uploading.
     */
    onClear?(): void;
    /**
     * Callback to invoke when files are selected.
     * @param {FileUploadSelectEvent} event - Custom select event.
     */
    onSelect?(event: FileUploadSelectEvent): void;
    /**
     * Callback to invoke when files are being uploaded.
     * @param {FileUploadProgressEvent} event - Custom progress event.
     */
    onProgress?(event: FileUploadProgressEvent): void;
    /**
     * Callback to invoke when a validation file fails.
     * @param {File} file - Invalid file.
     */
    onValidationFail?(file: File): void;
    /**
     * Callback to invoke in custom upload mode to upload the files manually.
     * @param {FileUploadHandlerEvent} event - Custom uploadHandler event
     */
    uploadHandler?(event: FileUploadHandlerEvent): void;
    /**
     * Callback to invoke when a file is removed without uploading using clear button of a file.
     * @param {FileUploadRemoveEvent} event - Custom remove event.
     */
    onRemove?(event: FileUploadRemoveEvent): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class FileUpload extends React.Component<FileUploadProps, any> {
    /**
     * Uploads the selected files.
     */
    public upload(): void;
    /**
     * Clears the files list.
     */
    public clear(): void;
    /**
     * @todo Write the documantation
     * @param {number} bytes - @todo Write the description
     */
    public formatSize(bytes: number): number;
    /**
     * @todo Write the documantation
     * @param {FileUploadSelectEvent} event - @todo Write the description
     */
    public onFileSelect(event: FileUploadSelectEvent): void;
    /**
     * Used to get container element.
     * @return {HTMLElement} Container element
     */
    public getElement(): HTMLElement;
    /**
     * Used to get input element.
     * @return {HTMLInputElement} Input element
     */
    public getInput(): HTMLInputElement;
    /**
     * Gets the current files list.
     * @return {File[]} Current files.
     */
    public getFiles(): File[];
    /**
     * Sets the current files list.
     * @param {File[]} files - Current files.
     */
    public setFiles(files: File[]): void;
}

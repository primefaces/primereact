/**
 *
 * The useFileUpload manages the state and functionality of a fileupload component.
 *
 * [Live Demo](https://www.primereact.org/fileupload/)
 *
 * @module usefileupload
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Custom upload handler event
 */
export interface FileUploadHandlerEvent {
    /**
     * List of files to be uploaded.
     */
    files: File[];
    /**
     * Options object containing utility methods and component properties.
     */
    options: {
        /**
         * Clears all selected files and resets the file upload state.
         */
        clear: () => void;
        /**
         * Component properties passed to the useFileUpload hook.
         */
        props: useFileUploadProps;
    };
}

/**
 * Custom file select event.
 */
export interface FileUploadSelectEvent {
    /**
     * Original browser event.
     */
    originalEvent: React.ChangeEvent<HTMLInputElement> | DragEvent;
    /**
     * List of selected files.
     */
    files: File[];
}

/**
 * Custom file remove event.
 */
export interface FileUploadRemoveEvent {
    /**
     * Removed file.
     */
    file: File;
}

/**
 * Custom before upload event.
 */
export interface FileUploadBeforeUploadEvent {
    /**
     * XmlHttpRequest instance.
     */
    xhr: XMLHttpRequest;
    /**
     * Files to be uploaded.
     */
    files: File[];
}

/**
 * Custom upload event.
 */
export interface FileUploadUploadEvent {
    /**
     * XmlHttpRequest instance.
     */
    xhr: XMLHttpRequest;
    /**
     * Uploaded files.
     */
    files: File[];
}

/**
 * Custom error event.
 */
export interface FileUploadErrorEvent {
    /**
     * XmlHttpRequest instance.
     */
    xhr: XMLHttpRequest;
    /**
     * Files that failed to upload.
     */
    files: File[];
}

/**
 * Custom progress event.
 */
export interface FileUploadProgressEvent {
    /**
     * Original browser event.
     */
    originalEvent: ProgressEvent;
    /**
     * Calculated progress value.
     */
    progress: number;
}

/**
 * Custom before send event.
 */
export interface FileUploadBeforeSendEvent {
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
 * Defines valid properties in useFileUpload.
 */
export interface useFileUploadProps {
    /**
     * Name of the request parameter to identify the files at backend.
     */
    name?: string | undefined;
    /**
     * Remote url to upload the files.
     */
    url?: string | undefined;
    /**
     * Used to select multiple files at once from file dialog.
     * @default false
     */
    multiple?: boolean | undefined;
    /**
     * Pattern to restrict the allowed file types such as "image/*".
     */
    accept?: string | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * When enabled, upload begins automatically after selection is completed.
     * @default false
     */
    auto?: boolean | undefined;
    /**
     * Maximum file size allowed in bytes.
     */
    maxFileSize?: number | undefined;
    /**
     * Maximum number of files that can be uploaded.
     */
    fileLimit?: number | undefined;
    /**
     * Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.
     * @default false
     */
    withCredentials?: boolean | undefined;
    /**
     * Whether to use the default upload or a manual implementation defined in uploadHandler callback.
     * @default false
     */
    customUpload?: boolean | undefined;
    /**
     * Message to display when number of files to be uploaded exceeds the limit.
     * @default 'Maximum number of files exceeded, limit is {0} at most.'
     */
    invalidFileLimitMessage?: string | undefined;
    /**
     * Message to display when file size exceeds the limit.
     * @default '{0}: Invalid file size, file size should be smaller than {1}.'
     */
    invalidFileSizeMessage?: string | undefined;
    /**
     * Message to display when file type is not allowed.
     * @default '{0}: Invalid file type, allowed file types: {1}.'
     */
    invalidFileTypeMessage?: string | undefined;
    /**
     * Callback to invoke to implement a custom upload.
     * @param {FileUploadHandlerEvent} event - Custom upload handler event.
     */
    uploadHandler?: (event: FileUploadHandlerEvent) => void;
    /**
     * Callback to invoke when files are selected.
     * @param {FileUploadSelectEvent} event - Custom select event.
     */
    onSelect?: (event: FileUploadSelectEvent) => void;
    /**
     * Callback to invoke before file upload begins to customize the request such as post parameters before the files.
     * @param {FileUploadBeforeUploadEvent} event - Custom before upload event.
     */
    onBeforeUpload?: (event: FileUploadBeforeUploadEvent) => void;
    /**
     * Callback to invoke when file upload is complete.
     * @param {FileUploadUploadEvent} event - Custom upload event.
     */
    onUpload?: (event: FileUploadUploadEvent) => void;
    /**
     * Callback to invoke if file upload fails.
     * @param {FileUploadErrorEvent} event - Custom error event.
     */
    onError?: (event: FileUploadErrorEvent) => void;
    /**
     * Callback to invoke on upload progress.
     * @param {FileUploadProgressEvent} event - Custom progress event.
     */
    onProgress?: (event: FileUploadProgressEvent) => void;
    /**
     * Callback to invoke before send for customization such as adding headers.
     * @param {FileUploadBeforeSendEvent} event - Custom before send event.
     */
    onBeforeSend?: (event: FileUploadBeforeSendEvent) => void;
    /**
     * Callback to invoke when files in queue are removed without uploading.
     */
    onClear?: () => void;
    /**
     * Callback to invoke when a file is removed.
     * @param {FileUploadRemoveEvent} event - Custom remove event.
     */
    onRemove?: (event: FileUploadRemoveEvent) => void;
}

/**
 * Defines valid state in useFileUpload.
 */
export interface useFileUploadState {
    /**
     * List of currently selected files to be uploaded.
     */
    files: File[];
    /**
     * Validation or error messages.
     */
    messages: string[] | null;
    /**
     * Current upload progress as a percentage (0-100).
     */
    progress: number;
    /**
     * List of successfully uploaded files.
     */
    uploadedFiles: File[];
}

/**
 * Defines the methods and properties exposed by useFileUpload.
 */
export interface useFileUploadExposes {
    /**
     * State of the file upload.
     */
    state: useFileUploadState;
    /**
     * Reference to track the number of uploaded files for file limit validation.
     */
    uploadedFileCount: { current: number };
    /**
     * Indicates whether there are files selected for upload.
     */
    hasFiles: boolean;
    /**
     * Indicates whether there are files that have been successfully uploaded.
     */
    hasUploadedFiles: boolean;
    /**
     * Reference to the file input element.
     */
    inputRef: React.RefObject<HTMLInputElement | null>;
    /**
     * Reference to the content element for drag and drop support.
     */
    contentRef?: React.RefObject<HTMLDivElement | null>;
    /**
     * Initiates the upload process for selected files.
     */
    upload: () => void;
    /**
     * Programmatically triggers the file selection dialog.
     */
    choose: () => void;
    /**
     * Clears all selected files and messages.
     */
    clear: () => void;
    /**
     * Removes a file from the selected files list by index.
     * @param {number} index - Index of the file to remove.
     */
    remove: (index: number) => void;
    /**
     * Removes a file from the uploaded files list by index.
     * @param {number} index - Index of the uploaded file to remove.
     */
    removeUploadedFile: (index: number) => void;
    /**
     * Formats a file size in bytes to a human-readable string.
     * @param {number} bytes - File size in bytes.
     * @returns {string} Formatted file size string (e.g., "1.5 MB").
     */
    formatSize: (bytes: number) => string;
    /**
     * Handler for file selection from input or drag-and-drop.
     * @param {React.ChangeEvent<HTMLInputElement>} event - Change event from file input.
     */
    onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Handler for drag enter event.
     * @param {DragEvent} event - Drag event.
     */
    onDragEnter: (event: DragEvent) => void;
    /**
     * Handler for drag over event.
     * @param {DragEvent} event - Drag event.
     */
    onDragOver: (event: DragEvent) => void;
    /**
     * Handler for drag leave event.
     */
    onDragLeave: () => void;
    /**
     * Handler for drop event.
     * @param {DragEvent} event - Drag event.
     */
    onDrop: (event: DragEvent) => void;
}

/**
 * Instance of useFileUpload headless.
 */
export type useFileUploadInstance = HeadlessInstance<useFileUploadProps, useFileUploadState, useFileUploadExposes>;

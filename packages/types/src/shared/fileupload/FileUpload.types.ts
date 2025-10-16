/**
 *
 * FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.
 *
 * [Live Demo](https://www.primereact.org/fileupload/)
 *
 * @module fileupload
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useFileUploadExposes, useFileUploadProps, useFileUploadState } from './useFileUpload.types';

/**
 * Defines passthrough(pt) options type in FileUpload component.
 */
export type FileUploadPassThroughType<E> = PassThroughType<FileUploadInstance, E>;

/**
 * Defines passthrough(pt) options of FileUpload component.
 */
export interface FileUploadPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FileUploadPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: FileUploadPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the file list's DOM element.
     */
    fileList?: FileUploadPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the file's DOM element.
     */
    file?: FileUploadPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the file thumbnail's DOM element.
     */
    fileThumbnail?: FileUploadPassThroughType<React.HTMLAttributes<HTMLImageElement>>;
    /**
     * Used to pass attributes to the file info's DOM element.
     */
    fileInfo?: FileUploadPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the fileName's DOM element.
     */
    fileName?: FileUploadPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the fileSize's DOM element.
     */
    fileSize?: FileUploadPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the file actions' DOM element.
     */
    fileActions?: FileUploadPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in FileUpload component.
 */
export interface FileUploadProps extends BaseComponentProps<FileUploadInstance, useFileUploadProps, FileUploadPassThrough> {}

/**
 * Defines valid state in FileUpload component.
 * @extends useFileUploadState
 */
export interface FileUploadState extends useFileUploadState {}

/**
 * Defines the methods and properties exposed by FileUpload component.
 * @extends useFileUploadExposes
 */
export interface FileUploadExposes extends useFileUploadExposes {}

/**
 * Defines the CSS class names used in the FileUpload component.
 */
export const FileUploadClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-fileupload',
    /**
     * Class name of the content element
     */
    content: 'p-fileupload-content',
    /**
     * Class name of the file list element
     */
    fileList: 'p-fileupload-file-list',
    /**
     * Class name of the file element
     */
    file: 'p-fileupload-file',
    /**
     * Class name of the file thumbnail element
     */
    fileThumbnail: 'p-fileupload-file-thumbnail',
    /**
     * Class name of the file info element
     */
    fileInfo: 'p-fileupload-file-info',
    /**
     * Class name of the file name element
     */
    fileName: 'p-fileupload-file-name',
    /**
     * Class name of the file size element
     */
    fileSize: 'p-fileupload-file-size',
    /**
     * Class name of the file actions element
     */
    fileActions: 'p-fileupload-file-actions'
} as const;

/**
 * Type representing the CSS class names used in the FileUpload component.
 */
export type FileUploadClassNamesType = (typeof FileUploadClassNames)[keyof typeof FileUploadClassNames];

/**
 * Instance of FileUpload component.
 */
export type FileUploadInstance = ComponentInstance<FileUploadProps, FileUploadState, FileUploadExposes>;

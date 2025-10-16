/**
 *
 * FileUploadList is a component that displays a list.
 *
 * [Live Demo](https://www.primereact.org/fileupload/)
 *
 * @module fileuploadlist
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { FileUploadInstance } from './FileUpload.types';

/**
 * Defines passthrough(pt) options type in FileUploadList component.
 */
export type FileUploadListPassThroughType<E> = PassThroughType<FileUploadListInstance, E>;

/**
 * Defines passthrough(pt) options of FileUploadList component.
 */
export interface FileUploadListPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FileUploadListPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the file list's DOM element.
     */
    fileList?: FileUploadListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the file's DOM element.
     */
    file?: FileUploadListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the file thumbnail's DOM element.
     */
    fileThumbnail?: FileUploadListPassThroughType<React.HTMLAttributes<HTMLImageElement>>;
    /**
     * Used to pass attributes to the file info's DOM element.
     */
    fileInfo?: FileUploadListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the fileName's DOM element.
     */
    fileName?: FileUploadListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the fileSize's DOM element.
     */
    fileSize?: FileUploadListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the file actions' DOM element.
     */
    fileActions?: FileUploadListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in FileUploadList component.
 */
export interface FileUploadListProps extends BaseComponentProps<FileUploadListInstance, unknown, FileUploadListPassThrough> {}

/**
 * Defines valid state in FileUploadList component.
 */
export interface FileUploadListState {}

/**
 * Defines the methods and properties exposed by FileUploadList component.
 */
export interface FileUploadListExposes {
    /**
     * Instance of the FileUpload component.
     */
    fileupload: FileUploadInstance | undefined | null;
}

/**
 * Defines the CSS class names used in the FileUploadList component.
 */
export const FileUploadListClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-fileupload-list',
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
 * Type representing the CSS class names used in the FileUploadList component.
 */
export type FileUploadListClassNamesType = (typeof FileUploadListClassNames)[keyof typeof FileUploadListClassNames];

/**
 * Instance of FileUploadList component.
 */
export type FileUploadListInstance = ComponentInstance<FileUploadListProps, FileUploadListState, FileUploadListExposes>;

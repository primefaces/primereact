/**
 *
 * FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.
 *
 * [Live Demo](https://www.primereact.org/fileupload/)
 *
 * @module fileuploadroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useFileUploadExposes, useFileUploadProps, useFileUploadState } from './useFileUpload.types';

/**
 * Defines passthrough(pt) options type in FileUpload component.
 */
export type FileUploadRootPassThroughType<E> = PassThroughType<FileUploadRootInstance, E>;

/**
 * Defines passthrough(pt) options of FileUpload component.
 */
export interface FileUploadRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FileUploadRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: FileUploadRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the file list's DOM element.
     */
    fileList?: FileUploadRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the file's DOM element.
     */
    file?: FileUploadRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the file thumbnail's DOM element.
     */
    fileThumbnail?: FileUploadRootPassThroughType<React.HTMLAttributes<HTMLImageElement>>;
    /**
     * Used to pass attributes to the file info's DOM element.
     */
    fileInfo?: FileUploadRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the fileName's DOM element.
     */
    fileName?: FileUploadRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the fileSize's DOM element.
     */
    fileSize?: FileUploadRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the file actions' DOM element.
     */
    fileActions?: FileUploadRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in FileUpload component.
 */
export interface FileUploadRootProps extends BaseComponentProps<FileUploadRootInstance, useFileUploadProps, FileUploadRootPassThrough> {}

/**
 * Defines valid state in FileUpload component.
 * @extends useFileUploadState
 */
export interface FileUploadRootState extends useFileUploadState {}

/**
 * Defines the methods and properties exposed by FileUpload component.
 * @extends useFileUploadExposes
 */
export interface FileUploadRootExposes extends useFileUploadExposes {}

/**
 * Instance of FileUpload component.
 */
export type FileUploadRootInstance = ComponentInstance<FileUploadRootProps, FileUploadRootState, FileUploadRootExposes>;

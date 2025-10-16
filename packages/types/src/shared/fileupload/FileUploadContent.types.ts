/**
 *
 * FileUploadContent is a component that displays a content.
 *
 * [Live Demo](https://www.primereact.org/fileupload/)
 *
 * @module fileuploadcontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { FileUploadInstance } from './FileUpload.types';

/**
 * Defines passthrough(pt) options type in FileUploadContent component.
 */
export type FileUploadContentPassThroughType<E> = PassThroughType<FileUploadContentInstance, E>;

/**
 * Defines passthrough(pt) options of FileUploadContent component.
 */
export interface FileUploadContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FileUploadContentPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in FileUploadContent component.
 */
export interface FileUploadContentProps extends BaseComponentProps<FileUploadContentInstance, unknown, FileUploadContentPassThrough> {}

/**
 * Defines valid state in FileUploadContent component.
 */
export interface FileUploadContentState {}

/**
 * Defines the methods and properties exposed by FileUploadContent component.
 */
export interface FileUploadContentExposes {
    /**
     * Instance of the FileUpload component.
     */
    fileupload: FileUploadInstance | undefined | null;
}

/**
 * Defines the CSS class names used in the FileUploadContent component.
 */
export const FileUploadContentClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-fileupload-content'
} as const;

/**
 * Type representing the CSS class names used in the FileUploadContent component.
 */
export type FileUploadContentClassNamesType = (typeof FileUploadContentClassNames)[keyof typeof FileUploadContentClassNames];

/**
 * Instance of FileUploadContent component.
 */
export type FileUploadContentInstance = ComponentInstance<FileUploadContentProps, FileUploadContentState, FileUploadContentExposes>;

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

import { createStyles } from '@primereact/styles/utils';
import type { FileUploadInstance } from '@primereact/types/shared/fileupload';
import { style } from '@primeuix/styles/fileupload';

export const styles = createStyles<FileUploadInstance>({
    name: 'fileupload',
    style,
    classes: {
        root: 'p-fileupload p-component',
        content: 'p-fileupload-content',
        fileList: 'p-fileupload-file-list',
        file: 'p-fileupload-file',
        fileThumbnail: 'p-fileupload-file-thumbnail',
        fileInfo: 'p-fileupload-file-info',
        fileName: 'p-fileupload-file-name',
        fileSize: 'p-fileupload-file-size',
        fileActions: 'p-fileupload-file-actions'
    }
});

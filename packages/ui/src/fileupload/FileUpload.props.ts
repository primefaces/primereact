import * as HeadlessFileUpload from '@primereact/headless/fileupload';
import type { FileUploadProps } from '@primereact/types/shared/fileupload';

export const defaultProps: FileUploadProps = {
    ...HeadlessFileUpload.defaultProps,
    as: 'div'
};

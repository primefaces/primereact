import * as HeadlessFileUpload from '@primereact/headless/fileupload';
import type { FileUploadRootProps } from '@primereact/types/shared/fileupload';

export const defaultRootProps: FileUploadRootProps = {
    ...HeadlessFileUpload.defaultProps,
    as: 'div'
};

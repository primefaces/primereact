import { createOptionalContext } from '@primereact/core/utils';
import type { FileUploadInstance } from '@primereact/types/shared/fileupload';

export const [FileUploadProvider, useFileUploadContext] = createOptionalContext<FileUploadInstance>();

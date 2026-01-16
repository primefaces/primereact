'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { FileUploadRootInstance } from '@primereact/types/shared/fileupload';

export const [FileUploadProvider, useFileUploadContext] = createOptionalContext<FileUploadRootInstance>();

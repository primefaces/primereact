export * as FileUpload from './UIFileUpload.parts';

// Named runtime exports to maximize tree-shaking
export { defaultContentProps, defaultListProps, defaultRootProps, FileUploadContent, FileUploadList, FileUploadProps, FileUploadProvider, useFileUploadContext } from 'primereact/fileupload';
export { UIFileUploadRoot as FileUploadRoot } from './root';

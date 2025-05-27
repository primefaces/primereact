'use client';
import BasicDoc from './basic/doc';
import DocumentDoc from './document/doc';
import ImportDoc from './import/doc';
import TemplateDoc from './template/doc';

const features = [
    {
        id: 'import',
        label: 'Import',
        component: ImportDoc
    },
    {
        id: 'basic',
        label: 'Basic',
        component: BasicDoc
    },
    {
        id: 'document',
        label: 'Document',
        component: DocumentDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    }
];

export default features;

'use client';
import BasicDoc from './basic/doc';
import DynamicDoc from './dynamic/doc';
import ImportDoc from './import/doc';
import IndeterminateDoc from './indeterminate/doc';
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
        id: 'dynamic',
        label: 'Dynamic',
        component: DynamicDoc
    },
    {
        id: 'indeterminate',
        label: 'Indeterminate',
        component: IndeterminateDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    }
];

export default features;

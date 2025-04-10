'use client';
import BasicDoc from './basic/doc';
import CustomDoc from './custom/doc';
import ImportDoc from './import/doc';

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
        id: 'custom',
        label: 'Custom',
        component: CustomDoc
    }
];

export default features;

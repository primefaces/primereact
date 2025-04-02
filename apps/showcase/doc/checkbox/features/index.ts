'use client';
import BasicDoc from './basic/doc';
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
    }
];

export default features;

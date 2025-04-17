'use client';
import AdvancedDoc from './advanced/doc';
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
    },
    {
        id: 'advanced',
        label: 'Advanced',
        component: AdvancedDoc
    }
];

export default features;

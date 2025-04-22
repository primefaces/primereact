'use client';
import HorizontalDoc from './horizontal/doc';
import ImportDoc from './import/doc';

const features = [
    {
        id: 'import',
        label: 'Import',
        component: ImportDoc
    },
    {
        id: 'horizontal',
        label: 'Horizontal',
        component: HorizontalDoc
    }
];

export default features;

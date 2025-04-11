'use client';
import BasicDoc from './basic/doc';
import ImageDoc from './image/doc';
import ImportDoc from './import/doc';
import InputDoc from './input/doc';
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
        id: 'image',
        label: 'Image',
        component: ImageDoc
    },
    {
        id: 'input',
        label: 'Input',
        component: InputDoc
    }
];

export default features;

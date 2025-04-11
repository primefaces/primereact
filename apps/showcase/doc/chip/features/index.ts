'use client';
import BasicDoc from './basic/doc';
import IconDoc from './icon/doc';
import ImageDoc from './image/doc';
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
        id: 'icon',
        label: 'Icon',
        component: IconDoc
    },
    {
        id: 'image',
        label: 'Image',
        component: ImageDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    }
];

export default features;

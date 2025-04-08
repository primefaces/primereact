'use client';
import GroupDoc from './group/doc';
import IconDoc from './icon/doc';
import ImageDoc from './image/doc';
import ImportDoc from './import/doc';
import LabelDoc from './label/doc';
const features = [
    ,
    {
        id: 'group',
        label: 'Group',
        component: GroupDoc
    },
    {
        id: 'import',
        label: 'Import',
        component: ImportDoc
    },
    {
        id: 'label',
        label: 'Label',
        component: LabelDoc
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
    }
];

export default features;

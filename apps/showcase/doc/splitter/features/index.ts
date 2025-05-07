'use client';
import HorizontalDoc from './horizontal/doc';
import ImportDoc from './import/doc';
import NestedDoc from './nested/doc';
import SizeDoc from './size/doc';
import VerticalDoc from './vertical/doc';

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
    },
    {
        id: 'size',
        label: 'Size',
        component: SizeDoc
    },
    {
        id: 'vertical',
        label: 'Vertical',
        component: VerticalDoc
    },
    {
        id: 'nested',
        label: 'Nested',
        component: NestedDoc
    }
];

export default features;

'use client';
import BasicDoc from './basic/doc';
import DisabledDoc from './disabled/doc';
import FilledDoc from './filled/doc';
import HelpTextDoc from './helptext/doc';
import InvalidDoc from './invalid/doc';
import SizesDoc from './sizes/doc';
// import FloatLabelDoc from './floatlabel/doc';
// import IftaLabelDoc from './ıftalabel/doc';
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
        id: 'filled',
        label: 'Filled',
        component: FilledDoc
    },
    // {
    //     id: 'floatlabel',
    //     label: 'FloatLabel',
    //     component: FloatLabelDoc
    // }
    // {
    //     id: 'iftalabel',
    //     label: 'IftaLabel',
    //     component: IftaLabelDoc
    // }
    {
        id: 'sizes',
        label: 'Sizes',
        component: SizesDoc
    },
    {
        id: 'helptext',
        label: 'HelpText',
        component: HelpTextDoc
    },
    {
        id: 'invalid',
        label: 'Invalid',
        component: InvalidDoc
    },
    {
        id: 'disabled',
        label: 'Disabled',
        component: DisabledDoc
    }
];

export default features;

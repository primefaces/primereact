'use client';
import DisabledDoc from './disabled/doc';
import DynamicDoc from './dynamic/doc';
import FilledDoc from './filled/doc';
import GroupDoc from './group/doc';
import ImportDoc from './import/doc';
import InvalidDoc from './invalid/doc';
import SizesDoc from './sizes/doc';
const features = [
    {
        id: 'import',
        label: 'Import',
        component: ImportDoc
    },
    {
        id: 'group',
        label: 'Group',
        component: GroupDoc
    },
    {
        id: 'dynamic',
        label: 'Dynamic',
        component: DynamicDoc
    },
    {
        id: 'filled',
        label: 'Filled',
        component: FilledDoc
    },
    {
        id: 'sizes',
        label: 'Sizes',
        component: SizesDoc
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

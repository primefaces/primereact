'use client';
import BasicDoc from './basic/doc';
// import ControlledDoc from './controlled/doc';
import DisabledDoc from './disabled/doc';
import DynamicDoc from './dynamic/doc';
import ImportDoc from './import/doc';
import MultipleDoc from './multiple/doc';
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
        id: 'dynamic',
        label: 'Dynamic',
        component: DynamicDoc
    },
    {
        id: 'multiple',
        label: 'Multiple',
        component: MultipleDoc
    },
    {
        id: 'disabled',
        label: 'Disabled',
        component: DisabledDoc
    },
    // {
    //     id: 'controlled',
    //     label: 'Controlled',
    //     component: ControlledDoc
    // }
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    }
];

export default features;

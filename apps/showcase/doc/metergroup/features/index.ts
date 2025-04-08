'use client';
import BasicDoc from './basic/doc';
import IconDoc from './icon/doc';
import ImportDoc from './import/doc';
import LabelDoc from './label/doc';
import MinMaxDoc from './minmax/doc';
import MultipleDoc from './multiple/doc';
import TemplateDoc from './template/doc';
import VerticalDoc from './vertical/doc';

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
        id: 'multiple',
        label: 'Multiple',
        component: MultipleDoc
    },
    {
        id: 'icon',
        label: 'Icon',
        component: IconDoc
    },
    {
        id: 'label',
        label: 'Label',
        component: LabelDoc
    },
    {
        id: 'vertical',
        label: 'Vertical',
        component: VerticalDoc
    },
    {
        id: 'minMax',
        label: 'MinMax',
        component: MinMaxDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    }
];

export default features;

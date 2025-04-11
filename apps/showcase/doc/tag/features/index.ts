'use client';
import BasicDoc from './basic/doc';
import IconDoc from './icon/doc';
import ImportDoc from './import/doc';
import PillDoc from './pill/doc';
import SeverityDoc from './severity/doc';
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
        id: 'severity',
        label: 'Severity',
        component: SeverityDoc
    },
    {
        id: 'pill',
        label: 'Pill',
        component: PillDoc
    },
    {
        id: 'icon',
        label: 'Icon',
        component: IconDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    }
];

export default features;

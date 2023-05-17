import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/progressbar/accessibilitydoc';
import { BasicDoc } from '../../components/doc/progressbar/basicdoc';
import { DynamicDoc } from '../../components/doc/progressbar/dynamicdoc';
import { ImportDoc } from '../../components/doc/progressbar/importdoc';
import { IndeterminateDoc } from '../../components/doc/progressbar/indeterminatedoc';
import { StyleDoc } from '../../components/doc/progressbar/styledoc';
import { TemplateDoc } from '../../components/doc/progressbar/templatedoc';
import DocApiTable from '../../components/doc/common/docapitable';
import { Wireframe } from '../../components/doc/progressbar/pt/wireframe';
import { PTDoc } from '../../components/doc/progressbar/pt/ptdoc';

const ProgressBarDemo = () => {
    const docs = [
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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'indeterminate',
            label: 'Indeterminate',
            component: IndeterminateDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.progressbar.options',
            label: 'ProgressBar PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React ProgressBar Component" header="ProgressBar" description="ProgressBar is a process status indicator." componentDocs={docs} apiDocs={['ProgressBar']} ptDocs={ptDocs} />;
};

export default ProgressBarDemo;

import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/progressbar/accessibilitydoc';
import { BasicDoc } from '../../components/doc/progressbar/basicdoc';
import { DynamicDoc } from '../../components/doc/progressbar/dynamicdoc';
import { ImportDoc } from '../../components/doc/progressbar/importdoc';
import { IndeterminateDoc } from '../../components/doc/progressbar/indeterminatedoc';
import { StyleDoc } from '../../components/doc/progressbar/styledoc';
import { TemplateDoc } from '../../components/doc/progressbar/templatedoc';

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

    return <DocComponent title="React ProgressBar Component" header="ProgressBar" description="ProgressBar is a process status indicator." componentDocs={docs} apiDocs={['ProgressBar']} />;
};

export default ProgressBarDemo;

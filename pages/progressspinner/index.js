import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/progressspinner/accessibilitydoc';
import { BasicDoc } from '../../components/doc/progressspinner/basicdoc';
import { CustomDoc } from '../../components/doc/progressspinner/customdoc';
import { ImportDoc } from '../../components/doc/progressspinner/importdoc';
import { StyleDoc } from '../../components/doc/progressspinner/styledoc';
import { Wireframe } from '../../components/doc/progressspinner/pt/wireframe';
import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/progressspinner/pt/ptdoc';

const SkeletonDemo = () => {
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
            id: 'custom',
            label: 'Custom',
            component: CustomDoc
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
            id: 'pt.progressspinner.options',
            label: 'ProgressSpinner PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React ProgressSpinner Component" header="ProgressSpinner" description="ProgressSpinner is a process status indicator." componentDocs={docs} apiDocs={['ProgressSpinner']} ptDocs={ptDocs} />;
};

export default SkeletonDemo;

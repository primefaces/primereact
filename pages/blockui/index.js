import React from 'react';
import { AccessibilityDoc } from '../../components/doc/blockui/accessibilitydoc';
import { BasicDoc } from '../../components/doc/blockui/basicdoc';
import { DocumentDoc } from '../../components/doc/blockui/documentdoc';
import { ImportDoc } from '../../components/doc/blockui/importdoc';
import { StyleDoc } from '../../components/doc/blockui/styledoc';
import { TemplateDoc } from '../../components/doc/blockui/templatedoc';
import { DocComponent } from '../../components/doc/common/doccomponent';
import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/blockui/pt/ptdoc';
import { Wireframe } from '../../components/doc/blockui/pt/wireframe';

const BlockUIDemo = () => {
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
            id: 'document',
            label: 'Document',
            component: DocumentDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
            id: 'pt.blockui.options',
            label: 'BlockUI PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React BlockUI Component" header="BlockUI" description="BlockUI can block certain elements or the whole page." componentDocs={docs} apiDocs={['BlockUI']} ptDocs={ptDocs} />;
};

export default BlockUIDemo;

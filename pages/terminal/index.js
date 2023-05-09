import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/terminal/accessibilitydoc';
import { BasicDoc } from '../../components/doc/terminal/basicdoc';
import { ImportDoc } from '../../components/doc/terminal/importdoc';
import { StyleDoc } from '../../components/doc/terminal/styledoc';
import { Wireframe } from '../../components/doc/terminal/pt/wireframe';
import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/terminal/pt/ptdoc';

const TerminalDemo = () => {
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
            id: 'pt.terminal.options',
            label: 'Terminal PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Terminal Component" header="Terminal" description="Terminal is a text based user interface." componentDocs={docs} apiDocs={['Terminal']} ptDocs={ptDocs} />;
};

export default TerminalDemo;

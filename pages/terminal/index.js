import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/terminal/accessibilitydoc';
import { BasicDoc } from '../../components/doc/terminal/basicdoc';
import { ImportDoc } from '../../components/doc/terminal/importdoc';
import { StyleDoc } from '../../components/doc/terminal/styledoc';

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

    return <DocComponent title="React Terminal Component" header="Terminal" description="Terminal is a text based user interface." componentDocs={docs} apiDocs={[{ name: 'Terminal', pathname: '/modules/terminal.html' }]} />;
};

export default TerminalDemo;

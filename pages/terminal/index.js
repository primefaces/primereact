import Head from 'next/head';
import React from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
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
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Terminal', pathname: '/modules/terminal.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Terminal Component</title>
                <meta name="description" content="Terminal is a text based user interface." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Terminal</h1>
                    <p>Terminal is a text based user interface.</p>
                </div>
                <DocActions github="/terminal" />
            </div>
            <div className="content-section doc terminal-demos">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TerminalDemo;

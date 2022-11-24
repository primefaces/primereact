import Head from 'next/head';
import React from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/terminal/apidoc';
import { ImportDoc } from '../../components/doc/terminal/importdoc';
import { TerminalDoc } from '../../components/doc/terminal/terminaldoc';

const TerminalDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'terminal',
            label: 'Terminal',
            component: TerminalDoc
        },
        {
            id: 'apidoc',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'styling',
                    label: 'Styling'
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility'
                }
            ]
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
                <DocActions github="terminal/index.js" />
            </div>
            <div className="content-section doc terminal-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TerminalDemo;

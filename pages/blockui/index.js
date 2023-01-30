import Head from 'next/head';
import React from 'react';
import { AccessibilityDoc } from '../../components/doc/blockui/accessibilitydoc';
import { BasicDoc } from '../../components/doc/blockui/basicdoc';
import { DocumentDoc } from '../../components/doc/blockui/documentdoc';
import { ImportDoc } from '../../components/doc/blockui/importdoc';
import { StyleDoc } from '../../components/doc/blockui/styledoc';
import { TemplateDoc } from '../../components/doc/blockui/templatedoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

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
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'BlockUI', pathname: '/modules/blockui.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React BlockUI Component</title>
                <meta name="description" content="BlockUI can block certain elements or the whole page." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>BlockUI</h1>
                        <p>BlockUI can block certain elements or the whole page.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default BlockUIDemo;

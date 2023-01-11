import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/blockui/apidoc';
import { AccessibilityDoc } from '../../components/doc/blockui/accessibilitydoc';
import { StyleDoc } from '../../components/doc/blockui/styledoc';
import { ImportDoc } from '../../components/doc/blockui/importdoc';
import { BasicDoc } from '../../components/doc/blockui/basicdoc';
import { TemplateDoc } from '../../components/doc/blockui/templatedoc';
import { DocumentDoc } from '../../components/doc/blockui/documentdoc';
import { DocActions } from '../../components/doc/common/docactions';

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
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React BlockUI Component</title>
                <meta name="description" content="BlockUI can block certain elements or the whole page." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>BlockUI</h1>
                    <p>BlockUI can block certain elements or the whole page.</p>
                </div>
                <DocActions github="blockui/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default BlockUIDemo;

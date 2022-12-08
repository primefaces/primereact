import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/blockui/apidoc';
import { ImportDoc } from '../../components/doc/blockui/importdoc';
import { BasicDoc } from '../../components/doc/blockui/basicdoc';
import { PanelDoc } from '../../components/doc/blockui/paneldoc';
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
            id: 'panel',
            label: 'Panel',
            component: PanelDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
                <title>React BlockUI Component</title>
                <meta name="description" content="BlockUI can either block other components or the whole page." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>BlockUI</h1>
                    <p>BlockUI can either block other components or the whole page.</p>
                </div>
                <DocActions github="blockui/index.js" />
            </div>

            <div className="content-section doc blockui-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default BlockUIDemo;

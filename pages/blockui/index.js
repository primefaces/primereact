import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/blockui/apidoc';
import { ImportDoc } from '../../components/doc/blockui/importdoc';
import { BasicDemo } from '../../components/doc/blockui/basicdoc';
import { PanelDemo } from '../../components/doc/blockui/paneldoc';
import { TemplateDemo } from '../../components/doc/blockui/templatedoc';
import { DocumentDemo } from '../../components/doc/blockui/documentdoc';

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
            component: BasicDemo
        },
        {
            id: 'document',
            label: 'Document',
            component: DocumentDemo
        },
        {
            id: 'panel',
            label: 'Panel',
            component: PanelDemo
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDemo
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
            </div>

            <div className="content-section doc blockui-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default BlockUIDemo;

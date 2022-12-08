import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/progressspinner/apidoc';
import { ImportDoc } from '../../components/doc/progressspinner/importdoc';
import { BasicDoc } from '../../components/doc/progressspinner/basicdoc';
import { CustomDoc } from '../../components/doc/progressspinner/customdoc';
import { DocActions } from '../../components/doc/common/docactions';

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
            id: 'api',
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
                <title>React ProgressSpinner Component</title>
                <meta name="description" content="ProgressSpinner is a process status indicator." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>ProgressSpinner</h1>
                    <p>ProgressSpinner is a process status indicator.</p>
                </div>
                <DocActions github="progressspinner/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SkeletonDemo;

import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/skeleton/apidoc';
import { ImportDoc } from '../../components/doc/progressspinner/importdoc';
import { BasicDemo } from '../../components/doc/progressspinner/basicdoc';
import { CustomDemo } from '../../components/doc/progressspinner/customdoc';

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
            component: BasicDemo
        },
        {
            id: 'custom',
            label: 'Custom',
            component: CustomDemo
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
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SkeletonDemo;

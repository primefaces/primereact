import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/progressspinner/accessibilitydoc';
import { BasicDoc } from '../../components/doc/progressspinner/basicdoc';
import { CustomDoc } from '../../components/doc/progressspinner/customdoc';
import { ImportDoc } from '../../components/doc/progressspinner/importdoc';
import { StyleDoc } from '../../components/doc/progressspinner/styledoc';

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
            doc: [{ name: 'ProgressSpinner', pathname: '/modules/progressspinner.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React ProgressSpinner Component</title>
                <meta name="description" content="ProgressSpinner is a process status indicator." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>ProgressSpinner</h1>
                        <p>ProgressSpinner is a process status indicator.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SkeletonDemo;

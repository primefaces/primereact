import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/ripple/apidoc';
import { ImportDoc } from '../../components/doc/ripple/importdoc';
import { DefaultDemo } from '../../components/doc/ripple/defaultdoc';
import { CustomDemo } from '../../components/doc/ripple/stylingdoc';

const RippleDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'default',
            label: 'Default',
            component: DefaultDemo
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
                <title>React Ripple Component</title>
                <meta name="description" content="Ripple component adds ripple effect to the host element." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Ripple</h1>
                    <p>Ripple component adds ripple effect to the host element.</p>
                </div>
            </div>

            <div className="content-section doc ripple-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default RippleDemo;

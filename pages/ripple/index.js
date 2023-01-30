import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/ripple/accessibilitydoc';
import { CustomDoc } from '../../components/doc/ripple/customdoc';
import { DefaultDoc } from '../../components/doc/ripple/defaultdoc';
import { ImportDoc } from '../../components/doc/ripple/importdoc';
import { StyleDoc } from '../../components/doc/ripple/styledoc';

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
            component: DefaultDoc
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
            doc: [{ name: 'Ripple', pathname: '/modules/ripple.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Ripple Component</title>
                <meta name="description" content="Ripple component adds ripple effect to the host element." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Ripple</h1>
                        <p>Ripple component adds ripple effect to the host element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default RippleDemo;

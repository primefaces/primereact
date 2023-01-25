import Head from 'next/head';
import React from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/ripple/accessibilitydoc';
import { ApiDoc } from '../../components/doc/ripple/apidoc';
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
            component: ApiDoc
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
                <DocActions github="/ripple" />
            </div>

            <div className="content-section doc ripple-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default RippleDemo;

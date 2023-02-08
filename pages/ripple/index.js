import Head from 'next/head';
import React, { useContext } from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/ripple/accessibilitydoc';
import { BasicDoc } from '../../components/doc/ripple/basicdoc';
import { ConfigurationDoc } from '../../components/doc/ripple/configurationdoc';
import { ImportDoc } from '../../components/doc/ripple/importdoc';
import { StyleDoc } from '../../components/doc/ripple/styledoc';
import AppContentContext from '../../components/layout/appcontentcontext';

const RippleDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'configuration',
            label: 'ConfigurationDoc',
            component: ConfigurationDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
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
    const appContentContext = useContext(AppContentContext);

    appContentContext.onRippleChange(true);

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

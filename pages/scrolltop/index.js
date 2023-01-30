import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/scrolltop/accessibilitydoc';
import { BasicDoc } from '../../components/doc/scrolltop/basicdoc';
import { ElementDoc } from '../../components/doc/scrolltop/elementdoc';
import { ImportDoc } from '../../components/doc/scrolltop/importdoc';
import { StyleDoc } from '../../components/doc/scrolltop/styledoc';

const ScrollTopDemo = () => {
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
            id: 'element',
            label: 'Element',
            component: ElementDoc
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
            doc: [{ name: 'ScrollTop', pathname: '/modules/scrolltop.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React ScrollTop Component</title>
                <meta name="description" content="ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>ScrollTop</h1>
                        <p>ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ScrollTopDemo;

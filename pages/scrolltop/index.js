import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/scrolltop/apidoc';
import { AccessibilityDoc } from '../../components/doc/scrolltop/accessibilitydoc';
import { StyleDoc } from '../../components/doc/scrolltop/styledoc';
import { ImportDoc } from '../../components/doc/scrolltop/importdoc';
import { BasicDoc } from '../../components/doc/scrolltop/basicdoc';
import { ElementDoc } from '../../components/doc/scrolltop/elementdoc';
import { DocActions } from '../../components/doc/common/docactions';

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
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React ScrollTop Component</title>
                <meta name="description" content="ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>ScrollTop</h1>
                    <p>ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.</p>
                </div>
                <DocActions github="scrolltop/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ScrollTopDemo;

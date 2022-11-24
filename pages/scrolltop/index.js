import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/scrolltop/apidoc';
import { WindowDoc } from '../../components/doc/scrolltop/windowdoc';
import { ElementDoc } from '../../components/doc/scrolltop/elementdoc';
import { DocActions } from '../../components/doc/common/docactions';

const ScrollTopDemo = () => {
    const docs = [
        {
            id: 'basic',
            label: 'Basic',
            component: WindowDoc
        },
        {
            id: 'image',
            label: 'Image',
            component: ElementDoc
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

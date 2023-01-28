import Head from 'next/head';
import React from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/gmap/accessibilitydoc';
import { GMapDoc } from '../../components/doc/gmap/gmapdoc';
import { ImportDoc } from '../../components/doc/gmap/importdoc';
import { StyleDoc } from '../../components/doc/gmap/styledoc';

const GMapDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'gmaps',
            label: 'Google Maps',
            component: GMapDoc
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
            doc: [{ name: 'GMap', pathname: '/modules/gmap.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React GMap Component</title>
                <meta name="description" content="GMap component provides integration with Google Maps API." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>GMap</h1>
                    <p>GMap component provides integration with Google Maps API. This sample demontrates various uses cases like binding, overlays and events. Click the map to add a new item.</p>
                </div>

                <DocActions github="/gmap" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default GMapDemo;

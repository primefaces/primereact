import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ApiDoc } from '../../components/doc/gmap/apidoc';
import { ImportDoc } from '../../components/doc/gmap/importdoc';
import { GMapDoc } from '../../components/doc/gmap/gmapdoc';

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
            id: 'apidoc',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'typescript',
                    label: 'Typescript'
                },
                {
                    id: 'gmap-api',
                    label: 'Google Maps API'
                },
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
                <title>React GMap Component</title>
                <meta name="description" content="GMap component provides integration with Google Maps API." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>GMap</h1>
                    <p>GMap component provides integration with Google Maps API. This sample demontrates various uses cases like binding, overlays and events. Click the map to add a new item.</p>
                </div>

                <DocActions github="gmap/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default GMapDemo;

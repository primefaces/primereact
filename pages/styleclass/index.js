import Head from 'next/head';
import React from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/styleclass/apidoc';
import { ImportDoc } from '../../components/doc/styleclass/importdoc';
import { ToggleClassDoc } from '../../components/doc/styleclass/toggleclassdoc';
import { AnimationsDoc } from '../../components/doc/styleclass/animationsdoc';

const StyleClassDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'toggleclass',
            label: 'Toggle Class',
            component: ToggleClassDoc
        },
        {
            id: 'animations',
            label: 'Animations',
            component: AnimationsDoc
        },
        {
            id: 'apidoc',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'targetelement',
                    label: 'Target Element'
                },
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React StyleClass Component</title>
                <meta name="description" content="StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>StyleClass</h1>
                    <p>StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.</p>
                </div>
                <DocActions github="styleclass/index.js" />
            </div>
            <div className="content-section doc styleclass-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default StyleClassDemo;

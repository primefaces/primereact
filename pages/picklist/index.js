import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ApiDoc } from '../../components/doc/picklist/apidoc';
import { AccessibilityDoc } from '../../components/doc/picklist/accessibilitydoc';
import { StyleDoc } from '../../components/doc/picklist/styledoc';
import { ImportDoc } from '../../components/doc/picklist/importdoc';
import { PickListDoc } from '../../components/doc/picklist/picklistdoc';

const PickListDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'picklist',
            label: 'PickList',
            component: PickListDoc
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
            component: ApiDoc,
            children: [
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
                <title>React PickList Component</title>
                <meta name="description" content="PickList is used to reorder items between different lists." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>PickList</h1>
                    <p>PickList is used to reorder items between different lists.</p>
                </div>

                <DocActions github="picklist/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PickListDemo;

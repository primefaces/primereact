import Head from 'next/head';
import React from 'react';
import { ApiDoc } from '../../components/doc/checkbox/apidoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DisabledDoc } from '../../components/doc/radiobutton/disableddoc';
import { DynamicDoc } from '../../components/doc/radiobutton/dynamicdoc';
import { GroupDoc } from '../../components/doc/radiobutton/groupdoc';
import { ImportDoc } from '../../components/doc/radiobutton/importdoc';
import { ValidationDoc } from '../../components/doc/radiobutton/validationdoc';

const RadioButtonDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'validation',
            label: 'Validation',
            component: ValidationDoc
        },
        {
            id: 'apidoc',
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
                <title>React RadioButton Component</title>
                <meta name="description" content="RadioButton is an extension to standard radio button element with theming." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>RadioButton</h1>
                    <p>RadioButton is an extension to standard radio button element with theming.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default RadioButtonDemo;

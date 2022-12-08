import Head from 'next/head';
import React from 'react';
import { ApiDoc } from '../../components/doc/checkbox/apidoc';
import { BasicDoc } from '../../components/doc/checkbox/basicdoc';
import { DisabledDoc } from '../../components/doc/checkbox/disableddoc';
import { DynamicDoc } from '../../components/doc/checkbox/dynamicdoc';
import { GroupDoc } from '../../components/doc/checkbox/groupdoc';
import { ImportDoc } from '../../components/doc/checkbox/importdoc';
import { ValidationDoc } from '../../components/doc/checkbox/validationdoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const CheckboxDemo = () => {
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
                <title>React Checkbox Component</title>
                <meta name="description" content="Checkbox is an extension to standard checkbox element with theming." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Checkbox</h1>
                    <p>Checkbox is an extension to standard checkbox element with theming.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default CheckboxDemo;

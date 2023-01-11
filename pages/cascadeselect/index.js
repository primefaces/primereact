import React from 'react';
import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/cascadeselect/importdoc';
import { ApiDoc } from '../../components/doc/cascadeselect/apidoc';
import { AccessibilityDoc } from '../../components/doc/cascadeselect/accessibilitydoc';
import { StyleDoc } from '../../components/doc/cascadeselect/styledoc';
import { BasicDoc } from '../../components/doc/cascadeselect/basicdoc';
import { FloatLabelDoc } from '../../components/doc/cascadeselect/floatlabeldoc';
import { InvalidDoc } from '../../components/doc/cascadeselect/invaliddoc';
import { DisabledDoc } from '../../components/doc/cascadeselect/disableddoc';
import { TemplatingDoc } from '../../components/doc/cascadeselect/templatingdoc';
import { FormikDoc } from '../../components/doc/cascadeselect/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/cascadeselect/validation/hookformdoc';

const CascadeSelectDemo = () => {
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
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'validation',
            label: 'Validation',
            description: 'Validate using popular React validation libraries.',
            children: [
                {
                    id: 'formik',
                    label: 'Formik',
                    component: FormikDoc
                },
                {
                    id: 'hookform',
                    label: 'Hook Form',
                    component: HookFormDoc
                }
            ]
        },
        {
            id: 'templating',
            label: 'Templating',
            component: TemplatingDoc
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
                <title>React CascadeSelect Component</title>
                <meta name="description" content="CascadeSelect is a form component to select a value from a nested structure of options." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>CascadeSelect</h1>
                    <p>CascadeSelect is a form component to select a value from a nested structure of options.</p>
                </div>
                <DocActions github="cascadeselect/index.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default CascadeSelectDemo;

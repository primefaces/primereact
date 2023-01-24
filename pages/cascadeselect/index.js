import Head from 'next/head';
import React from 'react';
import { AccessibilityDoc } from '../../components/doc/cascadeselect/accessibilitydoc';
import { ApiDoc } from '../../components/doc/cascadeselect/apidoc';
import { BasicDoc } from '../../components/doc/cascadeselect/basicdoc';
import { DisabledDoc } from '../../components/doc/cascadeselect/disableddoc';
import { FloatLabelDoc } from '../../components/doc/cascadeselect/floatlabeldoc';
import { ImportDoc } from '../../components/doc/cascadeselect/importdoc';
import { InvalidDoc } from '../../components/doc/cascadeselect/invaliddoc';
import { StyleDoc } from '../../components/doc/cascadeselect/styledoc';
import { TemplateDoc } from '../../components/doc/cascadeselect/templatedoc';
import { FormikDoc } from '../../components/doc/cascadeselect/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/cascadeselect/validation/hookformdoc';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'validation',
            label: 'Validation',
            description: 'Compatibility with popular React form libraries.',
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

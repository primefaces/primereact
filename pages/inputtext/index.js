import Head from 'next/head';
import React from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/inputtext/accessibilitydoc';
import { ApiDoc } from '../../components/doc/inputtext/apidoc';
import { BasicDoc } from '../../components/doc/inputtext/basicdoc';
import { DisabledDoc } from '../../components/doc/inputtext/disableddoc';
import { FloatLabelDoc } from '../../components/doc/inputtext/floatlabeldoc';
import { FormikDoc } from '../../components/doc/inputtext/form/formikdoc';
import { HookFormDoc } from '../../components/doc/inputtext/form/hookformdoc';
import { HelpTextDoc } from '../../components/doc/inputtext/helptextdoc';
import { IconsDoc } from '../../components/doc/inputtext/iconsdoc';
import { ImportDoc } from '../../components/doc/inputtext/importdoc';
import { InvalidDoc } from '../../components/doc/inputtext/invaliddoc';
import { KeyFilterDoc } from '../../components/doc/inputtext/keyfilterdoc';
import { SizesDoc } from '../../components/doc/inputtext/sizesdoc';
import { StyleDoc } from '../../components/doc/inputtext/styledoc';

const InputTextDemo = () => {
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
            id: 'icons',
            label: 'Icons',
            component: IconsDoc
        },
        {
            id: 'keyfilter',
            label: 'Key Filter',
            component: KeyFilterDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
        },
        {
            id: 'helptext',
            label: 'Help Text',
            component: HelpTextDoc
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
            id: 'form',
            label: 'Form',
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
                <title>React InputText Component</title>
                <meta name="description" content="InputText is an extension to standard input element with theming and keyfiltering." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>InputText</h1>
                    <p>InputText is an extension to standard input element with theming and keyfiltering.</p>
                </div>
                <DocActions github="inputtext/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default InputTextDemo;

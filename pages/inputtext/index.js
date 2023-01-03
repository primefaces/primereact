import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ApiDoc } from '../../components/doc/inputtext/apidoc';
import { BasicDoc } from '../../components/doc/inputtext/basicdoc';
import { DisabledDoc } from '../../components/doc/inputtext/disableddoc';
import { FloatLabelDoc } from '../../components/doc/inputtext/floatlabeldoc';
import { HelpTextDoc } from '../../components/doc/inputtext/helptextdoc';
import { IconsDoc } from '../../components/doc/inputtext/iconsdoc';
import { ImportDoc } from '../../components/doc/inputtext/importdoc';
import { InvalidDoc } from '../../components/doc/inputtext/invaliddoc';
import { KeyFilterDoc } from '../../components/doc/inputtext/keyfilterdoc';
import { SizesDoc } from '../../components/doc/inputtext/sizesdoc';
import { FormikDoc } from '../../components/doc/inputtext/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/inputtext/validation/hookformdoc';

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
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
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
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
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

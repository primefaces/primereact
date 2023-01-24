import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/togglebutton/accessibilitydoc';
import { ApiDoc } from '../../components/doc/togglebutton/apidoc';
import { BasicDoc } from '../../components/doc/togglebutton/basicdoc';
import { CustomizedDoc } from '../../components/doc/togglebutton/customizeddoc';
import { ImportDoc } from '../../components/doc/togglebutton/importdoc';
import { StyleDoc } from '../../components/doc/togglebutton/styledoc';
import { FormikDoc } from '../../components/doc/togglebutton/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/togglebutton/validation/hookformdoc';

const ToggleButtonDemo = () => {
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
            id: 'customized',
            label: 'Customized',
            component: CustomizedDoc
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
            type: 'api',
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React ToggleButton Component</title>
                <meta name="description" content="ToggleButton is used to select a boolean value using a button." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>ToggleButton</h1>
                    <p>ToggleButton is used to select a boolean value using a button.</p>
                </div>

                <DocActions github="togglebutton/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ToggleButtonDemo;

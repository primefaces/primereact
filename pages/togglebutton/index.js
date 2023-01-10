import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSections } from '../../components/doc/common/docsections';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { BasicDoc } from '../../components/doc/togglebutton/basicdoc';
import { CustomizedDoc } from '../../components/doc/togglebutton/customizeddoc';
import { ApiDoc } from '../../components/doc/togglebutton/apidoc';
import { AccessibilityDoc } from '../../components/doc/togglebutton/accessibilitydoc';
import { StylingDoc } from '../../components/doc/togglebutton/stylingdoc';
import { ImportDoc } from '../../components/doc/togglebutton/importdoc';
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
            id: 'styling',
            label: 'Styling',
            component: StylingDoc
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

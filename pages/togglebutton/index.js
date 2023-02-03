import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/togglebutton/accessibilitydoc';
import { BasicDoc } from '../../components/doc/togglebutton/basicdoc';
import { CustomizedDoc } from '../../components/doc/togglebutton/customizeddoc';
import { FormikDoc } from '../../components/doc/togglebutton/form/formikdoc';
import { HookFormDoc } from '../../components/doc/togglebutton/form/hookformdoc';
import { ImportDoc } from '../../components/doc/togglebutton/importdoc';
import { StyleDoc } from '../../components/doc/togglebutton/styledoc';

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
            type: 'api',
            doc: [{ name: 'ToggleButton', pathname: '/modules/togglebutton.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React ToggleButton Component</title>
                <meta name="description" content="ToggleButton is used to select a boolean value using a button." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>ToggleButton</h1>
                        <p>ToggleButton is used to select a boolean value using a button.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ToggleButtonDemo;

import Head from 'next/head';
import { DocSections } from '../../components/doc/common/docsections';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { ImportDoc } from '../../components/doc/inputswitch/importdoc';
import { BasicDoc } from '../../components/doc/inputswitch/basicdoc';
import { PreselectionDoc } from '../../components/doc/inputswitch/preselectiondoc';
import { DisabledDoc } from '../../components/doc/inputswitch/disableddoc';
import { ApiDoc } from '../../components/doc/inputswitch/apidoc';
import { AccessibilityDoc } from '../../components/doc/inputswitch/accessibilitydoc';
import { StylingDoc } from '../../components/doc/inputswitch/stylingdoc';
import { FormikDoc } from '../../components/doc/inputswitch/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/inputswitch/validation/hookformdoc';

const InputSwitchDemo = () => {
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
            id: 'preselection',
            label: 'Preselection',
            component: PreselectionDoc
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
                <title>React InputSwitch Component</title>
                <meta name="description" content="InputSwitch is used to select a boolean value." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>InputSwitch</h1>
                    <p>InputSwitch is used to select a boolean value.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default InputSwitchDemo;

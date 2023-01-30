import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/inputswitch/accessibilitydoc';
import { BasicDoc } from '../../components/doc/inputswitch/basicdoc';
import { DisabledDoc } from '../../components/doc/inputswitch/disableddoc';
import { FormikDoc } from '../../components/doc/inputswitch/form/formikdoc';
import { HookFormDoc } from '../../components/doc/inputswitch/form/hookformdoc';
import { ImportDoc } from '../../components/doc/inputswitch/importdoc';
import { InvalidDoc } from '../../components/doc/inputswitch/invaliddoc';
import { PreselectionDoc } from '../../components/doc/inputswitch/preselectiondoc';
import { StyleDoc } from '../../components/doc/inputswitch/styledoc';

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
            type: 'api',
            doc: [{ name: 'InputSwitch', pathname: '/modules/inputswitch.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React InputSwitch Component</title>
                <meta name="description" content="InputSwitch is used to select a boolean value." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>InputSwitch</h1>
                        <p>InputSwitch is used to select a boolean value.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default InputSwitchDemo;

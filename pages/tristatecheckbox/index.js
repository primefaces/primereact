import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/tristatecheckbox/accessibilitydoc';
import { BasicDoc } from '../../components/doc/tristatecheckbox/basicdoc';
import { DisabledDoc } from '../../components/doc/tristatecheckbox/disableddoc';
import { ImportDoc } from '../../components/doc/tristatecheckbox/importdoc';
import { InvalidDoc } from '../../components/doc/tristatecheckbox/invaliddoc';
import { StyleDoc } from '../../components/doc/tristatecheckbox/styledoc';
import { FormikDoc } from '../../components/doc/tristatecheckbox/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/tristatecheckbox/validation/hookformdoc';

const TriStateCheckboxDemo = () => {
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
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
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
            doc: [{ name: 'TriStateCheckbox', pathname: '/modules/tristatecheckbox.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React TriStateCheckbox Component</title>
                <meta name="description" content="TriStateCheckbox is used to select either true, false or null as the value." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TriStateCheckbox</h1>
                    <p>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</p>
                </div>

                <DocActions github="/tristatecheckbox" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TriStateCheckboxDemo;

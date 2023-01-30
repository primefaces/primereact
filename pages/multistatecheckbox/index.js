import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/multistatecheckbox/accessibilitydoc';
import { BasicDoc } from '../../components/doc/multistatecheckbox/basicdoc';
import { DisabledDoc } from '../../components/doc/multistatecheckbox/disableddoc';
import { ImportDoc } from '../../components/doc/multistatecheckbox/importdoc';
import { InvalidDoc } from '../../components/doc/multistatecheckbox/invaliddoc';
import { StyleDoc } from '../../components/doc/multistatecheckbox/styledoc';
import { FormikDoc } from '../../components/doc/multistatecheckbox/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/multistatecheckbox/validation/hookformdoc';

const MultiStateCheckboxDemo = () => {
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
            type: 'api',
            doc: [{ name: 'MultiStateCheckbox', pathname: '/modules/multistatecheckbox.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React MultiStateCheckbox Component</title>
                <meta name="description" content="MultiStateCheckbox is used to select a state from given multiple states." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>MultiStateCheckbox</h1>
                        <p>MultiStateCheckbox is used to select a state from given multiple states.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MultiStateCheckboxDemo;

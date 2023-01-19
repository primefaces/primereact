import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/selectbutton/apidoc';
import { AccessibilityDoc } from '../../components/doc/selectbutton/accessibilitydoc';

import { BasicDoc } from '../../components/doc/selectbutton/basicdoc';
import { CustomContentDoc } from '../../components/doc/selectbutton/customcontentdoc';
import { DisabledDoc } from '../../components/doc/selectbutton/disableddoc';
import { ImportDoc } from '../../components/doc/selectbutton/importdoc';
import { InvalidDoc } from '../../components/doc/selectbutton/invaliddoc';
import { MultipleSelectionDoc } from '../../components/doc/selectbutton/multipleselectiondoc';
import { FormikDoc } from '../../components/doc/selectbutton/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/selectbutton/validation/hookformdoc';

const SelectButtonDemo = () => {
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
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'deisabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleSelectionDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: CustomContentDoc
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
                <title>React SelectButton Component</title>
                <meta name="description" content="SelectButton is used to choose single or multiple items from a list using buttons." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>SelectButton</h1>
                    <p>SelectButton is used to choose single or multiple items from a list using buttons.</p>
                </div>

                <DocActions github="selectbutton/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SelectButtonDemo;

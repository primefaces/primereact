import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/selectbutton/accessibilitydoc';
import { BasicDoc } from '../../components/doc/selectbutton/basicdoc';
import { DisabledDoc } from '../../components/doc/selectbutton/disableddoc';
import { FormikDoc } from '../../components/doc/selectbutton/form/formikdoc';
import { HookFormDoc } from '../../components/doc/selectbutton/form/hookformdoc';
import { ImportDoc } from '../../components/doc/selectbutton/importdoc';
import { InvalidDoc } from '../../components/doc/selectbutton/invaliddoc';
import { MultipleDoc } from '../../components/doc/selectbutton/multipledoc';
import { TemplateDoc } from '../../components/doc/selectbutton/templatedoc';

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
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'SelectButton', pathname: '/modules/selectbutton.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React SelectButton Component</title>
                <meta name="description" content="SelectButton is used to choose single or multiple items from a list using buttons." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>SelectButton</h1>
                        <p>SelectButton is used to choose single or multiple items from a list using buttons.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SelectButtonDemo;

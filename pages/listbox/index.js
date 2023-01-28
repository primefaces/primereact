import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/listbox/accessibilitydoc';
import { DisabledDoc } from '../../components/doc/listbox/disableddoc';
import { FilterDoc } from '../../components/doc/listbox/filterdoc';
import { GroupDoc } from '../../components/doc/listbox/groupdoc';
import { ImportDoc } from '../../components/doc/listbox/importdoc';
import { InvalidDoc } from '../../components/doc/listbox/invaliddoc';
import { MultipleDoc } from '../../components/doc/listbox/multipledoc';
import { SingleDoc } from '../../components/doc/listbox/singledoc';
import { StyleDoc } from '../../components/doc/listbox/styledoc';
import { TemplateDoc } from '../../components/doc/listbox/templatedoc';
import { FormikDoc } from '../../components/doc/listbox/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/listbox/validation/hookformdoc';
import { VirtualScrollDoc } from '../../components/doc/listbox/virtualscrolldoc';

const ListBoxDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'single',
            label: 'Single',
            component: SingleDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'filter',
            label: 'Filter',
            component: FilterDoc
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
            id: 'virtualscroll',
            label: 'Virtual Scroll',
            component: VirtualScrollDoc
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
            doc: [{ name: 'ListBox', pathname: '/modules/listbox.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React ListBox Component</title>
                <meta name="description" content="ListBox is used to select one or more values from a list of items." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>ListBox</h1>
                    <p>ListBox is used to select one or more values from a list of items.</p>
                </div>

                <DocActions github="/listbox" />
            </div>

            <div className="content-section doc multiselect-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ListBoxDemo;

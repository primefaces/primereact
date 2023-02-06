import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/listbox/accessibilitydoc';
import { BasicDoc } from '../../components/doc/listbox/basicdoc';
import { DisabledDoc } from '../../components/doc/listbox/disableddoc';
import { FilterDoc } from '../../components/doc/listbox/filterdoc';
import { FormikDoc } from '../../components/doc/listbox/form/formikdoc';
import { HookFormDoc } from '../../components/doc/listbox/form/hookformdoc';
import { GroupDoc } from '../../components/doc/listbox/groupdoc';
import { ImportDoc } from '../../components/doc/listbox/importdoc';
import { InvalidDoc } from '../../components/doc/listbox/invaliddoc';
import { MultipleDoc } from '../../components/doc/listbox/multipledoc';
import { StyleDoc } from '../../components/doc/listbox/styledoc';
import { TemplateDoc } from '../../components/doc/listbox/templatedoc';
import { VirtualScrollDoc } from '../../components/doc/listbox/virtualscrolldoc';

const ListBoxDemo = () => {
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
            id: 'virtualscroll',
            label: 'Virtual Scroll',
            component: VirtualScrollDoc
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
            doc: [{ name: 'ListBox', pathname: '/modules/listbox.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React ListBox Component</title>
                <meta name="description" content="ListBox is used to select one or more values from a list of items." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>ListBox</h1>
                        <p>ListBox is used to select one or more values from a list of items.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ListBoxDemo;

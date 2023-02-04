import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/dropdown/accessibilitydoc';
import { BasicDoc } from '../../components/doc/dropdown/basicdoc';
import { ClearIconDoc } from '../../components/doc/dropdown/clearicondoc';
import { DisabledDoc } from '../../components/doc/dropdown/disableddoc';
import { EditableDoc } from '../../components/doc/dropdown/editabledoc';
import { FilterDoc } from '../../components/doc/dropdown/filterdoc';
import { FloatLabelDoc } from '../../components/doc/dropdown/floatlabeldoc';
import { FormikDoc } from '../../components/doc/dropdown/form/formikdoc';
import { HookFormDoc } from '../../components/doc/dropdown/form/hookformdoc';
import { GroupDoc } from '../../components/doc/dropdown/groupdoc';
import { ImportDoc } from '../../components/doc/dropdown/importdoc';
import { InvalidDoc } from '../../components/doc/dropdown/invaliddoc';
import { StyleDoc } from '../../components/doc/dropdown/styledoc';
import { TemplateDoc } from '../../components/doc/dropdown/templatedoc';
import { VirtualScrollDoc } from '../../components/doc/dropdown/virtualscrolldoc';

const DropdownDemo = () => {
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
            id: 'editable',
            label: 'Editable',
            component: EditableDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'filter',
            label: 'Filter',
            component: FilterDoc
        },
        {
            id: 'clearicon',
            label: 'Clear Icon',
            component: ClearIconDoc
        },
        {
            id: 'virtualscroll',
            label: 'Virtual Scroll',
            component: VirtualScrollDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
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
            doc: [{ name: 'Dropdown', pathname: '/modules/dropdown.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Select Component</title>
                <meta name="description" content="Dropdown also known as Select, is used to choose an item from a collection of options." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Dropdown</h1>
                        <p>Dropdown also known as Select, is used to choose an item from a collection of options.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DropdownDemo;

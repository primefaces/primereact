import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/dropdown/accessibilitydoc';
import { ApiDoc } from '../../components/doc/dropdown/apidoc';
import { BasicDoc } from '../../components/doc/dropdown/basicdoc';
import { ClearIconDoc } from '../../components/doc/dropdown/clearicondoc';
import { DisabledDoc } from '../../components/doc/dropdown/disableddoc';
import { EditableDoc } from '../../components/doc/dropdown/editabledoc';
import { FilterDoc } from '../../components/doc/dropdown/filterdoc';
import { FloatLabelDoc } from '../../components/doc/dropdown/floatlabeldoc';
import { GroupedDoc } from '../../components/doc/dropdown/groupeddoc';
import { ImportDoc } from '../../components/doc/dropdown/importdoc';
import { InvalidDoc } from '../../components/doc/dropdown/invaliddoc';
import { StyleDoc } from '../../components/doc/dropdown/styledoc';
import { TemplateDoc } from '../../components/doc/dropdown/templatedoc';
import { FormikDoc } from '../../components/doc/dropdown/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/dropdown/validation/hookformdoc';
import { EagerDoc } from '../../components/doc/dropdown/virtualscroll/eagerdoc';
import { LazyDoc } from '../../components/doc/dropdown/virtualscroll/lazydoc';

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
            id: 'grouped',
            label: 'Grouped',
            component: GroupedDoc
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
            description: 'Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.',
            children: [
                {
                    id: 'eager',
                    label: 'Eager',
                    component: EagerDoc
                },
                {
                    id: 'lazy',
                    label: 'Lazy',
                    component: LazyDoc
                }
            ]
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
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Select Component</title>
                <meta name="description" content="Dropdown also known as Select, is used to choose an item from a collection of options." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Dropdown</h1>
                    <p>Dropdown also known as Select, is used to choose an item from a collection of options.</p>
                </div>
                <DocActions github="dropdown/index.js" />
            </div>

            <div className="content-section doc dropdown-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DropdownDemo;

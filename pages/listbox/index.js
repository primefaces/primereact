import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/listbox/accessibilitydoc';
import { BasicDoc } from '@/components/doc/listbox/basicdoc';
import { DisabledDoc } from '@/components/doc/listbox/disableddoc';
import { FilterDoc } from '@/components/doc/listbox/filterdoc';
import { FormikDoc } from '@/components/doc/listbox/form/formikdoc';
import { HookFormDoc } from '@/components/doc/listbox/form/hookformdoc';
import { GroupDoc } from '@/components/doc/listbox/groupdoc';
import { ImportDoc } from '@/components/doc/listbox/importdoc';
import { InvalidDoc } from '@/components/doc/listbox/invaliddoc';
import { MultipleDoc } from '@/components/doc/listbox/multipledoc';
import { PTDoc } from '@/components/doc/listbox/pt/ptdoc';
import { Wireframe } from '@/components/doc/listbox/pt/wireframe';
import { TemplateDoc } from '@/components/doc/listbox/templatedoc';
import { StyledDoc } from '@/components/doc/listbox/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/listbox/theming/tailwinddoc';
import { VirtualScrollDoc } from '@/components/doc/listbox/virtualscrolldoc';

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
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.listbox.options',
            label: 'Listbox PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        },
        {
            id: 'unstyled',
            label: 'Unstyled',
            description: 'Theming is implemented with the pass through properties in unstyled mode.',
            children: [
                {
                    id: 'tailwind',
                    label: 'Tailwind',
                    component: TailwindDoc
                }
            ]
        }
    ];

    return <DocComponent title="React ListBox Component" header="ListBox" description="ListBox is used to select one or more values from a list of items." componentDocs={docs} apiDocs={['ListBox']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default ListBoxDemo;

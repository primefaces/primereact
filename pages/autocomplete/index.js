import { AccessibilityDoc } from '@/components/doc/autocomplete/accessibilitydoc';
import { BasicDoc } from '@/components/doc/autocomplete/basicdoc';
import { DisabledDoc } from '@/components/doc/autocomplete/disableddoc';
import { DropdownDoc } from '@/components/doc/autocomplete/dropdowndoc';
import { FloatLabelDoc } from '@/components/doc/autocomplete/floatlabeldoc';
import { ForceSelectionDoc } from '@/components/doc/autocomplete/forceselectiondoc';
import { FormikDoc } from '@/components/doc/autocomplete/form/formikdoc';
import { HookFormDoc } from '@/components/doc/autocomplete/form/hookformdoc';
import { GroupDoc } from '@/components/doc/autocomplete/groupdoc';
import { ImportDoc } from '@/components/doc/autocomplete/importdoc';
import { InvalidDoc } from '@/components/doc/autocomplete/invaliddoc';
import { MultipleDoc } from '@/components/doc/autocomplete/multipledoc';
import { ObjectsDoc } from '@/components/doc/autocomplete/objectsdoc';
import { PTDoc } from '@/components/doc/autocomplete/pt/ptdoc';
import { Wireframe } from '@/components/doc/autocomplete/pt/wireframe';
import { TemplateDoc } from '@/components/doc/autocomplete/templatedoc';
import { StyledDoc } from '@/components/doc/autocomplete/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/autocomplete/theming/tailwinddoc';
import { VirtualScrollDoc } from '@/components/doc/autocomplete/virtualscrolldoc';
import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';

const AutoCompleteDemo = () => {
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
            id: 'dropdown',
            label: 'Dropdown',
            component: DropdownDoc
        },
        {
            id: 'objects',
            label: 'Objects',
            component: ObjectsDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'forceselection',
            label: 'Force Selection',
            component: ForceSelectionDoc
        },
        {
            id: 'virtualscroll',
            label: 'Virtual Scroll',
            component: VirtualScrollDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
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
            id: 'pt.autocomplete.options',
            label: 'AutoComplete PT Options',
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

    return (
        <DocComponent
            title="React AutoComplete Component"
            header="AutoComplete"
            description="AutoComplete is an input component that provides real-time suggestions while being typed"
            componentDocs={docs}
            apiDocs={['AutoComplete']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default AutoCompleteDemo;

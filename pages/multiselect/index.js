import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/multiselect/accessibilitydoc';
import { BasicDoc } from '@/components/doc/multiselect/basicdoc';
import { ChipsDoc } from '@/components/doc/multiselect/chipsdoc';
import { DisabledDoc } from '@/components/doc/multiselect/disableddoc';
import { FilterDoc } from '@/components/doc/multiselect/filterdoc';
import { FloatLabelDoc } from '@/components/doc/multiselect/floatlabeldoc';
import { FormikDoc } from '@/components/doc/multiselect/form/formikdoc';
import { HookFormDoc } from '@/components/doc/multiselect/form/hookformdoc';
import { GroupDoc } from '@/components/doc/multiselect/groupdoc';
import { ImportDoc } from '@/components/doc/multiselect/importdoc';
import { InvalidDoc } from '@/components/doc/multiselect/invaliddoc';
import { LoadingDoc } from '@/components/doc/multiselect/loadingdoc';
import { PTDoc } from '@/components/doc/multiselect/pt/ptdoc';
import { Wireframe } from '@/components/doc/multiselect/pt/wireframe';
import { TemplateDoc } from '@/components/doc/multiselect/templatedoc';
import { StyledDoc } from '@/components/doc/multiselect/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/multiselect/theming/tailwinddoc';
import { VirtualScrollDoc } from '@/components/doc/multiselect/virtualscrolldoc';

const MultiSelectDemo = () => {
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
            id: 'chips',
            label: 'Chips',
            component: ChipsDoc
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
            id: 'loadingstate',
            label: 'Loading State',
            component: LoadingDoc
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
            id: 'pt.multiselect.options',
            label: 'MultiSelect PT Options',
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
        <DocComponent title="React MultiSelect Component" header="MultiSelect" description="MultiSelect is used to select multiple items from a collection." componentDocs={docs} apiDocs={['MultiSelect']} ptDocs={ptDocs} themingDocs={themingDocs} />
    );
};

export default MultiSelectDemo;

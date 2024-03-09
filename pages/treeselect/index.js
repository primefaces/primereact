import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/treeselect/accessibilitydoc';
import { BasicDoc } from '@/components/doc/treeselect/basicdoc';
import { CheckboxDoc } from '@/components/doc/treeselect/checkboxdoc';
import { ClearIconDoc } from '@/components/doc/treeselect/clearicondoc';
import { ControlledDoc } from '@/components/doc/treeselect/controlleddoc';
import { DisabledDoc } from '@/components/doc/treeselect/disableddoc';
import { FilterDoc } from '@/components/doc/treeselect/filterdoc';
import { FloatLabelDoc } from '@/components/doc/treeselect/floatlabeldoc';
import { FormikDoc } from '@/components/doc/treeselect/form/formikdoc';
import { HookFormDoc } from '@/components/doc/treeselect/form/hookformdoc';
import { ImportDoc } from '@/components/doc/treeselect/importdoc';
import { InvalidDoc } from '@/components/doc/treeselect/invaliddoc';
import { MultipleDoc } from '@/components/doc/treeselect/multipledoc';
import { PTDoc } from '@/components/doc/treeselect/pt/ptdoc';
import { Wireframe } from '@/components/doc/treeselect/pt/wireframe';
import { StyledDoc } from '@/components/doc/treeselect/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/treeselect/theming/tailwinddoc';

const TreeSelectDemo = () => {
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
            id: 'check',
            label: 'Checkbox',
            component: CheckboxDoc
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
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDoc
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
            id: 'pt.treeselect.options',
            label: 'TreeSelect PT Options',
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
            title="React TreeSelect Component"
            header="TreeSelect"
            description="TreeSelect is a form component to choose from hierarchical data."
            componentDocs={docs}
            apiDocs={['TreeSelect', 'TreeNode']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default TreeSelectDemo;

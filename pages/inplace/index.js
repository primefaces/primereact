import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/inplace/accessibilitydoc';
import { BasicDoc } from '@/components/doc/inplace/basicdoc';
import { ImageDoc } from '@/components/doc/inplace/imagedoc';
import { ImportDoc } from '@/components/doc/inplace/importdoc';
import { InputDoc } from '@/components/doc/inplace/inputdoc';
import { LazyDoc } from '@/components/doc/inplace/lazydoc';
import { PTDoc } from '@/components/doc/inplace/pt/ptdoc';
import { Wireframe } from '@/components/doc/inplace/pt/wireframe';
import { StyledDoc } from '@/components/doc/inplace/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/inplace/theming/tailwinddoc';

const ChipDemo = () => {
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
            id: 'input',
            label: 'Input',
            component: InputDoc
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDoc
        },
        {
            id: 'lazy',
            label: 'Lazy',
            component: LazyDoc
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
            id: 'pt.Inplace.options',
            label: 'Inplace PT Options',
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
            title="React Inplace Component"
            header="Inplace"
            description="Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content."
            componentDocs={docs}
            apiDocs={['Inplace', 'InplaceDisplay', 'InplaceContent']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default ChipDemo;

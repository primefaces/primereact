import { AccessibilityDoc } from '@/components/doc/chip/accessibilitydoc';
import { BasicDoc } from '@/components/doc/chip/basicdoc';
import { IconDoc } from '@/components/doc/chip/icondoc';
import { ImageDoc } from '@/components/doc/chip/imagedoc';
import { ImportDoc } from '@/components/doc/chip/importdoc';
import { PTDoc } from '@/components/doc/chip/pt/ptdoc';
import { Wireframe } from '@/components/doc/chip/pt/wireframe';
import { TemplateDoc } from '@/components/doc/chip/templatedoc';
import { StyledDoc } from '@/components/doc/chip/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/chip/theming/tailwinddoc';
import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';

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
            id: 'icon',
            label: 'Icon',
            component: IconDoc
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDoc
        },
        {
            id: 'templatedoc',
            label: 'Template',
            component: TemplateDoc
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
            id: 'pt.chip.options',
            label: 'Chip PT Options',
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

    return <DocComponent title="React Chip Component" header="Chip" description="Chip represents entities using icons, labels and images." componentDocs={docs} apiDocs={['Chip']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default ChipDemo;

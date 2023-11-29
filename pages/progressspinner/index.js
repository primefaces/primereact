import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/progressspinner/accessibilitydoc';
import { BasicDoc } from '@/components/doc/progressspinner/basicdoc';
import { CustomDoc } from '@/components/doc/progressspinner/customdoc';
import { ImportDoc } from '@/components/doc/progressspinner/importdoc';
import { PTDoc } from '@/components/doc/progressspinner/pt/ptdoc';
import { Wireframe } from '@/components/doc/progressspinner/pt/wireframe';
import { StyledDoc } from '@/components/doc/progressspinner/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/progressspinner/theming/tailwinddoc';

const SkeletonDemo = () => {
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
            id: 'custom',
            label: 'Custom',
            component: CustomDoc
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
            id: 'pt.progressspinner.options',
            label: 'ProgressSpinner PT Options',
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

    return <DocComponent title="React ProgressSpinner Component" header="ProgressSpinner" description="ProgressSpinner is a process status indicator." componentDocs={docs} apiDocs={['ProgressSpinner']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default SkeletonDemo;

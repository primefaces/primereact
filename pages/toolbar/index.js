import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/toolbar/accessibilitydoc';
import { BasicDoc } from '@/components/doc/toolbar/basicdoc';
import { ImportDoc } from '@/components/doc/toolbar/importdoc';
import { PTDoc } from '@/components/doc/toolbar/pt/ptdoc';
import { Wireframe } from '@/components/doc/toolbar/pt/wireframe';
import { StyledDoc } from '@/components/doc/toolbar/theming/styleddoc';
import { CustomDoc } from '@/components/doc/toolbar/customdoc';
import { TailwindDoc } from '@/components/doc/toolbar/theming/tailwinddoc';

const ToolbarDemo = () => {
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
            id: 'pt.toolbar.options',
            label: 'Toolbar PT Options',
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

    return <DocComponent title="React Toolbar Component" header="Toolbar" description="Toolbar is a grouping component for buttons and other content." componentDocs={docs} apiDocs={['Toolbar']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default ToolbarDemo;

import { AccessibilityDoc } from '@/components/doc/blockui/accessibilitydoc';
import { BasicDoc } from '@/components/doc/blockui/basicdoc';
import { DocumentDoc } from '@/components/doc/blockui/documentdoc';
import { ImportDoc } from '@/components/doc/blockui/importdoc';
import { PTDoc } from '@/components/doc/blockui/pt/ptdoc';
import { Wireframe } from '@/components/doc/blockui/pt/wireframe';
import { TemplateDoc } from '@/components/doc/blockui/templatedoc';
import { StyledDoc } from '@/components/doc/blockui/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/blockui/theming/tailwinddoc';
import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';

const BlockUIDemo = () => {
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
            id: 'document',
            label: 'Document',
            component: DocumentDoc
        },
        {
            id: 'template',
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
            id: 'pt.blockui.options',
            label: 'BlockUI PT Options',
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

    return <DocComponent title="React BlockUI Component" header="BlockUI" description="BlockUI can block certain elements or the whole page." componentDocs={docs} apiDocs={['BlockUI']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default BlockUIDemo;

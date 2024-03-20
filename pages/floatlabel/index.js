import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/floatlabel/accessibilitydoc';
import { BasicDoc } from '@/components/doc/floatlabel/basicdoc';
import { ImportDoc } from '@/components/doc/floatlabel/importdoc';
import { Wireframe } from '@/components/doc/floatlabel/pt/wireframe';
import { StyleDoc } from '@/components/doc/floatlabel/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/floatlabel/theming/tailwinddoc';

function FloatLabelDemo() {
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
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyleDoc
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

    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.floatlabel.options',
            label: 'FloatLabel PT Options',
            component: DocApiTable
        }
    ];

    return <DocComponent title="React Float Label" header="FloatLabel" description="FloatLabel appears on top of the input field when focused." componentDocs={docs} apiDocs={['FloatLabel']} ptDocs={ptDocs} themingDocs={themingDocs} />;
}

export default FloatLabelDemo;

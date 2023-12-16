import { AccessibilityDoc } from '@/components/doc/badge/accessibilitydoc';
import { BasicDoc } from '@/components/doc/badge/basicdoc';
import { ButtonDoc } from '@/components/doc/badge/buttondoc';
import { ImportDoc } from '@/components/doc/badge/importdoc';
import { PositionDoc } from '@/components/doc/badge/positiondoc';
import { PTDoc } from '@/components/doc/badge/pt/ptdoc';
import { Wireframe } from '@/components/doc/badge/pt/wireframe';
import { SeverityDoc } from '@/components/doc/badge/severitydoc';
import { SizeDoc } from '@/components/doc/badge/sizedoc';
import { StyledDoc } from '@/components/doc/badge/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/badge/theming/tailwinddoc';
import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';

const BadgeDemo = () => {
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
            id: 'severity',
            label: 'Severity',
            component: SeverityDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'positioned',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'button',
            label: 'Button',
            component: ButtonDoc
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
            id: 'pt.badge.options',
            label: 'Badge PT Options',
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

    return <DocComponent title="React Badge Component" header="Badge" description="Badge is a small status indicator for another element." componentDocs={docs} apiDocs={['Badge']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default BadgeDemo;

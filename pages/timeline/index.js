import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/timeline/accessibilitydoc';
import { AlignmentDoc } from '@/components/doc/timeline/alignmentdoc';
import { BasicDoc } from '@/components/doc/timeline/basicdoc';
import { HorizontalDoc } from '@/components/doc/timeline/horizontaldoc';
import { ImportDoc } from '@/components/doc/timeline/importdoc';
import { OppositeDoc } from '@/components/doc/timeline/oppositedoc';
import { PTDoc } from '@/components/doc/timeline/pt/ptdoc';
import { Wireframe } from '@/components/doc/timeline/pt/wireframe';
import { TemplateDoc } from '@/components/doc/timeline/templatedoc';
import { StyledDoc } from '@/components/doc/timeline/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/timeline/theming/tailwinddoc';

const TimelineDemo = () => {
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
            id: 'alignment',
            label: 'Alignment',
            component: AlignmentDoc
        },
        {
            id: 'opposite',
            label: 'Opposite',
            component: OppositeDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
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
            id: 'pt.timeline.options',
            label: 'Timeline PT Options',
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

    return <DocComponent title="React Timeline Component" header="Timeline" description="Timeline visualizes a series of chained events." componentDocs={docs} apiDocs={['Timeline']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default TimelineDemo;

import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/tag/accessibilitydoc';
import { BasicDoc } from '@/components/doc/tag/basicdoc';
import { IconDoc } from '@/components/doc/tag/icondoc';
import { ImportDoc } from '@/components/doc/tag/importdoc';
import { PillDoc } from '@/components/doc/tag/pilldoc';
import { PTDoc } from '@/components/doc/tag/pt/ptdoc';
import { Wireframe } from '@/components/doc/tag/pt/wireframe';
import { SeverityDoc } from '@/components/doc/tag/severitydoc';
import { TemplateDoc } from '@/components/doc/tag/templatedoc';
import { StyledDoc } from '@/components/doc/tag/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/tag/theming/tailwinddoc';

const TerminalDemo = () => {
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
            id: 'pill',
            label: 'Pill',
            component: PillDoc
        },
        {
            id: 'icons',
            label: 'Icon',
            component: IconDoc
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
            id: 'pt.tag.options',
            label: 'Tag PT Options',
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

    return <DocComponent title="React Tag Component" header="Tag" description="Tag component is used to categorize content." componentDocs={docs} apiDocs={['Tag']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default TerminalDemo;

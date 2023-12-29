import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/toast/accessibilitydoc';
import { BasicDoc } from '@/components/doc/toast/basicdoc';
import { HeadlessDoc } from '@/components/doc/toast/headlessdoc';
import { ImportDoc } from '@/components/doc/toast/importdoc';
import { MultipleDoc } from '@/components/doc/toast/multipledoc';
import { PositionDoc } from '@/components/doc/toast/positiondoc';
import { PTDoc } from '@/components/doc/toast/pt/ptdoc';
import { Wireframe } from '@/components/doc/toast/pt/wireframe';
import { SeverityDoc } from '@/components/doc/toast/severitydoc';
import { StickyDoc } from '@/components/doc/toast/stickydoc';
import { TemplateDoc } from '@/components/doc/toast/templatedoc';
import { StyledDoc } from '@/components/doc/toast/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/toast/theming/tailwinddoc';

const ToastDemo = () => {
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
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'stickydoc',
            label: 'Sticky',
            component: StickyDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'headless',
            label: 'Headless',
            component: HeadlessDoc
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
            id: 'pt.toast.options',
            label: 'Toast PT Options',
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

    return <DocComponent title="React Toast Component" header="Toast" description="Toast is used to display messages in an overlay." componentDocs={docs} apiDocs={['Toast']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default ToastDemo;

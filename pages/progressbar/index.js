import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/progressbar/accessibilitydoc';
import { BasicDoc } from '@/components/doc/progressbar/basicdoc';
import { DynamicDoc } from '@/components/doc/progressbar/dynamicdoc';
import { ImportDoc } from '@/components/doc/progressbar/importdoc';
import { IndeterminateDoc } from '@/components/doc/progressbar/indeterminatedoc';
import { PTDoc } from '@/components/doc/progressbar/pt/ptdoc';
import { Wireframe } from '@/components/doc/progressbar/pt/wireframe';
import { TemplateDoc } from '@/components/doc/progressbar/templatedoc';
import { StyledDoc } from '@/components/doc/progressbar/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/progressbar/theming/tailwinddoc';

const ProgressBarDemo = () => {
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
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'indeterminate',
            label: 'Indeterminate',
            component: IndeterminateDoc
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
            id: 'pt.progressbar.options',
            label: 'ProgressBar PT Options',
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

    return <DocComponent title="React ProgressBar Component" header="ProgressBar" description="ProgressBar is a process status indicator." componentDocs={docs} apiDocs={['ProgressBar']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default ProgressBarDemo;

import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/organizationchart/accessibilitydoc';
import { BasicDoc } from '@/components/doc/organizationchart/basicdoc';
import { ColoredDoc } from '@/components/doc/organizationchart/coloreddoc';
import { ImportDoc } from '@/components/doc/organizationchart/importdoc';
import { PTDoc } from '@/components/doc/organizationchart/pt/ptdoc';
import { Wireframe } from '@/components/doc/organizationchart/pt/wireframe';
import { SelectionDoc } from '@/components/doc/organizationchart/selectiondoc';
import { TemplateDoc } from '@/components/doc/organizationchart/templatedoc';
import { StyledDoc } from '@/components/doc/organizationchart/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/organizationchart/theming/tailwinddoc';

const OrganizationChartDemo = () => {
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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'selection',
            label: 'Selection',
            component: SelectionDoc
        },
        {
            id: 'colored',
            label: 'Colored',
            component: ColoredDoc
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
            id: 'pt.organizationchart.options',
            label: 'OrganizationChart PT Options',
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

    return (
        <DocComponent
            title="React Organization Chart Component"
            header="OrganizationChart"
            description="OrganizationChart visualizes hierarchical organization data."
            componentDocs={docs}
            apiDocs={['OrganizationChart']}
            className="organizationchart-demo"
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default OrganizationChartDemo;

import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/metergroup/basicdoc';
import { IconDoc } from '@/components/doc/metergroup/icondoc';
import { ImportDoc } from '@/components/doc/metergroup/importdoc';
import { MultipleDoc } from '@/components/doc/metergroup/multipledoc';
import { LabelDoc } from '@/components/doc/metergroup/labeldoc';
import { VerticalDoc } from '@/components/doc/metergroup/verticaldoc';
import { MinMaxDoc } from '@/components/doc/metergroup/minmaxdoc';
import { TemplateDoc } from '@/components/doc/metergroup/templatedoc';
import { AccessibilityDoc } from '@/components/doc/metergroup/accessibilitydoc';
import { Wireframe } from '@/components/doc/metergroup/pt/wireframe';
import { StyledDoc } from '@/components/doc/metergroup/theming/styleddoc';

const MessagesDemo = () => {
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
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'icon',
            label: 'Icon',
            component: IconDoc
        },
        {
            id: 'label',
            label: 'Label',
            component: LabelDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'min-max',
            label: 'Min-Max',
            component: MinMaxDoc
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
            id: 'pt.metergroup.options',
            label: 'MeterGroup PT Options',
            component: DocApiTable
        }
    ];

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        }
    ];

    return <DocComponent title="React MeterGroup Component" header="MeterGroup" description="MeterGroup displays scalar measurements within a known range." componentDocs={docs} apiDocs={['MeterGroup']} themingDocs={themingDocs} ptDocs={ptDocs} />;
};

export default MessagesDemo;

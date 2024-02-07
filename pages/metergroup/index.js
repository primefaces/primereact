import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/metergroup/basicdoc';
import { IconDoc } from '@/components/doc/metergroup/icondoc';
import { ImportDoc } from '@/components/doc/metergroup/importdoc';
import { MultipleDoc } from '@/components/doc/metergroup/multipledoc';
import { LabelDoc } from '@/components/doc/metergroup/labeldoc';
import { VerticalDoc } from '@/components/doc/metergroup/verticaldoc';
import { MinMaxDoc } from '@/components/doc/metergroup/minmaxdoc';

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
        }
    ];

    return <DocComponent title="React MeterGroup Component" header="MeterGroup" description="MeterGroup displays scalar measurements within a known range." componentDocs={docs} apiDocs={['MeterGroup']} />;
};

export default MessagesDemo;

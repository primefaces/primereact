import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/metergroup/basicdoc';

const MessagesDemo = () => {
    const docs = [
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        }
    ];

    return <DocComponent title="React MeterGroup Component" header="MeterGroup" description="Messages component is used to display inline messages." componentDocs={docs} apiDocs={['MeterGroup']} />;
};

export default MessagesDemo;

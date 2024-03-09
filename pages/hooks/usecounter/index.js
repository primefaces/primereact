import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/hooks/usecounter/basicdoc';
import { ImportDoc } from '@/components/doc/hooks/usecounter/importdoc';
import { OptionsDoc } from '@/components/doc/hooks/usecounter/optionsdoc';

const CounterDemo = () => {
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
            id: 'options',
            label: 'Options',
            component: OptionsDoc
        }
    ];

    return <DocComponent title="React useCounter Hook" header="useCounter" description="Manages a counter state." componentDocs={docs} apiDocs={['hooks.functions.useCounter']} />;
};

export default CounterDemo;

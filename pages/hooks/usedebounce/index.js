import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/hooks/usedebounce/basicdoc';
import { ImportDoc } from '@/components/doc/hooks/usedebounce/importdoc';

const DebounceDemo = () => {
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
        }
    ];

    return <DocComponent title="React useDebounce Hook" header="useDebounce" description="Delays rapidly changing values to optimize performance." componentDocs={docs} apiDocs={['hooks.functions.useDebounce']} />;
};

export default DebounceDemo;

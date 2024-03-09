import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/hooks/usetimeout/basicdoc';
import { ImportDoc } from '@/components/doc/hooks/usetimeout/importdoc';

const TimeoutDemo = () => {
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

    return <DocComponent title="React useTimeout Hook" header="useTimeout" description="Executed a given callback after a certain delay." componentDocs={docs} apiDocs={['hooks.functions.useTimeout']} />;
};

export default TimeoutDemo;

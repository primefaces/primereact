import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/hooks/useprevious/basicdoc';
import { ImportDoc } from '@/components/doc/hooks/useprevious/importdoc';

const PreviousDemo = () => {
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

    return <DocComponent title="React usePrevious Hook" header="usePrevious" description="Allows access to the previous value in state." componentDocs={docs} apiDocs={['hooks.functions.usePrevious']} />;
};

export default PreviousDemo;

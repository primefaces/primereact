import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/hooks/useinterval/basicdoc';
import { ImportDoc } from '@/components/doc/hooks/useinterval/importdoc';

const IntervalDemo = () => {
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

    return <DocComponent title="React useInterval Hook" header="useInterval" description="Executes a given callback at specified intervals." componentDocs={docs} apiDocs={['hooks.functions.useInterval']} />;
};

export default IntervalDemo;

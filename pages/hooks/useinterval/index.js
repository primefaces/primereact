import { DocComponent } from '../../../components/doc/common/doccomponent';
import { BasicDoc } from '../../../components/doc/hooks/useInterval/basicdoc';
import { ImportDoc } from '../../../components/doc/hooks/useInterval/importdoc';

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

    return <DocComponent title="React useInterval Hook" header="useInterval" description="" componentDocs={docs} apiDocs={[{ name: 'useInterval', pathname: '/functions/hooks.useInterval.html' }]} />;
};

export default IntervalDemo;

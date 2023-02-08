import { DocComponent } from '../../../components/doc/common/doccomponent';
import { BasicDoc } from '../../../components/doc/hooks/usedebounce/basicdoc';
import { ImportDoc } from '../../../components/doc/hooks/usedebounce/importdoc';

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
        }
    ];

    return <DocComponent title="React useDebounce Hook" header="useDebounce" description="" componentDocs={docs} apiDocs={[{ name: 'useDebounce', pathname: '/functions/hooks.useDebounce.html' }]} />;
};

export default CounterDemo;

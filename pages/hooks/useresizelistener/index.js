import { DocComponent } from '../../../components/doc/common/doccomponent';
import { BasicDoc } from '../../../components/doc/hooks/useresizelistener/basicdoc';
import { ImportDoc } from '../../../components/doc/hooks/useresizelistener/importdoc';

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

    return <DocComponent title="React useResizeListener Hook" header="useResizeListener" description="" componentDocs={docs} apiDocs={[{ name: 'useResizeListener', pathname: '/functions/hooks.useResizeListener.html' }]} />;
};

export default CounterDemo;

import { DocComponent } from '../../../components/doc/common/doccomponent';
import { BasicDoc } from '../../../components/doc/hooks/useoverlaylistener/basicdoc';
import { ImportDoc } from '../../../components/doc/hooks/useoverlaylistener/importdoc';

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

    return <DocComponent title="React useOverlayListener Hook" header="useOverlayListener" description="" componentDocs={docs} apiDocs={[{ name: 'useOverlayListener', pathname: '/functions/hooks.useOverlayListener.html' }]} />;
};

export default CounterDemo;

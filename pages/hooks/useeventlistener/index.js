import { DocComponent } from '../../../components/doc/common/doccomponent';
import { BasicDoc } from '../../../components/doc/hooks/useeventlistener/basicdoc';
import { DefaultDoc } from '../../../components/doc/hooks/useeventlistener/defaultdoc';
import { ImportDoc } from '../../../components/doc/hooks/useeventlistener/importdoc';

const EventListenerDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'default',
            label: 'Default',
            component: DefaultDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        }
    ];

    return <DocComponent title="React useEventListener Hook" header="useEventListener" description="" componentDocs={docs} apiDocs={[{ name: 'useEventListener', pathname: '/functions/hooks.useEventListener.html' }]} />;
};

export default EventListenerDemo;

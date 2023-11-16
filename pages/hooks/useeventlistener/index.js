import { DocComponent } from '@/components/doc/common/doccomponent';
import { DocumentDoc } from '@/components/doc/hooks/useeventlistener/documentdoc';
import { ElementDoc } from '@/components/doc/hooks/useeventlistener/elementdoc';
import { ImportDoc } from '@/components/doc/hooks/useeventlistener/importdoc';

const EventListenerDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'document',
            label: 'Document',
            component: DocumentDoc
        },
        {
            id: 'element',
            label: 'Element',
            component: ElementDoc
        }
    ];

    return <DocComponent title="React useEventListener Hook" header="useEventListener" description="Manages event bindings of an element programmatically." componentDocs={docs} apiDocs={['hooks.functions.useEventListener']} />;
};

export default EventListenerDemo;

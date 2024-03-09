import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/hooks/useoverlayscrolllistener/basicdoc';
import { ImportDoc } from '@/components/doc/hooks/useoverlayscrolllistener/importdoc';

const OverlayScrollListenerDemo = () => {
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

    return <DocComponent title="React useOverlayScrollListener Hook" header="useOverlayScrollListener" description="Monitors scroll event of a parent element." componentDocs={docs} apiDocs={['hooks.functions.useOverlayScrollListener']} />;
};

export default OverlayScrollListenerDemo;

import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/hooks/useresizelistener/basicdoc';
import { ImportDoc } from '@/components/doc/hooks/useresizelistener/importdoc';

const ResizeListenerDemo = () => {
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

    return <DocComponent title="React useResizeListener Hook" header="useResizeListener" description="Tracks window resize event." componentDocs={docs} apiDocs={['hooks.functions.useResizeListener']} />;
};

export default ResizeListenerDemo;

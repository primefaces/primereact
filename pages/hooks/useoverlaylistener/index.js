import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/hooks/useoverlaylistener/basicdoc';
import { ImportDoc } from '@/components/doc/hooks/useoverlaylistener/importdoc';

const OverlayListenerDemo = () => {
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

    return <DocComponent title="React useOverlayListener Hook" header="useOverlayListener" description="Composition of commonly used overlay hooks." componentDocs={docs} apiDocs={['hooks.functions.useOverlayListener']} />;
};

export default OverlayListenerDemo;

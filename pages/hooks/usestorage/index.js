import { DocComponent } from '@/components/doc/common/doccomponent';
import { ImportDoc } from '@/components/doc/hooks/usestorage/importdoc';
import { LocalDoc } from '@/components/doc/hooks/usestorage/localdoc';
import { SessionDoc } from '@/components/doc/hooks/usestorage/sessiondoc';

const StorageDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'local',
            label: 'Local',
            component: LocalDoc
        },
        {
            id: 'session',
            label: 'Session',
            component: SessionDoc
        }
    ];

    return <DocComponent title="React useStorage Hook" header="useStorage" description="Syncs state to local or session storage." componentDocs={docs} apiDocs={['hooks.functions.useStorage']} />;
};

export default StorageDemo;

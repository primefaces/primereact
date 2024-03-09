import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/hooks/usefavicon/basicdoc';
import { ImportDoc } from '@/components/doc/hooks/usefavicon/importdoc';

const FaviconDemo = () => {
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

    return <DocComponent title="React useFavicon Hook" header="useFavicon" description="Controls the favicon of the page dynamically." componentDocs={docs} apiDocs={['hooks.functions.useFavicon']} />;
};

export default FaviconDemo;

import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/hooks/useclickoutside/basicdoc';
import { ImportDoc } from '@/components/doc/hooks/useclickoutside/importdoc';

const ClickOutsideDemo = () => {
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

    return <DocComponent title="React useClickOutside Hook" header="useClickOutside" description="Detects outside clicks of a specific element." componentDocs={docs} apiDocs={['hooks.functions.useClickOutside']} />;
};

export default ClickOutsideDemo;

import { DocComponent } from '@/components/doc/common/doccomponent';
import { DocumentDoc } from '@/components/doc/hooks/usemouse/documentdoc';
import { ElementDoc } from '@/components/doc/hooks/usemouse/elementdoc';
import { ImportDoc } from '@/components/doc/hooks/usemouse/importdoc';
import { ResetDoc } from '@/components/doc/hooks/usemouse/resetdoc';

const MouseDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'element',
            label: 'Element',
            component: ElementDoc
        },
        {
            id: 'reset',
            label: 'Reset',
            component: ResetDoc
        },
        {
            id: 'document',
            label: 'Document',
            component: DocumentDoc
        }
    ];

    return <DocComponent title="React useMouse Hook" header="useMouse" description="Tracks mouse position on an element or document body." componentDocs={docs} apiDocs={['hooks.functions.useMouse']} />;
};

export default MouseDemo;

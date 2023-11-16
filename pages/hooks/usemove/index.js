import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/hooks/usemove/basicdoc';
import { HorizontalDoc } from '@/components/doc/hooks/usemove/horizontaldoc';
import { ImportDoc } from '@/components/doc/hooks/usemove/importdoc';
import { VerticalDoc } from '@/components/doc/hooks/usemove/verticaldoc';

const MoveDemo = () => {
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
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        }
    ];

    return <DocComponent title="React useMove Hook" header="useMove" description="Handles move interactions via touch and mouse events." componentDocs={docs} apiDocs={['hooks.functions.useMove']} />;
};

export default MoveDemo;

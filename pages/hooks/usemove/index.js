import { DocComponent } from '../../../components/doc/common/doccomponent';
import { BasicDoc } from '../../../components/doc/hooks/usemove/basicdoc';
import { HorizontalDoc } from '../../../components/doc/hooks/usemove/horizontaldoc';
import { ImportDoc } from '../../../components/doc/hooks/usemove/importdoc';
import { ResetDoc } from '../../../components/doc/hooks/usemove/resetdoc';
import { VerticalDoc } from '../../../components/doc/hooks/usemove/verticaldoc';

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
        },
        {
            id: 'reset',
            label: 'Reset',
            component: ResetDoc
        }
    ];

    return <DocComponent title="React useMove Hook" header="useMove" description="" componentDocs={docs} apiDocs={[{ name: 'useMove', pathname: '/functions/hooks.useMove.html' }]} />;
};

export default MoveDemo;

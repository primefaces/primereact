import { AccessibilityDoc } from '../../components/doc/card/accessibilitydoc';
import { AdvancedDoc } from '../../components/doc/card/advanceddoc';
import { BasicDoc } from '../../components/doc/card/basicdoc';
import { ImportDoc } from '../../components/doc/card/importdoc';
import { StyleDoc } from '../../components/doc/card/styledoc';
import { DocComponent } from '../../components/doc/common/doccomponent';

const CardDemo = () => {
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
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    return <DocComponent title="React Card Component" header="Card" description="Card is a flexible container component." componentDocs={docs} apiDocs={['Card']} />;
};

export default CardDemo;

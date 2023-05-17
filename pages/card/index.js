import { AccessibilityDoc } from '../../components/doc/card/accessibilitydoc';
import { AdvancedDoc } from '../../components/doc/card/advanceddoc';
import { BasicDoc } from '../../components/doc/card/basicdoc';
import { ImportDoc } from '../../components/doc/card/importdoc';
import { PTDoc } from '../../components/doc/card/pt/ptdoc';
import { Wireframe } from '../../components/doc/card/pt/wireframe';
import { StyleDoc } from '../../components/doc/card/styledoc';
import DocApiTable from '../../components/doc/common/docapitable';
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

    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.card.options',
            label: 'Card PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Card Component" header="Card" description="Card is a flexible container component." componentDocs={docs} apiDocs={['Card']} ptDocs={ptDocs} />;
};

export default CardDemo;

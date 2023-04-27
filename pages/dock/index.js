import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/dock/accessibilitydoc';
import { AdvancedDoc } from '../../components/doc/dock/advanceddoc';
import { BasicDoc } from '../../components/doc/dock/basicdoc';
import { ImportDoc } from '../../components/doc/dock/importdoc';
import { StyleDoc } from '../../components/doc/dock/styledoc';

const DockDemo = () => {
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
            id: 'advance',
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

    return <DocComponent title="React Dock Component" header="Dock" description="Dock is a navigation component consisting of menuitems." componentDocs={docs} apiDocs={['Dock', 'MenuItem']} className="dock-demo" />;
};

export default DockDemo;

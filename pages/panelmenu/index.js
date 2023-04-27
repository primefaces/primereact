import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/panelmenu/accessibilitydoc';
import { BasicDoc } from '../../components/doc/panelmenu/basicdoc';
import { ImportDoc } from '../../components/doc/panelmenu/importdoc';
import { MultipleDoc } from '../../components/doc/panelmenu/multipledoc';
import { StyleDoc } from '../../components/doc/panelmenu/styledoc';

const PanelMenuDemo = () => {
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
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
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

    return <DocComponent title="React PanelMenu Component" header="PanelMenu" description="PanelMenu is a hybrid of accordion-tree components." componentDocs={docs} apiDocs={['PanelMenu', 'MenuItem']} />;
};

export default PanelMenuDemo;

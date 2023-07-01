import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/panelmenu/pt/ptdoc';
import { Wireframe } from '../../components/doc/panelmenu/pt/wireframe';
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
    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.panelmenu.options',
            label: 'PanelMenu PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React PanelMenu Component" header="PanelMenu" description="PanelMenu is a hybrid of accordion-tree components." componentDocs={docs} apiDocs={['PanelMenu', 'MenuItem']} ptDocs={ptDocs} />;
};

export default PanelMenuDemo;

import { Wireframe } from '../../components/doc/tabmenu/pt/wireframe';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/tabmenu/accessibilitydoc';
import { BasicDoc } from '../../components/doc/tabmenu/basicdoc';
import { ControlledDoc } from '../../components/doc/tabmenu/controlleddoc';
import { ImportDoc } from '../../components/doc/tabmenu/importdoc';
import { PTDoc } from '../../components/doc/tabmenu/pt/ptdoc';
import { StyleDoc } from '../../components/doc/tabmenu/styledoc';
import DocApiTable from '../../components/doc/common/docapitable';

const TabMenuDemo = () => {
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
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDoc
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
            id: 'pt.tabmenu.options',
            label: 'TabMenu PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React TabMenu Component" header="TabMenu" description="TabMenu is a navigation component that displays menu items as tab headers." componentDocs={docs} apiDocs={['TabMenu', 'MenuItem']} ptDocs={ptDocs} />;
};

export default TabMenuDemo;

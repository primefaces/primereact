import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/tieredmenu/pt/ptdoc';
import { Wireframe } from '../../components/doc/tieredmenu/pt/wireframe';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/tieredmenu/accessibilitydoc';
import { BasicDoc } from '../../components/doc/tieredmenu/basicdoc';
import { ImportDoc } from '../../components/doc/tieredmenu/importdoc';
import { PopupDoc } from '../../components/doc/tieredmenu/popupdoc';
import { StyleDoc } from '../../components/doc/tieredmenu/styledoc';

const TieredMenuDemo = () => {
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
            id: 'popup',
            label: 'Popup',
            component: PopupDoc
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
            id: 'pt.tieredmenu.options',
            label: 'TieredMenu PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React TieredMenu Component" header="TieredMenu" description="TieredMenu displays submenus in nested overlays." componentDocs={docs} apiDocs={['TieredMenu', 'MenuItem']} ptDocs={ptDocs} />;
};

export default TieredMenuDemo;

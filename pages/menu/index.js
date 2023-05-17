import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/menu/pt/ptdoc';
import { Wireframe } from '../../components/doc/menu/pt/wireframe';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/menu/accessibilitydoc';
import { BasicDoc } from '../../components/doc/menu/basicdoc';
import { GroupDoc } from '../../components/doc/menu/groupdoc';
import { ImportDoc } from '../../components/doc/menu/importdoc';
import { PopupDoc } from '../../components/doc/menu/popupdoc';
import { StyleDoc } from '../../components/doc/menu/styledoc';
import { TemplateDoc } from '../../components/doc/menu/templatedoc';

const MenuDemo = () => {
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
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'popup',
            label: 'Popup',
            component: PopupDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
            id: 'pt.menu.options',
            label: 'Menu PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Menu Component" header="Menu" description="Menu is a navigation/command component that supports dynamic and static positioning." componentDocs={docs} apiDocs={['Menu', 'MenuItem']} ptDocs={ptDocs} />;
};

export default MenuDemo;

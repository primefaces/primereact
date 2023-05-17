import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/menubar/pt/ptdoc';
import { Wireframe } from '../../components/doc/menubar/pt/wireframe';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/menubar/accessibilitydoc';
import { BasicDoc } from '../../components/doc/menubar/basicdoc';
import { ImportDoc } from '../../components/doc/menubar/importdoc';
import { StyleDoc } from '../../components/doc/menubar/styledoc';
import { TemplateDoc } from '../../components/doc/menubar/templatedoc';

const MenubarDemo = () => {
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
            id: 'pt.menubar.options',
            label: 'Menubar PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Navbar Component" header="Menubar" description="Menubar also known as Navbar, is a horizontal menu component" componentDocs={docs} apiDocs={['Menubar', 'MenuItem']} ptDocs={ptDocs} />;
};

export default MenubarDemo;

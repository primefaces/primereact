import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/megamenu/accessibilitydoc';
import { BasicDoc } from '../../components/doc/megamenu/basicdoc';
import { ImportDoc } from '../../components/doc/megamenu/importdoc';
import { PTDoc } from '../../components/doc/megamenu/pt/ptdoc';
import { Wireframe } from '../../components/doc/megamenu/pt/wireframe';
import { StyleDoc } from '../../components/doc/megamenu/styledoc';
import { TemplateDoc } from '../../components/doc/megamenu/templatedoc';
import { VerticalDoc } from '../../components/doc/megamenu/verticaldoc';

const MegaMenuDemo = () => {
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
            id: 'Vertical',
            label: 'Vertical',
            component: VerticalDoc
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
            id: 'pt.megamenu.options',
            label: 'MegaMenu PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React MegaMenu Component" header="MegaMenu" description="MegaMenu is navigation component that displays submenus together." componentDocs={docs} apiDocs={['MegaMenu', 'MenuItem']} ptDocs={ptDocs} />;
};

export default MegaMenuDemo;

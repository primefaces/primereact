import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { Wireframe } from '../../components/doc/scrollpanel/pt/wireframe';
import { AccessibilityDoc } from '../../components/doc/scrollpanel/accessibilitydoc';
import { BasicDoc } from '../../components/doc/scrollpanel/basicdoc';
import { CustomDemo } from '../../components/doc/scrollpanel/customdoc';
import { ImportDoc } from '../../components/doc/scrollpanel/importdoc';
import { StyleDoc } from '../../components/doc/scrollpanel/styledoc';
import { PTDoc } from '../../components/doc/scrollpanel/pt/ptdoc';

const ScrollPanelDemo = () => {
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
            id: 'custom',
            label: 'Custom',
            component: CustomDemo
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
            id: 'pt.scrollpanel.options',
            label: 'ScrollPanel PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return (
        <DocComponent
            title="React ScrollPanel Component"
            header="ScrollPanel"
            description="ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar."
            componentDocs={docs}
            apiDocs={['ScrollPanel']}
            ptDocs={ptDocs}
        />
    );
};

export default ScrollPanelDemo;

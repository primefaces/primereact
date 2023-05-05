import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { Wireframe } from '../../components/doc/toolbar/pt/wireframe';
import { AccessibilityDoc } from '../../components/doc/toolbar/accessibilitydoc';
import { BasicDoc } from '../../components/doc/toolbar/basicdoc';
import { ImportDoc } from '../../components/doc/toolbar/importdoc';
import { StyleDoc } from '../../components/doc/toolbar/styledoc';
import { PTDoc } from '../../components/doc/toolbar/pt/ptdoc';

const ToolbarDemo = () => {
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
            id: 'pt.toolbar.options',
            label: 'Toolbar PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Toolbar Component" header="Toolbar" description="Toolbar is a grouping component for buttons and other content." componentDocs={docs} apiDocs={['Toolbar']} ptDocs={ptDocs} />;
};

export default ToolbarDemo;

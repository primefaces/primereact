import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/toolbar/accessibilitydoc';
import { BasicDoc } from '../../components/doc/toolbar/basicdoc';
import { ImportDoc } from '../../components/doc/toolbar/importdoc';
import { StyleDoc } from '../../components/doc/toolbar/styledoc';

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

    return <DocComponent title="React Toolbar Component" header="Toolbar" description="Toolbar is a grouping component for buttons and other content." componentDocs={docs} apiDocs={[{ name: 'Toolbar', pathname: '/modules/toolbar.html' }]} />;
};

export default ToolbarDemo;

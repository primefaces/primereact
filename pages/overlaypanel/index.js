import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/overlaypanel/accessibilitydoc';
import { BasicDoc } from '../../components/doc/overlaypanel/basicdoc';
import { DataTableDoc } from '../../components/doc/overlaypanel/datatabledoc';
import { ImportDoc } from '../../components/doc/overlaypanel/importdoc';
import { StyleDoc } from '../../components/doc/overlaypanel/styledoc';

const OverlayPanelDemo = () => {
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
            id: 'dataTable',
            label: 'DataTable',
            component: DataTableDoc
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

    return <DocComponent title="React Popover Component" header="OverlayPanel" description="OverlayPanel, also known as Popover, is a container component that can overlay other components on page." componentDocs={docs} apiDocs={['OverlayPanel']} />;
};

export default OverlayPanelDemo;

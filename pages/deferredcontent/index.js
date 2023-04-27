import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/deferredcontent/accessibilitydoc';
import { BasicDoc } from '../../components/doc/deferredcontent/basicdoc';
import { DataTableDoc } from '../../components/doc/deferredcontent/datatabledoc';
import { ImportDoc } from '../../components/doc/deferredcontent/importdoc';
import { StyleDoc } from '../../components/doc/deferredcontent/styledoc';

const DeferredContentDemo = () => {
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
            id: 'datatable',
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

    return (
        <DocComponent
            title="React Deferred Content Component"
            header="DeferredContent"
            description="DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll."
            componentDocs={docs}
            apiDocs={['DeferredContent']}
        />
    );
};

export default DeferredContentDemo;

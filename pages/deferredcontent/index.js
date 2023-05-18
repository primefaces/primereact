import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/deferredcontent/accessibilitydoc';
import { BasicDoc } from '../../components/doc/deferredcontent/basicdoc';
import { DataTableDoc } from '../../components/doc/deferredcontent/datatabledoc';
import { ImportDoc } from '../../components/doc/deferredcontent/importdoc';
import { Wireframe } from '../../components/doc/deferredcontent/pt/wireframe';
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

    const ptDocs = [
        {
            id: 'pt.image',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.deferredcontent.options',
            label: 'DeferredContent PT Options',
            component: DocApiTable
        }
    ];

    return (
        <DocComponent
            title="React Deferred Content Component"
            header="DeferredContent"
            description="DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll."
            componentDocs={docs}
            apiDocs={['DeferredContent']}
            ptDocs={ptDocs}
            ptDescription=""
        />
    );
};

export default DeferredContentDemo;

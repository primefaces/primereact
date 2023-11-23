import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/deferredcontent/accessibilitydoc';
import { BasicDoc } from '@/components/doc/deferredcontent/basicdoc';
import { DataTableDoc } from '@/components/doc/deferredcontent/datatabledoc';
import { ImportDoc } from '@/components/doc/deferredcontent/importdoc';
import { Wireframe } from '@/components/doc/deferredcontent/pt/wireframe';
import { StyledDoc } from '@/components/doc/deferredcontent/theming/styleddoc';

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

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
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
            themingDocs={themingDocs}
        />
    );
};

export default DeferredContentDemo;

import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/datascroller/accessibilitydoc';
import { BasicDoc } from '../../components/doc/datascroller/basicdoc';
import { ImportDoc } from '../../components/doc/datascroller/importdoc';
import { InlineDataScrollerDoc } from '../../components/doc/datascroller/inlinedoc';
import { LoaderDataScrollerDoc } from '../../components/doc/datascroller/loaderdoc';
import { PTDoc } from '../../components/doc/datascroller/pt/ptdoc';
import { StyleDoc } from '../../components/doc/datascroller/styledoc';
import { Wireframe } from '../../components/doc/timeline/pt/wireframe';

const DataScrollerDemo = () => {
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
            id: 'inline',
            label: 'Inline',
            component: InlineDataScrollerDoc
        },
        {
            id: 'loader',
            label: 'Loader',
            component: LoaderDataScrollerDoc
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
            id: 'pt.datascroller.options',
            label: 'DataScroller PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React DataScroller Component" header="DataScroller" description="DataScroller displays data with on demand loading using scroll." componentDocs={docs} apiDocs={['DataScroller']} ptDocs={ptDocs} />;
};

export default DataScrollerDemo;

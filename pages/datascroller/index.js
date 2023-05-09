import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/datascroller/accessibilitydoc';
import { BasicDoc } from '../../components/doc/datascroller/basicdoc';
import { ImportDoc } from '../../components/doc/datascroller/importdoc';
import { InlineDataScrollerDoc } from '../../components/doc/datascroller/inlinedoc';
import { LoaderDataScrollerDoc } from '../../components/doc/datascroller/loaderdoc';
import { StyleDoc } from '../../components/doc/datascroller/styledoc';

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

    return <DocComponent title="React DataScroller Component" header="DataScroller" description="DataScroller displays data with on demand loading using scroll." componentDocs={docs} apiDocs={['DataScroller']} />;
};

export default DataScrollerDemo;

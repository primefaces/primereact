import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/dataview/accessibilitydoc';
import { BasicDoc } from '../../components/doc/dataview/basicdoc';
import { ImportDoc } from '../../components/doc/dataview/importdoc';
import { LazyDataViewDoc } from '../../components/doc/dataview/lazydoc';
import { StyleDoc } from '../../components/doc/dataview/styledoc';

const DataViewDemo = () => {
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
            id: 'lazy',
            label: 'Lazy',
            component: LazyDataViewDoc
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
            title="React DataView Component"
            header="DataView"
            description="DataView displays data in grid or list layout with pagination and sorting features."
            componentDocs={docs}
            apiDocs={[{ name: 'DataView', pathname: '/modules/dataview.html' }]}
            className="dataview-demo"
        />
    );
};

export default DataViewDemo;

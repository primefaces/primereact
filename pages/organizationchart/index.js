import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/organizationchart/accessibilitydoc';
import { AdvancedDoc } from '../../components/doc/organizationchart/advanceddoc';
import { BasicDoc } from '../../components/doc/organizationchart/basicdoc';
import { ImportDoc } from '../../components/doc/organizationchart/importdoc';
import { StyleDoc } from '../../components/doc/organizationchart/styledoc';

const OrganizationChartDemo = () => {
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
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDoc
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
            title="React OrganizationChart Component"
            header="OrganizationChart"
            description="OrganizationChart visualizes hierarchical organization data."
            componentDocs={docs}
            apiDocs={[{ name: 'OrganizationChart', pathname: '/modules/organizationchart.html' }]}
        />
    );
};

export default OrganizationChartDemo;

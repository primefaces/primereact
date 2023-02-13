import { AccessibilityDoc } from '../../components/doc/breadcrumb/accessibilitydoc';
import { BasicDoc } from '../../components/doc/breadcrumb/basicdoc';
import { ImportDoc } from '../../components/doc/breadcrumb/importdoc';
import { StyleDoc } from '../../components/doc/breadcrumb/styledoc';
import { TemplateDoc } from '../../components/doc/breadcrumb/templatedoc';
import { DocComponent } from '../../components/doc/common/doccomponent';

const BreadCrumbDemo = () => {
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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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

    return <DocComponent title="React BreadCrumb Component" header="BreadCrumb" description="Breadcrumb provides contextual information about page hierarchy." componentDocs={docs} apiDocs={['Breadcrumb']} />;
};

export default BreadCrumbDemo;

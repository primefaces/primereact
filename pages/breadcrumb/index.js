import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/breadcrumb/pt/ptdoc';
import { Wireframe } from '../../components/doc/breadcrumb/pt/wireframe';
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

    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.breadcrumb.options',
            label: 'BreadCrumb PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React BreadCrumb Component" header="BreadCrumb" description="Breadcrumb provides contextual information about page hierarchy." componentDocs={docs} apiDocs={['Breadcrumb', 'MenuItem']} ptDocs={ptDocs} />;
};

export default BreadCrumbDemo;

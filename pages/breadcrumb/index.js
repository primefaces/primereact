import { AccessibilityDoc } from '@/components/doc/breadcrumb/accessibilitydoc';
import { BasicDoc } from '@/components/doc/breadcrumb/basicdoc';
import { ImportDoc } from '@/components/doc/breadcrumb/importdoc';
import { PTDoc } from '@/components/doc/breadcrumb/pt/ptdoc';
import { Wireframe } from '@/components/doc/breadcrumb/pt/wireframe';
import { TemplateDoc } from '@/components/doc/breadcrumb/templatedoc';
import { StyledDoc } from '@/components/doc/breadcrumb/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/breadcrumb/theming/tailwinddoc';
import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { RouterDoc } from '@/components/doc/breadcrumb/routerdoc';

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
            id: 'router',
            label: 'Router',
            component: RouterDoc
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

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        },
        {
            id: 'unstyled',
            label: 'Unstyled',
            description: 'Theming is implemented with the pass through properties in unstyled mode.',
            children: [
                {
                    id: 'tailwind',
                    label: 'Tailwind',
                    component: TailwindDoc
                }
            ]
        }
    ];

    return (
        <DocComponent
            title="React BreadCrumb Component"
            header="BreadCrumb"
            description="Breadcrumb provides contextual information about page hierarchy."
            componentDocs={docs}
            apiDocs={['Breadcrumb', 'MenuItem']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default BreadCrumbDemo;

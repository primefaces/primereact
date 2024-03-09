import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/paginator/accessibilitydoc';
import { BasicDoc } from '@/components/doc/paginator/basicdoc';
import { ImagesDoc } from '@/components/doc/paginator/imagesdoc';
import { ImportDoc } from '@/components/doc/paginator/importdoc';
import { LayoutDoc } from '@/components/doc/paginator/layoutdoc';
import { PTDoc } from '@/components/doc/paginator/pt/ptdoc';
import { Wireframe } from '@/components/doc/paginator/pt/wireframe';
import { TemplateDoc } from '@/components/doc/paginator/templatedoc';
import { StyledDoc } from '@/components/doc/paginator/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/paginator/theming/tailwinddoc';

const PaginatorDemo = () => {
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
            id: 'layout',
            label: 'Layout',
            component: LayoutDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'images',
            label: 'Images',
            component: ImagesDoc
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
            id: 'pt.paginator.options',
            label: 'Paginator PT Options',
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
            title="React Paginator Component"
            header="Paginator"
            description="Paginator displays data in paged format and provides navigation between pages."
            componentDocs={docs}
            apiDocs={['Paginator']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default PaginatorDemo;

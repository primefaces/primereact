import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/skeleton/accessibilitydoc';
import { CardDoc } from '@/components/doc/skeleton/carddoc';
import { DataTableDoc } from '@/components/doc/skeleton/datatabledoc';
import { ImportDoc } from '@/components/doc/skeleton/importdoc';
import { ListDoc } from '@/components/doc/skeleton/listdoc';
import { PTDoc } from '@/components/doc/skeleton/pt/ptdoc';
import { Wireframe } from '@/components/doc/skeleton/pt/wireframe';
import { ShapesDoc } from '@/components/doc/skeleton/shapesdoc';
import { StyledDoc } from '@/components/doc/skeleton/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/skeleton/theming/tailwinddoc';

const SkeletonDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'shapes',
            label: 'Shapes',
            component: ShapesDoc
        },
        {
            id: 'card',
            label: 'Card',
            component: CardDoc
        },
        {
            id: 'list',
            label: 'List',
            component: ListDoc
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
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.skeleton.options',
            label: 'Skeleton PT Options',
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

    return <DocComponent title="React Skeleton Component" header="Skeleton" description="Skeleton is a placeholder to display instead of the actual content." componentDocs={docs} apiDocs={['Skeleton']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default SkeletonDemo;

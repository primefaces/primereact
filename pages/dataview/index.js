import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/dataview/accessibilitydoc';
import { BasicDoc } from '@/components/doc/dataview/basicdoc';
import { ImportDoc } from '@/components/doc/dataview/importdoc';
import { LayoutDoc } from '@/components/doc/dataview/layoutdoc';
import { LoadingDoc } from '@/components/doc/dataview/loadingdoc';
import { PaginationDoc } from '@/components/doc/dataview/paginationdoc';
import { PTDoc } from '@/components/doc/dataview/pt/ptdoc';
import { Wireframe } from '@/components/doc/dataview/pt/wireframe';
import { SortingDoc } from '@/components/doc/dataview/sortingdoc';
import { StyledDoc } from '@/components/doc/dataview/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/dataview/theming/tailwinddoc';

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
            id: 'pagination',
            label: 'Pagination',
            component: PaginationDoc
        },
        {
            id: 'sorting',
            label: 'Sorting',
            component: SortingDoc
        },
        {
            id: 'layout',
            label: 'Layout',
            component: LayoutDoc
        },
        {
            id: 'loading',
            label: 'Loading',
            component: LoadingDoc
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
            id: 'pt.dataview.options',
            label: 'DataView PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.dataviewlayoutoptions.options',
            label: 'DataViewLayoutOptions PT Options',
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
            title="React DataView Component"
            header="DataView"
            description="DataView displays data in grid or list layout with pagination and sorting features."
            componentDocs={docs}
            apiDocs={['DataView']}
            className="dataview-demo"
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default DataViewDemo;

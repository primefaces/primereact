import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/orderlist/accessibilitydoc';
import { BasicDoc } from '@/components/doc/orderlist/basicdoc';
import { DragDropDoc } from '@/components/doc/orderlist/dragdropdoc';
import { FilterDoc } from '@/components/doc/orderlist/filterdoc';
import { ImportDoc } from '@/components/doc/orderlist/importdoc';
import { PTDoc } from '@/components/doc/orderlist/pt/ptdoc';
import { Wireframe } from '@/components/doc/orderlist/pt/wireframe';
import { StyledDoc } from '@/components/doc/orderlist/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/orderlist/theming/tailwinddoc';

const OrderListDemo = () => {
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
            id: 'filter',
            label: 'Filter',
            component: FilterDoc
        },
        {
            id: 'dragdrop',
            label: 'DragDrop',
            component: DragDropDoc
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
            id: 'pt.orderlist.options',
            label: 'OrderList PT Options',
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

    return <DocComponent title="React OrderList Component" header="OrderList" description="OrderList is used to sort a collection." componentDocs={docs} apiDocs={['OrderList']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default OrderListDemo;

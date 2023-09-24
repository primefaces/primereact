import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/orderlist/pt/ptdoc';
import { Wireframe } from '../../components/doc/orderlist/pt/wireframe';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/orderlist/accessibilitydoc';
import { BasicDoc } from '../../components/doc/orderlist/basicdoc';
import { DragDropDoc } from '../../components/doc/orderlist/dragdropdoc';
import { FilterDoc } from '../../components/doc/orderlist/filterdoc';
import { ImportDoc } from '../../components/doc/orderlist/importdoc';
import { StyleDoc } from '../../components/doc/orderlist/styledoc';

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

    return <DocComponent title="React OrderList Component" header="OrderList" description="OrderList is used to sort a collection." componentDocs={docs} apiDocs={['OrderList']} ptDocs={ptDocs} />;
};

export default OrderListDemo;

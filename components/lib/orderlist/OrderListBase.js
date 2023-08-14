import { ComponentBase } from '../componentbase/ComponentBase';

export const OrderListBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'OrderList',
        id: null,
        value: null,
        header: null,
        style: null,
        className: null,
        listStyle: null,
        dragdrop: false,
        tabIndex: 0,
        filterIcon: null,
        moveUpIcon: null,
        moveTopIcon: null,
        moveDownIcon: null,
        moveBottomIcon: null,
        dataKey: null,
        breakpoint: '960px',
        onChange: null,
        itemTemplate: null,
        filter: false,
        filterBy: null,
        filterMatchMode: 'contains',
        filterLocale: undefined,
        filterPlaceholder: null,
        filterTemplate: null,
        onFilter: null,
        children: undefined
    }
});

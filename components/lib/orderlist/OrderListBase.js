import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: 'p-orderlist p-component',
    controls: 'p-orderlist-controls',
    droppoint: 'p-orderlist-droppoint',
    header: 'p-orderlist-header',
    list: 'p-orderlist-list',
    icon: 'p-orderlist-filter',
    filter: 'p-orderlist-filter',
    filterInput: 'p-orderlist-filter-input p-inputtext p-component',
    filterIcon: 'p-orderlist-filter-icon',
    filterContainer: 'p-orderlist-filter-container',
    container: 'p-orderlist-list-container',
    item: ({ selected, focused }) => classNames('p-orderlist-item', { 'p-highlight': selected, 'p-focus': focused })
};

const styles = `
@layer primereact {
    .p-orderlist {
        display: flex;
    }

    .p-orderlist-controls {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .p-orderlist-list-container {
        flex: 1 1 auto;
    }

    .p-orderlist-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: auto;
        min-height: 12rem;
        max-height: 24rem;
    }

    .p-orderlist-item {
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .p-orderlist-filter {
        position: relative;
    }

    .p-orderlist-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }

    .p-orderlist-filter-input {
        width: 100%;
    }

    .p-orderlist.p-state-disabled .p-orderlist-item,
    .p-orderlist.p-state-disabled .p-button {
        cursor: default;
    }

    .p-orderlist.p-state-disabled .p-orderlist-list {
        overflow: hidden;
    }

    .p-orderlist .p-orderlist-droppoint {
        height: 0.5rem;
    }

    .p-orderlist .p-orderlist-droppoint.p-orderlist-droppoint-highlight {
        background: var(--primary-color);
    }
}
`;

export const OrderListBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'OrderList',
        id: null,
        ariaLabel: null,
        ariaLabelledBy: null,
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
    },
    css: {
        classes,
        styles
    }
});

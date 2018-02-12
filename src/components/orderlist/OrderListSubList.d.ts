import React = require("react");

interface OrderListSubListProps {
    value?: Array<any>;
    selection?: Array<any>;
    header?: any;
    listStyle?: object;
    dragdrop?: boolean;
    onItemClick?(e: {originalEvent: Event, value: any, index: number}): void;
    itemTemplate?(item: any): void;
    onChange?(e: {originalEvent: Event, value: any}): void;
}

export class OrderList extends React.Component<OrderListSubListProps,any> {}
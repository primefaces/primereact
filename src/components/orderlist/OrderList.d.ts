import React = require("react");

interface OrderListProps {
    id?: string;
    value?: Array<any>;
    header?: any;
    style?: object;
    className?: string;
    listStyle?: object;
    responsive?: boolean;
    dragdrop?: boolean;
    onChange?(e: {originalEvent: Event, value: any}): void;
    itemTemplate?(item: any): void;
}

export class OrderList extends React.Component<OrderListProps,any> {}
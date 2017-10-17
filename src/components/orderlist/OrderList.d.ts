import React = require("react");

interface OrderListProps {
    id?: string;
    value?: Array<any>;
    header?: string;
    style?: string;
    className?: string;
    listStyle?: string;
    responsive?: boolean;
    dragdrop?(): void;
    dragdropScope?: string;
    onChange?(originalEvent: Event, value: Array<any>): void;
    itemTemplate?(): void;
}

export class OrderList extends React.Component<OrderListProps,any> {}
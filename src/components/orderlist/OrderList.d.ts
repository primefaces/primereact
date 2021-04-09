import * as React from 'react';

interface OnChangeParams {
    originalEvent: Event;
    value: any;
}

interface OrderListProps {
    id?: string;
    value?: any[];
    header?: React.ReactNode;
    style?: object;
    className?: string;
    listStyle?: object;
    dragdrop?: boolean;
    tabIndex?: number;
    onChange?(e: OnChangeParams): void;
    itemTemplate?(item: any): React.ReactNode;
}

export class OrderList extends React.Component<OrderListProps, any> { }

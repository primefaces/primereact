import * as React from 'react';

interface OrderListChangeParams {
    originalEvent: React.SyntheticEvent;
    value: any;
}

export interface OrderListProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange' | 'ref'> {
    value?: any[];
    header?: React.ReactNode;
    listStyle?: object;
    dragdrop?: boolean;
    dataKey?: string;
    onChange?(e: OrderListChangeParams): void;
    itemTemplate?(item: any): React.ReactNode;
    children?: React.ReactNode;
}

export declare class OrderList extends React.Component<OrderListProps, any> { 
    public getElement(): HTMLDivElement;
}

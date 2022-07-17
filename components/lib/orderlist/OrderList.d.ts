import * as React from 'react';

type OrderListFilterTemplateType = React.ReactNode | ((options: OrderListFilterOptions) => React.ReactNode);

interface OrderListChangeParams {
    originalEvent: React.SyntheticEvent;
    value: any;
}

interface OrderListFilterOptions {
    filter?: (value?: KeyboardEvent) => void;
    reset?: () => void;
}

export interface OrderListProps {
    id?: string;
    value?: any[];
    header?: React.ReactNode;
    style?: object;
    className?: string;
    listStyle?: object;
    dragdrop?: boolean;
    tabIndex?: number;
    dataKey?: string;
    filter?: boolean;
    filterBy?: string;
    filterMatchMode?: string;
    filterPlaceholder?: string;
    filterLocale?: string;
    filterTemplate?: OrderListFilterTemplateType;
    onChange?(e: OrderListChangeParams): void;
    itemTemplate?(item: any): React.ReactNode;
    children?: React.ReactNode;
}

export declare class OrderList extends React.Component<OrderListProps, any> { }

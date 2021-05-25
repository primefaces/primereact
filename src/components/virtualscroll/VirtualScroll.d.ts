import * as React from 'react';

type VirtualScrollItemsType = any[] | any[][] | undefined | null;

type VirtualScrollItemSizeType = number | number[];

type VirtualScrollOrientationType = 'vertical' | 'horizontal' | 'both';

type VirtualScrollLoadingTemplateType = React.ReactNode | ((options: VirtualScrollLoadingTemplateOptions) => React.ReactNode);

type VirtualScrollItemTemplateType = React.ReactNode | ((item: any, options: VirtualScrollTemplateOptions) => React.ReactNode);

type VirtualScrollContentTemplateType = React.ReactNode | ((options: VirtualScrollContentTemplateOptions) => React.ReactNode);

type VirtualScrollStateType = number | VirtualScrollState;

type VirtualScrollToIndexType = number | number[];

interface VirtualScrollState {
    rows: number;
    cols: number;
}

interface VirtualScrollTemplateOptions {
    index: number;
    count: number;
    first: boolean;
    last: boolean;
    even: boolean;
    odd: boolean;
    props: VirtualScrollProps;
}

interface VirtualScrollLoadingTemplateOptions extends VirtualScrollTemplateOptions {
    numCols: number;
}

interface VirtualScrollContentTemplateOptions {
    className: string;
    ref: any;
    children: any;
    element: JSX.Element;
    props: VirtualScrollProps;
}

interface VirtualScrollChangeParams {
    first: VirtualScrollStateType;
    numItems: VirtualScrollStateType;
}

export interface VirtualScrollProps {
    id?: string;
    style?: object;
    className?: string;
    items?: VirtualScrollItemsType;
    itemSize?: VirtualScrollItemSizeType;
    orientation?: VirtualScrollOrientationType;
    numToleratedItems?: number;
    delay?: number;
    lazy?: boolean;
    showLoader?: boolean;
    loadingTemplate?: VirtualScrollLoadingTemplateType;
    itemTemplate?: VirtualScrollItemTemplateType;
    contentTemplate?: VirtualScrollContentTemplateType;
    onScrollChange?(e: VirtualScrollChangeParams): void;
}

export declare class VirtualScroll extends React.Component<VirtualScrollProps, any> {
    public scrollToIndex(index: VirtualScrollToIndexType): void;
}

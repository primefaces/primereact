import React = require("react");

interface DataScrollerProps {
    id?: string;
    value?: Array<any>;
    rows?: number;
    inline?: boolean;
    scrollHeight?: any;
    loader?: any;
    buffer?: number;
    style?: object;
    className?: string;
    onLazyLoad?(p: {first: number, rows: number}): void;
    itemTemplate?(item: any): JSX.Element | undefined;
    header?: string;
    footer?: string;
    lazy?: boolean;
}

export class DataScroller extends React.Component<DataScrollerProps,any> {}

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
    onLazyLoad?(e: {first: number, rows: number}): void;
    itemTemplate?(item: any): JSX.Element | undefined;
    header?: any;
    footer?: any;
    lazy?: boolean;
}

export class DataScroller extends React.Component<DataScrollerProps,any> {}
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
    onLazyLoad?({first: number, rows: number}): void;
    itemTemplate?(): void;
    header?: string;
    footer?: string;
}

export class DataScroller extends React.Component<DataScrollerProps,any> {}
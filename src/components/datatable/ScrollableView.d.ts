import React = require("react");

interface ScrollableViewProps {
    header?: Element;
    body?: Element;
    footer?: Element;
    frozen?: boolean;
    frozenWidth?: string;
    unfrozenWidth?: string;
    frozenBody?: Element;
    virtualScroll?: boolean;
    rows?: number;
    totalRcords?: number;
    onVirtualScroll?(page: number): void;
}

export class ScrollableView extends React.Component<ScrollableViewProps,any> {}
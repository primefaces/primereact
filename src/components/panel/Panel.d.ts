import * as React from 'react';

interface PanelProps {
    id?: string;
    header?: any;
    toggleable?: boolean;
    style?: object;
    className?: string;
    collapsed?: boolean;
    onExpand?(event: Event): void;
    onCollapse?(event: Event): void;
    onToggle?(e: {event: Event, value: boolean}): void;
}

export class Panel extends React.Component<PanelProps,any> {}
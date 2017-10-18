import React = require("react");

interface PickListProps {
    id?: string;
    source?: Array<any>;
    target?: Array<any>;
    sourceHeader?: string;
    targetHeader?: string;
    style?: object;
    className?: string;
    sourcestyle?: object;
    targetstyle?: object;
    responsive?: boolean;
    showSourceControls?: boolean;
    showTargetControls?: boolean;
    itemTemplate?(): void;
    onChange?(event: Event, source: Array<any>, target: Array<any>): void;
    onMoveToSource?(originalEvent: Event, value: Array<any>): void;
    onMoveAllToSource?(originalEvent: Event, value: Array<any>): void;
    onMoveToTarget?(originalEvent: Event, value: Array<any>): void;
    onMoveAllToTarget?(originalEvent: Event, value: Array<any>): void;
}

export class PickList extends React.Component<PickListProps,any> {}
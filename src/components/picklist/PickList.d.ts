import React = require("react");

interface PickListProps {
    id?: string;
    source?: Array<any>;
    target?: Array<any>;
    sourceHeader?: any;
    targetHeader?: any;
    style?: object;
    className?: string;
    sourcestyle?: object;
    targetstyle?: object;
    responsive?: boolean;
    showSourceControls?: boolean;
    showTargetControls?: boolean;
    itemTemplate?(item: any): void;
    onChange?(e: {event: Event, source: any, target: any}): void;
    onMoveToSource?(e: {originalEvent: Event, value: any}): void;
    onMoveAllToSource?(e: {originalEvent: Event, value: any}): void;
    onMoveToTarget?(e: {originalEvent: Event, value: any}): void;
    onMoveAllToTarget?(e: {originalEvent: Event, value: any}): void;
}

export class PickList extends React.Component<PickListProps,any> {}
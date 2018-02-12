import React = require("react");

interface PickListSubListProps {
    list?: Array<any>;
    selection?: Array<any>;
    header?: string;
    className?: string;
    listClassName?: string;
    style?: object;
    showControls?: boolean;
    itemTemplate?(item: any): void;
    onItemClick?(): void;
    onSelectionChange?({event: Event, value: any}): void;
}

export class PickListSubList extends React.Component<PickListSubListProps,any> {}
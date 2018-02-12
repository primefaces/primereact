import React = require("react");

interface PickListItemProps {
    value?: any;
    className?: string;
    template?(item: any): void;
    selected?: boolean;
    onClick?(e: {originalEvent: Event, value: any}): void;
}

export class PickListItem extends React.Component<PickListItemProps,any> {}
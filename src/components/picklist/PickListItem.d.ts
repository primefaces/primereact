import React = require("react");

interface PickListItemProps {
    value?: any;
    className?: string;
    template?(item: any): JSX.Element | undefined;
    selected?: boolean;
    onClick?(e: {originalEvent: Event, value: any}): void;
}

export class PickListItem extends React.Component<PickListItemProps,any> {}
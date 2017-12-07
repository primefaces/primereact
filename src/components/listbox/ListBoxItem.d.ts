import React = require("react");

interface ListBoxItemProps {
    option?: any;
    selected?: boolean;
    onClick?(e: {originalEvent: Event, option: any}): void;
    onTouchEnd?(e: {originalEvent: Event, option: any}): void;
    template?(): void;
}

export class ListBoxItem extends React.Component<ListBoxItemProps,any> {}
import React = require("react");

interface ListBoxItemProps {
    option?: any;
    selected?: boolean;
    onClick?(originalEvent: Event, option: any): void;
    onTouchEnd?(originalEvent: Event, option: any): void;
    template?(): void;
}

export class ListBoxItem extends React.Component<ListBoxItemProps,any> {}
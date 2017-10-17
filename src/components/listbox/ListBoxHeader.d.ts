import React = require("react");

interface ListBoxHeaderProps {
    filter?: string;
    disabled?: boolean;
    onFilter?(originalEvent: Event, value: any): void;
}

export class ListBoxHeader extends React.Component<ListBoxHeaderProps,any> {}
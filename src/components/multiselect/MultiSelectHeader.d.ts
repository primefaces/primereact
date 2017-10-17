import React = require("react");

interface MultiSelectHeaderProps {
    filter?: boolean;
    filterValue?: string;
    allChecked?: boolean;
    onFilter?(originalEvent: Event, query: any): void;
    onClose?(): void;
    onToggleAll?(originalEvent: Event, checked: boolean): void;
}

export class MultiSelectHeader extends React.Component<MultiSelectHeaderProps,any> {}
import React = require("react");

interface MultiSelectHeaderProps {
    filter?: boolean;
    filterValue?: string;
    allChecked?: boolean;
    onFilter?(e: {originalEvent: Event, query: any}): void;
    onClose?(): void;
    onToggleAll?(e: {originalEvent: Event, checked: boolean}): void;
}

export class MultiSelectHeader extends React.Component<MultiSelectHeaderProps,any> {}
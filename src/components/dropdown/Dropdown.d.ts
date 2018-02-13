import React = require("react");

interface DropdownProps {
    id?: string;
    value?: any;
    options?: Array<any>;
    itemTemplate?(): void;
    style?: object;
    className?: string;
    autoWidth?: boolean;
    scrollHeight?: string;
    filter?: boolean;
    filterPlaceholder?: string;
    editable?:boolean;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    appendTo?: any;
    tabIndex?: number;
    autoFocus?: boolean;
    lazy?: boolean;
    panelClassName?: string;
    panelstyle?: object;
    dataKey?: string;
    inputId?: string;
    onChange?(e: {originalEvent: Event, value: any}): void;
    onMouseDown?(): void;
    onContextMenu?(): void;
}

export class Dropdown extends React.Component<DropdownProps,any> {}
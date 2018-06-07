import React = require("react");

interface DropdownProps {
    id?: string;
    value?: any;
    options?: Array<any>;
    optionLabel?: string;
    itemTemplate?(option:any): any;
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
    showClear?: boolean;
    onChange?(e: {originalEvent: Event, value: any}): void;
    onMouseDown?(): void;
    onContextMenu?(): void;
}

export class Dropdown extends React.Component<DropdownProps,any> {}

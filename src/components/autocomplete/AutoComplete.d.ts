import React = require("react");

interface AutoCompleteProps {
    id?: string;
    value?: any;
    suggestions?: Array<any>;
    field?: string;
    scrollHeight?: string;
    dropdown?: boolean;
    multiple?: boolean;
    minLength?: number;
    delay?: number;
    style?: object;
    className?: string;
    inputStyle?: object;
    inputClassName?: string;
    placeholder?: string;
    readonly?: boolean;
    disabled?: boolean;
    maxlength?: number;
    size?: number;
    appendTo?: any;
    tabindex?: number;
    completeMethod?(originalEvent: Event, query: any): void;
    itemTemplate?(): void;
    selectedItemTemplate?(): void;
    onChange?(originalEvent: Event, value: any): void;
    onFocus?(): void;
    onBlur?(): void;
    onSelect?(originalEvent: Event, value: any): void;
    onUnselect?(originalEvent: Event, value: any): void;
    onDropdownClick?(originalEvent: Event, query: any): void;
    onClick?(): void;
    onDblClick?(): void;
    onMouseDown?(): void;
    onKeyUp?(): void;
    onKeyPress?(): void;
    onContextMenu?(): void;
}

export class AutoComplete extends React.Component<AutoCompleteProps,any> {}
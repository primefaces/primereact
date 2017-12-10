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
    completeMethod?(e: {originalEvent: Event, query: any}): void;
    itemTemplate?(data: any): void;
    selectedItemTemplate?(): void;
    onChange?(e: {originalEvent: Event, value: any}): void;
    onFocus?(event: Event): void;
    onBlur?(event: Event): void;
    onSelect?(e: {originalEvent: Event, value: any}): void;
    onUnselect?(e: {originalEvent: Event, value: any}): void;
    onDropdownClick?(e: {originalEvent: Event, query: any}): void;
    onClick?(event:Event): void;
    onDblClick?(): void;
    onMouseDown?(): void;
    onKeyUp?(): void;
    onKeyPress?(): void;
    onContextMenu?(): void;
}

export class AutoComplete extends React.Component<AutoCompleteProps,any> {}
import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface AutoCompleteProps {
    id?: string;
    value?: any;
    name?: string;
    type?: string;
    suggestions?: any[];
    field?: string;
    scrollHeight?: string;
    dropdown?: boolean;
    dropdownMode?: string;
    multiple?: boolean;
    minLength?: number;
    delay?: number;
    style?: object;
    className?: string;
    inputId?: string;
    inputStyle?: object;
    inputClassName?: string;
    placeholder?: string;
    readonly?: boolean;
    disabled?: boolean;
    maxlength?: number;
    size?: number;
    appendTo?: any;
    tabindex?: number;
    autoFocus?: boolean;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    completeMethod?(e: {originalEvent: Event, query: string}): void;
    itemTemplate?(data: any): JSX.Element | undefined;
    selectedItemTemplate?(data: any): JSX.Element | undefined;
    onChange?(e: {originalEvent: Event, value: any}): void;
    onFocus?(event: Event): void;
    onBlur?(event: Event): void;
    onSelect?(e: {originalEvent: Event, value: any}): void;
    onUnselect?(e: {originalEvent: Event, value: any}): void;
    onDropdownClick?(e: {originalEvent: Event, query: string}): void;
    onClick?(event:Event): void;
    onDblClick?(event:Event): void;
    onMouseDown?(event:Event): void;
    onKeyUp?(event:Event): void;
    onKeyPress?(event:Event): void;
    onContextMenu?(event:Event): void;
    onClear?(event:Event): void;
}

export class AutoComplete extends React.Component<AutoCompleteProps,any> {}

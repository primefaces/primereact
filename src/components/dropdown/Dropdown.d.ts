import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface DropdownProps {
    id?: string;
    value?: any;
    options?: any[];
    optionLabel?: string;
    style?: object;
    className?: string;
    autoWidth?: boolean;
    scrollHeight?: string;
    filter?: boolean;
    filterBy?: string;
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
    panelStyle?: object;
    dataKey?: string;
    inputId?: string;
    showClear?: boolean;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    itemTemplate?(option:any): React.ReactNode;
    onChange?(e: {originalEvent: Event, value: any}): void;
    onMouseDown?(event: Event): void;
    onContextMenu?(event: Event): void;
}

export class Dropdown extends React.Component<DropdownProps,any> {}

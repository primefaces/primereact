import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface MultiSelectProps {
    id?: string;
    value?: any;
    options?: any[];
    optionLabel?: string;
    style?: object;
    className?: string;
    scrollHeight?: string;
    placeholder?: string;
    fixedPlaceholder?: boolean;
    disabled?: boolean;
    filter?: boolean;
    tabIndex?: boolean;
    dataKey?: string;
    appendTo?: HTMLElement;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    maxSelectedLabels?: number;
    selectedItemsLabel?: string;
    itemTemplate?(item: any): JSX.Element | undefined;
    selectedItemTemplate?(value: any): JSX.Element | undefined;
    onChange?(e: {originalEvent: Event, value: any}): void;
    onFocus?(event: Event): void;
    onBlur?(event: Event): void;
}

export class MultiSelect extends React.Component<MultiSelectProps,any> {}

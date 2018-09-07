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
    defaultLabel?: string;
    disabled?: boolean;
    filter?: boolean;
    dataKey?: string;
    appendTo?: HTMLElement;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    itemTemplate?(item: any): JSX.Element | undefined;
    onChange?(e: {originalEvent: Event, value: any}): void;
}

export class MultiSelect extends React.Component<MultiSelectProps,any> {}

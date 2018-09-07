import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface ChipsProps {
    id?: string;
    name?: string;
    placeholder?: string;
    value?: any[];
    max?: number;
    disabled?: boolean;
    style?: object;
    className?: string;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    itemTemplate?(item: any): JSX.Element | undefined;
    onAdd?(e: {originalEvent: Event, value: any}): void;
    onRemove?(e: {originalEvent: Event, value: any}): void;
    onChange?(e: {originalEvent: Event, value: any}): void;
}

export class Chips extends React.Component<ChipsProps,any> {}

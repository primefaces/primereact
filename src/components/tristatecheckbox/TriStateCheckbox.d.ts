import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface TriStateCheckboxProps {
    id?: string;
    inputId?: string;
    value?: boolean | null;
    name?: string;
    style?: object;
    className?: string;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    onChange?(e: {originalEvent: Event, value: boolean}): void;
}

export class TriStateCheckbox extends React.Component<TriStateCheckboxProps,any> {}
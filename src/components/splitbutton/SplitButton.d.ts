import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface SplitButtonProps {
    id?: string;
    label?: string;
    icon?: string;
    model?: any[];
    disabled?: boolean;
    style?: object;
    className?: string;
    menuStyle?: object;
    menuClassName?: string;
    tabIndex?: string;
    appendTo?: HTMLElement;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    onClick?(event: Event): void;
}

export class SplitButton extends React.Component<SplitButtonProps,any> {}

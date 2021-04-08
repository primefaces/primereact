import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label?: string;
    icon?: string;
    iconPos?: string;
    badge?: string;
    badgeClassName?: string;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    [key: string]: any;
}

export class Button extends React.Component<ButtonProps, any> { }

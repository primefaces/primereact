import * as React from 'react';
import TooltipOptions from '../tooltip/tooltipoptions';

export interface InputTextareaProps extends Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'ref'> {
    autoResize?: boolean;
    children?: React.ReactNode;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
}

export declare class InputTextarea extends React.Component<InputTextareaProps, any> {
    value?: string;
}

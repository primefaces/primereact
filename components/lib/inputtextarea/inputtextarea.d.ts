import * as React from 'react';
import { KeyFilterType } from '../keyfilter';
import TooltipOptions from '../tooltip/tooltipoptions';

export interface InputTextareaProps extends Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'ref' | 'value'> {
    autoResize?: boolean;
    children?: React.ReactNode;
    keyfilter?: KeyFilterType;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    value?: string;
}

export declare const InputTextarea: React.ForwardRefExoticComponent<InputTextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

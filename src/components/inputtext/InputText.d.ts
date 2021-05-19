import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';
import { KeyFilterType } from '../keyfilter/KeyFilterOptions';

export interface InputTextProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onInput'> {
    keyfilter?: KeyFilterType;
    validateOnly?: boolean;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    onInput?(event: React.FormEvent<HTMLInputElement>, validatePattern: boolean): void;
}

export declare class InputText extends React.Component<InputTextProps, any> { }

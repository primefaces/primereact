import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';
import KeyFilterOptions from '../keyfilter/KeyFilterOptions';

interface InputTextProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    [key: string]: any;
    keyfilter?: KeyFilterOptions;
    validateOnly?: boolean;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    onInput?(event: React.FormEvent<HTMLInputElement>, validatePattern: boolean): void;
}

export class InputText extends React.Component<InputTextProps, any> { }

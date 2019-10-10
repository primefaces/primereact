import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface InputTextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
    autoResize?: boolean;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    onBlur?(event: React.FocusEvent<HTMLTextAreaElement>): void;
    onKeyUp?(event: React.KeyboardEvent<HTMLTextAreaElement>): void; 
    onFocus?(event: React.FocusEvent<HTMLTextAreaElement>): void; 
    onInput?(event: React.FormEvent<HTMLTextAreaElement>): void;
    [key: string]: any;
}

export class InputTextarea extends React.Component<InputTextareaProps,any> {}
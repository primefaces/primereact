import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface InputMaskProps {
    id?: string;
    value?: string;
    type?: string;
    mask?: string;
    slotChar?: string;
    autoClear?: boolean;
    unmask?: boolean;
    style?: object;
    className?: string;
    placeholder?: string;
    size?: number;
    maxlength?: number;
    tabindex?: number;
    disabled?: boolean;
    readonly?: boolean;
    name?: string;
    required?: boolean;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    onComplete?(e: {originalEvent: Event, value: any}): void;
    onChange?(e: {originalEvent: Event, value: any, target: {name: string, id: string, value: any}}): void;
}

export class InputMask extends React.Component<InputMaskProps,any> {}

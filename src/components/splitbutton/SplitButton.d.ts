import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

type ButtonTemplateType = string | JSX.Element | ((props: SplitButtonProps) => JSX.Element);

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
    tabIndex?: number;
    appendTo?: HTMLElement;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    buttonTemplate?: ButtonTemplateType;
    onClick?(event: React.MouseEvent<HTMLElement>): void;
}

export class SplitButton extends React.Component<SplitButtonProps, any> { }

import * as React from 'react';
import { MenuItem } from '../menuitem/MenuItem';
import TooltipOptions from '../tooltip/TooltipOptions';

type ButtonTemplateType = React.ReactNode | ((props: SplitButtonProps) => React.ReactNode);

interface SplitButtonProps {
    id?: string;
    label?: string;
    icon?: string;
    model?: MenuItem[];
    disabled?: boolean;
    style?: object;
    className?: string;
    menuStyle?: object;
    menuClassName?: string;
    tabIndex?: number;
    appendTo?: HTMLElement | string;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    buttonTemplate?: ButtonTemplateType;
    transitionOptions?: object;
    onClick?(event: React.MouseEvent<HTMLElement>): void;
}

export class SplitButton extends React.Component<SplitButtonProps, any> { }

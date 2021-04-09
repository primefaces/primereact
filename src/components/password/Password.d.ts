import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

type HeaderType = string | JSX.Element | ((props: PasswordProps) => JSX.Element);

type FooterType = string | JSX.Element | ((props: PasswordProps) => JSX.Element);

type ContentType = string | JSX.Element | ((props: PasswordProps) => JSX.Element);

interface IconParams {
    onClick(): void;
    className: string;
    element: JSX.Element;
    props: PasswordProps;
}

type IconType = string | JSX.Element | ((e: IconParams) => JSX.Element);

interface PasswordProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    id?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    promptLabel?: string;
    weakLabel?: string;
    mediumLabel?: string;
    strongLabel?: string;
    mediumRegex?: string;
    strongRegex?: string;
    feedback?: boolean;
    toggleMask?: boolean;
    appendTo?: HTMLElement;
    header?: HeaderType;
    content?: ContentType;
    footer?: FooterType;
    icon?: IconParams;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    style?: object;
    className?: string;
    inputStyle?: object;
    inputClassName?: string;
    panelStyle?: object;
    panelClassName?: string;
    onInput?(event: React.FormEvent<HTMLInputElement>, validatePattern: boolean): void;
    [key: string]: any;
}

export class Password extends React.Component<PasswordProps, any> { }

import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

declare namespace Password {

    type HeaderType = React.ReactNode | ((props: PasswordProps) => React.ReactNode);

    type FooterType = React.ReactNode | ((props: PasswordProps) => React.ReactNode);

    type ContentType = React.ReactNode | ((props: PasswordProps) => React.ReactNode);

    interface IconParams {
        onClick(): void;
        className: string;
        element: JSX.Element;
        props: PasswordProps;
    }

    type IconType = React.ReactNode | ((e: IconParams) => React.ReactNode);

    interface PasswordProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onInput'> {
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
        appendTo?: HTMLElement | string;
        header?: HeaderType;
        content?: ContentType;
        footer?: FooterType;
        icon?: IconType;
        tooltip?: string;
        tooltipOptions?: TooltipOptions;
        style?: object;
        className?: string;
        inputStyle?: object;
        inputClassName?: string;
        panelStyle?: object;
        panelClassName?: string;
        transitionOptions?: object;
        onInput?(event: React.FormEvent<HTMLInputElement>, validatePattern: boolean): void;
        onShow?(): void;
        onHide?(): void;
    }
}

export declare class Password extends React.Component<Password.PasswordProps, any> { }

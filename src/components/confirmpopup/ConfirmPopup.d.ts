import * as React from 'react';

type TemplateType = React.ReactNode | ((props: ConfirmPopupProps) => React.ReactNode);

interface ConfirmPopupProps {
    target?: HTMLElement;
    visible?: boolean;
    message?: TemplateType;
    rejectLabel?: string;
    acceptLabel?: string;
    icon?: string;
    rejectIcon?: string;
    acceptIcon?: string;
    rejectClassName?: string;
    acceptClassName?: string;
    className?: string;
    style?: object;
    appendTo?: HTMLElement | string;
    dismissable?: boolean;
    footer?: TemplateType;
    transitionOptions?: object;
    onHide?(result: string): void;
    accept?(): void;
    reject?(): void;
}

export class ConfirmPopup extends React.Component<ConfirmPopupProps, any> { }

interface ConfirmPopupReturn {
    show(): void;
    hide(): void;
}

export declare function confirmPopup(props: ConfirmPopupProps): ConfirmPopupReturn;

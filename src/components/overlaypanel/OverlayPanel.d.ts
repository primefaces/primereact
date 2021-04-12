import * as React from 'react';

type TemplateType = React.ReactNode | ((props: OverlayPanelProps) => React.ReactNode);

interface Breakpoints {
    [key: string]: string;
}

interface OverlayPanelProps {
    id?: string;
    dismissable?: boolean;
    showCloseIcon?: boolean;
    style?: object;
    className?: string;
    appendTo?: HTMLElement | string;
    ariaCloseLabel?: string;
    breakpoints?: Breakpoints;
    transitionOptions?: object;
    onHide?(): void;
}

export declare class OverlayPanel extends React.Component<OverlayPanelProps, any> {
    public toggle(event: React.SyntheticEvent, target: HTMLElement): void;
    public show(event: React.SyntheticEvent, target: HTMLElement): void;
    public hide(): void;
}

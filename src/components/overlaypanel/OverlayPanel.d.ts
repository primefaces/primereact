import * as React from 'react';

type TemplateType = React.ReactNode | ((props: OverlayPanelProps) => React.ReactNode);

interface Breakpoints {
    [key: string]: string
}

interface OverlayPanelProps {
    id?: string;
    dismissable?: boolean;
    showCloseIcon?: boolean;
    style?: object;
    className?: string;
    appendTo?: HTMLElement;
    ariaCloseLabel?: string;
    breakpoints?: Breakpoints;
    onHide?(): void;
}

export class OverlayPanel extends React.Component<OverlayPanelProps, any> {
    public toggle(event: Event, target: HTMLElement): void;
    public show(event: Event, target: HTMLElement): void;
    public hide(): void;
}

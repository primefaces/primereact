import * as React from 'react';

type PositionType = 'top' | 'bottom' | 'left' | 'right';

type TargetType = string | string[] | HTMLElement;

type TemplateType = React.ReactNode | ((props: SidebarProps) => React.ReactNode);

interface EventParams {
    originalEvent: Event;
    target: HTMLElement;
}

interface TooltipProps {
    id?: string;
    target?: TargetType;
    content?: string;
    disabled?: boolean;
    className?: string;
    style?: object;
    appendTo?: HTMLElement;
    position?: PositionType;
    my?: string;
    at?: string;
    event?: string;
    showEvent?: string;
    hideEvent?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    mouseTrack?: boolean;
    mouseTrackTop?: number;
    mouseTrackLeft?: number;
    showDelay?: number;
    updateDelay?: number;
    hideDelay?: number;
    onBeforeShow?(e: EventParams): void;
    onBeforeHide?(e: EventParams): void;
    onShow?(e: EventParams): void;
    onHide?(e: EventParams): void;
}

export class Tooltip extends React.Component<TooltipProps, any> {
    public updateTargetEvents(target: HTMLElement): void;
    public loadTargetEvents(target: HTMLElement): void;
    public unloadTargetEvents(target: HTMLElement): void;
}

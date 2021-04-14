import * as React from 'react';

type PositionType = 'top' | 'bottom' | 'left' | 'right';

interface EventParams {
    originalEvent: React.SyntheticEvent;
    target: HTMLElement;
}

export default interface TooltipOptions {
    className?: string;
    style?: object;
    appendTo?: HTMLElement | string;
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

import * as React from 'react';

interface DialogProps {
    id?: string;
    header?: any;
    footer?: any;
    visible?: boolean;
    width?: string;
    height?: string;
    modal?: boolean;
    draggable?: boolean;
    resizable?: boolean;
    minWidth?: number;
    minHeight?: number;
    contentStyle?: object;
    closeOnEscape?: boolean;
    dismissableMask?: boolean;
    rtl?: boolean;
    closable?: boolean;
    responsive?: boolean;
    breakpoint?: number;
    style?: object;
    className?: string;
    showHeader?: boolean;
    positionLeft?: number;
    positionTop?: number;
    appendTo?: HTMLElement;
    baseZIndex?: number;
    minX?: number;
    minY?: number;
    maximizable?: boolean;
    blockScroll?: boolean;
    onHide(): void;
    onShow?(): void;
}

export class Dialog extends React.Component<DialogProps,any> {}

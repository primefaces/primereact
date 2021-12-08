import * as React from 'react';
import { CSSTransitionProps } from '../csstransition';

type SidebarPositionType = 'top' | 'bottom' | 'left' | 'right';

type SidebarTemplateType = React.ReactNode | ((props: SidebarProps) => React.ReactNode);

type SidebarAppendToType = 'self' | HTMLElement | undefined | null;

export interface SidebarProps {
    id?: string;
    style?: object;
    className?: string;
    maskStyle?: object;
    maskClassName?: string;
    visible?: boolean;
    position?: SidebarPositionType;
    fullScreen?: boolean;
    blockScroll?: boolean;
    baseZIndex?: number;
    dismissable?: boolean;
    showCloseIcon?: boolean;
    ariaCloseLabel?: string;
    closeOnEscape?: boolean;
    icons?: SidebarTemplateType;
    modal?: boolean;
    appendTo?: SidebarAppendToType;
    transitionOptions?: CSSTransitionProps;
    onShow?(): void;
    onHide(): void;
}

export declare class Sidebar extends React.Component<SidebarProps, any> { }

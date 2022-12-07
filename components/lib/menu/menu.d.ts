import * as React from 'react';
import { CSSTransitionProps } from '../csstransition';
import { MenuItem } from '../menuitem';

type MenuAppendToType = 'self' | HTMLElement | undefined | null;

type MenuAlignmentType = 'left' | 'right';

export interface MenuProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    appendTo?: MenuAppendToType;
    autoZIndex?: boolean;
    baseZIndex?: number;
    children?: React.ReactNode;
    model?: MenuItem[];
    popup?: boolean;
    popupAlignment?: MenuAlignmentType;
    transitionOptions?: CSSTransitionProps;
    onHide?(e: React.SyntheticEvent): void;
    onShow?(e: React.SyntheticEvent): void;
}

export declare class Menu extends React.Component<MenuProps, any> {
    public toggle(event: React.SyntheticEvent): void;
    public show(event: React.SyntheticEvent): void;
    public hide(event: React.SyntheticEvent): void;
    public getElement(): HTMLDivElement;
    public getTarget(): EventTarget | null;
}

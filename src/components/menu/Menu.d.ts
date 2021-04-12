import * as React from 'react';
import { MenuItem } from '../menuitem/MenuItem';

interface MenuProps {
    id?: string;
    model?: MenuItem[];
    popup?: boolean;
    style?: object;
    className?: string;
    autoZIndex?: boolean;
    bazeZIndex?: number;
    appendTo?: HTMLElement;
    transitionOptions?: object;
    onShow?(e: React.SyntheticEvent): void;
    onHide?(e: React.SyntheticEvent): void;
}

export declare class Menu extends React.Component<MenuProps, any> {
    public toggle(event: React.SyntheticEvent): void;
}

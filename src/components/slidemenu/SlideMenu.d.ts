import React = require("react");
import {MenuItem} from '../menuitem/MenuItem';

interface SlideMenuProps {
    id?: string;
    model?: Array<MenuItem>;
    popup?: boolean;
    style?: object;
    className?: string;
    easing?: string;
    effectDuration?: number;
    backLabel?: string;
    menuWidth?: number;
    viewportHeight?: number;
    autoZIndex?: boolean;
    baseZIndex?: number;
    onShow?(e: Event): void;
    onHide?(e: Event): void;
}

export class SlideMenu extends React.Component<SlideMenuProps,any> {}
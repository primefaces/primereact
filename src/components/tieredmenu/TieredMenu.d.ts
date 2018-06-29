import React = require("react");
import {MenuItem} from '../menuitem/MenuItem';

interface TieredMenuProps {
    id?: string;
    model?: Array<MenuItem>;
    popup?: boolean;
    style?: object;
    className?: string;
    autoZIndex?: boolean;
    bazeZIndex?: number;
    onShow?(e: Event): void;
    onHide?(e: Event): void;
}

export class TieredMenu extends React.Component<TieredMenuProps,any> {}
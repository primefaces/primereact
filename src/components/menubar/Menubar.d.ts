import React = require("react");
import {MenuItem} from '../menuitem/MenuItem';

interface MenubarProps {
    id?: string;
    model?: Array<MenuItem>;
    style?: object;
    className?: string;
    autoZIndex?: boolean;
    bazeZIndex?: number;
}

export class Menubar extends React.Component<MenubarProps,any> {}
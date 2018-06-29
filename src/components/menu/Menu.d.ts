import React = require("react");

interface MenuProps {
    id?: string;
    model?: Array<any>;
    popup?: boolean;
    style?: object;
    className?: string;
    autoZIndex?: boolean;
    bazeZIndex?: number;
    onShow?(e: Event): void;
    onHide?(e: Event): void;
}

export class Menu extends React.Component<MenuProps ,any> {}
import React = require("react");

interface MenubarProps {
    id?: string;
    model?: Array<any>;
    style?: object;
    className?: string;
    autoZIndex?: boolean;
    bazeZIndex?: number;
}

export class Menubar extends React.Component<MenubarProps,any> {}
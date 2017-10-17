import React = require("react");

interface SidebarProps {
    id?: string;
    style?: object;
    className?: string;
    visible?: boolean;
    position?: string;
    fullScreen?: boolean;
    blockScroll?: boolean;
    baseZIndex?: number;
    onShow?(): void;
    onHide?(): void;
}

export class Sidebar extends React.Component<SidebarProps,any> {}
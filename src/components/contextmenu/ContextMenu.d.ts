import React = require("react");

interface ContextMenuProps {
    id?: string;
    model?: Array<any>;
    style?: object;
    className?: string;
    global?: boolean;
    autoZIndex?: boolean;
    bazeZIndex?: number;
    appendTo?: any;
    onShow?(e: Event): void;
    onHide?(e: Event): void;
}

export class ContextMenu extends React.Component<ContextMenuProps,any> {}
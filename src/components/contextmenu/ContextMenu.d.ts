import React = require("react");

interface ContextMenuProps {
    id?: string;
    model?: Array<any>;
    style?: object;
    className?: string;
    global?: boolean;
    target?: any;
    appendTo?: any;
}

export class ContextMenu extends React.Component<ContextMenuProps,any> {}
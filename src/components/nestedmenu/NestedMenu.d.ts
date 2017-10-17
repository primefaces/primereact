import React = require("react");

interface NestedMenuProps {
    className?: string;
    style?: object;
    items?: any;
    parentMenu?: string;
    root?: boolean;
    index?: any;
}

export class NestedMenu extends React.Component<NestedMenuProps,any> {}
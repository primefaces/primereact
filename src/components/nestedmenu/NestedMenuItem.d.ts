import React = require("react");

interface NestedMenuItemProps {
    item?: any;
    menu?: any;
    parentMenu?: string;
    root?: boolean;
    index?: any;
}

export class NestedMenuItem extends React.Component<NestedMenuItemProps,any> {}
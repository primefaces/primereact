import React = require("react");

interface TabMenuProps {
    id?: string;
    model?: Array<any>;
    activeItem?: any;
    style?: any;
    className?: string;
}

export class TabMenu extends React.Component<TabMenuProps,any> {}
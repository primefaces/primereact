import React = require("react");

interface TabMenuProps {
    id?: string;
    model?: Array<any>;
    activeItem?: any;
    style?: any;
    className?: string;
    onTabChange?(e: { originalEvent: Event, value: any}): void;
}

export class TabMenu extends React.Component<TabMenuProps,any> {}
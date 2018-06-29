import React = require("react");

interface MenuItemProps {
    index ?: any;
    items ?: any;
    onItemClick ?(): void;
    parentMenu ?: string;
    root ?: boolean;
}

export class MenuItem extends React.Component<MenuItemProps,any> {}
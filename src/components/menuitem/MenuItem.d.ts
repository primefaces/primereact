import React = require("react");

interface MenuItemProps {
    label?: string;
    icon?: string;
    command?(e: {originalEvent: Event, item: MenuItem}): void;
    url?: string;
    items?: MenuItem[]|MenuItem[][];
    disabled?: boolean;
    visible?: boolean;
    target?: string;
    separator?: boolean;
    style?: any;
    className?: string;
}

export class MenuItem extends React.Component<MenuItemProps,any> {}
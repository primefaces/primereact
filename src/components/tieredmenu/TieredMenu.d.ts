import React = require("react");

interface TieredMenuProps {
    id?: string;
    model?: Array<any>;
    popup?: boolean;
    style?: object;
    className?: string;
    autoZIndex?: boolean;
    bazeZIndex?: number;
    onShow?(e: Event): void;
    onHide?(e: Event): void;
}

export class TieredMenu extends React.Component<TieredMenuProps,any> {}
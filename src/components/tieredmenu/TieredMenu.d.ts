import React = require("react");

interface TieredMenuProps {
    id?: string;
    model?: Array<any>;
    popup?: boolean;
    style?: object;
    className?: string;
}

export class TieredMenu extends React.Component<TieredMenuProps,any> {}
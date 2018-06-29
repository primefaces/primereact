import React = require("react");

export class PanelMenuHeaderItems extends React.Component<PanelMenuHeaderItemsProps,any> {}

interface PanelMenuProps {
    id?: string;
    model?: Array<any>;
    style?: object;
    className?: string;
}

export class PanelMenu extends React.Component<PanelMenuProps,any> {}
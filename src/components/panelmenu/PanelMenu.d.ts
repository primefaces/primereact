import React = require("react");

interface PanelMenuSubProps {
    item?: any;
    expanded?: boolean;
}

export class PanelMenuSub extends React.Component<PanelMenuSubProps,any> {}

interface PanelMenuItemProps {
    child?: any;
    tabIndex?: boolean;
    index?: any;
}

export class PanelMenuItem extends React.Component<PanelMenuItemProps,any> {}

interface PanelMenuHeaderItemsProps {
    item?: any;
    first?: boolean;
    last?: boolean;
}

export class PanelMenuHeaderItems extends React.Component<PanelMenuHeaderItemsProps,any> {}

interface PanelMenuProps {
    id?: string;
    model?: Array<any>;
    style?: object;
    className?: string;
}

export class PanelMenu extends React.Component<PanelMenuProps,any> {}
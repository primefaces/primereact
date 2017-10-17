import React = require("react");

interface MegaMenuProps {
    id?: string;
    model?: Array<any>;
    style?: string;
    className: string;
    orientation: string;
}

export class MegaMenu extends React.Component<MegaMenuProps,any> {}
import React = require("react");
import {MenuItem} from '../menuitem/MenuItem';

interface PanelMenuProps {
    id?: string;
    model?: Array<MenuItem>;
    style?: object;
    className?: string;
}

export class PanelMenu extends React.Component<PanelMenuProps,any> {}
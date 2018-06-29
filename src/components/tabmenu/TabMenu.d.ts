import React = require("react");
import {MenuItem} from '../menuitem/MenuItem';

interface TabMenuProps {
    id?: string;
    model?: Array<MenuItem>;
    activeItem?: any;
    style?: any;
    className?: string;
    onTabChange?(e: { originalEvent: Event, value: any}): void;
}

export class TabMenu extends React.Component<TabMenuProps,any> {}
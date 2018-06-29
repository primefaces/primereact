import React = require("react");
import {MenuItem} from '../menuitem/MenuItem';

interface MegaMenuProps {
    id?: string;
    model?: Array<MenuItem>;
    style?: object;
    className?: string;
    orientation?: string;
    autoZIndex?: boolean;
    bazeZIndex?: number;
}

export class MegaMenu extends React.Component<MegaMenuProps,any> {}
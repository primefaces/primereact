import * as React from 'react';
import {MenuItem} from '../menuitem/MenuItem';

interface MegaMenuProps {
    id?: string;
    model?: MenuItem[];
    style?: object;
    className?: string;
    orientation?: string;
    autoZIndex?: boolean;
    bazeZIndex?: number;
}

export class MegaMenu extends React.Component<MegaMenuProps,any> {}

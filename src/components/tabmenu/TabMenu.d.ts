import * as React from 'react';
import { MenuItem } from '../menuitem/MenuItem';

interface OnTabChangeParams {
    originalEvent: Event;
    value: MenuItem;
}

interface TabMenuProps {
    id?: string;
    model?: MenuItem[];
    activeItem?: MenuItem;
    style?: object;
    className?: string;
    onTabChange?(e: OnTabChangeParams): void;
}

export class TabMenu extends React.Component<TabMenuProps, any> { }

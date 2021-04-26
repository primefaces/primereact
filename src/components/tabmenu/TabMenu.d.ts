import * as React from 'react';
import { MenuItem } from '../menuitem/MenuItem';

interface TabMenuTabChangeParams {
    originalEvent: React.SyntheticEvent;
    value: MenuItem;
}

export interface TabMenuProps {
    id?: string;
    model?: MenuItem[];
    activeItem?: MenuItem;
    style?: object;
    className?: string;
    onTabChange?(e: TabMenuTabChangeParams): void;
}

export declare class TabMenu extends React.Component<TabMenuProps, any> { }

import * as React from 'react';
import {MenuItem} from '../menuitem/MenuItem';

interface MenubarProps {
    id?: string;
    model?: MenuItem[];
    style?: object;
    className?: string;
}

export class Menubar extends React.Component<MenubarProps,any> {}

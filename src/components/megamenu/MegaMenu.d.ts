import * as React from 'react';
import { MenuItem } from '../menuitem/MenuItem';

type OrientationType = 'vertical' | 'horizontal';

interface MegaMenuProps {
    id?: string;
    model?: MenuItem[];
    style?: object;
    className?: string;
    orientation?: OrientationType;
}

export class MegaMenu extends React.Component<MegaMenuProps, any> { }

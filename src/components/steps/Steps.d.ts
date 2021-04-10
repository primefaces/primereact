import * as React from 'react';
import { MenuItem } from '../menuitem/MenuItem';

interface OnSelectParams {
    originalEvent: Event;
    item: MenuItem;
    index: number;
}

interface StepsProps {
    id?: string;
    model: MenuItem[];
    activeIndex?: number;
    readOnly?: boolean;
    style?: object;
    className?: string;
    onSelect?(e: OnSelectParams): void;
}

export class Steps extends React.Component<StepsProps, any> { }

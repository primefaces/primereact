import * as React from 'react';
import { MenuItem } from '../menuitem';

type BreadCrumbHomeTemplateType = React.ReactNode | ((props: BreadCrumbProps) => React.ReactNode);

export interface BreadCrumbProps {
    id?: string;
    model?: MenuItem[];
    home?: MenuItem;
    homeTemplate?: BreadCrumbHomeTemplateType;
    style?: object;
    className?: string;
    children?: React.ReactNode;
}

export declare class BreadCrumb extends React.Component<BreadCrumbProps, any> { }

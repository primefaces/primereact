import * as React from 'react';
import { IconType } from '../utils';

type TagSeverityType = 'success' | 'info' | 'warn' | 'error';

export interface TagProps {
    value?: React.ReactNode;
    severity?: TagSeverityType;
    rounded?: boolean;
    icon?: IconType<TagProps>;
    style?: object;
    className?: string;
    children?: React.ReactNode;
}

export declare class Tag extends React.Component<TagProps, any> { }

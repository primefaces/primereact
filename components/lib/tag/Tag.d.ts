import * as React from 'react';
import {IconType} from "../utils";

type TagSeverityType = 'success' | 'info' | 'warning' | 'danger' | (string & {});

export interface TagProps {
    value?: React.ReactNode;
    severity?: TagSeverityType;
    rounded?: boolean;
    icon?: IconType<TagProps>;
    style?: object;
    className?: string;
}

export declare class Tag extends React.Component<TagProps, any> { }

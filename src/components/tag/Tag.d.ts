import * as React from 'react';
import { MessageSeverity } from '../api';

declare namespace Tag {

    interface TagProps {
        value?: React.ReactNode;
        severity?: MessageSeverity;
        rounded?: boolean;
        icon?: string;
        style?: object;
        className?: string;
    }
}

export declare class Tag extends React.Component<Tag.TagProps, any> { }

import * as React from 'react';

export interface MentionProps {
    id?: string;
    model?: MenuItem[];
    style?: object;
    className?: string;
    orientation?: MegaMenuOrientationType;
}

export declare class Mention extends React.Component<MentionProps, any> { }

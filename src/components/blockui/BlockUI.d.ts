import * as React from 'react';

export interface BlockUIProps {
    id?: string;
    blocked?: boolean;
    fullScreen?: boolean;
    baseZIndex?: number;
    autoZIndex?: boolean;
    style?: object;
    className?: string;
    onBlocked?(): void;
    onUnblocked?(): void;
}

export declare class BlockUI extends React.Component<BlockUIProps, any> {
    public block(): void;
    public unblock(): void;
}

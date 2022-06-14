import * as React from 'react';

type BadgeSeverityType = 'success' | 'info' | 'warn' | 'error';

type BadgeSizeType = 'normal' | 'large' | 'xlarge';

export interface BadgeProps {
    value?: any;
    severity?: BadgeSeverityType;
    size?: BadgeSizeType;
    style?: object;
    className?: string;
    children?: React.ReactNode;
}

export declare class Badge extends React.Component<BadgeProps, any> { }

import * as React from 'react';

type BadgeSeverityType = 'success' | 'info' | 'warn' | 'error' | (string & {});

type BadgeSizeType = 'normal' | 'large' | 'xlarge';

export interface BadgeProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'ref'> {
    value?: any;
    severity?: BadgeSeverityType;
    size?: BadgeSizeType;
    children?: React.ReactNode;
}

export declare class Badge extends React.Component<BadgeProps, any> { }

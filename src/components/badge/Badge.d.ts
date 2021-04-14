import * as React from 'react';

declare namespace Badge {

    type SizeType = 'normal' | 'large' | 'xlarge';

    type SeverityType = 'info' | 'success' | 'warning' | 'danger';

    interface BadgeProps {
        value?: any;
        severity?: SeverityType;
        size?: SizeType;
        style?: object;
        className?: string;
    }
}

export declare class Badge extends React.Component<Badge.BadgeProps, any> { }

import * as React from 'react';

type SizeType = 'normal' | 'large' | 'xlarge';

type SeverityType = 'info' | 'success' | 'warning' | 'danger';

interface BadgeProps {
    value?: any;
    severity?: SeverityType;
    size?: SizeType;
    style?: object;
    className?: string;
}

export class Badge extends React.Component<BadgeProps, any> { }

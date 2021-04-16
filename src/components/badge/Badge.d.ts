import * as React from 'react';
import { MessageSeverity } from '../api';

declare namespace Badge {

    type SizeType = 'normal' | 'large' | 'xlarge';

    interface BadgeProps {
        value?: any;
        severity?: MessageSeverity;
        size?: SizeType;
        style?: object;
        className?: string;
    }
}

export declare class Badge extends React.Component<Badge.BadgeProps, any> { }

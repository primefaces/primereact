import * as React from 'react';

type SeverityType = 'info' | 'success' | 'warning' | 'danger';

interface TagProps {
    value?: React.ReactNode;
    severity?: SeverityType;
    rounded?: boolean;
    icon?: string;
    style?: object;
    className?: string;
}

export class Tag extends React.Component<TagProps, any> { }

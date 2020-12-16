import * as React from 'react';

interface Badge {
    value: any,
    severity: string,
    size: string,
    style: object,
    className: string
}

export class Badge extends React.Component<Badge,any> {}
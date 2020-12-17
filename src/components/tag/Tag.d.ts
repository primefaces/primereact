import * as React from 'react';

interface Tag {
    value: any,
    severity: string,
    rounded: boolean,
    icon: string,
    className: string,
    style: object
}

export class Tag extends React.Component<Tag,any> {}
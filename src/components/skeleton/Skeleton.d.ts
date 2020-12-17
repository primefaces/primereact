import * as React from 'react';

interface Skeleton {
    shape: string,
    size: string,
    width: string,
    height: string,
    borderRadius: string,
    animation: string,
    style: object,
    className: string
}

export class Skeleton extends React.Component<Skeleton, any> { }
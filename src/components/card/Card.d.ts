import * as React from 'react';

interface CardProps {
    id?: string;
    header?: any;
    footer?: any;
    title?: string|React.ReactNode;
    subTitle?: string|React.ReactNode;
    style?: object;
    className?: string;
}

export class Card extends React.Component<CardProps,any> {}

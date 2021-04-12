import * as React from 'react';

type TargetType = 'window' | undefined | null;

type ScrollBehavior = 'auto' | 'smooth';

interface ScrollTopProps {
    target?: TargetType;
    threshold?: number;
    icon?: string;
    behavior?: ScrollBehavior;
    className?: string;
    style?: object;
    transitionOptions?: object;
    onShow?(): void;
    onHide?(): void;
}

export class ScrollTop extends React.Component<ScrollTopProps, any> { }

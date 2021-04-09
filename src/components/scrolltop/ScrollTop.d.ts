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
}

export class ScrollTop extends React.Component<ScrollTopProps, any> { }

import * as React from 'react';

type AlignType = 'left' | 'right';

type LayoutType = 'vertical' | 'horizontal';

interface TimelineProps {
    id?: string;
    value?: any[];
    align?: AlignType;
    layout?: LayoutType;
    dataKey?: string;
    className?: string;
    style?: object;
    opposite?(item: any, index: number): React.ReactNode;
    marker?(item: any, index: number): React.ReactNode;
    content?(item: any, index: number): React.ReactNode;
}

export class Timeline extends React.Component<TimelineProps, any> { }

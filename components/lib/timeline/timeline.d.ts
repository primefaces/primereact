import * as React from 'react';

type TimelineAlignType = 'left' | 'right' | 'top' | 'bottom' | 'alternate';

type TimelineLayoutType = 'vertical' | 'horizontal';

type TimelineTemplateType = React.ReactNode | ((item: any, index: number) => React.ReactNode);

export interface TimelineProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    align?: TimelineAlignType;
    children?: React.ReactNode;
    content?: TimelineTemplateType;
    dataKey?: string;
    layout?: TimelineLayoutType;
    marker?: TimelineTemplateType;
    opposite?: TimelineTemplateType;
    value?: any[];
}

export declare class Timeline extends React.Component<TimelineProps, any> {
    public getElement(): HTMLDivElement;
}

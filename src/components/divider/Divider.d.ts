import * as React from 'react';

type AlignType = 'left' | 'right' | 'bottom' | 'top';

type LayoutType = 'vertical' | 'horizontal';

type BorderType = 'solid' | 'dashed' | 'dotted';

interface DividerProps {
    align?: AlignType;
    layout?: LayoutType;
    type?: BorderType;
    style?: object;
    className?: string;
}

export class Divider extends React.Component<DividerProps, any> { }

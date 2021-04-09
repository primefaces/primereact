import * as React from 'react';

type ModeType = 'determinate' | 'indeterminate';

type ValueType = string | number | undefined | null;

interface ProgressBarProps {
    id?: string;
    value?: ValueType;
    showValue?: boolean;
    unit?: string;
    style?: object;
    className?: string;
    mode?: ModeType;
    color?: string;
    displayValueTemplate?(value: ValueType): React.ReactNode;
}

export class ProgressBar extends React.Component<ProgressBarProps, any> { }

import * as React from 'react';

interface ProgressBarProps {
    id?: string;
    value?: number;
    showValue?: boolean;
    unit?: string;
    style?: object;
    className?: string;
    mode?: string
}

export class ProgressBar extends React.Component<ProgressBarProps,any> {}
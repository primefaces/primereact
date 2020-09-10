import * as React from 'react';

interface ProgressBarProps {
    id?: string;
    value?: number;
    showValue?: boolean;
    unit?: string;
    style?: object;
    className?: string;
    mode?: string;
    displayValueTemplate?(value: any): JSX.Element;
    color?: string;
}

export class ProgressBar extends React.Component<ProgressBarProps,any> {}
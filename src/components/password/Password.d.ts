import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface PasswordProps extends React.HTMLProps<HTMLInputElement> {
    promptLabel?: string;
    weakLabel?: string;
    mediumLabel?: string;
    strongLabel?: string;
    feedback?: boolean;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    [key: string]: any;
}

export class Password extends React.Component<PasswordProps,any> {}
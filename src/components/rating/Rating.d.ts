import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface RatingProps {
    id?: string;
    value?: number;
    disabled?: boolean;
    readonly?: boolean;
    stars?: number;
    cancel?: boolean;
    style?: object;
    className?: string;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    onChange?(e: {originalEvent: Event, value: number}): void;
}

export class Rating extends React.Component<RatingProps,any> {}

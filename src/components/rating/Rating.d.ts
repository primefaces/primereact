import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface OnChangeTargetOptions {
    name: string;
    id: string;
    value: number | undefined | null;
}

interface OnChangeParams {
    originalEvent: Event;
    value: number | undefined | null;
    stopPropagation(): void;
    preventDefault(): void;
    target: OnChangeTargetOptions;
}

interface RatingProps {
    id?: string;
    value?: number;
    disabled?: boolean;
    readOnly?: boolean;
    stars?: number;
    cancel?: boolean;
    style?: object;
    className?: string;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    onChange?(e: OnChangeParams): void;
}

export class Rating extends React.Component<RatingProps, any> { }

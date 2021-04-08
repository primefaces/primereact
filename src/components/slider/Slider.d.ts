import * as React from 'react';

type OrientationType = 'horizontal' | 'vertical';

type ValueType = number | [number, number];

interface OnChangeParams {
    originalEvent: Event;
    value: ValueType;
}

interface OnSlideEndParams extends OnChangeParams { }

interface SliderProps {
    id?: string;
    value?: ValueType;
    min?: number;
    max?: number;
    orientation?: OrientationType;
    step?: number;
    range?: boolean;
    style?: object;
    className?: string;
    disabled?: boolean;
    tabIndex?: number;
    ariaLabelledBy?: string;
    onChange?(e: OnChangeParams): void;
    onSlideEnd?(e: OnSlideEndParams): void;
}

export class Slider extends React.Component<SliderProps, any> { }

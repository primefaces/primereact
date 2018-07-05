import React = require("react");

interface SliderProps {
    id?: string;
    value?: number;
    animate?: boolean;
    min?: number;
    max?: number;
    orientation?: string;
    step?: number;
    range?: boolean;
    style?: object;
    className?: string;
    onChange?(e: {originalEvent: Event, value: any}): void;
}

export class Slider extends React.Component<SliderProps,any> {}
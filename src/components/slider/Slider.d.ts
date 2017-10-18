import React = require("react");

interface SliderProps {
    id?: string;
    animate?: boolean;
    min?: number;
    max?: number;
    orientation?: string;
    step?: number;
    range?: boolean;
    style?: object;
    className?: string;
}

export class Slider extends React.Component<SliderProps,any> {}
import React = require("react");

interface RatingProps {
    id?: string;
    value?: number;
    disabled?: boolean;
    readonly?: boolean;
    stars?: number;
    cancel?: boolean;
    style?: object;
    className?: string;
    onChange?(e: {originalEvent: Event, value: number}): void;
}

export class Rating extends React.Component<RatingProps,any> {}

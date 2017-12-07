import React = require("react");

interface RatingProps {
    id?: string;
    value?: string;
    disabled?: boolean;
    readonly?: boolean;
    stars?: number;
    cancel?: boolean;
    style?: object;
    className?: string;
    onChange?(e: {originalEvent: Event, value: string}): void;
}

export class Rating extends React.Component<RatingProps,any> {}
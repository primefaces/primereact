import React = require("react");

interface ChipsProps {
    id?: string;
    placeholder?: string;
    value?: Array<any>;
    field?: string;
    max?: number;
    disabled?: boolean;
    style?: object;
    className?: string;
    onAdd?(e: {originalEvent: Event, value: any}): void;
    onRemove?(e: {originalEvent: Event, value: any}): void;
    itemTemplate?(item: any): JSX.Element | undefined;
}

export class Chips extends React.Component<ChipsProps,any> {}
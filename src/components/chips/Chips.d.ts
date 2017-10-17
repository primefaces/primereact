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
    onAdd?(originalEvent: Event, value: Array<any>): void;
    onRemove?(originalEvent: Event, value: Array<any>): void;
    itemTemplate?(): void;
}

export class Chips extends React.Component<ChipsProps,any> {}
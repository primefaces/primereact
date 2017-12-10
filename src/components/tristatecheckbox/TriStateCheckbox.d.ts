import React = require("react");

interface TriStateCheckboxProps {
    id?: string;
    inputId?: string;
    name?: string;
    value?: boolean;
    style?: object;
    className?: string;
    onChange?(e: {originalEvent: Event, value: boolean}): void;
}

export class TriStateCheckbox extends React.Component<TriStateCheckboxProps,any> {}
import React = require("react");

interface TriStateCheckboxProps {
    id?: string;
    value?: boolean;
    onChange?(originalEvent: Event, value: boolean): void;
}

export class TriStateCheckbox extends React.Component<TriStateCheckboxProps,any> {}
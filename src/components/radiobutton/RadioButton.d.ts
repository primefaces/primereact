import React = require("react");

interface RadioButtonProps {
    id?: string;
    label?: string;
    value?: any;
    onChange?(originalEvent: Event, value: any, checked: boolean): void;
    checked?: boolean;
}

export class RadioButton extends React.Component<RadioButtonProps,any> {}
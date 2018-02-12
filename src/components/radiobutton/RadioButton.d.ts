import React = require("react");

interface RadioButtonProps {
    id?: string;
    inputId?: string;
    name?: string;
    value?: any;
    checked: boolean;
    style?: object;
    className?: string;
    disabled?: boolean;
    onChange({originalEvent: Event, value: any, checked: boolean}): void;
}

export class RadioButton extends React.Component<RadioButtonProps,any> {}
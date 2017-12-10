import React = require("react");

interface InputSwitchProps {
    id?: string;
    offLabel?: string;
    onLabel?: string;
    style?: object;
    className?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?(e: {originalEvent: Event, value: boolean}): void;
}

export class InputSwitch extends React.Component<InputSwitchProps,any> {}
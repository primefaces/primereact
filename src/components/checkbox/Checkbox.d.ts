import React = require("react");

interface CheckboxProps {
    id?: string;
    inputId?: string;
    value?: any;
    name?: string;
    checked?: boolean;
    style?: object;
    className?: string;
    onMouseDown?(): void;
    onContextMenu?(): void;
    onChange?(event: Event): void;
}

export class Checkbox extends React.Component<CheckboxProps,any> {}
import React = require("react");

interface CheckboxProps {
    id?: string;
    inputId?: string;
    value?: any;
    name?: string;
    checked: boolean;
    style?: object;
    className?: string;
    disabled?: boolean;
    readOnly?: boolean;
    onMouseDown?(event: Event): void;
    onContextMenu?(event: Event): void;
    onChange(e: { originalEvent: Event, value: any, checked: boolean}): void;
}

export class Checkbox extends React.Component<CheckboxProps,any> {}
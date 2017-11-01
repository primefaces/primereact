import React = require("react");

interface CheckboxProps {
    id?: string;
    label?: string;
    value?: any;
    onChange?(originalEvent: Event, value: any, checked:boolean): void;
    checked?: boolean;
    name?:string;
    onMouseDown?(): void;
    onContextMenu?(): void;
}

export class Checkbox extends React.Component<CheckboxProps,any> {}
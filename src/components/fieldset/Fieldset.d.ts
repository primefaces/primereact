import React = require("react");

interface FieldsetProps {
    id?: string;
    legend?: any;
    className?: string;
    style?: object;
    toggleable?: boolean;
    collapsed?: boolean;
    onExpand?(event: Event): void;
    onCollapse?(event: Event): void;
    onToggle?(e:{event: originalEvent, value: boolean}): void;
    onClick?(event: event): void;
}

export class Fieldset extends React.Component<FieldsetProps,any> {}
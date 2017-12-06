import React = require("react");

interface FieldsetProps {
    id?: string;
    legend?: any;
    className?: string;
    style?: object;
    toggleable?: boolean;
    collapsed?: boolean;
    onExpand?(): void;
    onCollapse?(event: Event): void;
}

export class Fieldset extends React.Component<FieldsetProps,any> {}
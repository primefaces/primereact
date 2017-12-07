import React = require("react");

interface SelectButtonProps {
    id?: string;
    value?: any;
    options?: Array<any>;
    tabIndex?: string;
    multiple?: boolean;
    disabled?: boolean;
    style?: object;
    className?: string;
    dataKey?: string;
    onChange?(e: {originalEvent: Event, value: any}): void;
}

export class SelectButton extends React.Component<SelectButtonProps,any> {}
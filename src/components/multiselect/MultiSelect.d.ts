import React = require("react");

interface MultiSelectProps {
    id?: string;
    value?: any;
    options?: Array<any>;
    optionLabel?: string;
    style?: object;
    className?: string;
    scrollHeight?: string;
    defaultLabel?: string;
    disabled?: boolean;
    filter?: boolean;
    dataKey?: string;
    appendTo?: HTMLElement;
    itemTemplate?(item: any): JSX.Element | undefined;
    onChange?(e: {originalEvent: Event, value: any}): void;
}

export class MultiSelect extends React.Component<MultiSelectProps,any> {}
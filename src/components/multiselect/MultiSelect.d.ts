import React = require("react");

interface MultiSelectProps {
    id?: string;
    value?: any;
    options?: Array<any>;
    style?: object;
    className?: string;
    scrollHeight?: string;
    defaultLabel?: string;
    disabled?: boolean;
    filter?: boolean;
    key?: string;
    itemTemplate?(): void;
    onChange?(originalEvent:Event; value: any): void;
}

export class MultiSelect extends React.Component<MultiSelectProps,any> {}
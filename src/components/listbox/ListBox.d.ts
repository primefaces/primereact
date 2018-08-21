import React = require("react");

interface ListBoxProps {
    id?: string,
    value?: any,
    options?: any[],
    optionLabel?: string,
    style?: object,
    listStyle?: object,
    className?: string,
    disabled?: boolean,
    dataKey?: string,
    multiple?: boolean,
    metaKeySelection?: boolean,
    filter?: boolean,
    itemTemplate?(item: any): JSX.Element | undefined,
    onChange?(e: {originalEvent: Event, value: any}): void;
}

export class ListBox extends React.Component<ListBoxProps,any> {}

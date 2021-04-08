import * as React from 'react';

interface CascadeSelectProps {
    id?: string;
    inputRef?: any;
    name?: string;
    style?: object;
    className?: string;
    value?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: string;
    optionGroupLabel?: string;
    options?: any[];
    placeholder?: string;
    itemTemplate?: any;
    disabled?: boolean;
    dataKey?: string;
    inputId?: string;
    tabIndex?: number;
    ariaLabelledBy?: string;
    appendTo?: any;
    onChange?(e: {originalEvent: Event, value: any}): void;
    onGroupChange?(e: {originalEvent: Event, value: any}): void;
    onBeforeShow?(): void;
    onBeforeHide?(): void;
    onShow?(): void;
    onHide?(): void;
}

export class CascadeSelect extends React.Component<CascadeSelectProps,any> {}

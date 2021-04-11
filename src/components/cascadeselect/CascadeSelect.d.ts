import * as React from 'react';

type ItemTemplateType = React.ReactNode | ((option: any) => React.ReactNode);

interface ChangeParams {
    originalEvent: React.SyntheticEvent;
    value: any;
}

interface GroupChangeParams extends ChangeParams { }

interface CascadeSelectProps {
    id?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    style?: object;
    className?: string;
    value?: any;
    name?: string;
    options?: any[];
    optionLabel?: string;
    optionValue?: string;
    optionGroupLabel?: string;
    optionGroupChildren?: string[];
    placeholder?: string;
    itemTemplate?: ItemTemplateType;
    disabled?: boolean;
    dataKey?: string;
    inputId?: string;
    tabIndex?: number;
    ariaLabelledBy?: string;
    appendTo?: HTMLElement;
    onChange?(e: ChangeParams): void;
    onGroupChange?(e: GroupChangeParams): void;
    onBeforeShow?(): void;
    onBeforeHide?(): void;
    onShow?(): void;
    onHide?(): void;
}

export class CascadeSelect extends React.Component<CascadeSelectProps, any> { }

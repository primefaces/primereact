import * as React from 'react';
import { CSSTransitionProps } from '../csstransition';
import { SelectItemOptionsType } from '../selectitem/selectitem';

type CascadeSelectItemTemplateType<TOption> = React.ReactNode | ((option: TOption) => React.ReactNode);

type CascadeSelectAppendToType = 'self' | HTMLElement | undefined | null;

interface CascadeSelectChangeParams<TOption> {
    originalEvent: React.SyntheticEvent;
    value: TOption;
}

interface CascadeSelectGroupChangeParams<TOption> extends CascadeSelectChangeParams<TOption> {}

export interface CascadeSelectProps<TOption> extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange' | 'ref'> {
    id?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    style?: object;
    className?: string;
    value?: any;
    name?: string;
    options?: SelectItemOptionsType<TOption>;
    optionLabel?: string;
    optionValue?: string;
    optionGroupLabel?: string;
    optionGroupChildren?: string[];
    placeholder?: string;
    itemTemplate?: CascadeSelectItemTemplateType<TOption>;
    disabled?: boolean;
    dataKey?: string;
    inputId?: string;
    tabIndex?: number;
    ariaLabelledBy?: string;
    appendTo?: CascadeSelectAppendToType;
    transitionOptions?: CSSTransitionProps;
    dropdownIcon?: string;
    onChange?(e: CascadeSelectChangeParams<TOption>): void;
    onGroupChange?(e: CascadeSelectGroupChangeParams<TOption>): void;
    onBeforeShow?(): void;
    onBeforeHide?(): void;
    onShow?(): void;
    onHide?(): void;
    children?: React.ReactNode;
}

export declare class CascadeSelect<TOption> extends React.Component<CascadeSelectProps<TOption>, any> {
    public getElement(): HTMLDivElement;
    public getInput(): HTMLInputElement;
    public getOverlay(): HTMLElement;
    public getLabel(): HTMLSpanElement;
}

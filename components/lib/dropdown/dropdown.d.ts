import * as React from 'react';
import TooltipOptions from '../tooltip/tooltipoptions';
import { CSSTransitionProps } from '../csstransition';
import { VirtualScrollerProps } from '../virtualscroller';
import { SelectItemOptionsType } from '../selectitem/selectitem';

type DropdownOptionGroupTemplateType<TOption> = React.ReactNode | ((option: TOption, index: number) => React.ReactNode);

type DropdownValueTemplateType<TOption> = React.ReactNode | ((option: TOption, props: DropdownProps<TOption>) => React.ReactNode);

type DropdownItemTemplateType<TOption> = React.ReactNode | ((option: TOption) => React.ReactNode);

type DropdownFilterTemplateType = React.ReactNode | ((options: DropdownFilterOptions) => React.ReactNode);

type DropdownEmptyMessageType<TOption> = React.ReactNode | ((props: DropdownProps<TOption>) => React.ReactNode);

type DropdownEmptyFilterMessageType<TOption> = React.ReactNode | ((props: DropdownProps<TOption>) => React.ReactNode);

type DropdownOptionDisabledType<TOption> = string | ((option: TOption) => boolean);

type DropdownAppendToType = 'self' | HTMLElement | undefined | null;

interface DropdownChangeTargetOptions<TOption> {
    name: string;
    id: string;
    value: TOption;
}

interface DropdownChangeParams<TOption> {
    originalEvent: React.SyntheticEvent;
    value: any;
    stopPropagation(): void;
    preventDefault(): void;
    target: DropdownChangeTargetOptions<TOption>;
}

interface DropdownFilterParams {
    originalEvent: React.SyntheticEvent;
    filter: string;
}

interface DropdownFilterOptions {
    filter?: (event?: KeyboardEvent) => void;
    reset?: () => void;
}

export interface DropdownProps<TOption> extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange' | 'ref'> {
    id?: string;
    inputRef?: React.Ref<HTMLSelectElement>;
    name?: string;
    value?: any;
    options?: SelectItemOptionsType<TOption>;
    optionLabel?: string;
    optionValue?: string;
    optionDisabled?: DropdownOptionDisabledType<TOption>;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    optionGroupTemplate?: DropdownOptionGroupTemplateType<TOption>;
    valueTemplate?: DropdownValueTemplateType<TOption>;
    filterTemplate?: DropdownFilterTemplateType;
    itemTemplate?: DropdownItemTemplateType<TOption>;
    style?: object;
    className?: string;
    virtualScrollerOptions?: VirtualScrollerProps;
    scrollHeight?: string;
    filter?: boolean;
    filterBy?: string;
    filterMatchMode?: string;
    filterPlaceholder?: string;
    filterLocale?: string;
    emptyMessage?: DropdownEmptyMessageType<TOption>;
    emptyFilterMessage?: DropdownEmptyFilterMessageType<TOption>;
    editable?: boolean;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    appendTo?: DropdownAppendToType;
    tabIndex?: number;
    autoFocus?: boolean;
    filterInputAutoFocus?: boolean;
    resetFilterOnHide?: boolean;
    showFilterClear?: boolean;
    panelClassName?: string;
    panelStyle?: object;
    dataKey?: string;
    inputId?: string;
    showClear?: boolean;
    maxLength?: number;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    transitionOptions?: CSSTransitionProps;
    dropdownIcon?: string;
    showOnFocus?: boolean;
    onChange?(e: DropdownChangeParams<TOption>): void;
    onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
    onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
    onMouseDown?(event: React.MouseEvent<HTMLElement>): void;
    onContextMenu?(event: React.MouseEvent<HTMLElement>): void;
    onShow?(): void;
    onHide?(): void;
    onFilter?(e: DropdownFilterParams): void;
    children?: React.ReactNode;
}

export declare class Dropdown<TOption> extends React.Component<DropdownProps<TOption>, any> {
    public getElement(): HTMLDivElement;
    public getInput(): HTMLInputElement;
    public getFocusInput(): HTMLInputElement;
    public getOverlay(): HTMLElement;
}

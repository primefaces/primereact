import * as React from 'react';
import TooltipOptions from '../tooltip/tooltipoptions';
import { CSSTransitionProps } from '../csstransition';
import { IconType } from '../utils';
import { VirtualScrollerProps } from '../virtualscroller';
import { SelectItemOptionsType } from '../selectitem/selectitem';

type MultiSelectOptionGroupTemplateType<TOption> = React.ReactNode | ((option: TOption, index: number) => React.ReactNode);

type MultiSelectItemTemplateType<TOption> = React.ReactNode | ((option: TOption) => React.ReactNode);

type MultiSelectSelectedItemTemplateType<TOption> = React.ReactNode | ((value: TOption) => React.ReactNode);

type MultiSelectFilterTemplateType = React.ReactNode | ((options: MultiSelectFilterOptions) => React.ReactNode);

type MultiSelectEmptyFilterMessageType<TOption> = React.ReactNode | ((props: MultiSelectProps<TOption>) => React.ReactNode);

type MultiSelectDisplayType = 'comma' | 'chip';

interface MultiSelectHeaderCheckboxChangeParams {
    originalEvent: React.FormEvent<HTMLInputElement>;
    checked: boolean;
}

interface MultiSelectPanelHeaderTemplateParams<TOption> {
    className: string;
    checkboxElement: HTMLElement;
    checked: boolean;
    onChange(e: MultiSelectHeaderCheckboxChangeParams): void;
    filterElement: JSX.Element;
    closeElement: JSX.Element;
    closeElementClassName: string;
    closeIconClassName: string;
    onCloseClick(event: React.MouseEvent<HTMLElement>): void;
    element: JSX.Element;
    props: MultiSelectProps<TOption>;
}

type MultiSelectPanelHeaderTemplateType<TOption> = React.ReactNode | ((e: MultiSelectPanelHeaderTemplateParams<TOption>) => React.ReactNode);

type MultiSelectPanelFooterTemplateType<TOption> = React.ReactNode | ((props: MultiSelectProps<TOption>, hide: () => void) => React.ReactNode);

type MultiSelectOptionDisabledType<TOption> = string | ((option: TOption) => boolean);

type MultiSelectAppendToType = 'self' | HTMLElement | undefined | null;

interface MultiSelectChangeTargetOptions<TOption> {
    name: string;
    id: string;
    value: TOption;
}

interface MultiSelectChangeParams<TOption> {
    originalEvent: React.SyntheticEvent;
    value: TOption;
    stopPropagation(): void;
    preventDefault(): void;
    target: MultiSelectChangeTargetOptions<TOption>;
}

interface MultiSelectFilterParams {
    originalEvent: React.SyntheticEvent;
    filter: string;
}

interface MultiSelectAllParams {
    originalEvent: React.SyntheticEvent;
    checked: boolean;
}

interface MultiSelectFilterOptions {
    filter?: (event?: KeyboardEvent) => void;
    reset?: () => void;
}

export interface MultiSelectProps<TOption> extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange' | 'ref'> {
    id?: string;
    inputRef?: React.Ref<HTMLSelectElement>;
    name?: string;
    value?: any;
    options?: SelectItemOptionsType<TOption>;
    optionLabel?: string;
    optionValue?: string;
    optionDisabled?: MultiSelectOptionDisabledType<TOption>;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    optionGroupTemplate?: MultiSelectOptionGroupTemplateType<TOption>;
    display?: MultiSelectDisplayType;
    style?: object;
    className?: string;
    panelClassName?: string;
    panelStyle?: object;
    virtualScrollerOptions?: VirtualScrollerProps;
    scrollHeight?: string;
    placeholder?: string;
    fixedPlaceholder?: boolean;
    disabled?: boolean;
    showClear?: boolean;
    filter?: boolean;
    filterBy?: string;
    filterMatchMode?: string;
    filterPlaceholder?: string;
    filterLocale?: string;
    emptyFilterMessage?: MultiSelectEmptyFilterMessageType<TOption>;
    resetFilterOnHide?: boolean;
    tabIndex?: number;
    dataKey?: string;
    inputId?: string;
    appendTo?: MultiSelectAppendToType;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    maxSelectedLabels?: number;
    selectionLimit?: number;
    selectedItemsLabel?: string;
    ariaLabelledBy?: string;
    itemTemplate?: MultiSelectItemTemplateType<TOption>;
    filterTemplate?: MultiSelectFilterTemplateType;
    selectedItemTemplate?: MultiSelectSelectedItemTemplateType<TOption>;
    panelHeaderTemplate?: MultiSelectPanelHeaderTemplateType<TOption>;
    panelFooterTemplate?: MultiSelectPanelFooterTemplateType<TOption>;
    transitionOptions?: CSSTransitionProps;
    dropdownIcon?: IconType<MultiSelectProps<TOption>>;
    removeIcon?: IconType<MultiSelectProps<TOption>>;
    showSelectAll?: boolean;
    selectAll?: boolean;
    onChange?(e: MultiSelectChangeParams<TOption>): void;
    onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
    onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
    onShow?(): void;
    onHide?(): void;
    onFilter?(e: MultiSelectFilterParams): void;
    onSelectAll?(e: MultiSelectAllParams): void;
    children?: React.ReactNode;
}

export declare class MultiSelect<TOption> extends React.Component<MultiSelectProps<TOption>, any> {
    public show(): void;
    public hide(): void;
    public getElement(): HTMLDivElement;
    public getInput(): HTMLInputElement;
    public getOverlay(): HTMLElement;
}

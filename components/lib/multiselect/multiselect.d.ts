import * as React from 'react';
import { CSSTransitionProps } from '../csstransition';
import { NestedKeyOf, SelectItemOptionsType } from '../selectitem/selectitem';
import TooltipOptions from '../tooltip/tooltipoptions';
import { IconType } from '../utils';
import { VirtualScrollerProps } from '../virtualscroller';

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

type MultiSelectValue<TOption, TValue, TGroupLabel, TGroupChildren> = TGroupLabel extends undefined
    ? TValue extends undefined
        ? TOption extends { value: any }
            ? TOption['value'][]
            : TOption[]
        : TValue extends keyof TOption
        ? TOption[TValue][]
        : any[]
    : TGroupChildren extends keyof TOption
    ? TValue extends undefined
        ? TOption[TGroupChildren] extends { value: any }[]
            ? TOption[TGroupChildren][0]['value'][]
            : TOption[TGroupChildren] extends any[]
            ? TOption[TGroupChildren][0][]
            : any[]
        : TOption[TGroupChildren] extends any[]
        ? TValue extends keyof TOption[TGroupChildren][0]
            ? TOption[TGroupChildren][0][TValue][]
            : any[]
        : any[]
    : any[];

type MultiSelectPanelHeaderTemplateType<TOption> = React.ReactNode | ((e: MultiSelectPanelHeaderTemplateParams<TOption>) => React.ReactNode);

type MultiSelectPanelFooterTemplateType<TOption> = React.ReactNode | ((props: MultiSelectProps<TOption>, hide: () => void) => React.ReactNode);

type MultiSelectOptionDisabledType<TOption> = string | ((option: TOption) => boolean);

type MultiSelectAppendToType = 'self' | HTMLElement | undefined | null;

interface MultiSelectChangeTargetOptions<TOption> {
    name: string;
    id: string;
    value: TOption;
}

interface MultiSelectChangeParams<TOption, TValue, TGroupLabel, TGroupChildren> {
    originalEvent: React.SyntheticEvent;
    value: MultiSelectValue<TOption, TValue, TGroupLabel, TGroupChildren>;
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

export interface MultiSelectProps<TOption, TValue = undefined, TGroupLabel = undefined, TGroupChildren = undefined> extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'value' | 'onChange' | 'ref'> {
    id?: string;
    inputRef?: React.Ref<HTMLSelectElement>;
    name?: string;
    value?: string | number | ReadonlyArray<string> | ReadonlyArray<number> | MultiSelectValue<TOption, TValue, TGroupLabel, TGroupChildren> | ReadonlyArray<TOption> | undefined;
    options?: SelectItemOptionsType<TOption>;
    optionLabel?: NestedKeyOf<TOption> | Omit<NestedKeyOf<TOption>, string>;
    optionValue?: TValue | Omit<TValue, string>;
    optionDisabled?: MultiSelectOptionDisabledType<TOption>;
    optionGroupLabel?: TGroupLabel | Omit<NestedKeyOf<TGroupLabel>, string>;
    optionGroupChildren?: TGroupChildren | Omit<NestedKeyOf<TGroupChildren>, string>;
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
    dataKey?: NestedKeyOf<TOption> | Omit<NestedKeyOf<TOption>, string>;
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
    dropdownIcon?: IconType<MultiSelectProps<TOption, TValue, TGroupLabel, TGroupChildren>>;
    removeIcon?: IconType<MultiSelectProps<TOption, TValue, TGroupLabel, TGroupChildren>>;
    showSelectAll?: boolean;
    selectAll?: boolean;
    onChange?(e: MultiSelectChangeParams<TOption, TValue, TGroupLabel, TGroupChildren>): void;
    onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
    onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
    onShow?(): void;
    onHide?(): void;
    onFilter?(e: MultiSelectFilterParams): void;
    onSelectAll?(e: MultiSelectAllParams): void;
    children?: React.ReactNode;
}

export declare class MultiSelect<
    TOption,
    TValue extends NestedKeyOf<TOption> | undefined = undefined,
    TGroupLabel extends NestedKeyOf<TOption> | undefined = undefined,
    TGroupChildren extends NestedKeyOf<TOption> | undefined = undefined
> extends React.Component<MultiSelectProps<TOption, TValue, TGroupLabel, TGroupChildren>, any> {
    public show(): void;
    public hide(): void;
    public getElement(): HTMLDivElement;
    public getInput(): HTMLInputElement;
    public getOverlay(): HTMLElement;
}

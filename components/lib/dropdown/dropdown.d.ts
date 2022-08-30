import * as React from 'react';
import { CSSTransitionProps } from '../csstransition';
import { SelectItemOptionsType } from '../selectitem/selectitem';
import TooltipOptions from '../tooltip/tooltipoptions';
import { VirtualScrollerProps } from '../virtualscroller';

type DropdownOptionGroupTemplateType<TOption> = React.ReactNode | ((option: TOption, index: number) => React.ReactNode);

type DropdownValueTemplateType<TOption> = React.ReactNode | ((option: TOption, props: DropdownProps<TOption>) => React.ReactNode);

type DropdownItemTemplateType<TOption> = React.ReactNode | ((option: TOption) => React.ReactNode);

type DropdownFilterTemplateType = React.ReactNode | ((options: DropdownFilterOptions) => React.ReactNode);

type DropdownEmptyMessageType<TOption> = React.ReactNode | ((props: DropdownProps<TOption>) => React.ReactNode);

type DropdownEmptyFilterMessageType<TOption> = React.ReactNode | ((props: DropdownProps<TOption>) => React.ReactNode);

type DropdownOptionDisabledType<TOption> = string | ((option: TOption) => boolean);

type DropdownAppendToType = 'self' | HTMLElement | undefined | null;

type DropdownValue<TOption, TValue, TGroupLabel, TGroupChildren> = TGroupLabel extends undefined
    ? TValue extends undefined
        ? TOption extends { value: any }
            ? TOption['value']
            : TOption
        : TValue extends keyof TOption
        ? TOption[TValue]
        : any
    : TGroupChildren extends keyof TOption
    ? TValue extends undefined
        ? TOption[TGroupChildren] extends { value: any }[]
            ? TOption[TGroupChildren][0]['value']
            : TOption[TGroupChildren] extends any[]
            ? TOption[TGroupChildren][0]
            : any
        : TOption[TGroupChildren] extends any[]
        ? TValue extends keyof TOption[TGroupChildren][0]
            ? TOption[TGroupChildren][0][TValue]
            : any
        : any
    : any;

interface DropdownChangeTargetOptions<TOption> {
    name: string;
    id: string;
    value: TOption;
}

interface DropdownChangeParams<TOption, TValue, TGroupLabel, TGroupChildren> {
    originalEvent: React.SyntheticEvent;
    value: DropdownValue<TOption, TValue, TGroupLabel, TGroupChildren>;
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
type NestedKeyOf<ObjectType> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}` : `${Key}`;
}[keyof ObjectType & (string | number)];

export interface DropdownProps<TOption, TValue = undefined, TGroupLabel = undefined, TGroupChildren = undefined> extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'value' | 'onChange' | 'ref'> {
    id?: string;
    inputRef?: React.Ref<HTMLSelectElement>;
    name?: string;
    value?: string | number | DropdownValue<TOption, TValue, TGroupLabel, TGroupChildren> | undefined;
    options?: SelectItemOptionsType<TOption>;
    optionLabel?: NestedKeyOf<TOption> | Omit<NestedKeyOf<TOption>, string>;
    optionValue?: TValue | Omit<TValue, string>;
    optionDisabled?: DropdownOptionDisabledType<TOption>;
    optionGroupLabel?: TGroupLabel | Omit<NestedKeyOf<TGroupLabel>, string>;
    optionGroupChildren?: TGroupChildren | Omit<NestedKeyOf<TGroupChildren>, string>;
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
    onChange?(e: DropdownChangeParams<TOption, TValue, TGroupLabel, TGroupChildren>): void;
    onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
    onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
    onMouseDown?(event: React.MouseEvent<HTMLElement>): void;
    onContextMenu?(event: React.MouseEvent<HTMLElement>): void;
    onShow?(): void;
    onHide?(): void;
    onFilter?(e: DropdownFilterParams): void;
    children?: React.ReactNode;
}

export declare class Dropdown<
    TOption,
    TValue extends NestedKeyOf<TOption> | undefined = undefined,
    TGroupLabel extends NestedKeyOf<TOption> | undefined = undefined,
    TGroupChildren extends NestedKeyOf<TOption> | undefined = undefined
> extends React.Component<DropdownProps<TOption, TValue, TGroupLabel, TGroupChildren>, any> {
    public getElement(): HTMLDivElement;
    public getInput(): HTMLInputElement;
    public getFocusInput(): HTMLInputElement;
    public getOverlay(): HTMLElement;
}

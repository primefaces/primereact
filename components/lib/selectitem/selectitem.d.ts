import { IconType } from '../utils';

export type SelectItemOptionsType<TOption> = SelectItem[] | TOption[];

export interface SelectItem {
    label?: string;
    value?: any;
    className?: string;
    icon?: IconType<SelectItem>;
    title?: string;
    disabled?: boolean;
}

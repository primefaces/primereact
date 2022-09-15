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

export type NestedKeyOf<ObjectType> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType extends any[] ? 'length' : ObjectType[Key] extends object ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}` : `${Key}`;
}[keyof ObjectType & (string | number)];

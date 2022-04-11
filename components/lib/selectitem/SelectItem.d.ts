import { IconType } from '../utils';

export default interface SelectItem {
    label?: string;
    value?: any;
    className?: string;
    icon?: IconType<SelectItem>;
    title?: string;
    disabled?: boolean;
}

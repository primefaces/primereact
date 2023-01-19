/**
 *
 * @todo Write the documentation.
 *
 * @todo Write the documentation.
 *
 * @module selectitem
 *
 */
import { IconType } from '../utils';

/**
 * @group Misc
 */
export type SelectItemOptionsType = SelectItem[] | any[];

/**
 * Defines valid properties in SelectItem component.
 * @group Properties
 */
export interface SelectItem {
    /**
     * Label of the option.
     */
    label?: string;
    /**
     * Value of the option.
     */
    value?: any;
    /**
     * ClassName of the option.
     */
    className?: string;
    /**
     * Icon to display to the option.
     */
    icon?: IconType<SelectItem>;
    /**
     * Tooltip text of the option. (Not supported)
     */
    title?: string;
    /**
     * Whether the option is disabled or not. (Not supported)
     * @defaultValue false
     */
    disabled?: boolean;
}

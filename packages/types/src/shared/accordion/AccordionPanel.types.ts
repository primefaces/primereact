import { BaseComponentProps } from '..';

/**
 * AccordionPanel component props.
 */
export interface AccordionPanelProps extends BaseComponentProps<{ readonly __TYPE: 'AccordionPanel' }, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'AccordionPanel';
    /**
     * Value of the active panel or an array of values in multiple mode.
     * @defaultValue null
     */
    value?: string | number | undefined;
    /**
     * Whether the item is disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
}

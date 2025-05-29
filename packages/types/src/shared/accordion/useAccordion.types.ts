/**
 * Props for the useAccordion hook.
 */
export interface useAccordionProps {
    /**
     * The type of the hook.
     */
    readonly __TYPE?: 'useAccordion';
    /**
     * Value of the active panel or an array of values in multiple mode.
     * @defaultValue null
     */
    value?: string | string[] | number | number[] | undefined;
    /**
     * When enabled, multiple tabs can be activated at the same time.
     * @defaultValue false
     */
    multiple?: boolean | undefined;
    /**
     * When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.
     * @defaultValue false
     */
    lazy?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     * @defaultValue 0
     */
    tabIndex?: number | undefined;
    /**
     * When enabled, the focused tab is activated.
     * @defaultValue false
     */
    selectOnFocus?: boolean | undefined;
}

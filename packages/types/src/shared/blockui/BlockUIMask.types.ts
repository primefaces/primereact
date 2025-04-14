import { BaseComponentProps } from '..';

/**
 * Checkbox component props.
 */
export interface BlockUIMaskProps extends BaseComponentProps<{ readonly __TYPE: 'BlockUIMask' }, 'div', ['defaultValue']> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'BlockUIMask';
    /**
     * Style class of the mask.
     */
    className?: string | undefined;
}

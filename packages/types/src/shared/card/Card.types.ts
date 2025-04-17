import { BaseComponentProps } from '..';
import { useCardProps } from './useCard.types';

/**
 * Card component props.
 */
export interface CardProps extends BaseComponentProps<useCardProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'Card';
}

import { BaseComponentProps } from '..';

/**
 * Tag icon component props.
 */
export interface TagIconProps extends BaseComponentProps<null, 'span'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'TagIcon';
    /**
     * The icon to display in the tag.
     */
    icon?: string | undefined;
}

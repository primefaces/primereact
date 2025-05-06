import { BaseComponentProps } from '..';
import { useTagProps } from './useTag.types';

/**
 * Checkbox component props.
 */
export interface TagProps extends BaseComponentProps<useTagProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'Tag';
    /**
     * Severity type of the tag.
     */
    severity?: 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast' | undefined;
    /**
     * Whether the corners of the tag are rounded.
     * @defaultValue false
     */
    rounded?: boolean | undefined;
}

/**
 *
 * Avatar represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primereact.org/avatar/)
 *
 * @module avatar
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Avatar component.
 */
export const AvatarClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-avatar',
    /**
     * Class name of the box element
     */
    label: 'p-avatar-label',
    /**
     * Class name of the input element
     */
    icon: 'p-avatar-icon'
} as const;

/**
 * Type representing the CSS class names used in the Avatar component.
 */
export type AvatarClassNamesType = (typeof AvatarClassNames)[keyof typeof AvatarClassNames];

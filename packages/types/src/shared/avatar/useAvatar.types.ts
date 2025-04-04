export interface useAvatarChangeEvent {
    /**
     * The original event that triggered the change.
     */
}

/**
 * Props for the useCheckbox hook.
 */
export interface useAvatarProps {
    /**
     * The type of the hook.
     */
    readonly __TYPE?: 'useAvatar';
    label?: string | undefined;
    icon?: string | undefined;
    image?: string | undefined;
    size?: string | undefined;
    shape?: string | undefined;
    ariaLabelledBy?: string | undefined;
    ariaLabel?: string | undefined;
}

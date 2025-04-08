/**
 * Props for the useMeterGroup hook.
 */
export interface useMeterGroupProps {
    /**
     * The type of the hook.
     */
    readonly __TYPE?: 'useMeterGroup';
    /**
     * Mininum boundary value.
     * @defaultValue 0
     */
    min?: number | undefined;
    /**
     * Maximum boundary value.
     * @defaultValue 100
     */
    max?: number | undefined;
}

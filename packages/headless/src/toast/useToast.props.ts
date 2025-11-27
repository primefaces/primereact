import type { useToastProps } from '@primereact/types/shared/toast';

export const defaultProps: useToastProps = {
    timeout: 6000,
    gap: 14,
    position: 'bottom-right',
    group: undefined,
    limit: 3
};

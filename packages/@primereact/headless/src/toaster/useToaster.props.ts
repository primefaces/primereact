import type { useToasterProps } from '@primereact/types/shared/toaster';

export const defaultProps: useToasterProps = {
    timeout: 6000,
    gap: 12,
    position: 'bottom-right',
    group: undefined,
    limit: 3
};

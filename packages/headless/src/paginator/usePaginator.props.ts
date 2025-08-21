import type { usePaginatorProps } from '@primereact/types/shared/paginator';

export const defaultProps: usePaginatorProps = {
    defaultPage: 1,
    page: undefined,
    total: 0,
    itemsPerPage: 10,
    onPageChange: undefined,
    siblings: 1,
    edges: 1,
    disabled: false,
    showEllipsis: true
};

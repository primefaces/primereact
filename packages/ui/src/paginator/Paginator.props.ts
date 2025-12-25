import * as HeadlessPaginator from '@primereact/headless/paginator';
import type { PaginatorProps } from '@primereact/types/shared/paginator';

export const defaultProps: PaginatorProps = {
    ...HeadlessPaginator.defaultProps,
    as: 'nav'
};

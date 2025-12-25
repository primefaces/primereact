import * as HeadlessPaginator from '@primereact/headless/paginator';
import type { PaginatorRootProps } from '@primereact/types/shared/paginator';

export const defaultRootProps: PaginatorRootProps = {
    ...HeadlessPaginator.defaultProps,
    as: 'nav'
};

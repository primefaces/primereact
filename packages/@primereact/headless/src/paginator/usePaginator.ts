import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './usePaginator.props';

const range = (start: number, end: number) => {
    const length = Math.max(0, end - start + 1);

    return Array.from({ length }, (_, i) => ({ type: 'page' as const, value: start + i }));
};

const ELLIPSIS = { type: 'ellipsis' as const };

export const usePaginator = withHeadless({
    name: 'usePaginator',
    defaultProps,
    setup({ props }) {
        const { edges = 1, siblings = 1, showEllipsis = true } = props;
        const [activePage, setActivePage] = React.useState(props.defaultPage ?? props.page ?? 1);

        const totalPages = Math.max(1, Math.ceil((props.total ?? 0) / (props.itemsPerPage ?? 1)));
        const canPrev = activePage > 1;
        const canNext = activePage < totalPages;

        const handlePage = (page?: number) => {
            if (props.disabled || page === undefined) return;

            const newPageValue = page < 1 ? 1 : page > totalPages ? totalPages : page;

            if (newPageValue !== activePage) {
                props.onPageChange?.({
                    originalEvent: {} as React.SyntheticEvent,
                    value: newPageValue
                });
            }

            setActivePage(newPageValue);
        };

        const next = () => handlePage(activePage + 1);
        const prev = () => handlePage(activePage - 1);
        const first = () => handlePage(1);
        const last = () => handlePage(totalPages);

        const pages = React.useMemo(() => {
            const leftSiblingIndex = Math.max(activePage - siblings, 1);
            const rightSiblingIndex = Math.min(activePage + siblings, totalPages);

            if (showEllipsis) {
                const windowSize = 2 * edges + 2 * siblings + (showEllipsis ? 3 : 1);

                if (windowSize >= totalPages) {
                    return range(1, totalPages);
                }

                const isShowLeftEllipsis = leftSiblingIndex > edges + 2;
                const isShowRightEllipsis = rightSiblingIndex < totalPages - edges - 1;

                return [
                    ...range(1, edges),

                    ...(isShowLeftEllipsis ? [ELLIPSIS] : range(edges + 1, siblings * 2 + edges + 2)),

                    ...(isShowLeftEllipsis && isShowRightEllipsis ? range(leftSiblingIndex, rightSiblingIndex) : []),

                    ...(isShowRightEllipsis ? [ELLIPSIS] : range(totalPages - edges - 1 - 2 * siblings, totalPages - edges)),

                    ...range(totalPages - edges + 1, totalPages)
                ];
            } else {
                return [...range(Math.max(Math.min(leftSiblingIndex, rightSiblingIndex - 2 * siblings), 1), Math.min(Math.max(rightSiblingIndex, leftSiblingIndex + 2 * siblings), totalPages))];
            }
        }, [totalPages, edges, siblings, activePage, showEllipsis]);

        React.useEffect(() => {
            if (props.page !== undefined) {
                handlePage(props.page);
            }
        }, [props.page]);

        return {
            state: {
                activePage,
                totalPages,
                canPrev,
                canNext
            },
            pages,
            prev,
            next,
            first,
            last,
            handlePage
        };
    }
});

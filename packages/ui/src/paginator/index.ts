export * as Paginator from './UIPaginator.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultContentProps,
    defaultEllipsisProps,
    defaultFirstProps,
    defaultLastProps,
    defaultNextProps,
    defaultPageProps,
    defaultPagesProps,
    defaultPrevProps,
    defaultRootProps,
    PaginatorContent,
    PaginatorEllipsis,
    PaginatorFirst,
    PaginatorLast,
    PaginatorNext,
    PaginatorPage,
    PaginatorPages,
    PaginatorPrev,
    PaginatorProps,
    PaginatorProvider,
    usePaginatorContext
} from 'primereact/paginator';
export { UIPaginatorRoot as PaginatorRoot } from './root';

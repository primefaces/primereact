export * from './Paginator.context';
export * as Paginator from './Paginator.parts';
export * as PaginatorProps from './Paginator.props';

// Named runtime exports to maximize tree-shaking
export { defaultContentProps, PaginatorContent } from './content';
export { defaultEllipsisProps, PaginatorEllipsis } from './ellipsis';
export { defaultFirstProps, PaginatorFirst } from './first';
export { defaultLastProps, PaginatorLast } from './last';
export { defaultNextProps, PaginatorNext } from './next';
export { defaultPageProps, PaginatorPage } from './page';
export { defaultPagesProps, PaginatorPages } from './pages';
export { defaultPrevProps, PaginatorPrev } from './prev';
export { defaultRootProps, PaginatorRoot } from './root';

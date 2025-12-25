export * from './Breadcrumb.context';
export * as Breadcrumb from './Breadcrumb.parts';
export * as BreadcrumbProps from './Breadcrumb.props';

// Named runtime exports to maximize tree-shaking
export { BreadcrumbItem, defaultItemProps } from './item';
export { BreadcrumbList, defaultListProps } from './list';
export { BreadcrumbRoot, defaultRootProps } from './root';
export { BreadcrumbSeparator, defaultSeparatorProps } from './separator';

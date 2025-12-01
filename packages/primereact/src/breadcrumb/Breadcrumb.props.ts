import * as HeadlessBreadcrumb from '@primereact/headless/breadcrumb';
import type { BreadcrumbProps } from '@primereact/types/shared/breadcrumb';

export const defaultProps: BreadcrumbProps = {
    ...HeadlessBreadcrumb.defaultProps,
    as: 'nav'
};

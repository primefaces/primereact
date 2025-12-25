import * as HeadlessBreadcrumb from '@primereact/headless/breadcrumb';
import type { BreadcrumbRootProps } from '@primereact/types/shared/breadcrumb';

export const defaultRootProps: BreadcrumbRootProps = {
    ...HeadlessBreadcrumb.defaultProps,
    as: 'nav'
};

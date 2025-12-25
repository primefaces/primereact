import * as HeadlessTabs from '@primereact/headless/tabs';
import type { TabsProps } from '@primereact/types/shared/tabs';

export const defaultProps: TabsProps = {
    ...HeadlessTabs.defaultProps,
    as: 'div',
    lazy: false,
    scrollable: false,
    showNavigators: true,
    tabIndex: 0
};

import * as HeadlessTabs from '@primereact/headless/tabs';
import type { TabsRootProps } from '@primereact/types/shared/tabs';

export const defaultRootProps: TabsRootProps = {
    ...HeadlessTabs.defaultProps,
    as: 'div',
    lazy: false,
    scrollable: false,
    showNavigators: true,
    tabIndex: 0
};

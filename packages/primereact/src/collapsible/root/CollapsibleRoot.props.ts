import * as HeadlessCollapsible from '@primereact/headless/collapsible';
import type { CollapsibleRootProps } from '@primereact/types/shared/collapsible';

export const defaultRootProps: CollapsibleRootProps = {
    ...HeadlessCollapsible.defaultProps,
    as: 'div',
    lazy: true,
    tabIndex: 0,
    disabled: false,
    motionProps: undefined
};

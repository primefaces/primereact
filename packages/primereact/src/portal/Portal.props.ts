import * as HeadlessPortal from '@primereact/headless/portal';
import type { PortalProps } from '@primereact/types/shared/portal';

export const defaultProps: PortalProps = {
    ...HeadlessPortal.defaultProps,
    __TYPE: 'Portal',
    element: null,
    appendTo: null
};

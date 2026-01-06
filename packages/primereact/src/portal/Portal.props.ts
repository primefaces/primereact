import * as HeadlessPortal from '@primereact/headless/portal';
import type { PortalRootProps } from '@primereact/types/shared/portal';

export const defaultRootProps: PortalRootProps = {
    ...HeadlessPortal.defaultProps,
    element: undefined,
    appendTo: 'body'
};

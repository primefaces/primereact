import * as HeadlessToaster from '@primereact/headless/toaster';
import type { ToasterRootProps } from '@primereact/types/shared/toaster';

export const defaultRootProps: ToasterRootProps = {
    ...HeadlessToaster.defaultProps,
    richColors: false,
    icons: {}
};

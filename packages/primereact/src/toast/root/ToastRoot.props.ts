import * as HeadlessToast from '@primereact/headless/toast';
import type { ToastRootProps } from '@primereact/types/shared/toast';

export const defaultRootProps: ToastRootProps = {
    ...HeadlessToast.defaultProps,
    richColors: false
};

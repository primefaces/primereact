import * as HeadlessToast from '@primereact/headless/toast';
import type { ToastProps } from '@primereact/types/shared/toast';

export const defaultProps: ToastProps = {
    ...HeadlessToast.defaultProps,
    richColors: false
};

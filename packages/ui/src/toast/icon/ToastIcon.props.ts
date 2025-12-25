import * as Icon from '@primereact/core/icon';
import type { ToastIconProps } from '@primereact/types/shared/toast';

export const defaultIconProps: ToastIconProps = {
    ...(Icon.defaultIconProps as ToastIconProps),
    icons: undefined
};

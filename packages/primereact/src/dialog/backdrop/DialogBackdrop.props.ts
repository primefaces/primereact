import type { DialogBackdropProps } from '@primereact/types/shared/dialog';
import { Backdrop } from 'primereact/backdrop';

export const defaultBackdropProps: DialogBackdropProps = {
    ...(Backdrop.defaultProps as DialogBackdropProps),
    as: Backdrop
};

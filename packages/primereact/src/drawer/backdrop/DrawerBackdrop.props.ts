import type { DrawerBackdropProps } from '@primereact/types/shared/drawer';
import { Backdrop } from 'primereact/backdrop';

export const defaultBackdropProps: DrawerBackdropProps = {
    ...(Backdrop.defaultProps as DrawerBackdropProps),
    as: Backdrop
};

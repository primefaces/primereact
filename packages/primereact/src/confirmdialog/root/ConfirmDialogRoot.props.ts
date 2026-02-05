import type { ConfirmDialogRootProps } from '@primereact/types/shared/confirmdialog';
import { DialogProps, DialogRoot } from 'primereact/dialog';

export const defaultRootProps: ConfirmDialogRootProps = {
    ...(DialogProps.defaultRootProps as ConfirmDialogRootProps),
    as: DialogRoot,
    position: 'center'
};

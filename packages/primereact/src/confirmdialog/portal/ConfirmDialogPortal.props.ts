import { ConfirmDialogPortalProps } from '@primereact/types/shared/confirmdialog';
import { DialogPortal, DialogProps } from 'primereact/dialog';

export const defaultPortalProps: ConfirmDialogPortalProps = {
    ...(DialogProps.defaultPortalProps as ConfirmDialogPortalProps),
    as: DialogPortal
};

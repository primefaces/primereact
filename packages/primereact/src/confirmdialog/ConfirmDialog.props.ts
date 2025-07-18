import * as HeadlessConfirmDialog from '@primereact/headless/confirmdialog';
import type { ConfirmDialogProps } from '@primereact/types/shared/confirmdialog';

export const defaultProps: ConfirmDialogProps = {
    ...HeadlessConfirmDialog.defaultProps,
    position: 'center'
};

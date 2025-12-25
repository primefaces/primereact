import * as HeadlessConfirmDialog from '@primereact/headless/confirmdialog';
import type { ConfirmDialogRootProps } from '@primereact/types/shared/confirmdialog';

export const defaultRootProps: ConfirmDialogRootProps = {
    ...HeadlessConfirmDialog.defaultProps,
    position: 'center'
};

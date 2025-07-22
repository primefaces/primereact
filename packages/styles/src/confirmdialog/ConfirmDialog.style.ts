import { createStyles } from '@primereact/styles/utils';
import type { ConfirmDialogInstance } from '@primereact/types/shared/confirmdialog';
import { style } from '@primeuix/styles/confirmdialog';

export const styles = createStyles<ConfirmDialogInstance>({
    name: 'confirmdialog',
    style,
    classes: {
        root: 'p-confirmdialog',
        trigger: 'p-confirmdialog-trigger-button',
        icon: 'p-confirmdialog-icon',
        message: 'p-confirmdialog-message',
        close: 'p-confirmdialog-reject-button',
        action: 'p-confirmdialog-accept-button'
    }
});

import { createStyles } from '@primereact/styles/utils';
import type { ConfirmPopupInstance } from '@primereact/types/shared/confirmpopup';
import { style } from '@primeuix/styles/confirmpopup';

export const styles = createStyles<ConfirmPopupInstance>({
    name: 'confirmpopup',
    style,
    classes: {
        root: 'p-confirmpopup p-component',
        content: 'p-confirmpopup-content',
        icon: 'p-confirmpopup-icon',
        message: 'p-confirmpopup-message',
        footer: 'p-confirmpopup-footer',
        reject: 'p-confirmpopup-reject-button',
        accept: 'p-confirmpopup-accept-button'
    }
});

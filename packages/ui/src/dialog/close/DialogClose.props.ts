import { DialogCloseProps } from '@primereact/types/shared/dialog';
import * as Button from 'primereact/button';

export const defaultCloseProps: DialogCloseProps = {
    ...(Button.defaultProps as DialogCloseProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

import { DialogCloseProps } from '@primereact/types/shared/dialog';
import { Button, ButtonProps } from 'primereact/button';

export const defaultCloseProps: DialogCloseProps = {
    ...(ButtonProps.defaultProps as DialogCloseProps),
    as: Button,
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

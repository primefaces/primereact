import { DialogMaximizableProps } from '@primereact/types/shared/dialog';
import { Button, ButtonProps } from 'primereact/button';

export const defaultMaximizableProps: DialogMaximizableProps = {
    ...(ButtonProps.defaultProps as DialogMaximizableProps),
    as: Button,
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

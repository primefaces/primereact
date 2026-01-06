import { DialogMaximizableProps } from '@primereact/types/shared/dialog';
import { ButtonProps } from 'primereact/button';

export const defaultMaximizableProps: DialogMaximizableProps = {
    ...(ButtonProps.defaultProps as DialogMaximizableProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

import { DialogMaximizableProps } from '@primereact/types/shared/dialog';
import { ButtonProps } from 'primereact/button';

export const defaultMaximizableProps: DialogMaximizableProps = {
    ...(ButtonProps.RootDefaults as DialogMaximizableProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

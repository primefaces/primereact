import { DialogMaximizableProps } from '@primereact/types/shared/dialog';
import * as Button from 'primereact/button';

export const defaultMaximizableProps: DialogMaximizableProps = {
    ...(Button.defaultProps as DialogMaximizableProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

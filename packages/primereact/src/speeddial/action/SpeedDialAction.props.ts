import { SpeedDialActionProps } from '@primereact/types/shared/speeddial';
import { Button, ButtonProps } from 'primereact/button';

export const defaultActionProps: SpeedDialActionProps = {
    ...(ButtonProps.defaultProps as SpeedDialActionProps),
    as: Button,
    iconOnly: true,
    severity: 'secondary',
    rounded: true,
    size: 'small'
};

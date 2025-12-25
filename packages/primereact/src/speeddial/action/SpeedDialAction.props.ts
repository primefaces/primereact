import { SpeedDialActionProps } from '@primereact/types/shared/speeddial';
import { ButtonProps } from 'primereact/button';

export const defaultActionProps: SpeedDialActionProps = {
    ...(ButtonProps.RootDefaults as SpeedDialActionProps),
    iconOnly: true,
    severity: 'secondary',
    rounded: true,
    size: 'small'
};

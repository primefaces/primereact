import { SpeedDialActionProps } from '@primereact/types/shared/speeddial';
import * as Button from 'primereact/button';

export const defaultActionProps: SpeedDialActionProps = {
    ...(Button.defaultProps as SpeedDialActionProps),
    iconOnly: true,
    severity: 'secondary',
    rounded: true,
    size: 'small'
};

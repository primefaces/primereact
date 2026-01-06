import { SpeedDialButtonProps } from '@primereact/types/shared/speeddial';
import { ButtonProps } from 'primereact/button';

export const defaultButtonProps: SpeedDialButtonProps = {
    ...(ButtonProps.defaultProps as SpeedDialButtonProps),
    rounded: true,
    iconOnly: true
};

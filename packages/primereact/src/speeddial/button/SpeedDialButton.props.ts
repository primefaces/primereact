import { SpeedDialButtonProps } from '@primereact/types/shared/speeddial';
import { ButtonProps } from 'primereact/button';

export const defaultButtonProps: SpeedDialButtonProps = {
    ...(ButtonProps.RootDefaults as SpeedDialButtonProps),
    rounded: true,
    iconOnly: true
};

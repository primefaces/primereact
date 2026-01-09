import { SpeedDialButtonProps } from '@primereact/types/shared/speeddial';
import { Button, ButtonProps } from 'primereact/button';

export const defaultButtonProps: SpeedDialButtonProps = {
    ...(ButtonProps.defaultProps as SpeedDialButtonProps),
    as: Button,
    rounded: true,
    iconOnly: true
};

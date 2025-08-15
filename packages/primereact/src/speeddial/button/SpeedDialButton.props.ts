import { SpeedDialButtonProps } from '@primereact/types/shared/speeddial';
import * as Button from 'primereact/button';

export const defaultButtonProps: SpeedDialButtonProps = {
    ...(Button.defaultProps as SpeedDialButtonProps),
    rounded: true,
    iconOnly: true
};

import { SpeedDialTriggerProps } from '@primereact/types/shared/speeddial';
import { Button, ButtonProps } from 'primereact/button';

export const defaultTriggerProps: SpeedDialTriggerProps = {
    ...(ButtonProps.defaultProps as SpeedDialTriggerProps),
    as: Button,
    rounded: true,
    iconOnly: true
};

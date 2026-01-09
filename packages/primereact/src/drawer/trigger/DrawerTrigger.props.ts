import { DrawerTriggerProps } from '@primereact/types/shared/drawer';
import { Button, ButtonProps } from 'primereact/button';

export const defaultTriggerProps: DrawerTriggerProps = {
    ...(ButtonProps.defaultProps as DrawerTriggerProps),
    as: Button
};

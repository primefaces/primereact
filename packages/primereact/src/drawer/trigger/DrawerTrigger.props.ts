import { DrawerTriggerProps } from '@primereact/types/shared/drawer';
import { ButtonProps } from 'primereact/button';

export const defaultTriggerProps: DrawerTriggerProps = {
    ...(ButtonProps.RootDefaults as DrawerTriggerProps)
};

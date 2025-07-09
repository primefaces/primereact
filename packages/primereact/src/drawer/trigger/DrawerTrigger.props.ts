import { DrawerTriggerProps } from '@primereact/types/shared/drawer';
import * as Button from 'primereact/button';

export const defaultTriggerProps: DrawerTriggerProps = {
    ...(Button.defaultProps as DrawerTriggerProps)
};

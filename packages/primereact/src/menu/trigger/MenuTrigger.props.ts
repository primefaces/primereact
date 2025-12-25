import { MenuTriggerProps } from '@primereact/types/shared/menu';
import { ButtonProps } from 'primereact/button';

export const defaultTriggerProps: MenuTriggerProps = {
    ...(ButtonProps.RootDefaults as MenuTriggerProps)
};

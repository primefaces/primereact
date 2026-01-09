import { MenuTriggerProps } from '@primereact/types/shared/menu';
import { Button, ButtonProps } from 'primereact/button';

export const defaultTriggerProps: MenuTriggerProps = {
    ...(ButtonProps.defaultProps as MenuTriggerProps),
    as: Button
};

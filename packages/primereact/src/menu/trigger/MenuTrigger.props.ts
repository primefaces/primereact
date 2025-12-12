import { MenuTriggerProps } from '@primereact/types/shared/menu';
import * as Button from 'primereact/button';

export const defaultTriggerProps: MenuTriggerProps = {
    ...(Button.defaultProps as MenuTriggerProps)
};

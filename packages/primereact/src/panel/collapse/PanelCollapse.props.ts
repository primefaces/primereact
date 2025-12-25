import { PanelCollapseProps } from '@primereact/types/shared/panel';
import { ButtonProps } from 'primereact/button';

export const defaultCollapseProps: PanelCollapseProps = {
    ...(ButtonProps.RootDefaults as PanelCollapseProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

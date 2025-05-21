import { PanelCollapseProps } from '@primereact/types/shared/panel';
import * as Button from 'primereact/button';

export const defaultCollapseProps: PanelCollapseProps = {
    ...Button.defaultProps,
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

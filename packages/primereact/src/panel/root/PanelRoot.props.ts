import * as HeadlessPanel from '@primereact/headless/panel';
import type { PanelRootProps } from '@primereact/types/shared/panel';

export const defaultRootProps: PanelRootProps = {
    ...HeadlessPanel.defaultProps,
    as: 'div',
    toggleable: false
};

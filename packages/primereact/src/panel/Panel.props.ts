import * as HeadlessPanel from '@primereact/headless/panel';
import type { PanelProps } from '@primereact/types/shared/panel';

export const defaultProps: PanelProps = {
    ...HeadlessPanel.defaultProps,
    as: 'div',
    toggleable: false
};

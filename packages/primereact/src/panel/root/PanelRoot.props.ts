import * as HeadlessPanel from '@primereact/headless/panel';
import type { PanelRootProps } from '@primereact/types/shared/panel';
import { CollapsibleRoot } from 'primereact/collapsible';

export const defaultRootProps: PanelRootProps = {
    ...HeadlessPanel.defaultProps,
    as: CollapsibleRoot,
    disabled: false
};

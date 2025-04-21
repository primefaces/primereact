import * as HeadlessToolbar from '@primereact/headless/toolbar';
import type { ToolbarProps } from '@primereact/types/shared/toolbar';

export const defaultProps: ToolbarProps = {
    ...HeadlessToolbar.defaultProps,
    __TYPE: 'Toolbar'
};

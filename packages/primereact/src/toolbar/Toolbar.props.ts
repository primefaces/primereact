import * as HeadlessToolbar from '@primereact/headless/label';
import type { ToolbarProps } from '@primereact/types/shared/toolbar';

export const defaultProps: ToolbarProps = {
    ...HeadlessToolbar.defaultProps,
    as: 'div'
};

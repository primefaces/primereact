import * as HeadlessToolbar from '@primereact/headless/toolbar';
import type { ToolbarRootProps } from '@primereact/types/shared/toolbar';

export const defaultRootProps: ToolbarRootProps = {
    ...HeadlessToolbar.defaultProps,
    as: 'div'
};

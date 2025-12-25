import * as HeadlessDrawer from '@primereact/headless/drawer';
import type { DrawerRootProps } from '@primereact/types/shared/drawer';

export const defaultRootProps: DrawerRootProps = {
    ...HeadlessDrawer.defaultProps,
    position: 'left'
};

import * as HeadlessDrawer from '@primereact/headless/drawer';
import type { DrawerProps } from '@primereact/types/shared/drawer';

export const defaultProps: DrawerProps = {
    ...HeadlessDrawer.defaultProps,
    position: 'left'
};

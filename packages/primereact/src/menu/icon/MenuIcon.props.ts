import * as Icon from '@primereact/core/icon';
import type { MenuIconProps } from '@primereact/types/shared/menu';

export const defaultIconProps: MenuIconProps = {
    ...(Icon.defaultIconProps as MenuIconProps)
};

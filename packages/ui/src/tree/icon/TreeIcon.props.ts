import * as Icon from '@primereact/core/icon';
import type { TreeIconProps } from '@primereact/types/shared/tree';

export const defaultIconProps: TreeIconProps = {
    ...(Icon.defaultIconProps as TreeIconProps)
};

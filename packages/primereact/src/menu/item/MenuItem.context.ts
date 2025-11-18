import { createOptionalContext } from '@primereact/core/utils';
import type { MenuItemInstance } from '@primereact/types/shared/menu';

export const [MenuItemProvider, useMenuItemContext] = createOptionalContext<MenuItemInstance>();

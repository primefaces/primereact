import * as HeadlessMenuSub from '@primereact/headless/menu/sub';
import type { MenuSubProps } from '@primereact/types/shared/menu';

export const defaultSubProps: MenuSubProps = {
    ...HeadlessMenuSub.defaultProps,
    as: 'li',
    disabled: false
};

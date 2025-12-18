import * as HeadlessCommandPalette from '@primereact/headless/commandmenu';
import type { CommandMenuProps } from '@primereact/types/shared/commandmenu';

export const defaultProps: CommandMenuProps = {
    ...HeadlessCommandPalette.defaultProps,
    as: 'div'
};

import * as HeadlessCommandPalette from '@primereact/headless/commandmenu';
import type { CommandMenuRootProps } from '@primereact/types/shared/commandmenu';

export const defaultRootProps: CommandMenuRootProps = {
    ...HeadlessCommandPalette.defaultProps,
    as: 'div'
};

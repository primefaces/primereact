import * as HeadlessDialog from '@primereact/headless/dialog';
import type { DialogRootProps } from '@primereact/types/shared/dialog';

export const defaultRootProps: DialogRootProps = {
    ...HeadlessDialog.defaultProps,
    position: 'center'
};

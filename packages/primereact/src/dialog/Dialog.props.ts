import * as HeadlessDialog from '@primereact/headless/dialog';
import type { DialogProps } from '@primereact/types/shared/dialog';

export const defaultProps: DialogProps = {
    ...HeadlessDialog.defaultProps,
    position: 'center'
};

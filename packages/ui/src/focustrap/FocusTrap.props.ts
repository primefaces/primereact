import * as HeadlessFocusTrap from '@primereact/headless/focustrap';
import type { FocusTrapProps } from '@primereact/types/shared/focustrap';

export const defaultProps: FocusTrapProps = {
    ...HeadlessFocusTrap.defaultProps,
    as: 'div'
};

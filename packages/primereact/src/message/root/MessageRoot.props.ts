import * as HeadlessMessage from '@primereact/headless/message';
import type { MessageRootProps } from '@primereact/types/shared/message';

export const defaultRootProps: MessageRootProps = {
    ...HeadlessMessage.defaultProps,
    as: 'div',
    severity: 'info',
    variant: null,
    size: undefined
};

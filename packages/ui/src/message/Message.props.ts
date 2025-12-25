import * as HeadlessMessage from '@primereact/headless/message';
import type { MessageProps } from '@primereact/types/shared/message';

export const defaultProps: MessageProps = {
    ...HeadlessMessage.defaultProps,
    as: 'div',
    severity: 'info',
    variant: null,
    size: undefined
};

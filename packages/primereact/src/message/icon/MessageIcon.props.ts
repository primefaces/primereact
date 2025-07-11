import * as Icon from '@primereact/core/icon';
import type { MessageIconProps } from '@primereact/types/shared/message';

export const defaultIconProps: MessageIconProps = {
    ...(Icon.defaultIconProps as MessageIconProps)
};

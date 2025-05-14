import * as HeadlessAvatar from '@primereact/headless/avatar';
import type { AvatarProps } from '@primereact/types/shared/avatar';

export const defaultProps: AvatarProps = {
    ...HeadlessAvatar.defaultProps,
    as: 'div',
    size: 'normal',
    shape: 'square'
};

import * as HeadlessAvatar from '@primereact/headless/avatar';
import type { AvatarRootProps } from '@primereact/types/shared/avatar';

export const defaultRootProps: AvatarRootProps = {
    ...HeadlessAvatar.defaultProps,
    as: 'div',
    size: 'normal',
    shape: 'square'
};

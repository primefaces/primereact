import * as HeadlessTag from '@primereact/headless/tag';
import type { TagRootProps } from '@primereact/types/shared/tag';

export const defaultRootProps: TagRootProps = {
    ...HeadlessTag.defaultProps,
    as: 'span',
    severity: undefined,
    rounded: false
};

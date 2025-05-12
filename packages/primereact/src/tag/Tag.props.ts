import * as HeadlessTag from '@primereact/headless/tag';
import type { TagProps } from '@primereact/types/shared/tag';

export const defaultProps: TagProps = {
    ...HeadlessTag.defaultProps,
    as: 'span',
    severity: undefined,
    rounded: false
};

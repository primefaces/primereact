import * as HeadlessInputTags from '@primereact/headless/inputtags';
import type { InputTagsProps } from '@primereact/types/shared/inputtags';

export const defaultProps: InputTagsProps = {
    ...HeadlessInputTags.defaultProps,
    as: 'div',
    variant: undefined,
    fluid: undefined,
    invalid: undefined,
    disabled: undefined
};

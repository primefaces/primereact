import * as HeadlessInputTags from '@primereact/headless/inputtags';
import type { InputTagsRootProps } from '@primereact/types/shared/inputtags';

export const defaultRootProps: InputTagsRootProps = {
    ...HeadlessInputTags.defaultProps,
    as: 'div',
    variant: undefined,
    fluid: undefined,
    invalid: undefined,
    disabled: undefined
};

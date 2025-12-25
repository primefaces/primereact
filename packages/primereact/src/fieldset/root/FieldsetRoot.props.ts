import * as HeadlessFieldset from '@primereact/headless/fieldset';
import type { FieldsetRootProps } from '@primereact/types/shared/fieldset';

export const defaultRootProps: FieldsetRootProps = {
    ...HeadlessFieldset.defaultProps,
    as: 'fieldset'
};

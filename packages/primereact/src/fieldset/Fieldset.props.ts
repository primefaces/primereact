import * as HeadlessFieldset from '@primereact/headless/fieldset';
import type { FieldsetProps } from '@primereact/types/shared/fieldset';

export const defaultProps: FieldsetProps = {
    ...HeadlessFieldset.defaultProps,
    as: 'fieldset'
};

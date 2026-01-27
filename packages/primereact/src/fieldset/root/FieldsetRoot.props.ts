import * as HeadlessFieldset from '@primereact/headless/fieldset';
import type { FieldsetRootProps } from '@primereact/types/shared/fieldset';
import { CollapsibleRoot } from 'primereact/collapsible';

export const defaultRootProps: FieldsetRootProps = {
    ...HeadlessFieldset.defaultProps,
    as: CollapsibleRoot,
    disabled: false
};

import * as HeadlessIconField from '@primereact/headless/iconfield';
import type { IconFieldRootProps } from '@primereact/types/shared/iconfield';

export const defaultRootProps: IconFieldRootProps = {
    ...HeadlessIconField.defaultProps,
    as: 'div'
};

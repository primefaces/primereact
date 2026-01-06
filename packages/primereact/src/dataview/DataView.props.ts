import * as HeadlessDataView from '@primereact/headless/dataview';
import type { DataViewRootProps } from '@primereact/types/shared/dataview';

export const defaultRootProps: DataViewRootProps = {
    ...HeadlessDataView.defaultProps,
    as: 'div'
};

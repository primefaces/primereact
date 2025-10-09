import * as HeadlessDataView from '@primereact/headless/dataview';
import type { DataViewProps } from '@primereact/types/shared/dataview';

export const defaultProps: DataViewProps = {
    ...HeadlessDataView.defaultProps,
    as: 'div'
};

import * as HeadlessOrgChart from '@primereact/headless/orgchart';
import type { OrgChartRootProps } from '@primereact/types/shared/orgchart';

export const defaultRootProps: OrgChartRootProps = {
    ...HeadlessOrgChart.defaultProps,
    as: 'div'
};

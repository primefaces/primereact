import * as HeadlessOrgChart from '@primereact/headless/orgchart';
import type { OrgChartProps } from '@primereact/types/shared/orgchart';

export const defaultProps: OrgChartProps = {
    ...HeadlessOrgChart.defaultProps,
    as: 'div'
};

export * as OrgChart from './UIOrgChart.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultCollapseButtonProps,
    defaultNodeContentProps,
    defaultNodeProps,
    defaultRootProps,
    defaultSubtreeProps,
    defaultTreeProps,
    OrgChartCollapseButton,
    OrgChartNode,
    OrgChartNodeContent,
    OrgChartProps,
    OrgChartProvider,
    OrgChartSubtree,
    OrgChartTree,
    useOrgChartContext
} from 'primereact/orgchart';
export { UIOrgChartRoot as OrgChartRoot } from './root';

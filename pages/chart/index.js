import { AccessibilityDoc } from '@/components/doc/chart/accessibilitydoc';
import { BasicDoc } from '@/components/doc/chart/basicdoc';
import { ChartJSDoc } from '@/components/doc/chart/chartjsdoc';
import { ComboDoc } from '@/components/doc/chart/combodoc';
import { DoughnutChartDoc } from '@/components/doc/chart/doughnutdoc';
import { HorizontalBarDoc } from '@/components/doc/chart/horizontalbardoc';
import { ImportDoc } from '@/components/doc/chart/importdoc';
import { LineDoc } from '@/components/doc/chart/linedoc';
import { LineStylesDoc } from '@/components/doc/chart/linestylesdoc';
import { MultiAxisDoc } from '@/components/doc/chart/multiaxisdoc';
import { PieChartDoc } from '@/components/doc/chart/piechartdoc';
import { PolarAreaDoc } from '@/components/doc/chart/polarareadoc';
import { PTDoc } from '@/components/doc/chart/pt/ptdoc';
import { Wireframe } from '@/components/doc/chart/pt/wireframe';
import { RadarDoc } from '@/components/doc/chart/radardoc';
import { StackedBarDoc } from '@/components/doc/chart/stackedbardoc';
import { StyledDoc } from '@/components/doc/chart/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/chart/theming/tailwinddoc';
import { VerticalBarDoc } from '@/components/doc/chart/verticalbardoc';
import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';

const ChartDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'chartjs',
            label: 'Chart.js',
            component: ChartJSDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'pie',
            label: 'Pie',
            component: PieChartDoc
        },
        {
            id: 'doughnut',
            label: 'Doughnut',
            component: DoughnutChartDoc
        },
        {
            id: 'vertical',
            label: 'Vertical Bar',
            component: VerticalBarDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal Bar',
            component: HorizontalBarDoc
        },
        {
            id: 'stacked',
            label: 'Stacked Bar',
            component: StackedBarDoc
        },
        {
            id: 'line',
            label: 'Line',
            component: LineDoc
        },
        {
            id: 'multiaxis',
            label: 'Multi Axis',
            component: MultiAxisDoc
        },
        {
            id: 'linestyles',
            label: 'Line Styles',
            component: LineStylesDoc
        },
        {
            id: 'polararea',
            label: 'Polar Area',
            component: PolarAreaDoc
        },
        {
            id: 'radar',
            label: 'Radar',
            component: RadarDoc
        },
        {
            id: 'combo',
            label: 'Combo',
            component: ComboDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.chart.options',
            label: 'Chart PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        },
        {
            id: 'unstyled',
            label: 'Unstyled',
            description: 'Theming is implemented with the pass through properties in unstyled mode.',
            children: [
                {
                    id: 'tailwind',
                    label: 'Tailwind',
                    component: TailwindDoc
                }
            ]
        }
    ];

    return (
        <DocComponent
            title="React Chart Component"
            header="Chart"
            description="Chart components are based on Chart.js, an open source HTML5 based charting library."
            componentDocs={docs}
            apiDocs={['Chart']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default ChartDemo;

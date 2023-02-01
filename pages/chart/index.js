import Head from 'next/head';
import { AccessibilityDoc } from '../../components/doc/chart/accessibilitydoc';
import { BasicDoc } from '../../components/doc/chart/basicdoc';
import { ComboDoc } from '../../components/doc/chart/combodoc';
import { DoughnutChartDoc } from '../../components/doc/chart/doughnutdoc';
import { HorizontalBarDoc } from '../../components/doc/chart/horizontalbardoc';
import { ImportDoc } from '../../components/doc/chart/importdoc';
import { LineDoc } from '../../components/doc/chart/linedoc';
import { LineStylesDoc } from '../../components/doc/chart/linestylesdoc';
import { MultiAxisDoc } from '../../components/doc/chart/multiaxisdoc';
import { PieChartDoc } from '../../components/doc/chart/piechartdoc';
import { PolarAreaDoc } from '../../components/doc/chart/polarareadoc';
import { RadarDoc } from '../../components/doc/chart/radardoc';
import { StackedBarDoc } from '../../components/doc/chart/stackedbardoc';
import { VerticalBarDoc } from '../../components/doc/chart/verticalbardoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const ChartDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
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
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Chart', pathname: '/modules/chart.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Chart Component</title>
                <meta name="description" content="Chart components are based on Chart.js, an open source HTML5 based charting library." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Chart</h1>
                        <p>
                            Chart components are based on{' '}
                            <a href="http://www.chartjs.org/" className="text-primary hover:underline font-semibold">
                                Chart.js
                            </a>
                            , an open source HTML5 based charting library.
                        </p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ChartDemo;

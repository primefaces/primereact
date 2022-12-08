import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/chart/importdoc';
import { PieChartDoc } from '../../components/doc/chart/piechartdoc';
import { DoughnutChartDoc } from '../../components/doc/chart/doughnutdoc';
import { VerticalBarDoc } from '../../components/doc/chart/verticalbardoc';
import { HorizontalBarDoc } from '../../components/doc/chart/horizontalbardoc';
import { MultiAxisBarDoc } from '../../components/doc/chart/multiaxisbardoc';
import { StackedBarDoc } from '../../components/doc/chart/stackeddoc';
import { BasicLineDoc } from '../../components/doc/chart/basiclinedoc';
import { MultiAxisLineDoc } from '../../components/doc/chart/multiaxislinedoc';
import { LineStylesDoc } from '../../components/doc/chart/linestylesdoc';
import { PolarAreaDoc } from '../../components/doc/chart/polarareadoc';
import { RadarDoc } from '../../components/doc/chart/radardoc';
import { ComboDoc } from '../../components/doc/chart/combodoc';
import { ApiDoc } from '../../components/doc/chart/apidoc';

const ChartDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'pie',
            label: 'Pie Chart',
            component: PieChartDoc
        },
        {
            id: 'doughnut',
            label: 'Doughnut Chart',
            component: DoughnutChartDoc
        },
        {
            id: 'vertical',
            label: 'Vertical Bar Chart',
            component: VerticalBarDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal Bar Chart',
            component: HorizontalBarDoc
        },
        {
            id: 'multiaxis',
            label: 'Multi Axis Bar Chart',
            component: MultiAxisBarDoc
        },
        {
            id: 'stacked',
            label: 'Stacked Bar Chart',
            component: StackedBarDoc
        },
        {
            id: 'basicline',
            label: 'Basic Line Chart',
            component: BasicLineDoc
        },
        {
            id: 'multiaxisline',
            label: 'Multi Axis Line Chart',
            component: MultiAxisLineDoc
        },
        {
            id: 'linestyles',
            label: 'Line Styles Chart',
            component: LineStylesDoc
        },
        {
            id: 'polararea',
            label: 'Polar Area Chart',
            component: PolarAreaDoc
        },
        {
            id: 'radar',
            label: 'Radar Chart',
            component: RadarDoc
        },
        {
            id: 'combo',
            label: 'Combo Chart',
            component: ComboDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'charttypes',
                    label: 'Chart Types'
                },
                {
                    id: 'data',
                    label: 'Data'
                },
                {
                    id: 'options',
                    label: 'Options'
                },
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'methods',
                    label: 'Methods'
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Chart</title>
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Charts</h1>
                    <p>
                        Chart components are based on{' '}
                        <a style={{ color: 'black' }} href="http://www.chartjs.org/">
                            Chart.js
                        </a>
                        , an open source HTML5 based charting library.
                    </p>
                </div>
                <DocActions github="chart/index.js" />
            </div>

            <div className="content-section doc button-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ChartDemo;

import React, { memo, useContext, useState } from 'react';
import { TabView } from '../../../components/lib/tabview/TabView';
import { Chart } from '../../../components/lib/chart/Chart';
import { useLiveEditorTabs } from '../../../components/doc/common/liveeditor';
import AppContentContext from '../../../components/layout/appcontentcontext';
import { DocActions } from '../../../components/doc/common/docactions';
import Head from 'next/head';

const DoughnutChartDemo = memo(() => {

    const context = useContext(AppContentContext);

    const [chartData] = useState({
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });

    const [darkOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        }
    });

    const options = context.darkTheme ? darkOptions : lightOptions;

    return (
        <div>
            <Head>
                <title>React Doughnut Chart Component</title>
                <meta name="description" content="A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>DoughnutChart</h1>
                    <p>A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.</p>
                </div>
                <DocActions github="chart/doughnutchart/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card flex justify-content-center">
                    <Chart type="doughnut" data={chartData} options={options} style={{ position: 'relative', width: '40%' }} />
                </div>
            </div>

            <DoughnutChartDemoDoc></DoughnutChartDemoDoc>
        </div>
    )
})

export default DoughnutChartDemo;

const DoughnutChartDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export class DoughnutChartDemo extends Component {

    constructor(props) {
        super(props);

        this.chartData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };

        this.lightOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            }
        };
    }

    render() {
        return (
            <div className="card flex justify-content-center">
                <Chart type="doughnut" data={this.chartData} options={this.lightOptions} style={{ position: 'relative', width: '40%' }} />
            </div>
        )
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const DoughnutChartDemo = () => {
    const [chartData] = useState({
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });

    return (
        <div className="card flex justify-content-center">
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const DoughnutChartDemo = () => {
    const [chartData] = useState({
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });

    return (
        <div className="card flex justify-content-center">
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
        </div>
    )
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'DoughnutChartDemo', sources: sources, dependencies: { 'chart.js': '3.3.2' } })
                }
            </TabView>
        </div>
    )
})

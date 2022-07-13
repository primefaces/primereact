import React, { memo, useContext, useState } from 'react';
import { TabView } from '../../../components/lib/tabview/TabView';
import { Chart } from '../../../components/lib/chart/Chart';
import { useLiveEditorTabs } from '../../../components/doc/common/liveeditor';
import AppContentContext from '../../../components/layout/appcontentcontext';
import { DocActions } from '../../../components/doc/common/docactions';
import Head from 'next/head';

const PieChartDemo = () => {

    const context = useContext(AppContentContext);

    const [chartData] = useState({
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726"
                ],
                hoverBackgroundColor: [
                    "#64B5F6",
                    "#81C784",
                    "#FFB74D"
                ]
            }
        ]
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
                <title>React Pie Chart Component</title>
                <meta name="description" content="A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>PieChart</h1>
                    <p>A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.</p>
                </div>
                <DocActions github="chart/piechart/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card flex justify-content-center">
                    <Chart type="pie" data={chartData} options={options} style={{ position: 'relative', width: '40%' }} />
                </div>
            </div>

            <PieChartDemoDoc />
        </div>
    )
}

export default PieChartDemo;

const PieChartDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export class PieChartDemo extends Component {

    constructor(props) {
        super(props);

        this.chartData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#42A5F5",
                        "#66BB6A",
                        "#FFA726"
                    ],
                    hoverBackgroundColor: [
                        "#64B5F6",
                        "#81C784",
                        "#FFB74D"
                    ]
                }
            ]
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
                <Chart type="pie" data={this.chartData} options={this.lightOptions} style={{ position: 'relative', width: '40%' }} />
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

const PieChartDemo = () => {
    const [chartData] = useState({
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726"
                ],
                hoverBackgroundColor: [
                    "#64B5F6",
                    "#81C784",
                    "#FFB74D"
                ]
            }
        ]
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
            <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
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

const PieChartDemo = () => {
    const [chartData] = useState({
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726"
                ],
                hoverBackgroundColor: [
                    "#64B5F6",
                    "#81C784",
                    "#FFB74D"
                ]
            }
        ]
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
            <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
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
                    useLiveEditorTabs({ name: 'PieChartDemo', sources: sources, dependencies: { 'chart.js': '3.3.2' } })
                }
            </TabView>
        </div>
    )
})

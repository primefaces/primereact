import React, { Component } from 'react';
import { TabView } from '../../components/tabview/TabView';
import { Chart } from '../../components/chart/Chart';
import { useLiveEditorTabs } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import AppContentContext from '../../AppContentContext';
import AppDemoActions from '../../AppDemoActions';

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

        this.darkOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            }
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="chart">
                        <h1>PieChart</h1>
                        <p>A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.</p>
                    </AppInlineHeader>
                    <AppDemoActions github="chart/PieChartDemo.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card p-d-flex p-jc-center">
                        <AppContentContext.Consumer>
                        {
                            context => {
                                let options = context.darkTheme ? this.darkOptions : this.lightOptions;

                                return <Chart type="pie" data={this.chartData} options={options} style={{ position: 'relative', width: '40%' }} />
                            }
                        }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <PieChartDemoDoc />
            </div>
        )
    }
}

export class PieChartDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
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
            <div className="card p-d-flex p-jc-center">
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
import React from 'react';
import { Chart } from 'primereact/chart';

const PieChartDemo = () => {
    const chartData = {
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

    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    };

    return (
        <div className="card p-d-flex p-jc-center">
            <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { Chart } from 'primereact/chart';

const PieChartDemo = () => {
    const chartData = {
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

    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    };

    return (
        <div className="card p-d-flex p-jc-center">
            <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation" id="app-doc">
                <TabView>
                    {
                        useLiveEditorTabs({ name: 'PieChartDemo', sources: this.sources, dependencies: { 'chart.js': '3.3.2' } })
                    }
                </TabView>
            </div>
        )
    }
}

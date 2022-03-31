import React, { memo, useContext, useState } from 'react';
import { TabView } from '../../../components/lib/tabview/TabView';
import { Chart } from '../../../components/lib/chart/Chart';
import { useLiveEditorTabs } from '../../../components/doc/common/liveeditor';
import AppContentContext from '../../../components/layout/appcontentcontext';
import { DocActions } from '../../../components/doc/common/docactions';
import Head from 'next/head';

const ComboChartDemo = memo(() => {

    const context = useContext(AppContentContext);

    const [chartData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            type: 'line',
            label: 'Dataset 1',
            borderColor: '#42A5F5',
            borderWidth: 2,
            fill: false,
            tension: .4,
            data: [
                50,
                25,
                12,
                48,
                56,
                76,
                42
            ]
        }, {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: '#66BB6A',
            data: [
                21,
                84,
                24,
                75,
                37,
                65,
                34
            ],
            borderColor: 'white',
            borderWidth: 2
        }, {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: '#FFA726',
            data: [
                41,
                52,
                24,
                74,
                23,
                21,
                32
            ]
        }]
    });

    const [lightOptions] = useState({
        maintainAspectRatio: false,
        aspectRatio: .6,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    });

    const [darkOptions] = useState({
        maintainAspectRatio: false,
        aspectRatio: .6,
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(255,255,255,0.2)'
                }
            },
            y: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(255,255,255,0.2)'
                }
            }
        }
    });

    let options = context.darkTheme ? darkOptions : lightOptions;

    return (
        <div>
            <Head>
                <title>React Combo Chart Component</title>
                <meta name="description" content="Different chart types can be combined in the same graph." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Combo Chart</h1>
                    <p>Different chart types can be combined in the same graph.</p>
                </div>
                <DocActions github="chart/combochart/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <Chart type="bar" data={chartData} options={options} />
                </div>
            </div>

            <ComboChartDemoDoc></ComboChartDemoDoc>
        </div>
    )
})

export default ComboChartDemo;

const ComboChartDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export class ComboChartDemo extends Component {

    constructor(props) {
        super(props);

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                type: 'line',
                label: 'Dataset 1',
                borderColor: '#42A5F5',
                borderWidth: 2,
                fill: false,
                tension: .4,
                data: [
                    50,
                    25,
                    12,
                    48,
                    56,
                    76,
                    42
                ]
            }, {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: '#66BB6A',
                data: [
                    21,
                    84,
                    24,
                    75,
                    37,
                    65,
                    34
                ],
                borderColor: 'white',
                borderWidth: 2
            }, {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: '#FFA726',
                data: [
                    41,
                    52,
                    24,
                    74,
                    23,
                    21,
                    32
                ]
            }]
        };

        this.lightOptions = {
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };
    }

    render() {
        return (
            <div className="card">
                <Chart type="bar" data={this.chartData} options={this.lightOptions} />
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

const ComboChartDemo = () => {
    const [chartData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            type: 'line',
            label: 'Dataset 1',
            borderColor: '#42A5F5',
            borderWidth: 2,
            fill: false,
            tension: .4,
            data: [
                50,
                25,
                12,
                48,
                56,
                76,
                42
            ]
        }, {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: '#66BB6A',
            data: [
                21,
                84,
                24,
                75,
                37,
                65,
                34
            ],
            borderColor: 'white',
            borderWidth: 2
        }, {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: '#FFA726',
            data: [
                41,
                52,
                24,
                74,
                23,
                21,
                32
            ]
        }]
    });

    const [lightOptions] = useState({
        maintainAspectRatio: false,
        aspectRatio: .6,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    });

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={lightOptions} />
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

const ComboChartDemo = () => {
    const [chartData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            type: 'line',
            label: 'Dataset 1',
            borderColor: '#42A5F5',
            borderWidth: 2,
            fill: false,
            tension: .4,
            data: [
                50,
                25,
                12,
                48,
                56,
                76,
                42
            ]
        }, {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: '#66BB6A',
            data: [
                21,
                84,
                24,
                75,
                37,
                65,
                34
            ],
            borderColor: 'white',
            borderWidth: 2
        }, {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: '#FFA726',
            data: [
                41,
                52,
                24,
                74,
                23,
                21,
                32
            ]
        }]
    });

    const [lightOptions] = useState({
        maintainAspectRatio: false,
        aspectRatio: .6,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    });

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={lightOptions} />
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
                    useLiveEditorTabs({ name: 'ComboChartDemo', sources: sources, dependencies: { 'chart.js': '3.3.2' } })
                }
            </TabView>
        </div>
    )
})

import React, { Component } from 'react';
import { TabView } from '../../components/tabview/TabView';
import { Chart } from '../../components/chart/Chart';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import AppContentContext from '../../AppContentContext';

export class PolarAreaChartDemo extends Component {

    constructor(props) {
        super(props);

        this.chartData = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726",
                    "#26C6DA",
                    "#7E57C2"
                ],
                label: 'My dataset'
            }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
        };

        this.lightOptions = {
            legend: {
                labels: {
                    fontColor: '#495057'
                }
            },
            scale: {
                gridLines: {
                    color: '#ebedef'
                }
            }
        };

        this.darkOptions = {
            legend: {
                labels: {
                    fontColor: '#ebedef'
                }
            },
            scale: {
                gridLines: {
                    color: 'rgba(255,255,255,0.2)'
                }
            }
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="chart">
                        <h1>PolarAreaChart</h1>
                        <p>Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <AppContentContext.Consumer>
                            {
                                context => {
                                    let options = context.darkTheme ? this.darkOptions : this.lightOptions;

                                    return <Chart type="polarArea" data={this.chartData} options={options} />
                                }
                            }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <PolarAreaChartDemoDoc></PolarAreaChartDemoDoc>
            </div>
        )
    }
}

export class PolarAreaChartDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export class PolarAreaChartDemo extends Component {

    constructor(props) {
        super(props);

        this.chartData = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726",
                    "#26C6DA",
                    "#7E57C2"
                ],
                label: 'My dataset'
            }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
        };

        this.lightOptions = {
            legend: {
                labels: {
                    fontColor: '#495057'
                }
            },
            scale: {
                gridLines: {
                    color: '#ebedef'
                }
            }
        };
    }

    render() {
        return (
            <div className="card">
                <Chart type="polarArea" data={this.chartData} options={this.lightOptions} />
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

const PolarAreaChartDemo = () => {
    const chartData = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726",
                "#26C6DA",
                "#7E57C2"
            ],
            label: 'My dataset'
        }],
        labels: [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Blue"
        ]
    };

    const lightOptions = {
        legend: {
            labels: {
                fontColor: '#495057'
            }
        },
        scale: {
            gridLines: {
                color: '#ebedef'
            }
        }
    };

    return (
        <div className="card">
            <Chart type="polarArea" data={chartData} options={lightOptions} />
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { Chart } from 'primereact/chart';

const PolarAreaChartDemo = () => {
    const chartData = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726",
                "#26C6DA",
                "#7E57C2"
            ],
            label: 'My dataset'
        }],
        labels: [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Blue"
        ]
    };

    const lightOptions = {
        legend: {
            labels: {
                fontColor: '#495057'
            }
        },
        scale: {
            gridLines: {
                color: '#ebedef'
            }
        }
    };

    return (
        <div className="card">
            <Chart type="polarArea" data={chartData} options={options} />
        </div>
    );
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
            <div className="content-section documentation">
                <TabView>
                    {
                        useLiveEditorTabs({ name: 'PolarAreaChartDemo', sources: this.sources, dependencies: { 'chart.js': '2.7.3' } })
                    }
                </TabView>
            </div>
        )
    }
}

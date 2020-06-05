import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { Chart } from '../../components/chart/Chart';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class PolarAreaChartDemo extends Component {

    render() {
        const data = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#E7E9ED",
                    "#36A2EB"
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

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>PolarAreaChart</h1>
                        <p>Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("chart")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="polarArea" data={data} />
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
import {Chart} from 'primereact/chart';

export class PolarAreaChartDemo extends Component {

    render() {
        const data = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#E7E9ED",
                    "#36A2EB"
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

        return (
            <div>
                <Chart type="polarArea" data={data} />
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
import {Chart} from 'primereact/chart';

const PolarAreaChartDemo = () => {
    const data = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#E7E9ED",
                "#36A2EB"
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

    return (
        <div>
            <Chart type="polarArea" data={data} />
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {Chart} from 'primereact/chart';

const PolarAreaChartDemo = () => {
    const data = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#E7E9ED",
                "#36A2EB"
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

    return (
        <div>
            <Chart type="polarArea" data={data} />
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
            <div className="content-section documentation">
                <TabView>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="PolarAreaChartDemo" sources={[key, value]} dependencies={{ 'chart.js': '2.7.3' }} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}

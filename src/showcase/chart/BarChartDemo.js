import React, {Component} from 'react';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {Chart} from '../../components/chart/Chart';

export class BarChartDemo extends Component {

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        const multiAxisData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'Dataset 1',
				backgroundColor: [
					'#EC407A',
                    '#AB47BC',
                    '#42A5F5',
                    '#7E57C2',
                    '#66BB6A',
                    '#FFCA28',
                    '#26A69A'
				],
				yAxisID: 'y-axis-1',
				data: [65, 59, 80, 81, 56, 55, 10]
			}, {
				label: 'Dataset 2',
				backgroundColor: '#78909C',
				yAxisID: 'y-axis-2',
				data: [28, 48, 40, 19, 86, 27, 90]
			}]
        };

        const multiAxisOptions = {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    ticks: {
                        min: 0,
                        max: 100
                    }
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        min: 0,
                        max: 100
                    }
                }]
            }
        }

        const stackedData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				type: 'bar',
                label: 'Dataset 1',
                backgroundColor: '#66BB6A',
				data: [
					50,
					25,
					12,
					48,
					90,
					76,
					42
				]
			}, {
				type: 'bar',
				label: 'Dataset 2',
				backgroundColor: '#FFCA28',
				data: [
					21,
					84,
					24,
					75,
					37,
					65,
                    34
                ]
			}, {
				type: 'bar',
				label: 'Dataset 3',
				backgroundColor: '#42A5F5',
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

        const stackedOptions = {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>BarChart</h1>
                        <p>A bar chart or bar graph is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("chart")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Vertical</h3>
                    <Chart type="bar" data={data} />

                    <h3>Horizontal</h3>
                    <Chart type="horizontalBar" data={data} />

                    <h3>Multi Axis</h3>
                    <Chart type="bar" data={multiAxisData} options={multiAxisOptions} />

                    <h3>Stacked</h3>
                    <Chart type="bar" data={stackedData} options={stackedOptions} />
                </div>

                <BarChartDemoDoc></BarChartDemoDoc>
            </div>
        )
    }
}

export class BarChartDemoDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

export class BarChartDemo extends Component {

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        const multiAxisData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'Dataset 1',
				backgroundColor: [
					'#EC407A',
                    '#AB47BC',
                    '#42A5F5',
                    '#7E57C2',
                    '#66BB6A',
                    '#FFCA28',
                    '#26A69A'
				],
				yAxisID: 'y-axis-1',
				data: [65, 59, 80, 81, 56, 55, 10]
			}, {
				label: 'Dataset 2',
				backgroundColor: '#78909C',
				yAxisID: 'y-axis-2',
				data: [28, 48, 40, 19, 86, 27, 90]
			}]
        };

        const multiAxisOptions = {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    ticks: {
                        min: 0,
                        max: 100
                    }
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        min: 0,
                        max: 100
                    }
                }]
            }
        }

        const stackedData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				type: 'bar',
                label: 'Dataset 1',
                backgroundColor: '#66BB6A',
				data: [
					50,
					25,
					12,
					48,
					90,
					76,
					42
				]
			}, {
				type: 'bar',
				label: 'Dataset 2',
				backgroundColor: '#FFCA28',
				data: [
					21,
					84,
					24,
					75,
					37,
					65,
                    34
                ]
			}, {
				type: 'bar',
				label: 'Dataset 3',
				backgroundColor: '#42A5F5',
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

        const stackedOptions = {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>BarChart</h1>
                        <p>A bar chart or bar graph is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Vertical</h3>
                    <Chart type="bar" data={data} />

                    <h3>Horizontal</h3>
                    <Chart type="horizontalBar" data={data} />

                    <h3>Multi Axis</h3>
                    <Chart type="bar" data={multiAxisData} options={multiAxisOptions} />

                    <h3>Stacked</h3>
                    <Chart type="bar" data={stackedData} options={stackedOptions} />
                </div>
            </div>
        )
    }
}

`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}

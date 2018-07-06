import React, {Component} from 'react';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight } from '../codehighlight/CodeHighlight';
import {Chart} from '../../components/chart/Chart';

export class LineChartDemo extends Component {

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]   
        };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>LineChart</h1>
                        <p>A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="line" data={data} />
                </div>

                <LineChartDemoDoc></LineChartDemoDoc>
            </div>
        )
    }
}

export class LineChartDemoDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Source">
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

export class LineChartDemo extends Component {

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]   
        };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>LineChart</h1>
                        <p>A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="line" data={data} />
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

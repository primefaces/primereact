import React, {Component} from 'react';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight } from '../codehighlight/CodeHighlight';
import {Chart} from '../../components/chart/Chart';

export class BarChartDemo extends Component {

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]    
        };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>BarChart</h1>
                        <p>A bar chart or bar graph is a chart that presents Grouped data with rectangular bars with lengths proportional to the values that they represent.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="bar" data={data} />
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
            <div className="content-section source">
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
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]    
        };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>BarChart</h1>
                        <p>A bar chart or bar graph is a chart that presents Grouped data with rectangular bars with lengths proportional to the values that they represent.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="bar" data={data} />
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
